import type {Lesson} from '../../types';
import {encyclopedia,type EncyclopediaArt} from './catalog';
const art = (id:typeof encyclopedia[number]['id']):EncyclopediaArt=>`photo-${id}`;
export default {
 kind:'interactive',sticker:'photo-sunflower',quizSize:6,
 pages:encyclopedia.map(item=>({title:item.name,text:item.text,art:art(item.id),audio:'encyclopedia-'+item.id})),
 questions:encyclopedia.map((item,i)=>{
  const other=encyclopedia[(i+1)%encyclopedia.length];
  const options=[{label:item.name,art:art(item.id)},{label:other.name,art:art(other.id)}];
  if(i%2)options.reverse();
  return {prompt:'哪一张是'+item.name+'？',audio:'q-encyclopedia-'+item.id,options,answer:i%2};
 }),
} satisfies Lesson;
