import type {EncyclopediaArt} from './courses/encyclopedia/catalog';
import type {BalloonArt,ColorObjectArt,SingleColorArtName} from './colorContent';
import type {AnimalName} from './AnimalArt';
export type Art = EncyclopediaArt|SingleColorArtName|BalloonArt|ColorObjectArt|AnimalName|'red-balloon'|'yellow-balloon'|'blue-balloon'|'color-balloons'|'cat'|'dog'|'cow'|'rabbit'|'blocks'|'ball'|'book'|'box'|'shelf'|'basket'|'moon'|'pond'|'hill'|'home';
export type Page = {title:string;text:string;art:Art;audio:string;sound?:string;soundNote?:string};
export type Question = {prompt:string;audio:string;options:{label:string;art:Art}[];answer:number;difficulty?:1|2|3};
export type Lesson = {kind:'interactive';mode?:'sound-quiz';quizSize?:number;pages:Page[];questions:Question[];sticker:Art}|{kind:'storybook';pages:Page[]}|{kind:'bedtime';audio:string;text:string;art:Art};
export type Course = {id:string;title:string;category:'常识认知'|'生活技能'|'故事天地'|'睡前故事';topic:string;age:[number,number];cover:Art;description:string;color:string;load:()=>Promise<{default:Lesson}>};
