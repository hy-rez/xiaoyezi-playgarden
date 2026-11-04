import {ThinkingArt} from './ThinkingArt';
import {BodyCover} from './BodyCover';
import {BodyPhotoArt} from './BodyPhotoArt';
import {FoundationArt} from './FoundationArt';
import {EncyclopediaCover} from './EncyclopediaCover';
import {PhotoArt} from './PhotoArt';
import {encyclopediaPhoto} from './courses/encyclopedia/catalog';
import {SingleColorArt} from './SingleColorArt';
import {ColorArt} from './ColorArt';
import {colorArtLabel} from './colorContent';
import {extraAnimalLabels} from './ExtraAnimalArt';
import {AnimalArt,animalNames,type AnimalName} from './AnimalArt';
import type {Art as ArtName} from './types';
export function Art({name,className='',loading='eager'}:{name:ArtName;className?:string;loading?:'eager'|'lazy'}) {
if(/^(compare|position|sorting)-/.test(name))return <ThinkingArt name={name as import('./thinkingContent').ThinkingArtName} className={className}/>;
if(name==='body-cover')return <BodyCover className={className}/>;
if(name.startsWith('body-'))return <BodyPhotoArt key={name} name={name} className={className} loading={loading}/>;
if(/^(shapes|shape|object|body|numbers|digit|count)-/.test(name))return <FoundationArt name={name as import('./types').FoundationArt} className={className}/>;
if(encyclopediaPhoto(name))return <PhotoArt key={name} name={name} className={className} loading={loading}/>;
const animal=animalNames.includes(name as AnimalName),water=['single-navy','single-teal','dolphin','whale','seal','penguin','turtle','frog','alligator','duck','goose','swan','crane'].includes(name),openWater=['single-navy','single-teal','dolphin','whale','seal','penguin','alligator','swan'].includes(name),night=['moon','pond','hill','home'].includes(name);
return <svg className={'art '+className} viewBox="0 0 400 300" role="img" aria-label={colorArtLabel(name)||{...extraAnimalLabels,'encyclopedia-cover':'打开的百科绘本、地球和小苗',sheep:'绵羊',pig:'小猪',horse:'小马',duck:'小鸭',chicken:'公鸡',goose:'大白鹅',panda:'熊猫',bear:'小熊',elephant:'大象',giraffe:'长颈鹿',lion:'狮子',tiger:'老虎',monkey:'猴子',zebra:'斑马',penguin:'企鹅',turtle:'乌龟','red-balloon':'红色气球','yellow-balloon':'黄色气球','blue-balloon':'蓝色气球','color-balloons':'红黄蓝气球',cat:'小猫',dog:'小狗',cow:'奶牛',rabbit:'小兔',blocks:'彩色积木',ball:'小球',book:'图书',box:'积木盒',shelf:'书架',basket:'小球篮子',moon:'月亮与星星',pond:'月光池塘',hill:'月下山坡',home:'温暖的小屋'}[name as Exclude<ArtName,import('./thinkingContent').ThinkingArtName|import('./types').FoundationArt|import('./courses/encyclopedia/catalog').EncyclopediaArt|import('./colorContent').BalloonArt|import('./colorContent').ColorObjectArt|import('./colorContent').SingleColorArtName>]}>
<ellipse cx="200" cy="265" rx="142" ry="15" fill={night?'#39454c':water?'#c6dcd5':'#d5ddbd'}/>
{night?<><circle cx="290" cy="63" r="35" fill="#efdca2"/><circle cx="305" cy="52" r="31" fill="#344650"/>{[75,140,215,340].map((x,i)=><path key={x} d={`M ${x} ${45+i%2*30} l 3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 Z`} fill="#e8d8a5"/>)}<path d="M0 250 Q90 130 200 238 Q290 170 400 240 V300 H0Z" fill="#677a6a"/>{name==='pond'&&<><ellipse cx="200" cy="253" rx="120" ry="22" fill="#96b9b4"/><ellipse cx="230" cy="249" rx="22" ry="7" fill="#efe2b5"/></>}{name==='home'&&<><path d="M110 172 L180 115 250 172 V265 H110Z" fill="#d6b98b"/><path d="M92 180 L180 105 268 180" fill="none" stroke="#b98168" strokeWidth="18" strokeLinejoin="round"/><rect x="158" y="202" width="40" height="63" rx="18" fill="#6c7767"/><rect x="210" y="190" width="25" height="30" rx="5" fill="#f8dfa1"/></>}</>:<>{openWater?<g fill="none" stroke="#9ebfbb" strokeWidth="2.4" strokeLinecap="round"><path d="M46 245 q12 8 24 0 t24 0 M304 245 q12 8 24 0 t24 0 M139 280 q12 5 24 0 t24 0"/></g>:<path d="M40 245 Q60 210 80 245 M325 245 Q345 205 360 242" stroke="#9aac82" fill="none" strokeWidth="7" strokeLinecap="round"/>}<circle cx="75" cy="60" r="18" fill="#eed798"/>{water?<path d="M296 78 Q294 65 307 65 Q314 48 329 57 Q341 54 346 68 Q360 68 357 79Z" fill="#dbe5d8"/>:<path d="M300 82 Q335 40 354 85 Q330 105 300 82" fill="#c1d0ab"/>}</>}
{name==='encyclopedia-cover'&&<EncyclopediaCover/>}
<ColorArt name={name}/>
<SingleColorArt name={name}/>
{animal&&<AnimalArt name={name as AnimalName}/>}
{['blocks','box'].includes(name)&&<><rect x="90" y="170" width="220" height="90" rx="15" fill="#c5a47c"/><path d="M100 196 H300" stroke="#ad8e68" strokeWidth="4"/><rect x="122" y="110" width="67" height="67" rx="7" fill="#d49179" transform="rotate(-8 150 145)"/><rect x="205" y="122" width="65" height="55" rx="7" fill="#92aa90"/><path d="M185 117 L222 56 259 117Z" fill="#e4c67c"/><circle cx="166" cy="224" r="5" fill="#7b684e"/><circle cx="234" cy="224" r="5" fill="#7b684e"/><path d="M185 229 Q200 240 215 229" fill="none" stroke="#7b684e" strokeWidth="3"/></>}
{['ball','basket'].includes(name)&&<><circle cx="200" cy="150" r="64" fill="#dcaa79"/><path d="M140 130 Q200 166 252 115 M185 90 Q155 151 216 210" fill="none" stroke="#f9e6bd" strokeWidth="10"/>{name==='basket'&&<><path d="M105 188 H295 L272 263 H128Z" fill="#a9b99b"/>{[145,175,205,235,265].map(x=><path key={x} d={`M${x} 193 V257`} stroke="#7e9979" strokeWidth="4"/>)}</>}</>}
{['book','shelf'].includes(name)&&<><rect x="99" y="107" width="202" height="157" rx="8" fill="#bf9c73"/><rect x="115" y="123" width="170" height="121" fill="#f1e5cb"/>{['#94ac95','#d4977e','#e4c47d','#9baeb6'].map((c,i)=><rect key={c} x={128+i*35} y={145-i%2*17} width="28" height={94+i%2*17} rx="4" fill={c}/>)}<path d="M110 243 H290" stroke="#ad8962" strokeWidth="9"/></>}
{name==='color-balloons'&&<g className="character">
{(name==='color-balloons'?['red-balloon','yellow-balloon','blue-balloon']:[name]).map((balloon,i)=>{
 const fill=balloon==='red-balloon'?'#df443d':balloon==='yellow-balloon'?'#f2ce37':'#3889d6';
 const x=name==='color-balloons'?120+i*80:200,y=name==='color-balloons'?110+(i===1?-25:10):118;
 return <g key={balloon}><path d={`M${x} ${y+64} Q${x-20} 220 200 265`} fill="none" stroke="#a59c83" strokeWidth="3"/><ellipse cx={x} cy={y} rx={name==='color-balloons'?43:68} ry={name==='color-balloons'?54:83} fill={fill}/><path d={`M${x} ${y+(name==='color-balloons'?51:80)} l-8 13 h16 Z`} fill={fill}/><ellipse cx={x-18} cy={y-20} rx="8" ry="16" fill="#fff" opacity=".35" transform={`rotate(25 ${x-18} ${y-20})`}/></g>
})}</g>}
</svg>}
