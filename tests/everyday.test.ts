import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dailyPhotos} from '../src/dailyPhotos';
import {Art} from '../src/Art';
import {describe,it,expect} from 'vitest';
import {courses} from '../src/courses/registry';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {EmotionArt} from '../src/EmotionArt';
describe('第三批日常认知',()=>{
 it('48种用品照片具备本地文件、许可和可访问名称，封面保留插画',()=>{
  const sources=JSON.parse(readFileSync('public/images/daily/sources.json','utf8'));
  expect(sources).toHaveLength(48);expect(dailyPhotos).toHaveLength(48);
  for(let i=0;i<48;i++){
   const p=dailyPhotos[i],source=sources[i],file='public/images/daily/'+p.file;
   expect(source.name).toBe(p.name);expect(source.id).toBe(i);expect(source.licenseUrl).toMatch(/^https:/);expect(source.page).toContain('commons.wikimedia.org');expect(existsSync(file)).toBe(true);
   expect(createHash('sha256').update(readFileSync(file)).digest('hex')).toBe(source.sha256);
   const markup=renderToStaticMarkup(createElement(Art,{name:`daily-${i}`}));expect(markup).toContain(p.name+'的真实照片');expect(markup).toContain('images/daily/'+p.file);
  }
  expect(renderToStaticMarkup(createElement(Art,{name:'daily-cover'}))).toContain('<svg');
 });
 it('用品和四季天气分组完整覆盖介绍卡，选择不会越界',async()=>{
  for(const id of ['daily','weather']){
   const {default:l}=await courses.find(c=>c.id===id)!.load();if(l.kind!=='interactive')throw Error('课程类型');
   const groups=l.library!.groups!;expect(groups).toHaveLength(id==='daily'?4:2);
   expect(groups[0].fromIndex).toBe(0);expect(groups[groups.length-1].toIndex).toBe(l.pages.length);
   for(let i=1;i<groups.length;i++)expect(groups[i].fromIndex).toBe(groups[i-1].toIndex);
   for(const g of groups){expect(g.fromIndex).toBeLessThan(g.toIndex);expect(l.pages.slice(g.fromIndex,g.toIndex).length).toBe(g.toIndex-g.fromIndex)}
  }
 });
 it('用品名称和用途题指向同一目标，情绪表情没有复用同一图案',async()=>{
  const {default:l}=await courses.find(c=>c.id==='daily')!.load();if(l.kind!=='interactive')throw Error('课程类型');
  for(let i=0;i<48;i++)for(const q of l.questions.slice(i*2,i*2+2)){expect(q.options[q.answer].art).toBe(l.pages[i].art);expect(q.options[q.answer].label).toBe(l.pages[i].title)}
  const expressions=Array.from({length:6},(_,emotion)=>renderToStaticMarkup(createElement(EmotionArt,{emotion})));
  expect(new Set(expressions).size).toBe(6);expect(expressions.some(x=>/NaN|undefined/.test(x))).toBe(false);
 });
 it('冬天和下雪的穿衣题有明确寒冷前提，不按季节猜测天气',async()=>{
  const {default:l}=await courses.find(c=>c.id==='weather')!.load();if(l.kind!=='interactive')throw Error('课程类型');
  for(const audio of ['weather-q-3-1','weather-q-7-1']){const q=l.questions.find(q=>q.audio===audio)!;expect(q.prompt).toContain('很冷');expect(q.options[q.answer].art).toBe('gear-coat');expect(q.options[1-q.answer].art).toBe('gear-shorts')}
  expect(l.pages[3].text).toContain('不是所有地方');expect(l.pages[5].text).toContain('不一定');
 });
});
