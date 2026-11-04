import type {Lesson,Question} from '../../types';
import {colorPalette,colorIds,colorObjects,shapeLabels,colorObjectPairs,singleColorItems,singleColorArt,shapeQuestionStarts} from '../../colorContent';
const questions:Question[]=[
 ...colorIds.map((id,i)=>{const other=colorIds[(i+1)%colorIds.length],answer=i%2;
  const options=[id,other].map(color=>({label:singleColorItems[color].label,art:singleColorArt(color)}));
  if(answer)options.reverse();
  return {prompt:`哪个物品主要是${colorPalette[id].label}的？`,audio:`q-color-${id}`,options,answer,difficulty:1 as const};
 }),
 ...colorObjectPairs.map(([target,other],i)=>{const object=colorObjects[target],shape=shapeLabels[object.shape];const answer=i%2;const arts=answer?[other,target]:[target,other];return {prompt:`${shapeQuestionStarts[object.shape]}同时有${object.colors.map(c=>colorPalette[c].label).join('、')}？`,audio:`q-color-${target}`,options:arts.map((art,j)=>({label:shape+(j===0?'一':'二'),art})),answer,difficulty:(object.colors.length===2?2:3) as 2|3}}),
];
export default {
 kind:'interactive',sticker:'color-balloons',quizSize:6,
 pages:[
  ...colorIds.map(id=>({title:`你好，${colorPalette[id].label}`,text:`仔细看看${singleColorItems[id].label}，它的${singleColorItems[id].part}是${colorPalette[id].label}的。一起说，${colorPalette[id].label}。`,art:singleColorArt(id),audio:`color-${id}`})),
  ...colorObjectPairs.map(([art])=>{
   const object=colorObjects[art],shape=shapeLabels[object.shape];
   const count=object.colors.length===2?'两':'三';
   const colors=object.colors.map(c=>colorPalette[c].label).join('、');
   return {title:`${object.colors.length===2?'双色':'三色'}${shape}`,text:`仔细看看${shape}，有${colors}。一共有${count}种颜色，把每一块都看一看，找齐所有颜色吧。`,art,audio:`intro-color-${art}`};
  }),
 ],questions,
} satisfies Lesson;
