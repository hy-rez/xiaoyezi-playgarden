import type {Course} from '../types';
export const courses:Course[]=[
{id:'animals',title:'认识小动物',category:'常识认知',topic:'动物',age:[18,36],cover:'cat',description:'和四位毛茸茸的朋友打个招呼',color:'sage',load:()=>import('./animals')},
{id:'tidy',title:'玩具回家啦',category:'生活技能',topic:'整理',age:[18,42],cover:'blocks',description:'帮玩具找到自己的小家',color:'peach',load:()=>import('./tidy')},
{id:'storybook',title:'小兔找月亮',category:'故事天地',topic:'原创童话',age:[18,60],cover:'rabbit',description:'翻开绘本，跟小兔一起出发',color:'sand',load:()=>import('./storybook')},
{id:'bedtime',title:'小兔找月亮',category:'睡前故事',topic:'晚安故事',age:[18,60],cover:'moon',description:'闭上眼睛，听一个轻轻的故事',color:'night',load:()=>import('./bedtime')},
];
export const categories=['全部','常识认知','生活技能','故事天地','睡前故事'] as const;
