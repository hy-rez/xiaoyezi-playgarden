import type {Lesson} from '../../types';
import {animals} from './catalog';
export default {
 kind:'interactive',sticker:'cat',quizSize:3,
 pages:animals.map(a=>({title:'你好，'+a.name,text:a.text,art:a.id,audio:'animal-'+a.id,sound:'call-'+a.id,soundNote:a.id==='giraffe'?'长颈鹿的低鸣很轻，仔细听一听。':a.id==='turtle'?'这是陆龟的低鸣；龟类通常比较安静。':a.id==='monkey'?'这是吼猴的声音，不同猴子的声音也不一样。':a.id==='penguin'?'这是王企鹅群的叫声。':a.id==='rabbit'?'兔子的叫声很轻，仔细听一听。':undefined})),
 questions:animals.map((a,i)=>{
  const other=animals[(i+1)%animals.length];
  const options=[{label:a.name,art:a.id},{label:other.name,art:other.id}];
  if(i%2)options.reverse();
  return {prompt:'哪一位是'+a.name+'？',audio:'q-animal-'+a.id,options,answer:i%2};
 }),
} satisfies Lesson;
