import type {Lesson} from '../../types';
export default {kind:'interactive',sticker:'cat',pages:[
{title:'你好，小猫',text:'小猫有尖尖的耳朵，轻轻地叫：喵，喵。',art:'cat',audio:'cat'},
{title:'你好，小狗',text:'小狗摇摇尾巴，开心地叫：汪，汪。',art:'dog',audio:'dog'},
{title:'你好，奶牛',text:'奶牛穿着黑白花衣服，慢慢地叫：哞。',art:'cow',audio:'cow'},
{title:'你好，小兔',text:'小兔有长长的耳朵，蹦蹦跳跳真可爱。',art:'rabbit',audio:'rabbit'}],questions:[
{prompt:'哪一位是小猫？',audio:'q-cat',options:[{label:'小猫',art:'cat'},{label:'小狗',art:'dog'}],answer:0},
{prompt:'谁穿着黑白花衣服？',audio:'q-cow',options:[{label:'小兔',art:'rabbit'},{label:'奶牛',art:'cow'}],answer:1},
{prompt:'谁有长长的耳朵？',audio:'q-rabbit',options:[{label:'小兔',art:'rabbit'},{label:'小猫',art:'cat'}],answer:0}]} satisfies Lesson;
