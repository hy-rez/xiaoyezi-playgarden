function Sun(){return <g transform="translate(105 79)" strokeLinecap="round"><circle r="23" fill="#e5c67e"/>{[0,45,90,135,180,225,270,315].map(a=><path key={a} d="M0-30V-37" transform={`rotate(${a})`} stroke="#dec080" strokeWidth="3"/>)}</g>}
function Cloud({x=185,y=79,scale=1}:{x?:number;y?:number;scale?:number}){return <path d="M-55 16Q-72-10-42-17Q-35-48-5-30Q18-48 36-23Q66-25 60 5Q59 19 43 20H-45Z" transform={`translate(${x} ${y}) scale(${scale})`} fill="#e9eadd" stroke="#d2d9cf" strokeWidth="1.5"/>}
function Tree({season=1,wind=false}:{season?:number;wind?:boolean}){
 const leaves=[[-34,-104],[-7,-129],[23,-113],[-43,-74],[-15,-88],[17,-84],[42,-72],[-11,-60],[21,-54]];
 return <g transform={`translate(249 236)${wind?' rotate(9)':''}`}>
 <path d="M-7 0V-131H7V0" fill="#b79b77"/><path d="M0-78-30-106M0-102 25-125M0-61 31-87" stroke="#a58b6b" strokeWidth="5" fill="none" strokeLinecap="round"/>
 {season!==3&&leaves.map(([x,y],i)=><ellipse key={i} cx={x} cy={y} rx={season===0?13:23} ry={season===0?9:17} transform={`rotate(${i%2?20:-20} ${x} ${y})`} fill={season===0?'#aec28a':season===2?['#cfaa72','#c99374','#dfbf83'][i%3]:['#8fa97c','#9db687','#adc18e'][i%3]}/>)}
 {season===2&&<><path d="M-50-7q13-9 18 1q-14 7-18-1M26 4q12-8 19 0q-11 8-19 0" fill="#d7b581"/><path d="M-53-39q14-7 15 3q-9 4-15-3" fill="#c99a78"/></>}
 {season===3&&<><path d="M-6-130H7M-31-105-18-95M17-117 27-125" stroke="#f1f0e1" strokeWidth="5" fill="none" strokeLinecap="round"/><ellipse cy="1" rx="34" ry="6" fill="#f3f1e4"/></>}
 </g>;
}
function Flower({x,y}:{x:number;y:number}){return <g transform={`translate(${x} ${y})`}><path d="M0 0v20" stroke="#8fa477" strokeWidth="2.5"/>{[0,72,144,216,288].map(a=><ellipse key={a} cy="-5" rx="3.5" ry="5" transform={`rotate(${a})`} fill="#d5a48d"/>)}<circle r="3" fill="#e7ce8b"/></g>}
function Snow(){return <g fill="none" stroke="#f6f5e9" strokeWidth="2" strokeLinecap="round">{[[97,140],[153,165],[211,123],[303,151],[119,200],[300,200]].map(([x,y])=><path key={x} d={`M${x-6} ${y}h12M${x} ${y-6}v12M${x-4} ${y-4}l8 8M${x+4} ${y-4}l-8 8`}/>)}</g>}
export function WeatherArt({index,season=false}:{index:number;season?:boolean}){
 const fog=!season&&index===5,rain=!season&&index===2,snow=season?index===3:index===3,wind=!season&&index===4;
 return <g>
 <rect x="32" y="35" width="336" height="235" rx="22" fill={fog?'#dce1d8':snow?'#dce6e2':'#e0e9df'}/>
 <path d="M32 221Q123 185 209 221Q295 190 368 220V249Q368 270 345 270H55Q32 270 32 249Z" fill={snow?'#eeeee1':season&&index===2?'#d4d7b4':'#c9d7b7'}/>
 <path d="M87 270Q94 234 153 217" stroke={snow?'#e0e2d2':'#e6dcc1'} strokeWidth="22" fill="none"/>
 {(season&&index<3)||(!season&&index===0)?<Sun/>:null}
 {(!season&&(index===1||rain||snow))&&<><Cloud x={142} y={86} scale={.86}/><Cloud x={266} y={100} scale={.85}/></>}
 <g opacity={fog?.45:1}><Tree season={season?index:snow?3:1} wind={wind}/></g>
 {season&&index===0&&<><Flower x={93} y={227}/><Flower x={151} y={244}/><Flower x={192} y={229}/></>}
 {rain&&<><g stroke="#91b4bf" strokeWidth="3" strokeLinecap="round">{[[102,135],[140,153],[187,130],[222,153],[274,142],[308,170],[117,196]].map(([x,y])=><path key={x} d={`M${x} ${y}l-5 12`}/>)}</g><ellipse cx="154" cy="247" rx="30" ry="5" fill="#aac6c5"/></>}
 {snow&&<Snow/>}
 {wind&&<><path d="M65 106H137q20 0 20-10q0-10-12-8M60 130H174q20 0 20 12q0 10-13 7M87 155H143" stroke="#a6bab0" strokeWidth="3" fill="none" strokeLinecap="round"/><path d="M90 192q18-16 26-2q-17 12-26 2M153 179q15-13 20-1q-14 10-20 1" fill="#b9b786" transform="rotate(-12 120 185)"/></>}
 {fog&&<g fill="#eff0e6" opacity=".78"><rect x="52" y="100" width="295" height="14" rx="7"/><rect x="40" y="139" width="295" height="17" rx="8"/><rect x="67" y="179" width="288" height="16" rx="8"/><rect x="45" y="217" width="270" height="14" rx="7"/></g>}
 </g>;
}
export function WeatherGear({coat=false}:{coat?:boolean}){
 return <g transform="translate(200 150) scale(2.35)" strokeLinejoin="round">{coat?<><path d="m-14-34-22 15 10 23 12-8-5 43H19L14-4 26 4 36-19 14-34Z" fill="#ba8e79" stroke="#9d7561" strokeWidth="1.2"/><path d="M-14-34 0-22 14-34 7-39Q0-33-7-39Z" fill="#e5ceaa"/><path d="M0-22V39M-13 17h-2v10h10M13 17h2v10H5" stroke="#d6b79b" strokeWidth="1.5" fill="none"/>{[-9,1,11].map(y=><circle key={y} cx="3" cy={y} r="1.4" fill="#e5d2af"/>)}</>:<><path d="M-27-26H27L30 20H7L0 2-7 20H-30Z" fill="#99afba" stroke="#7a98a5" strokeWidth="1.2"/><path d="M-26-20H26M-28 14H-7M7 14H28" stroke="#c4d1d0" strokeWidth="2"/><path d="M0-17V2" stroke="#6e8c99" strokeWidth="1.4"/></>}</g>;
}
