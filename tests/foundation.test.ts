import {numberItems} from '../src/numberContent';
import {describe,it,expect} from 'vitest';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {readFileSync} from 'node:fs';
import {courses} from '../src/courses/registry';
import {sampleQuestions} from '../src/quiz';
import {Art} from '../src/Art';
import {NumberArt} from '../src/NumberArt';
describe('基础认知',()=>{
 for(const [id,size] of [['shapes',10],['body',19],['numbers',20],['compare',4],['positions',8],['sorting',36]] as const)it(id+'内容与抽题',async()=>{
 const {default:lesson}=await courses.find(c=>c.id===id)!.load();if(lesson.kind!=='interactive')throw Error('课程类型');
 expect(lesson.pages).toHaveLength(size);expect(lesson.questions).toHaveLength(id==='compare'?16:size*2);
 const original=JSON.stringify(lesson.questions);const round=sampleQuestions(lesson.questions,6);expect(round).toHaveLength(6);expect(new Set(round.map(q=>q.audio)).size).toBe(6);expect(JSON.stringify(lesson.questions)).toBe(original);
 expect(lesson.questions.filter(q=>q.answer===0)).toHaveLength(lesson.questions.length/2);
 const text=JSON.parse(readFileSync('public/audio/transcripts.json','utf8'));
 for(const p of lesson.pages)expect(text[p.audio]).toContain(p.text);
 for(const q of lesson.questions){expect(text[q.audio]).toBe(q.prompt);expect(q.options[0].art).not.toBe(q.options[1].art)}
 for(const name of [...lesson.pages.map(p=>p.art),...lesson.questions.flatMap(q=>q.options.map(o=>o.art)),lesson.sticker]){const svg=renderToStaticMarkup(createElement(Art,{name}));expect(svg).toMatch(/aria-label="[^"]+"/);expect(svg).not.toMatch(/undefined|NaN/)}
 });

});

describe('身体真实照片',()=>{
 it('介绍和答题使用本地照片，封面使用插画，保留来源与许可',async()=>{
  const sources=JSON.parse(readFileSync('public/images/body/sources.json','utf8'));
  expect(sources).toHaveLength(19);
  for(const source of sources){expect(readFileSync('public/images/body/'+source.file).length).toBeGreaterThan(1000);expect(source.creator).toBeTruthy();expect(source.licenseUrl).toBeTruthy();expect(source.page).toContain('commons.wikimedia.org')}
  const {default:lesson}=await courses.find(c=>c.id==='body')!.load();if(lesson.kind!=='interactive')throw Error('课程类型');
  const cover=renderToStaticMarkup(createElement(Art,{name:lesson.sticker}));expect(cover).toContain('<svg');expect(cover).not.toContain('<img');
  for(const name of [...lesson.pages.map(p=>p.art),...lesson.questions.flatMap(q=>q.options.map(o=>o.art))]){
   const markup=renderToStaticMarkup(createElement(Art,{name}));expect(markup).toContain('<img');expect(markup).toContain('images/body/body-');expect(markup).not.toContain('<svg');
  }
  expect(lesson.questions.every(q=>!q.prompt.includes('标出'))).toBe(true);
 });
});

describe('数字与数量1～20',()=>{
 it('每个数字使用不同物品，介绍和数量选项逐个可数',async()=>{
  expect(numberItems).toHaveLength(20);expect(new Set(numberItems.map(x=>x.id)).size).toBe(20);
  const {default:lesson}=await courses.find(c=>c.id==='numbers')!.load();if(lesson.kind!=='interactive')throw Error('课程类型');
  for(let n=1;n<=20;n++){
   for(const intro of [true,false]){
    const svg=renderToStaticMarkup(createElement(NumberArt,{n,intro}));expect(svg.match(/data-count-item=/g)).toHaveLength(n);
    expect(svg).toContain(`data-count-item="${numberItems[n-1].id}"`);expect(svg.includes('<text')).toBe(intro);
   }
   const q=lesson.questions.find(q=>q.audio===`numbers-q-${n}-1`)!;
   expect(q.options.map(o=>o.label)).toEqual([numberItems[n-1].name,numberItems[n-1].name]);
   for(let i=0;i<2;i++){
    const option=q.options[i],parts=option.art.split('-'),count=Number(parts[2]);
    expect(Number(parts[1])).toBe(n);expect(count).toBeGreaterThan(0);expect(count).toBeLessThanOrEqual(20);
    expect(count===n).toBe(i===q.answer);
    const svg=renderToStaticMarkup(createElement(Art,{name:option.art}));expect(svg.match(/data-count-item=/g)).toHaveLength(count);
    expect(svg).toContain(`data-count-item="${numberItems[n-1].id}"`);
   }
  }
 });
});
