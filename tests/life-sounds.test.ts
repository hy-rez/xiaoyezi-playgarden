import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import lesson from '../src/courses/life-sounds';
import animalSounds from '../src/courses/animal-sounds';
import {lifeSounds,lifeSoundGroups} from '../src/lifeSoundContent';
import {Art} from '../src/Art';
import {sampleQuestions} from '../src/quiz';
describe('生活中的声音',()=>{
 it('30种声音分三组，介绍、录音、声源图和中文旁白一一对应',()=>{
  expect(lifeSounds).toHaveLength(30);expect(lesson.pages).toHaveLength(30);expect(lesson.questions).toHaveLength(30);
  expect(lifeSoundGroups.map(g=>g.toIndex-g.fromIndex)).toEqual([10,10,10]);expect(lifeSoundGroups.flatMap(g=>lesson.pages.slice(g.fromIndex,g.toIndex))).toEqual(lesson.pages);
  const text=JSON.parse(readFileSync('public/audio/transcripts.json','utf8'));
  for(let i=0;i<30;i++){
   const item=lifeSounds[i],page=lesson.pages[i],q=lesson.questions[i];
   expect(page.sound).toBe(q.audio);expect(q.audio).toBe('life-call-'+item.id);expect(q.options[q.answer].art).toBe(page.art);expect(q.options[q.answer].label).toBe(page.title);expect(page.title).toBe(item.name);expect(text[page.audio]).toBe(page.title+'。'+page.text);
   // 声音接近的自然声不互相作干扰项；两侧都来自真实、可浏览的声源。
   const wrong=q.options[1-q.answer].art;expect(lesson.pages.some(p=>p.art===wrong)).toBe(true);
   if(i>=10&&i<20)expect(lifeSounds.slice(10,20).some(s=>'life-'+s.id===wrong)).toBe(false);
  }
 });
 it('每轮6种不重复声音，抽取不改题库，正确选项左右均衡',()=>{
  expect(lesson.quizSize).toBe(6);expect(lesson.questions.filter(q=>q.answer===0)).toHaveLength(15);
  const before=JSON.stringify(lesson.questions);
  for(let n=0;n<20;n++){const round=sampleQuestions(lesson.questions,6);expect(round).toHaveLength(6);expect(new Set(round.map(q=>q.audio)).size).toBe(6);for(const q of round){expect(q.options).toHaveLength(2);expect(q.options[0].art).not.toBe(q.options[1].art)}}
  expect(JSON.stringify(lesson.questions)).toBe(before);expect(animalSounds.pages).toHaveLength(0);expect(animalSounds.quizSize).toBe(3);
 });
 it('全部原创插画有名称且可渲染，封面不是某一题答案',()=>{
  const images=lifeSounds.map(s=>renderToStaticMarkup(createElement(Art,{name:`life-${s.id}`})));
  expect(new Set(images).size).toBe(30);
  for(const image of images){expect(image).toMatch(/aria-label="[^"]+"/);expect(image).not.toMatch(/undefined|NaN/)}
  expect(renderToStaticMarkup(createElement(Art,{name:'life-cover'}))).toContain('门铃、海浪和小鼓');
 });
 it('曲线细节明确关闭填充，书页不会出现默认黑色尖块',()=>{
  const book=renderToStaticMarkup(createElement(Art,{name:'life-pages'}));
  const details=book.match(/<path[^>]*data-detail-line="true"[^>]*>/g)??[];
  expect(details.length).toBeGreaterThan(5);
  for(const path of details){expect(path).toContain('fill="none"');expect(path).toContain('stroke-linecap="round"')}
 });
 it('同屏多张沙锤使用独立裁切区，色带不会越界或引用其他卡片',()=>{
  const html=renderToStaticMarkup(createElement('div',null,
   createElement(Art,{name:'life-maracas'}),createElement(Art,{name:'life-maracas'})));
  const ids=[...html.matchAll(/<clipPath id="([^"]+)"/g)].map(m=>m[1]);
  const refs=[...html.matchAll(/clip-path="url\(#([^)]+)\)" data-maraca-bands="true"/g)].map(m=>m[1]);
  expect(ids).toHaveLength(4);expect(new Set(ids).size).toBe(4);expect(refs).toEqual(ids);
 });
 it('30段实录具备本地文件、完整来源、处理记录和匹配的校验值',()=>{
  const sources=JSON.parse(readFileSync('public/audio/life-sounds/sources.json','utf8'));
  expect(sources.map((s:{id:string})=>s.id)).toEqual(lifeSounds.map(s=>s.id));
  expect(new Set(sources.map((s:{sha256:string})=>s.sha256)).size).toBe(30);
  for(const source of sources){
   expect(source.author).toBeTruthy();expect(source.licenseUrl).toMatch(/^https:/);expect(source.source).toMatch(/^https:\/\/(commons.wikimedia.org|freesound.org)\//);expect(source.download).toMatch(/^https:\/\/(upload.wikimedia.org|cdn.freesound.org)\//);expect(source.durationSeconds).toBeGreaterThan(1);expect(source.durationSeconds).toBeLessThanOrEqual(6);expect(source.peakBeforeEncoding).toBeLessThanOrEqual(14000);expect(source.rmsBeforeEncoding).toBeGreaterThan(100);
   expect(createHash('sha256').update(readFileSync('public/audio/life-call-'+source.id+'.m4a')).digest('hex')).toBe(source.sha256);
  }
 });
});
