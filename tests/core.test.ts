import {describe,it,expect} from 'vitest';import {courses} from '../src/courses/registry';import {award,timerExpired} from '../src/storage';import {existsSync} from 'node:fs';
describe('课程内容与接入',()=>{it('四类课程完整、ID唯一、音频存在',async()=>{expect(new Set(courses.map(c=>c.id)).size).toBe(courses.length);expect(new Set(courses.map(c=>c.category)).size).toBe(4);for(const c of courses){const {default:l}=await c.load();const audios=l.kind==='bedtime'?[l.audio]:[...l.pages.map(p=>p.audio),...(l.kind==='interactive'?l.questions.map(q=>q.audio):[])];for(const a of audios)expect(existsSync('public/audio/'+a+'.m4a'),a).toBe(true);if(l.kind==='interactive'){expect(l.quizSize??l.questions.length).toBe(['animals','colors','encyclopedia','shapes','body','numbers'].includes(c.id)?6:3);for(const q of l.questions){expect(q.options).toHaveLength(2);expect(q.answer>=0&&q.answer<q.options.length).toBe(true)}}}})});
describe('贴纸与定时停止',()=>{it('重复完成不会累计',()=>{const initial=['animals'];expect(award(initial,'animals')).toEqual(['animals']);expect(award(initial,'tidy')).toEqual(['animals','tidy']);expect(initial).toEqual(['animals'])});it('截止前继续，截止或恢复后台后停止，关闭时不限时',()=>{expect(timerExpired(1000,999)).toBe(false);expect(timerExpired(1000,1000)).toBe(true);expect(timerExpired(1000,9000)).toBe(true);expect(timerExpired(null,9000)).toBe(false)})});

import colorLesson from '../src/courses/colors';
import {colorPalette,colorIds,colorObjects,colorObjectPairs,singleColorItems,type ColorObjectArt} from '../src/colorContent';
describe('认识颜色',()=>{
 it('25种颜色都有介绍和单色题，多色题的图案确实包含题干要求的全部颜色',()=>{
  expect(colorIds).toHaveLength(25);
  expect(new Set(Object.values(singleColorItems).map(item=>item.label)).size).toBe(25);
  expect(colorLesson.pages).toHaveLength(45);
  expect(colorLesson.pages.slice(25).map(p=>p.art)).toEqual(colorObjectPairs.map(([target])=>target));
  expect(colorLesson.pages.slice(25,35).every(p=>colorObjects[p.art as ColorObjectArt].colors.length===2)).toBe(true);
  expect(colorLesson.pages.slice(35).every(p=>colorObjects[p.art as ColorObjectArt].colors.length===3)).toBe(true);
  expect(colorLesson.pages.slice(0,25).map(p=>p.art)).toEqual(colorIds.map(id=>'single-'+id));
  expect(colorLesson.questions.filter(q=>q.difficulty===1).map(q=>q.options[q.answer].art)).toEqual(colorIds.map(id=>'single-'+id));
  const shapesByLevel=[2,3].map(level=>new Set(colorLesson.questions.filter(q=>q.difficulty===level).map(q=>colorObjects[q.options[q.answer].art as ColorObjectArt].shape)));
  expect([...shapesByLevel[0]].filter(shape=>shapesByLevel[1].has(shape))).toEqual([]);
  for(const level of [2,3]){
   const questions=colorLesson.questions.filter(q=>q.difficulty===level);
   expect(questions).toHaveLength(10);
   expect(new Set(questions.map(q=>colorObjects[q.options[q.answer].art as ColorObjectArt].shape)).size).toBe(10);
  }
  for(const q of colorLesson.questions.filter(q=>q.difficulty!==1)){
   const target=colorObjects[q.options[q.answer].art as ColorObjectArt];
   const other=colorObjects[q.options[1-q.answer].art as ColorObjectArt];
   expect(target.colors).toHaveLength(q.difficulty);
   expect(target.shape).toBe(other.shape);
   expect(new Set(target.colors)).not.toEqual(new Set(other.colors));
  }
 });
 it('每轮六题按单色、双色、三色各两题排序，重玩抽题且不修改题库',()=>{
  const original=[...colorLesson.questions];
  for(const random of [()=>0,()=>0.5,()=>0.99]){
   const round=sampleQuestions(colorLesson.questions,6,random);
   expect(round.map(q=>q.difficulty)).toEqual([1,1,2,2,3,3]);
   expect(new Set(round.map(q=>q.audio)).size).toBe(6);
  }
  expect(colorLesson.questions).toEqual(original);
 });
 it('每张颜色和物品插画都有可访问名称和实际图形，旁白文本与课程一致',()=>{
  const transcripts=JSON.parse(readFileSync('public/audio/transcripts.json','utf8'));
  for(const page of colorLesson.pages){expect(transcripts[page.audio]).toContain(page.text)}
  for(const q of colorLesson.questions){expect(transcripts[q.audio]).toContain(q.prompt)}
  for(const name of [...colorLesson.pages.map(p=>p.art),...Object.keys(colorObjects)]){
   const markup=renderToStaticMarkup(createElement(Art,{name:name as import('../src/types').Art}));
   expect(markup).toMatch(/aria-label="[^"]+"/);
   expect(markup).not.toMatch(/undefined|NaN/);
   expect(markup).toMatch(/class="character(?: |")/);
   if(name.startsWith('single-')){
    expect(markup).toContain('single-color-object');
    expect(markup).toContain(colorPalette[name.slice(7) as keyof typeof colorPalette].fill);
   }
   const object=colorObjects[name as ColorObjectArt];
   if(object)for(const color of object.colors)expect(markup).toContain('fill="'+colorPalette[color].fill+'"');
  }
 });
});

import animalLesson from '../src/courses/animals';
import {animalNames} from '../src/AnimalArt';
import {sampleQuestions} from '../src/quiz';
describe('动物课程',()=>{it('50种动物均有介绍、插画和对应测试',()=>{expect(animalLesson.pages).toHaveLength(50);expect(new Set(animalLesson.pages.map(p=>p.art)).size).toBe(50);expect(new Set(animalLesson.pages.map(p=>p.art))).toEqual(new Set(animalNames));expect(animalLesson.questions).toHaveLength(50);animalLesson.questions.forEach((q,i)=>expect(q.options[q.answer].art).toBe(animalLesson.pages[i].art))});it('每轮抽取六道不重复题目，不修改题库',()=>{const before=[...animalLesson.questions];const sample=sampleQuestions(before,animalLesson.quizSize,()=>0.5);expect(sample).toHaveLength(6);expect(new Set(sample.map(q=>q.audio)).size).toBe(6);expect(before).toEqual(animalLesson.questions);expect(sampleQuestions(before,99)).toHaveLength(50)})});

import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
describe('真实动物叫声',()=>{it('50种动物都有独立的本地录音、来源与授权',()=>{const records=JSON.parse(readFileSync('public/audio/animal-calls/sources.json','utf8'));expect(records).toHaveLength(50);expect(new Set(records.map((r:{id:string})=>r.id))).toEqual(new Set(animalNames));for(const page of animalLesson.pages){expect(page.sound).toBe('call-'+page.art);const record=records.find((r:{id:string})=>r.id===page.art);expect(record.author.length).toBeGreaterThan(0);expect(record.source).toMatch(/^https:\/\//);expect(record.licenseUrl).toMatch(/^https:\/\/creativecommons.org\//);expect(record.durationSeconds).toBeGreaterThan(0);expect(record.durationSeconds).toBeLessThanOrEqual(6);const data=readFileSync('public/audio/'+page.sound+'.m4a');expect(createHash('sha256').update(data).digest('hex')).toBe(record.sha256)}expect(new Set(records.map((r:{sha256:string})=>r.sha256)).size).toBe(50)})});

import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {Art} from '../src/Art';
describe('动物插画渲染',()=>{it('50种动物重复展示时标识独立、滤镜引用有效、名称完整',()=>{const all=[...animalNames,...animalNames];const markup=renderToStaticMarkup(createElement('div',null,...all.map((name,i)=>createElement(Art,{key:i,name}))));const ids=[...markup.matchAll(/<filter id="([^"]+)"/g)].map(m=>m[1]);expect(ids).toHaveLength(100);expect(new Set(ids).size).toBe(100);for(const id of ids)expect(markup).toContain('url(#'+id+')');expect([...markup.matchAll(/<svg[^>]*aria-label="[^"]+"/g)]).toHaveLength(100);const clips=[...markup.matchAll(/<clipPath id="([^"]+)"/g)].map(m=>m[1]);expect(clips).toHaveLength(4);expect(new Set(clips).size).toBe(4);for(const id of clips)expect(markup).toContain('url(#'+id+')');expect(markup).not.toMatch(/NaN|undefined/);})});

import soundLesson from '../src/courses/animal-sounds';
describe('听声音猜动物',()=>{
 it('独立入口覆盖50种真实叫声，图片答案与录音匹配且题干不泄露答案',async()=>{
  const entry=courses.find(c=>c.id==='animal-sounds');expect(entry?.category).toBe('常识认知');expect((await entry!.load()).default).toBe(soundLesson);
  expect(soundLesson.mode).toBe('sound-quiz');expect(soundLesson.pages).toEqual([]);expect(soundLesson.quizSize).toBe(3);expect(soundLesson.questions).toHaveLength(50);
  expect(new Set(soundLesson.questions.map(q=>q.audio))).toEqual(new Set(animalNames.map(id=>'call-'+id)));
  for(const q of soundLesson.questions){expect(q.options).toHaveLength(2);expect(q.options[0].art).not.toBe(q.options[1].art);expect(q.audio).toBe('call-'+q.options[q.answer].art);expect(q.prompt).not.toContain(q.options[q.answer].label);expect(existsSync('public/audio/'+q.audio+'.m4a')).toBe(true)}
 });
});

import encyclopediaLesson from '../src/courses/encyclopedia';
import {encyclopedia,encyclopediaCategories} from '../src/courses/encyclopedia/catalog';
describe('认识百科',()=>{
 it('五个分类完整覆盖150张卡片，列表顺序与介绍翻页顺序一致',()=>{
  expect(encyclopediaCategories.map(category=>encyclopedia.filter(p=>p.category===category).length)).toEqual([30,30,30,30,30]);
  const grouped=encyclopediaCategories.flatMap(category=>encyclopedia.filter(p=>p.category===category));
  expect(grouped.map(p=>'photo-'+p.id)).toEqual(encyclopediaLesson.pages.map(p=>p.art));
  expect(new Set(grouped.map(p=>p.id)).size).toBe(150);
 });
 it('真实照片、来源许可、中文语音和题目一一对应',async()=>{
  const entry=courses.find(c=>c.id==='encyclopedia')!;
  expect(entry.category).toBe('常识认知');
  expect((await entry.load()).default).toBe(encyclopediaLesson);
  const sources=JSON.parse(readFileSync('public/images/encyclopedia/sources.json','utf8'));
  const transcripts=JSON.parse(readFileSync('public/audio/transcripts.json','utf8'));
  expect(encyclopediaLesson.pages).toHaveLength(150);
  expect(sources).toHaveLength(150);
  expect(new Set(sources.map((s:{sha256:string})=>s.sha256)).size).toBe(150);
  expect(encyclopediaLesson.questions).toHaveLength(150);
  expect(new Set(encyclopediaLesson.pages.map(p=>p.art)).size).toBe(150);
  expect(new Set(sources.map((s:{id:string})=>s.id))).toEqual(new Set(encyclopedia.map(p=>p.id)));
  for(const [i,page] of encyclopediaLesson.pages.entries()){
   const item=encyclopedia[i];
   const source=sources.find((s:{id:string})=>s.id===item.id);
   const data=readFileSync('public/images/encyclopedia/'+source.file);
   expect(data.subarray(0,3).toString('hex')).toBe('ffd8ff');
   expect(createHash('sha256').update(data).digest('hex')).toBe(source.sha256);
   expect(Boolean(source.creator)||source.licenseCode==='pd'||source.licenseCode==='cc0').toBe(true);
   expect(source.page).toMatch(/^https:\/\/commons.wikimedia.org\/wiki\/File:/);
   expect(source.licenseUrl).toMatch(/^https:\/\/creativecommons.org\//);
   expect(transcripts[page.audio]).toContain(page.text);
   const question=encyclopediaLesson.questions[i];
   expect(question.options[question.answer].art).toBe(page.art);
   expect(question.options[0].art).not.toBe(question.options[1].art);
   expect(transcripts[question.audio]).toContain(question.prompt);
   const markup=renderToStaticMarkup(createElement(Art,{name:page.art}));
   expect(markup).toContain(item.id+'.jpg');
   expect(markup).toContain('alt="'+item.name+'的真实照片"');
   expect(markup).not.toContain('<svg');
  }
  const round=sampleQuestions(encyclopediaLesson.questions,encyclopediaLesson.quizSize);
  expect(round).toHaveLength(6);
  expect(new Set(round.map(q=>q.audio)).size).toBe(6);
 });
});
