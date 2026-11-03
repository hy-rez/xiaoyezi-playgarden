import type {Lesson} from '../../types';
export default {kind:'interactive',sticker:'blocks',pages:[
{title:'积木回盒子',text:'玩好积木，把积木轻轻放进盒子里。',art:'box',audio:'tidy-blocks'},
{title:'小球回篮子',text:'小球不乱跑，把它放进篮子里。',art:'basket',audio:'tidy-ball'},
{title:'图书回书架',text:'合上小书，放回书架。玩具都回家啦。',art:'shelf',audio:'tidy-book'}],questions:[
{prompt:'积木的小家在哪里？',audio:'q-blocks',options:[{label:'积木盒',art:'box'},{label:'书架',art:'shelf'}],answer:0},
{prompt:'小球应该放在哪里？',audio:'q-ball',options:[{label:'书架',art:'shelf'},{label:'篮子',art:'basket'}],answer:1},
{prompt:'小书的小家在哪里？',audio:'q-book',options:[{label:'书架',art:'shelf'},{label:'篮子',art:'basket'}],answer:0}]} satisfies Lesson;
