"""Regenerate bundled Mandarin narration on macOS with the installed Tingting voice."""
import json, pathlib, subprocess, tempfile
root=pathlib.Path(__file__).resolve().parents[1]
texts={
'cat':'你好，小猫。小猫有尖尖的耳朵，轻轻地叫，喵，喵。','dog':'你好，小狗。小狗摇摇尾巴，开心地叫，汪，汪。','cow':'你好，奶牛。奶牛穿着黑白花衣服，慢慢地叫，哞。','rabbit':'你好，小兔。小兔有长长的耳朵，蹦蹦跳跳真可爱。',
'q-cat':'哪一位是小猫？点一点吧。','q-cow':'谁穿着黑白花衣服？点一点吧。','q-rabbit':'谁有长长的耳朵？点一点吧。',
 'tidy-blocks':'积木回盒子。玩好积木，把积木轻轻放进盒子里。','tidy-ball':'小球回篮子。小球不乱跑，把它放进篮子里。','tidy-book':'图书回书架。合上小书，放回书架。玩具都回家啦。',
'q-blocks':'积木的小家在哪里？','q-ball':'小球应该放在哪里？','q-book':'小书的小家在哪里？','correct':'找到了！真棒。','retry':'再看看，慢慢来。','reward':'你认真探索的样子，真可爱。送你一枚小贴纸。',
'story-1':'月亮，你在哪里？夜晚来了，小兔走出家门。圆圆的月亮挂在树梢上。月亮，我可以和你一起玩吗？',
'story-2':'池塘里的月亮。小兔来到池塘边。水里也有一个月亮！它伸出小爪子，水面荡起一圈圈波纹。',
'story-3':'爬上小山坡。小兔爬上软软的小山坡。月亮还是那么远，却一直陪着它。你在等我呀。小兔笑了。',
'story-4':'月亮陪我回家。晚风轻轻吹。小兔往家走，月亮也慢慢走。原来，不用摘下月亮，也能和它做朋友。',
'story-5':'晚安，小兔。小兔钻进暖暖的被窝。月光落在窗边，像一条柔软的小毯子。晚安，月亮。明天见。'}
texts['bedtime']='小兔找月亮。[[slnc 1500]]'+ '。[[slnc 1800]]'.join(texts['story-'+str(i)] for i in range(1,6))+'。[[slnc 2000]]晚安。'
(root/'public/audio/transcripts.json').write_text(json.dumps(texts,ensure_ascii=False,indent=2))
with tempfile.TemporaryDirectory() as temp:
 for name,text in texts.items():
  raw=str(pathlib.Path(temp)/'voice.aiff')
  subprocess.run(['say','-v','Tingting','-r','135' if name=='bedtime' else '165','-o',raw,text],check=True)
  subprocess.run(['afconvert','-f','m4af','-d','aac@44100','-b','96000',raw,str(root/'public/audio'/f'{name}.m4a')],check=True)
  print(name,flush=True)
