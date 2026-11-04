import {Hyena} from './illustrations/Hyena';
import {Fox} from './illustrations/Fox';
export const extraAnimalNames=['donkey','goat','frog','wolf','fox','owl','crow','pigeon','eagle','parrot','peacock','turkey','camel','hyena','raccoon','squirrel','bee','cricket','dolphin','whale','seal','deer','alligator','bison','cicada','swan','guinea-pig','badger','boar','crane'] as const;
export type ExtraAnimalName=typeof extraAnimalNames[number];
export const extraAnimalLabels:Record<ExtraAnimalName,string>={donkey:'小驴',goat:'山羊',frog:'青蛙',wolf:'狼',fox:'狐狸',owl:'猫头鹰',crow:'乌鸦',pigeon:'鸽子',eagle:'老鹰',parrot:'鹦鹉',peacock:'孔雀',turkey:'火鸡',camel:'骆驼',hyena:'鬣狗',raccoon:'浣熊',squirrel:'松鼠',bee:'熊蜂',cricket:'蟋蟀',dolphin:'海豚',whale:'鲸鱼',seal:'海狗',deer:'鹿',alligator:'鳄鱼',bison:'野牛',cicada:'蝉',swan:'天鹅','guinea-pig':'豚鼠',badger:'獾',boar:'野猪',crane:'鹤'};
export function ExtraAnimalArt({name}:{name:ExtraAnimalName}){
 if(name==='fox')return <Fox/>;
 if(name==='hyena')return <Hyena/>;
 return null;
}
