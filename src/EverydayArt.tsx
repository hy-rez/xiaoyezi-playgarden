import type {EverydayArtName} from './everydayContent';
import {dailyItems,emotionItems,weatherItems} from './everydayContent';
import {DailyItemArt} from './DailyItemArt';
import {EmotionArt} from './EmotionArt';
import {WeatherArt,WeatherGear} from './WeatherArt';
export function EverydayArt({name,className=''}:{name:EverydayArtName;className?:string}){
 const [kind,value]=name.split('-'),cover=value==='cover',index=Number(value);
 const label=cover?({daily:'牙刷、时钟和雨伞',emotion:'微笑的小朋友',weather:'阳光下的小树'}[kind as 'daily'|'emotion'|'weather']):kind==='daily'?dailyItems[index].name:kind==='emotion'?emotionItems[index].name+'的表情':kind==='gear'?value==='coat'?'厚外套':'短裤':weatherItems[kind==='season'?index:index+4].name;
 return <svg className={'art '+className} viewBox="0 0 400 300" role="img" aria-label={label}>
 {(kind==='daily'||kind==='gear')&&<ellipse cx="200" cy="274" rx="145" ry="9" fill="#d5ddbd"/>}
 <g className="character">{kind==='daily'?cover?<><g transform="translate(113 161) scale(1.9)"><DailyItemArt index={0}/></g><g transform="translate(256 166) scale(1.9)"><DailyItemArt index={6}/></g><g transform="translate(198 87) scale(.9)"><DailyItemArt index={9}/></g></>:<g transform="translate(200 150) scale(2.5)"><DailyItemArt index={index}/></g>:kind==='emotion'?<EmotionArt emotion={cover?0:index}/>:kind==='gear'?<WeatherGear coat={value==='coat'}/>:<WeatherArt index={cover?0:index} season={kind==='season'}/>}</g>
 </svg>;
}
