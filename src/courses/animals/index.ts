import type {Lesson} from '../../types';
import {animals} from './catalog';
import type {AnimalName} from '../../AnimalArt';
const soundNotes:Partial<Record<AnimalName,string>>={
 giraffe:'长颈鹿的低鸣很轻，仔细听一听。',turtle:'这是陆龟的低鸣；龟类通常比较安静。',monkey:'这是吼猴的声音，不同猴子的声音也不一样。',penguin:'这是王企鹅群的叫声。',rabbit:'兔子的叫声很轻，仔细听一听。',
 frog:'这是雨后野外录下的蛙鸣。',owl:'这是一种猫头鹰的叫声。',crow:'这是一种乌鸦在野外的叫声。',pigeon:'这段录音来自林鸽。',eagle:'这段录音来自白头海雕。',parrot:'这是鹦鹉本来的叫声，不是模仿人说话。',hyena:'这是斑鬣狗的声音。',squirrel:'这段录音来自印度棕榈松鼠。',bee:'这是熊蜂飞行时翅膀振动的声音。',cricket:'这是蟋蟀摩擦翅膀发出的声音。',whale:'这段水下录音来自座头鲸。',seal:'这是新西兰海狗的叫声。',deer:'这段录音来自马鹿。',alligator:'这是美洲短吻鳄的低鸣。',bison:'这是美洲野牛的声音。',cicada:'这是雄蝉的鸣声。',swan:'这是号手天鹅的叫声。',badger:'这是欧洲獾的声音。',crane:'这段录音来自灰鹤。',
};
export default {
 kind:'interactive',sticker:'cat',quizSize:3,
 pages:animals.map(a=>({title:'你好，'+a.name,text:a.text,art:a.id,audio:'animal-'+a.id,sound:'call-'+a.id,soundNote:soundNotes[a.id]})),
 questions:animals.map((a,i)=>{
  const other=animals[(i+1)%animals.length];
  const options=[{label:a.name,art:a.id},{label:other.name,art:other.id}];
  if(i%2)options.reverse();
  return {prompt:'哪一位是'+a.name+'？',audio:'q-animal-'+a.id,options,answer:i%2};
 }),
} satisfies Lesson;
