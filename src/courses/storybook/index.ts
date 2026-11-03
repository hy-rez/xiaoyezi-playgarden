import type {Lesson} from '../../types';
export const pages=[
{title:'月亮，你在哪里？',text:'夜晚来了，小兔走出家门。圆圆的月亮挂在树梢上。“月亮，我可以和你一起玩吗？”',art:'rabbit',audio:'story-1'},
{title:'池塘里的月亮',text:'小兔来到池塘边。水里也有一个月亮！它伸出小爪子，水面荡起一圈圈波纹。',art:'pond',audio:'story-2'},
{title:'爬上小山坡',text:'小兔爬上软软的小山坡。月亮还是那么远，却一直陪着它。“你在等我呀。”小兔笑了。',art:'hill',audio:'story-3'},
{title:'月亮陪我回家',text:'晚风轻轻吹。小兔往家走，月亮也慢慢走。原来，不用摘下月亮，也能和它做朋友。',art:'moon',audio:'story-4'},
{title:'晚安，小兔',text:'小兔钻进暖暖的被窝。月光落在窗边，像一条柔软的小毯子。“晚安，月亮。明天见。”',art:'home',audio:'story-5'}] satisfies import('../../types').Page[];
export default {kind:'storybook',pages} satisfies Lesson;
