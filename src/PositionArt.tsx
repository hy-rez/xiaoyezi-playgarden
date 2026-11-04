import {NumberObjectArt} from './NumberObjectArt';
function Ball({x,y}:{x:number;y:number}){return <g transform={`translate(${x} ${y}) scale(.9)`}><NumberObjectArt itemIndex={13}/></g>}
export function PositionArt({position}:{position:number}){
 if(position>=6)return <><path d="M155 148v112M245 148v112" stroke="#a98d6e" strokeWidth="12"/><rect x="138" y="132" width="124" height="18" rx="5" fill="#c3a27d"/><Ball x={position===6?80:320} y={237}/></>;
 if(position<2)return <><path d="M106 147v112M294 147v112" stroke="#a98d6e" strokeWidth="14"/><rect x="85" y="132" width="230" height="18" rx="5" fill="#c3a27d"/><Ball x={200} y={position===0?109:230}/></>;
 if(position<4)return <><path d="M80 116 127 85H250L290 116 250 146H125Z" fill="#dfc69d"/><path d="M80 116 125 98H251L290 116 250 145H125Z" fill="#ae9575"/>{position===2&&<Ball x={186} y={137}/>}<path d="M80 116 125 145H250L290 116V239L250 265H125L80 239Z" fill="#c6a77e"/><path d="M125 145V265M250 145V265" fill="none" stroke="#ad8d66" strokeWidth="3"/>{position===3&&<Ball x={334} y={241}/>}</>;
 return <>{position===5&&<Ball x={223} y={221}/>}<path d="M195 125H225V265H195Z" fill="#b19370"/><path d="M210 45 130 180H290Z" fill="#93ac87"/><path d="M210 80 125 213H295Z" fill="#8aa37e"/>{position===4&&<Ball x={211} y={236}/>}</>;
}
