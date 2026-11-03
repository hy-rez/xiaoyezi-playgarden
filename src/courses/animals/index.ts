import type {Lesson} from '../../types';
import {animals} from './catalog';
export default {
 kind:'interactive',sticker:'cat',quizSize:3,
 pages:animals.map(a=>({title:'你好，'+a.name,text:a.text,art:a.id,audio:'animal-'+a.id})),
 questions:animals.map((a,i)=>{
  const other=animals[(i+1)%animals.length];
  const options=[{label:a.name,art:a.id},{label:other.name,art:other.id}];
  if(i%2)options.reverse();
  return {prompt:'哪一位是'+a.name+'？',audio:'q-animal-'+a.id,options,answer:i%2};
 }),
} satisfies Lesson;
