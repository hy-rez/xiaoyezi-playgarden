import type {Lesson} from '../../types';
import {lifeSounds,lifeSoundGroups} from '../../lifeSoundContent';
// 对比不同类别的声源，避免把音色接近的雨、水、浪放在同一题。
const distractors=['drum','waves','rain','guitar','flute','piano','trumpet','frog','pigeon','stream','phone','piano','knock','triangle','pages','zipper','clap','footsteps','scissors','harmonica','stream','clock','doorbell','wind','keys','clap','zipper','waterfall','pages','knock'] as const;
export default {
 kind:'interactive',mode:'sound-quiz',sticker:'life-cover',quizSize:6,
 library:{label:'声音',groups:lifeSoundGroups,quizLabel:'听声音找一找'},
 pages:lifeSounds.map(item=>({title:item.name,text:item.text,art:`life-${item.id}` as const,audio:`life-intro-${item.id}`,sound:`life-call-${item.id}`,soundNote:'这是一个声音样本，同一种声源也可能发出不同的声音。'})),
 questions:lifeSounds.map((item,i)=>{
  const other=lifeSounds.find(s=>s.id===distractors[i])!;
  const options=[{label:item.name,art:`life-${item.id}` as const},{label:other.name,art:`life-${other.id}` as const}];
  if(i%2)options.reverse();
  return {prompt:'听一听，是什么在发出声音？',audio:`life-call-${item.id}`,options,answer:i%2};
 }),
} satisfies Lesson;
