import {lifeSounds,type LifeSoundArtName} from './lifeSoundContent';
import {HouseholdSoundDrawing} from './illustrations/life/Household';
import {InstrumentDrawing} from './illustrations/life/Instruments';
import {NatureDrawing} from './illustrations/life/Nature';
import {Line,palette} from './illustrations/life/shared';
const landscapeIds=new Set(['rain','stream','waves','wind','waterfall']);
function Subject({id}:{id:string}){
 const index=lifeSounds.findIndex(s=>s.id===id);
 if(index<10)return <HouseholdSoundDrawing id={id}/>;
 if(index<20)return <NatureDrawing id={id}/>;
 return <InstrumentDrawing id={id}/>;
}
export function LifeSoundArt({name,className=''}:{name:LifeSoundArtName;className?:string}){
 const cover=name==='life-cover',id=name.slice(5),label=cover?'门铃、海浪和小鼓的声音':lifeSounds.find(s=>s.id===id)!.name;
 const floorY=id==='harmonica'?217:id==='flute'?213:id==='phone'?243:id==='trumpet'?256:276;
 return <svg className={'art '+className} viewBox="0 0 400 300" role="img" aria-label={label}>
 {!landscapeIds.has(id)&&id!=='clap'&&<ellipse cx="200" cy={floorY} rx="142" ry="7" fill="#d5ddbd"/>}
 {cover?<><g transform="translate(8 30) scale(.48)"><Subject id="doorbell"/></g><g transform="translate(203 24) scale(.48)"><Subject id="drum"/></g><g transform="translate(96 133) scale(.52)"><Subject id="waves"/></g><Line d="M182 74q-14 18 0 35m29-30q12 13 0 26" stroke={palette.blue} strokeWidth="4"/></>:<Subject id={id}/>}
 </svg>;
}
