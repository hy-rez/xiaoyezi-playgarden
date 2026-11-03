export type Art = 'red-balloon'|'yellow-balloon'|'blue-balloon'|'color-balloons'|'cat'|'dog'|'cow'|'rabbit'|'blocks'|'ball'|'book'|'box'|'shelf'|'basket'|'moon'|'pond'|'hill'|'home';
export type Page = {title:string;text:string;art:Art;audio:string};
export type Question = {prompt:string;audio:string;options:{label:string;art:Art}[];answer:number};
export type Lesson = {kind:'interactive';pages:Page[];questions:Question[];sticker:Art}|{kind:'storybook';pages:Page[]}|{kind:'bedtime';audio:string;text:string;art:Art};
export type Course = {id:string;title:string;category:'常识认知'|'生活技能'|'故事天地'|'睡前故事';topic:string;age:[number,number];cover:Art;description:string;color:string;load:()=>Promise<{default:Lesson}>};
