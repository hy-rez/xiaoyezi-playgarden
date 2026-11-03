"""Prepare attributed, real animal recordings. Requires ffmpeg (or imageio-ffmpeg).
Usage: python3 scripts/prepare-animal-calls.py --sources-dir /path/to/downloads --ffmpeg /path/to/ffmpeg
The reviewed recipe lives in public/audio/animal-calls/sources.json; no synthetic substitutes.
"""
import argparse,array,hashlib,html,json,math,pathlib,subprocess,tempfile,wave
root=pathlib.Path(__file__).resolve().parents[1]
p=argparse.ArgumentParser();p.add_argument('--sources-dir',type=pathlib.Path,required=True);p.add_argument('--ffmpeg',default='ffmpeg');args=p.parse_args()
folder=root/'public/audio/animal-calls';manifest=json.loads((folder/'sources.json').read_text())
for item in manifest:
 source=args.sources_dir/item['inputFile'];target=root/'public/audio'/('call-'+item['id']+'.m4a')
 with tempfile.TemporaryDirectory() as tmp:
  decoded=pathlib.Path(tmp)/'decoded.wav'
  subprocess.run([args.ffmpeg,'-v','error','-y','-i',str(source),'-ar','44100','-ac','1','-c:a','pcm_s16le',str(decoded)],check=True)
  with wave.open(str(decoded),'rb') as audio: samples=array.array('h',audio.readframes(audio.getnframes()))
  rate=44100;block=rate//2
  energy=[sum(x*x for x in samples[i:i+block]) for i in range(0,len(samples),block)]
  if not energy or max(energy)==0:raise ValueError('Silent recording: '+item['id'])
  center=energy.index(max(energy))*.5+.25
  start=max(0,min(center-1.5,len(samples)/rate-6))
  clip=samples[int(start*rate):int((start+6)*rate)]
  peak=max(abs(x) for x in clip);gain=min(4,18000/peak)
  fade=int(rate*.015)
  for i,x in enumerate(clip):
   envelope=min(1,i/fade,(len(clip)-1-i)/fade)
   clip[i]=int(x*gain*max(0,envelope))
  trimmed=pathlib.Path(tmp)/'clip.wav'
  with wave.open(str(trimmed),'wb') as out:out.setparams((1,2,rate,0,'NONE','not compressed'));out.writeframes(clip.tobytes())
  subprocess.run([args.ffmpeg,'-v','error','-y','-i',str(trimmed),'-c:a','aac','-b:a','96k','-movflags','+faststart',str(target)],check=True)
  item.update(startSeconds=round(start,3),durationSeconds=round(len(clip)/rate,3),gain=round(gain,5),inputSha256=hashlib.sha256(source.read_bytes()).hexdigest(),sha256=hashlib.sha256(target.read_bytes()).hexdigest())
 print(item['id'],item['durationSeconds'],flush=True)
(folder/'sources.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
rows=''.join('<tr><td>'+html.escape(i['label'])+'</td><td>'+html.escape(i['title'])+'</td><td>'+html.escape(i['author'])+'</td><td><a href="'+html.escape(i['licenseUrl'])+'">'+html.escape(i['license'])+'</a></td><td><a href="'+html.escape(i['source'])+'">原始来源</a></td></tr>' for i in manifest)
(folder/'credits.html').write_text('''<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>动物录音来源与许可</title><style>body{font:16px/1.8 system-ui;background:#f8f5ec;color:#354c40;margin:24px auto;padding:0 20px;max-width:1100px}table{border-collapse:collapse;min-width:650px}td,th{padding:12px;text-align:left;border-bottom:1px solid #ccd1c0}a{color:#365f45}.table{overflow:auto}</style><h1>动物录音来源与许可</h1><p>以下为动物真实录音节选；个体、物种和情境会影响声音，并非每种动物都只有一种叫声。长颈鹿和兔子的声音较轻；乌龟示例为陆龟的生物学发声记录。所有音频保持原速原调，仅截取至不超过六秒、转为单声道 AAC、调整音量和短淡入淡出，没有用合成音或人声模仿替代。</p><p>改编音频沿用表内各自许可，CC BY-SA 素材的改编也以相同许可发布。许可仅适用于对应录音，不表示原作者认可本网站。<a href="sources.json">下载完整来源与处理记录</a>。</p><div class="table"><table><thead><tr><th>动物</th><th>录音</th><th>作者／录音者</th><th>许可</th><th>来源</th></tr></thead><tbody>'''+rows+'</tbody></table></div></html>')
