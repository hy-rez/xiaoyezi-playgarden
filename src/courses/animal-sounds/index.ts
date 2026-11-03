import type {Lesson} from '../../types';
import {animals} from '../animals/catalog';
export default {
 kind:'interactive',mode:'sound-quiz',sticker:'owl',quizSize:3,pages:[],
 questions:animals.map((animal,i)=>{
  const other=animals[(i+7)%animals.length];
  const options=[{label:animal.name,art:animal.id},{label:other.name,art:other.id}];
  if(i%2)options.reverse();
  return {prompt:'听一听，是哪位动物朋友？',audio:'call-'+animal.id,options,answer:i%2};
 }),
} satisfies Lesson;
