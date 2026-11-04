export const comparisonConcepts = [
 {name:'大',dimension:'size',level:1,objects:['皮球','气球']},
 {name:'小',dimension:'size',level:0,objects:['皮球','气球']},
 {name:'长',dimension:'length',level:1,objects:['围巾','铅笔']},
 {name:'短',dimension:'length',level:0,objects:['围巾','铅笔']},
 {name:'高',dimension:'height',level:1,objects:['树','积木塔']},
 {name:'矮',dimension:'height',level:0,objects:['树','积木塔']},
 {name:'多',dimension:'amount',level:1,objects:['苹果','星星']},
 {name:'少',dimension:'amount',level:0,objects:['苹果','星星']},
] as const;
export const spatialConcepts=[
 {name:'上面',reference:'桌子',text:'皮球在桌子的上面，稳稳地放在桌面上。'},
 {name:'下面',reference:'桌子',text:'皮球在桌子的下面，藏在桌腿之间。'},
 {name:'里面',reference:'盒子',text:'皮球在盒子的里面，盒子把皮球装起来了。'},
 {name:'外面',reference:'盒子',text:'皮球在盒子的外面，没有放进盒子里。'},
 {name:'前面',reference:'大树',text:'皮球在大树的前面，挡住了一小段树干。'},
 {name:'后面',reference:'大树',text:'皮球在大树的后面，树干挡住了皮球的一部分。'},
 {name:'左边',reference:'桌子',text:'看着画面，皮球在桌子的左边。'},
 {name:'右边',reference:'桌子',text:'看着画面，皮球在桌子的右边。'},
] as const;
export {sortingGroups} from './sortingContent';
export type ThinkingArtName = `sorting-match-${number}-${number}-${number}-${number}` | `${'compare'|'position'|'sorting'}-cover`|`compare-intro-${number}`|`compare-${number}-${number}-${number}`|`position-${number}`|`sorting-intro-${number}`|`sorting-pair-${number}-${number}`|`sorting-item-${number}-${number}`;
