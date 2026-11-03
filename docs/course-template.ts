// 复制到 src/courses/<新ID>/index.ts；随后在 registry.ts 登记。
import type {Lesson} from '../../src/types'; // 复制后改为 ../../types
export default {
 kind:'interactive',sticker:'cat',
 pages:[{title:'你好，小猫',text:'这是小猫。',art:'cat',audio:'cat'}],
 questions:[{prompt:'哪个是小猫？',audio:'q-cat',options:[{label:'小猫',art:'cat'},{label:'小狗',art:'dog'}],answer:0}]
} satisfies Lesson;
