export const animalInk='#38463c';
export function Eye({x,y,r=4.6}:{x:number;y:number;r?:number}){
 return <g stroke="none"><path d={`M${x-r*1.18} ${y-r*.2} Q${x-r*.85} ${y-r*1.5} ${x+r*.2} ${y-r*1.23} Q${x+r*1.18} ${y-r*.8} ${x+r*1.08} ${y+r*.35} Q${x+r*.45} ${y+r*1.35} ${x-r*.5} ${y+r*.9} Q${x-r*1.2} ${y+r*.55} ${x-r*1.18} ${y-r*.2}Z`} fill="#77765c"/><ellipse cx={x} cy={y} rx={r*.86} ry={r*1.03} fill={animalInk}/><ellipse cx={x-r*.25} cy={y-r*.32} rx={r*.3} ry={r*.26} fill="#fff9e8"/><circle cx={x+r*.28} cy={y+r*.4} r={r*.12} fill="#bfc7a9"/></g>;
}
export function Hoof({x,y,width=14,color='#655c50',split=true}:{x:number;y:number;width?:number;color?:string;split?:boolean}){
 return <g><path d={`M${x-width/2} ${y-8} Q${x} ${y-11} ${x+width/2} ${y-8} L${x+width/2+1} ${y-1} Q${x} ${y+4} ${x-width/2-1} ${y-1}Z`} fill={color}/>{split&&<path d={`M${x} ${y-6} V${y+1}`} stroke="#eadfc9" strokeOpacity=".7" strokeWidth="1.5" strokeLinecap="round"/>}</g>;
}
export function FrontLegs({fill,shade,hoof='#6a6253',wool=false}:{fill:string;shade:string;hoof?:string;wool?:boolean}){
 return <g>
 <path d="M145 220 Q140 237 145 254 Q151 260 157 253 L163 219Z M238 219 L244 253 Q250 260 256 254 Q260 237 253 220Z" fill={shade}/>
 <Hoof x={151} y={257} width={12} color={hoof}/><Hoof x={250} y={257} width={12} color={hoof}/>
 <path d="M163 215 Q157 233 162 261 Q169 269 177 261 L183 218Z M218 218 L224 261 Q232 269 239 261 Q243 233 236 215Z" fill={fill}/>
 {wool&&<path d="M159 228 Q163 223 168 229 Q174 224 180 230 M221 230 Q226 224 232 229 Q237 224 241 229" fill="none" stroke={shade} strokeWidth="2" strokeLinecap="round"/>}
 <Hoof x={170} y={265} width={16} color={hoof}/><Hoof x={232} y={265} width={16} color={hoof}/>
 </g>;
}
