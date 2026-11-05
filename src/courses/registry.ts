import type {Course} from '../types';
export const courses:Course[]=[
{id:'animals',title:'认识小动物',category:'常识认知',topic:'动物',age:[18,36],cover:'cat',description:'和50位动物朋友打个招呼',color:'sage',load:()=>import('./animals')},
{id:'animal-sounds',title:'听声音猜动物',category:'常识认知',topic:'动物声音',age:[18,48],cover:'owl',description:'听真实叫声，找出藏在声音里的动物朋友',color:'sage',load:()=>import('./animal-sounds')},
{id:'colors',title:'认识颜色',category:'常识认知',topic:'颜色',age:[18,36],cover:'color-balloons',description:'认识25种颜色，从单色找到多色物品',color:'sand',load:()=>import('./colors')},
{id:'encyclopedia',title:'认识百科',category:'常识认知',topic:'百科',age:[24,60],cover:'encyclopedia-cover',description:'看150张真实照片，认识自然、植物、交通和蔬果',color:'sage',load:()=>import('./encyclopedia')},
{id:'shapes',title:'认识形状',category:'常识认知',topic:'形状',age:[24,48],cover:'shapes-cover',description:'认识10种形状，找找生活中的形状伙伴',color:'sand',load:()=>import('./shapes')},
{id:'body',title:'认识身体',category:'常识认知',topic:'身体',age:[24,48],cover:'body-cover',description:'看真实照片，认识19个身体部位',color:'peach',load:()=>import('./body')},
{id:'numbers',title:'数字与数量',category:'常识认知',topic:'数量',age:[24,48],cover:'numbers-cover',description:'数一数20种不同物品，认识数字1～20',color:'sage',load:()=>import('./numbers')},
{id:'compare',title:'大小比较',category:'常识认知',topic:'比较',age:[24,48],cover:'compare-cover',description:'比一比大小、长短、高矮和多少',color:'sand',load:()=>import('./compare')},
{id:'positions',title:'空间位置',category:'常识认知',topic:'位置',age:[24,48],cover:'position-cover',description:'跟着皮球认识上下、里外、前后和左右',color:'sage',load:()=>import('./positions')},
{id:'sorting',title:'分类配对',category:'常识认知',topic:'分类',age:[24,48],cover:'sorting-cover',description:'认识6类36种物品，给它们找个同类伙伴',color:'peach',load:()=>import('./sorting')},
{id:'daily',title:'认识日常用品',category:'常识认知',topic:'日常用品',age:[24,48],cover:'daily-cover',description:'看真实照片，认识4组48种日常用品',color:'sage',load:()=>import('./daily')},
{id:'emotions',title:'认识情绪',category:'常识认知',topic:'情绪',age:[24,48],cover:'emotion-cover',description:'看看6种表情，学着说出自己的感受',color:'peach',load:()=>import('./emotions')},
{id:'weather',title:'四季与天气',category:'常识认知',topic:'四季天气',age:[24,48],cover:'weather-cover',description:'看四季变化，认识6种天气和生活准备',color:'sand',load:()=>import('./weather')},
{id:'life-sounds',title:'生活中的声音',category:'常识认知',topic:'生活声音',age:[24,48],cover:'life-cover',description:'听30种真实声音，发现日常、自然和乐器的声音',color:'sage',load:()=>import('./life-sounds')},
{id:'tidy',title:'玩具回家啦',category:'生活技能',topic:'整理',age:[18,42],cover:'blocks',description:'帮玩具找到自己的小家',color:'peach',load:()=>import('./tidy')},
{id:'storybook',title:'小兔找月亮',category:'故事天地',topic:'原创童话',age:[18,60],cover:'rabbit',description:'翻开绘本，跟小兔一起出发',color:'sand',load:()=>import('./storybook')},
{id:'bedtime',title:'小兔找月亮',category:'睡前故事',topic:'晚安故事',age:[18,60],cover:'moon',description:'闭上眼睛，听一个轻轻的故事',color:'night',load:()=>import('./bedtime')},
];
export const categories=['全部','常识认知','生活技能','故事天地','睡前故事'] as const;
