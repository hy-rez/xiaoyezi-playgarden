import {describe,it,expect} from 'vitest';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {courses} from '../src/courses/registry';
import {comparisonConcepts,sortingGroups} from '../src/thinkingContent';
import {ComparisonArt} from '../src/ComparisonArt';
describe('第二批认知课程题意',()=>{
 it('比较题只改变同类物品的比较属性，答案与概念相符',async()=>{
  const {default:l}=await courses.find(c=>c.id==='compare')!.load();if(l.kind!=='interactive')throw Error('课程类型');
  for(const q of l.questions){
   const correct=q.options[q.answer].art.split('-'),wrong=q.options[1-q.answer].art.split('-');
   expect(correct.slice(0,3)).toEqual(wrong.slice(0,3));
   expect(Number(correct[3])).toBe(comparisonConcepts[Number(correct[1])].level);
   expect(Number(wrong[3])).toBe(1-Number(correct[3]));expect(q.options[0].label).toBe(q.options[1].label);
  }
  for(const concept of [6,7])for(const variant of [0,1])for(const level of [0,1]){
   const svg=renderToStaticMarkup(createElement(ComparisonArt,{concept,variant,level}));expect(svg.match(/data-compare-count="item"/g)).toHaveLength(level?5:2);
  }
 });
 it('位置选项使用相同参照物，只有相反位置不同',async()=>{
  const {default:l}=await courses.find(c=>c.id==='positions')!.load();if(l.kind!=='interactive')throw Error('课程类型');
  for(const q of l.questions){const correct=Number(q.options[q.answer].art.split('-')[1]),wrong=Number(q.options[1-q.answer].art.split('-')[1]);expect(wrong).toBe(correct^1);expect(q.options[0].label).toBe(q.options[1].label)}
 });
 it('36种物品都有完整练习，同类组合和伙伴保持分类一致',async()=>{
  const {default:l}=await courses.find(c=>c.id==='sorting')!.load();if(l.kind!=='interactive')throw Error('课程类型');
  expect(sortingGroups).toHaveLength(6);
  expect(new Set(sortingGroups.flatMap(g=>g.items.map(item=>item.id))).size).toBe(36);
  expect(l.pages).toHaveLength(36);expect(l.questions).toHaveLength(72);
  for(let g=0;g<6;g++){
   expect(sortingGroups[g].items).toHaveLength(6);
   for(let i=0;i<6;i++){
    const item=sortingGroups[g].items[i];
    expect(l.pages[g*6+i].title).toBe(item.name);expect(l.pages[g*6+i].text).toContain(sortingGroups[g].name);
    const group=l.questions[(g*6+i)*2],partner=l.questions[(g*6+i)*2+1];
    const good=group.options[group.answer].art.split('-'),bad=group.options[1-group.answer].art.split('-');
    expect(good.slice(2,4)).toEqual([String(g),String(i)]);expect(good[4]).toBe(String(g));expect(good[5]).not.toBe(String(i));
    expect(bad.slice(2,4)).toEqual(good.slice(2,4));expect(bad[4]).not.toBe(String(g));
    expect(partner.options[partner.answer].art.split('-')[2]).toBe(String(g));
    expect(partner.options[1-partner.answer].art.split('-')[2]).not.toBe(String(g));
   }
  }
 });
});
