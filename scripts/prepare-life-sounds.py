"""Prepare attributed real recordings; originals remain outside the repository.
python3 scripts/prepare-life-sounds.py --sources-dir /path/to/originals --ffmpeg /path/to/ffmpeg
No synthetic sound substitution, pitch changes or time stretching.
"""
import argparse,array,hashlib,html,json,math,pathlib,subprocess,tempfile,wave
root=pathlib.Path(__file__).resolve().parents[1]
p=argparse.ArgumentParser();p.add_argument('--sources-dir',type=pathlib.Path,required=True);p.add_argument('--ffmpeg',default='ffmpeg');p.add_argument('--ids',nargs='*');args=p.parse_args()
folder=root/'public/audio/life-sounds';manifest=json.loads((folder/'sources.json').read_text())
starts={'doorbell':0,'knock':0,'phone':0,'clock':0,'rain':0,'stream':0,'waves':2,'wind':12,'piano':0,'guitar':2,'drum':0,'triangle':0}
for item in manifest:
 if args.ids and item['id'] not in args.ids:continue
 source=args.sources_dir/item['inputFile'];target=root/'public/audio'/('life-call-'+item['id']+'.m4a')
 with tempfile.TemporaryDirectory() as tmp:
  decoded=pathlib.Path(tmp)/'decoded.wav'
  subprocess.run([args.ffmpeg,'-v','error','-y','-i',str(source),'-ar','44100','-ac','1','-c:a','pcm_s16le',str(decoded)],check=True)
  with wave.open(str(decoded),'rb') as audio:samples=array.array('h',audio.readframes(audio.getnframes()))
  rate=44100;start=item.get('startSeconds',starts.get(item['id'],0));clip=samples[int(start*rate):int((start+6)*rate)]
  if not clip or max(abs(x) for x in clip)==0:raise ValueError('Silent recording: '+item['id'])
  peak=max(abs(x) for x in clip);rms=math.sqrt(sum(x*x for x in clip)/len(clip));gain=min(4,3000/rms,14000/peak);fade=int(rate*.03)
  for i,x in enumerate(clip):clip[i]=int(x*gain*max(0,min(1,i/fade,(len(clip)-1-i)/fade)))
  trimmed=pathlib.Path(tmp)/'clip.wav'
  with wave.open(str(trimmed),'wb') as out:out.setparams((1,2,rate,0,'NONE','not compressed'));out.writeframes(clip.tobytes())
  subprocess.run([args.ffmpeg,'-v','error','-y','-i',str(trimmed),'-c:a','aac','-b:a','96k','-movflags','+faststart',str(target)],check=True)
  item.update(startSeconds=start,durationSeconds=round(len(clip)/rate,3),gain=round(gain,5),inputSha256=hashlib.sha256(source.read_bytes()).hexdigest(),sha256=hashlib.sha256(target.read_bytes()).hexdigest(),sampleRate=rate,peakBeforeEncoding=max(abs(x) for x in clip),rmsBeforeEncoding=round(math.sqrt(sum(x*x for x in clip)/len(clip)),2))
  item['context']=item['label']+'的真实声音样本，场景和演奏说明见原始来源。'
 print(item['id'],item['durationSeconds'],flush=True)
(folder/'sources.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
def e(s):return html.escape(s,quote=True)
rows=''.join('<section><h2>'+e(i['label'])+'</h2><audio controls preload="none" src="../life-call-'+e(i['id'])+'.m4a"></audio><p>'+e(i['title'])+'</p><p>'+e(i['author'])+' · <a href="'+e(i['licenseUrl'])+'">'+e(i['license'])+'</a></p><p><a href="'+e(i['source'])+'">原始录音来源</a></p></section>' for i in manifest)
(folder/'credits.html').write_text('''<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>生活录音来源与许可</title><style>body{font:16px/1.7 system-ui;background:#f8f5ec;color:#354c40;margin:24px auto;padding:0 20px;max-width:1000px}main{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:24px}audio{width:100%;max-width:290px}p{overflow-wrap:anywhere}a{color:#365f45}</style><a href="../../../index.html#/life-sounds">返回生活中的声音</a><h1>生活录音来源与许可</h1><p>以下为真实声源录音节选；同一种物品、场景和乐器也可能发出不同的声音。保持原速原调，仅截取最多六秒、转为单声道AAC、调整音量并添加30毫秒淡入淡出。介绍旁白为Tingting合成语音。</p><p>每段录音及其改编沿用各自许可，CC BY-SA录音的改编继续以同一许可发布。原作者不因此表示认可本网站。<a href="sources.json">完整来源和处理记录</a>。</p><main>'''+rows+'</main></html>')
