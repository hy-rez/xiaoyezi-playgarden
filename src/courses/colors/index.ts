import type {Lesson} from '../../types';
export default {
  kind:'interactive', sticker:'color-balloons',
  pages:[
    {title:'你好，红色',text:'这是红色。红色的气球，像红红的草莓。',art:'red-balloon',audio:'color-red'},
    {title:'你好，黄色',text:'这是黄色。黄色的气球，像黄黄的香蕉。',art:'yellow-balloon',audio:'color-yellow'},
    {title:'你好，蓝色',text:'这是蓝色。蓝色的气球，像蓝蓝的天空。',art:'blue-balloon',audio:'color-blue'},
  ],
  questions:[
    {prompt:'哪个气球是红色的？',audio:'q-color-red',options:[{label:'红色气球',art:'red-balloon'},{label:'黄色气球',art:'yellow-balloon'}],answer:0},
    {prompt:'哪个气球是黄色的？',audio:'q-color-yellow',options:[{label:'蓝色气球',art:'blue-balloon'},{label:'黄色气球',art:'yellow-balloon'}],answer:1},
    {prompt:'哪个气球是蓝色的？',audio:'q-color-blue',options:[{label:'蓝色气球',art:'blue-balloon'},{label:'红色气球',art:'red-balloon'}],answer:0},
  ],
} satisfies Lesson;
