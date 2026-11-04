export const colorPalette = {
 red:{label:'红色',fill:'#df443d',example:'红红的草莓'},
 yellow:{label:'黄色',fill:'#f2ce37',example:'黄黄的香蕉'},
 blue:{label:'蓝色',fill:'#3889d6',example:'蓝蓝的天空'},
 green:{label:'绿色',fill:'#389953',example:'绿绿的树叶'},
 orange:{label:'橙色',fill:'#f18a28',example:'橙色的橘子'},
 purple:{label:'紫色',fill:'#9255ba',example:'紫色的葡萄'},
 pink:{label:'粉色',fill:'#ee91b4',example:'粉色的桃花'},
 brown:{label:'棕色',fill:'#955f36',example:'棕色的树干'},
 black:{label:'黑色',fill:'#292929',example:'黑黑的木炭'},
 white:{label:'白色',fill:'#ffffff',example:'白白的雪花'},
 gray:{label:'灰色',fill:'#969696',example:'灰色的石头'},
 cyan:{label:'青色',fill:'#22bfc3',example:'蓝绿之间的青色积木'},
 lightblue:{label:'浅蓝色',fill:'#8bc9ef',example:'浅蓝色的晴天天空'},
 navy:{label:'深蓝色',fill:'#24477d',example:'深蓝色的海水'},
 lightgreen:{label:'浅绿色',fill:'#9bd875',example:'浅绿色的嫩芽'},
 darkgreen:{label:'深绿色',fill:'#226344',example:'深绿色的松针'},
 lightyellow:{label:'浅黄色',fill:'#f7e79a',example:'浅黄色的小鸡绒毛'},
 darkred:{label:'深红色',fill:'#962d3e',example:'深红色的樱桃'},
 peach:{label:'桃红色',fill:'#f16e85',example:'桃红色的花瓣'},
 lavender:{label:'浅紫色',fill:'#c5a4df',example:'浅紫色的丁香花'},
 beige:{label:'米色',fill:'#e7d4ac',example:'米色的帆布袋'},
 teal:{label:'蓝绿色',fill:'#248b87',example:'蓝绿色的湖水'},
 ochre:{label:'土黄色',fill:'#be913e',example:'土黄色的泥土'},
 darkgray:{label:'深灰色',fill:'#595959',example:'深灰色的岩石'},
 rose:{label:'玫红色',fill:'#cc367d',example:'玫红色的玫瑰花'},
} as const;
export type ColorId = keyof typeof colorPalette;
export type BalloonArt = `${ColorId}-balloon`;
export const colorIds=Object.keys(colorPalette) as ColorId[];
export const singleColorItems = {
 red:{label:'苹果',part:'果皮'},yellow:{label:'香蕉',part:'果皮'},blue:{label:'小水桶',part:'桶身'},
 green:{label:'树叶',part:'叶片'},orange:{label:'橘子',part:'果皮'},purple:{label:'葡萄',part:'果皮'},
 pink:{label:'桃花',part:'花瓣'},brown:{label:'树干',part:'树皮'},black:{label:'木炭',part:'表面'},
 white:{label:'雪花',part:'冰晶'},gray:{label:'鹅卵石',part:'表面'},cyan:{label:'积木',part:'表面'},
 lightblue:{label:'羽毛',part:'羽片'},navy:{label:'鲸鱼',part:'身体'},lightgreen:{label:'嫩芽',part:'叶片'},
 darkgreen:{label:'松树',part:'松针'},lightyellow:{label:'梨子',part:'果皮'},darkred:{label:'樱桃',part:'果皮'},
 peach:{label:'郁金香',part:'花瓣'},lavender:{label:'蝴蝶',part:'翅膀'},beige:{label:'帆布袋',part:'袋身'},
 teal:{label:'小鱼',part:'身体'},ochre:{label:'沙堡',part:'沙子'},darkgray:{label:'小锅',part:'锅身'},
 rose:{label:'玫瑰花',part:'花瓣'},
} as const satisfies Record<ColorId,{label:string;part:string}>;
export type SingleColorArtName=`single-${ColorId}`;
export function singleColorArt(id:ColorId):SingleColorArtName{return `single-${id}`}
export const shapeLabels={umbrella:'小伞',ball:'小球',kite:'风筝',pinwheel:'风车',hat:'帽子',sock:'袜子',cup:'杯子',car:'小汽车',house:'小房子',gift:'礼物盒',rocket:'火箭',train:'小火车',sailboat:'帆船',robot:'机器人',backpack:'双肩包',sneaker:'运动鞋',dress:'连衣裙',icecream:'冰淇淋',cake:'蛋糕',drum:'小鼓'} as const;
export const shapeQuestionStarts={umbrella:'哪把小伞',ball:'哪个小球',kite:'哪只风筝',pinwheel:'哪架风车',hat:'哪顶帽子',sock:'哪只袜子',cup:'哪个杯子',car:'哪辆小汽车',house:'哪座小房子',gift:'哪个礼物盒',rocket:'哪枚火箭',train:'哪列小火车',sailboat:'哪艘帆船',robot:'哪个机器人',backpack:'哪个双肩包',sneaker:'哪只运动鞋',dress:'哪条连衣裙',icecream:'哪个冰淇淋',cake:'哪块蛋糕',drum:'哪面小鼓'} as const;
export type ColorShape=keyof typeof shapeLabels;
export const colorObjects = {
 "umbrella-red-yellow":{"shape":"umbrella","colors":["red","yellow"]},
 "umbrella-red-blue":{"shape":"umbrella","colors":["red","blue"]},
 "ball-blue-green":{"shape":"ball","colors":["blue","green"]},
 "ball-blue-orange":{"shape":"ball","colors":["blue","orange"]},
 "kite-pink-purple":{"shape":"kite","colors":["pink","purple"]},
 "kite-pink-brown":{"shape":"kite","colors":["pink","brown"]},
 "pinwheel-orange-cyan":{"shape":"pinwheel","colors":["orange","cyan"]},
 "pinwheel-orange-navy":{"shape":"pinwheel","colors":["orange","navy"]},
 "hat-brown-beige":{"shape":"hat","colors":["brown","beige"]},
 "hat-brown-darkgray":{"shape":"hat","colors":["brown","darkgray"]},
 "sock-lightblue-white":{"shape":"sock","colors":["lightblue","white"]},
 "sock-lightblue-lightgreen":{"shape":"sock","colors":["lightblue","lightgreen"]},
 "cup-rose-lightyellow":{"shape":"cup","colors":["rose","lightyellow"]},
 "cup-rose-lavender":{"shape":"cup","colors":["rose","lavender"]},
 "car-darkgreen-ochre":{"shape":"car","colors":["darkgreen","ochre"]},
 "car-darkgreen-darkred":{"shape":"car","colors":["darkgreen","darkred"]},
 "house-peach-navy":{"shape":"house","colors":["peach","navy"]},
 "house-peach-teal":{"shape":"house","colors":["peach","teal"]},
 "gift-lavender-teal":{"shape":"gift","colors":["lavender","teal"]},
 "gift-lavender-rose":{"shape":"gift","colors":["lavender","rose"]},
 "rocket-red-white-blue":{"shape":"rocket","colors":["red","white","blue"]},
 "rocket-red-white-green":{"shape":"rocket","colors":["red","white","green"]},
 "train-yellow-blue-green":{"shape":"train","colors":["yellow","blue","green"]},
 "train-yellow-blue-purple":{"shape":"train","colors":["yellow","blue","purple"]},
 "sailboat-cyan-white-orange":{"shape":"sailboat","colors":["cyan","white","orange"]},
 "sailboat-cyan-white-navy":{"shape":"sailboat","colors":["cyan","white","navy"]},
 "robot-lightgreen-rose-navy":{"shape":"robot","colors":["lightgreen","rose","navy"]},
 "robot-lightgreen-rose-ochre":{"shape":"robot","colors":["lightgreen","rose","ochre"]},
 "backpack-beige-darkred-brown":{"shape":"backpack","colors":["beige","darkred","brown"]},
 "backpack-beige-darkred-darkgray":{"shape":"backpack","colors":["beige","darkred","darkgray"]},
 "sneaker-lightblue-white-teal":{"shape":"sneaker","colors":["lightblue","white","teal"]},
 "sneaker-lightblue-white-peach":{"shape":"sneaker","colors":["lightblue","white","peach"]},
 "dress-lavender-white-rose":{"shape":"dress","colors":["lavender","white","rose"]},
 "dress-lavender-white-purple":{"shape":"dress","colors":["lavender","white","purple"]},
 "icecream-pink-beige-brown":{"shape":"icecream","colors":["pink","beige","brown"]},
 "icecream-pink-beige-darkgray":{"shape":"icecream","colors":["pink","beige","darkgray"]},
 "cake-lightyellow-pink-brown":{"shape":"cake","colors":["lightyellow","pink","brown"]},
 "cake-lightyellow-pink-purple":{"shape":"cake","colors":["lightyellow","pink","purple"]},
 "drum-orange-yellow-darkgray":{"shape":"drum","colors":["orange","yellow","darkgray"]},
 "drum-orange-yellow-blue":{"shape":"drum","colors":["orange","yellow","blue"]},
} as const satisfies Record<string,{shape:ColorShape;colors:readonly ColorId[]}>;
export type ColorObjectArt=keyof typeof colorObjects;
export const colorObjectPairs = [
 ["umbrella-red-yellow","umbrella-red-blue"],
 ["ball-blue-green","ball-blue-orange"],
 ["kite-pink-purple","kite-pink-brown"],
 ["pinwheel-orange-cyan","pinwheel-orange-navy"],
 ["hat-brown-beige","hat-brown-darkgray"],
 ["sock-lightblue-white","sock-lightblue-lightgreen"],
 ["cup-rose-lightyellow","cup-rose-lavender"],
 ["car-darkgreen-ochre","car-darkgreen-darkred"],
 ["house-peach-navy","house-peach-teal"],
 ["gift-lavender-teal","gift-lavender-rose"],
 ["rocket-red-white-blue","rocket-red-white-green"],
 ["train-yellow-blue-green","train-yellow-blue-purple"],
 ["sailboat-cyan-white-orange","sailboat-cyan-white-navy"],
 ["robot-lightgreen-rose-navy","robot-lightgreen-rose-ochre"],
 ["backpack-beige-darkred-brown","backpack-beige-darkred-darkgray"],
 ["sneaker-lightblue-white-teal","sneaker-lightblue-white-peach"],
 ["dress-lavender-white-rose","dress-lavender-white-purple"],
 ["icecream-pink-beige-brown","icecream-pink-beige-darkgray"],
 ["cake-lightyellow-pink-brown","cake-lightyellow-pink-purple"],
 ["drum-orange-yellow-darkgray","drum-orange-yellow-blue"],
] as const satisfies readonly (readonly [ColorObjectArt,ColorObjectArt])[];
export function colorArtLabel(name:string){
 if(name.startsWith('single-')){const id=name.slice(7) as ColorId;return colorPalette[id]?.label+'的'+singleColorItems[id]?.label}
 if(name.endsWith('-balloon'))return colorPalette[name.slice(0,-8) as ColorId]?.label+'气球';
 const object=colorObjects[name as ColorObjectArt];
 return object?object.colors.map(c=>colorPalette[c].label).join('、')+'的'+shapeLabels[object.shape]:undefined;
}
