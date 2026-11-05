import {Line,Screw,palette as c} from './shared';
function Door(){return <g>
 <rect x="100" y="37" width="170" height="226" rx="7" fill={c.woodLight} stroke={c.woodDark} strokeWidth="2"/>
 <path d="M112 263V49h146v214" fill={c.woodDark}/>
 <path d="M118 260V54h134v206Z" fill="#96ab8c" stroke="#657e5f" strokeWidth="2"/>
 <path d="M130 68h109v75H130Zm0 96h109v80H130Z" fill="#a8ba9c" stroke="#7f9775" strokeWidth="1.5"/>
 <Line d="M134 139h100M134 239h100" stroke="#c1cfb4" strokeWidth="2"/>
 {[83,201].map(y=><g key={y}><rect x="113" y={y} width="7" height="20" rx="2" fill={c.goldDark}/><Line d={`M116 ${y+4}v12`} stroke={c.gold} strokeWidth="1.2"/></g>)}
 <ellipse cx="237" cy="154" rx="8" ry="12" fill={c.goldDark}/><circle cx="237" cy="153" r="4" fill={c.gold}/><Line d="M237 153h-18" stroke={c.gold} strokeWidth="5"/>
 <path d="M95 263h181l4 7H91Z" fill={c.wood}/><Line d="M107 43h157" stroke="#e4d3b0" strokeWidth="2"/>
 </g>}
function OpenHand({back=false}:{back?:boolean}){return <g fill={c.skin} stroke={c.skinLine} strokeWidth="1.6" strokeLinejoin="round">
 <path d="M-20 94-22 66q-12-11-19-27L-55 9q-5-10 3-14q7-4 13 5l15 23v-53q0-12 7-12t7 12v24l1-47q0-12 8-12t8 12v47l1-38q0-11 8-11t8 11v42l1-27q0-10 7-10t7 10v66q0 26-20 44v18Z"/>
 {!back&&<><Line d="M-25 27q22-8 29 15M-12 61q17-9 32-4" stroke={c.skinLine} strokeWidth="1.4"/><Line d="M-19-13h7M-2-31h7m7 8h7m8 12h6" stroke={c.skinLine} strokeWidth="1.1"/></>}
 {back&&<Line d="M-17 31q11 7 17 27m9-31q3 17 3 32m12-30-2 23" stroke={c.skinLine} strokeWidth="1.2"/>}
 <path d="M-23 85h43v20h-43Z" fill={back?'#89a6a9':'#b1c0a7'} stroke="none"/><Line d="M-20 91h36" stroke={back?'#577b80':'#819773'} strokeWidth="1.5"/>
 </g>}
// Both feet share one side-view shoe, with the ankle at the local origin.
function WalkingShoe(){return <g>
 <path d="M-12-5H10l7 10h16q10 0 10 10q0 7-10 7H-5q-8 0-8-8Z" fill={c.wood} stroke="#927654" strokeWidth="1.2" strokeLinejoin="round"/>
 <path d="M-12 15q3 3 8 3h37q6 0 9-3q0 7-9 7H-5q-7 0-7-7Z" fill="#f2e3c7"/>
 <Line d="m7 2 9 1M10 6h9m-27-7H7" stroke="#f2e3c7" strokeWidth="2"/>
 </g>}
function WalkingChild(){return <g>
 {/* Side profile walking right: both toes point right; the far arm and near leg swing forward. */}
 <Line d="M204 122q13 17 31 21" stroke="#cfa182" strokeWidth="12"/>
 <path d="M190 171q-7 29-29 46l-24 20" fill="none" stroke="#6d8f9b" strokeWidth="21" strokeLinecap="round"/>
 <g transform="translate(137 237) rotate(18)"><WalkingShoe/></g>
 <path d="M202 171q22 27 29 50l9 26" fill="none" stroke="#8ba8b2" strokeWidth="23" strokeLinecap="round"/>
 <g transform="translate(240 247) rotate(-8)"><WalkingShoe/></g>
 <rect x="186" y="91" width="17" height="22" rx="5" fill={c.skin}/>
 <path d="M183 108q17-6 28 12q9 17 8 34l-7 22q-16 7-33-1l-6-39q-1-18 10-28Z" fill="#92b2b8" stroke="#648e99" strokeWidth="1.5"/>
 <Line d="M181 168q16 5 31 0" stroke="#c5d6d1" strokeWidth="2"/>
 <Line d="M185 128q-11 18-30 22" stroke={c.skin} strokeWidth="12"/>
 <path d="M181 114q9-1 15 9l-9 15-14-8Z" fill="#92b2b8"/>
 <Line d="m152 149 5-2" stroke={c.skinLine} strokeWidth="1.2"/>
 <path d="M173 61q-1-29 28-29q27 0 28 30l-1 7 6 9q3 4-2 5l-6 1q-2 14-17 18q-24 5-35-13q-8-13-2-30Z" fill={c.skin} stroke={c.skinLine} strokeWidth="1.3" strokeLinejoin="round"/>
 <path d="M172 68q-9-31 17-38q33-8 41 27l-10-5-4-10q-13 14-29 13l-6 17Z" fill="#8c7459"/>
 <ellipse cx="174" cy="77" rx="6" ry="8" fill={c.skin}/>
 <Line d="M172 76q4-4 5 2m38 12q6 3 11-1" stroke="#9a715b" strokeWidth="1.3"/>
 <circle cx="218" cy="68" r="2.4" fill={c.ink}/>
 <Line d="M99 269h27m169-12 12-4" stroke={c.blue} strokeWidth="2.5"/>
 </g>}
function Book(){return <g>
 <path d="M64 94q69-23 136 7q65-30 136-7v149q-70-19-136 7q-65-26-136-7Z" fill="#7d9976" stroke="#617d5c" strokeWidth="2"/>
 <path d="M73 91q67-20 127 10q63-29 127-10v144q-63-18-127 8q-63-26-127-8Z" fill="#e2d9be"/>
 <path d="M78 84q66-19 122 11q60-28 122-11v143q-61-18-122 9q-59-26-122-9Z" fill={c.paper} stroke="#c7b99a" strokeWidth="1.5"/>
 <Line d="M200 98v137" stroke="#b2a582"/>
 {[119,140,161,182,203].map((y,i)=><g key={y}><Line d={`M94 ${y}q38-3 ${i%2?64:81} 7`} stroke="#c4bda6" strokeWidth="2.2"/><Line d={`M224 ${y+6}q35-9 ${i%2?60:76}-6`} stroke="#c4bda6" strokeWidth="2.2"/></g>)}
 <path d="M202 234V95q20-30 65-44q-17 73 1 142q-39 13-66 41Z" fill="#f1eddd" stroke="#b8ad8f" strokeWidth="1.6"/>
 {[100,126,152].map(y=><Line key={y} d={`M219 ${y}q17-15 31-19`} stroke="#c5bba0" strokeWidth="2"/>)}
 <Line d="M79 232q62-17 119 8m4 0q61-25 122-7" stroke="#bcb190" strokeWidth="1.5"/>
 <path d="m225 238 4 23 8-6 8 3-4-25Z" fill="#bc9181"/>
 </g>}
function Zipper(){return <g>
 <path d="M108 51q0-7 7-7h45l40 108v110h-85q-7 0-7-7Z" fill="#a0b394" stroke="#7f9774" strokeWidth="1.3"/>
 <path d="M292 51q0-7-7-7h-45l-40 108v110h85q7 0 7-7Z" fill="#aabb9e" stroke="#7f9774" strokeWidth="1.3"/>
 <Line d="M122 57v191m156-191v191" stroke="#dbe2cb" strokeWidth="1.4" strokeDasharray="4 4"/>
 <Line d="m154 51 38 102v108m54-210-38 102v108" stroke="#556f61" strokeWidth="8"/>
 {[0,1,2,3,4,5,6,7].map(i=><g key={i}><rect x={154+i*4.6} y={56+i*12} width="10" height="6" rx="1" transform={`rotate(-20 ${154+i*4.6} ${56+i*12})`} fill="#d0bc8a"/><rect x={236-i*4.6} y={61+i*12} width="10" height="6" rx="1" transform={`rotate(20 ${236-i*4.6} ${61+i*12})`} fill="#e0cfa4"/></g>)}
 {[175,188,201,214,227,240,253].map(y=><g key={y}><rect x="188" y={y} width="13" height="6" rx="1" fill="#d2bb87"/><rect x="199" y={y+5} width="13" height="6" rx="1" fill="#e1cfa0"/></g>)}
 <path d="M189 145q11-7 22 0l5 26q-15 10-31 0Z" fill="#c2ad7d" stroke="#6c7965" strokeWidth="1.6"/>
 <Line d="M191 152h18m-17 17h16" stroke="#e9d7aa" strokeWidth="2"/>
 <path d="M193 162q0-5 7-5t7 5v35q0 8-7 8t-7-8Zm4 9v24q0 4 3 4t3-4v-24Z" fill="#e0ca93" fillRule="evenodd" stroke="#7b7f62" strokeWidth="1.4"/>
 </g>}
function PaperScissors(){return <g>
 <path d="M240 172 129 86q-10-9-13-1q-2 6 5 12l100 94Z" fill="#9fb3b6" stroke="#758f95" strokeWidth="1.5"/>
 <path d="M64 112h157v64l-55 22 55-13v69H64Z" fill="#f0e4c7" stroke="#c7b796" strokeWidth="1.4"/>
 <Line d="M82 133h86m-86 17h63m-57 69 56-18" stroke="#cabd9b" strokeWidth="2"/>
 <path d="M235 180 125 145q-16-5-16 3q0 6 13 11l109 38Z" fill="#c3d0cd" stroke="#7c9394" strokeWidth="1.5"/>
 <Line d="m130 151 89 30" stroke="#e8eee2" strokeWidth="1.7"/>
 <path d="m233 176 40 9q30-1 39 21q8 21-10 33q-21 14-38-5q-11-15-7-32l-32-11Z" fill="#b78376" stroke="#925f56" strokeWidth="1.5"/>
 <path d="m240 173 35-33q16-24 38-13q23 14 11 36q-13 23-39 11l-33 16Z" fill="#c59384" stroke="#925f56" strokeWidth="1.5"/>
 <ellipse cx="289" cy="216" rx="14" ry="18" transform="rotate(-35 289 216)" fill={c.paper} stroke="#925f56" strokeWidth="1.2"/>
 <ellipse cx="305" cy="148" rx="14" ry="18" transform="rotate(40 305 148)" fill={c.paper} stroke="#925f56" strokeWidth="1.2"/>
 <circle cx="237" cy="184" r="7" fill="#8a9d98" stroke="#5b7771" strokeWidth="1.4"/><Line d="m234 186 6-4" stroke="#d6e0d5" strokeWidth="1.5"/>
 </g>}
function Key({dark=false}:{dark?:boolean}){return <g>
 <path d="M-19 0a19 19 0 1 0 38 0a19 19 0 1 0-38 0ZM-8 0a8 8 0 1 1 16 0a8 8 0 1 1-16 0Z" fill={dark?'#bd9a59':'#d8b875'} fillRule="evenodd" stroke="#a08550" strokeWidth="1.5"/>
 <path d="M-7 17v102H9v-13h12V94H9V80h15V67H9V17Z" fill={dark?'#bd9a59':'#d8b875'} stroke="#a08550" strokeWidth="1.5"/>
 <Line d="M-1 27v77m-11-111q11-9 20 1" stroke={dark?'#d5b978':'#f0d59a'} strokeWidth="2"/>
 </g>}
export function HouseholdSoundDrawing({id}:{id:string}){
 switch(id){
 case 'doorbell':return <><Door/><rect x="283" y="115" width="32" height="64" rx="8" fill="#e3e5d7" stroke="#718774" strokeWidth="1.8"/><rect x="288" y="120" width="22" height="54" rx="5" fill="#f7f0dc"/><Screw x={299} y={126} r={1.5}/><Screw x={299} y={168} r={1.5}/><circle cx="299" cy="147" r="9" fill={c.goldDark}/><circle cx="299" cy="146" r="6.5" fill={c.gold}/><Line d="M322 134q12 12 0 25m9-33q20 20 0 41" stroke={c.blueDark} strokeWidth="2.8"/></>;
 case 'knock':return <><Door/><path d="m287 185 31 20-14 23-35-24Z" fill="#8faeb0" stroke="#64878a" strokeWidth="1.5"/><path d="M278 201q-19-7-34-21l-17-14q-7-6-3-13q-7-9 0-15q-3-9 5-12q6-2 12 4l13 11q-2-12 5-14q8-2 12 7l8 21q13 8 15 18l-3 17Z" fill={c.skin} stroke={c.skinLine} strokeWidth="1.6"/><Line d="m226 139 19 15m-19 0 15 13m-12-1 12 10m12-35 13 11q-11 7-5 19" stroke={c.skinLine} strokeWidth="1.5"/><Line d="m214 127-10-11m13 31-15-3m26-30-2-13" stroke={c.blueDark} strokeWidth="2.7"/></>;
 case 'clap':return <><g transform="translate(183 151) rotate(-17) scale(.96)"><OpenHand back/></g><g transform="translate(221 155) rotate(15) scale(-.96 .96)"><OpenHand/></g><Line d="M199 45v-15m-42 23-10-13m95 14 11-13m-135 98-14-4m179 3 14-5" stroke={c.blueDark} strokeWidth="3"/></>;
 case 'footsteps':return <WalkingChild/>;
 case 'pages':return <Book/>;
 case 'zipper':return <Zipper/>;
 case 'scissors':return <PaperScissors/>;
 case 'keys':return <><circle cx="194" cy="77" r="37" fill="none" stroke="#7f9590" strokeWidth="6"/><circle cx="194" cy="77" r="32" fill="none" stroke="#c3cfbf" strokeWidth="1.3"/><g transform="translate(169 104) rotate(25)"><Key dark/></g><g transform="translate(219 104) rotate(-18)"><Key/></g><Line d="M128 82q-14 17-7 34m151-34q14 17 7 34" stroke={c.blueDark} strokeWidth="2.6"/></>;
 case 'phone':return <><rect x="133" y="110" width="14" height="18" rx="3" fill="#5f7c62"/><rect x="254" y="110" width="14" height="18" rx="3" fill="#5f7c62"/><path d="m109 209 17-75q3-14 17-14h109q15 0 19 15l22 74q5 19-15 23H126q-20-1-17-23Z" fill="#8ca78e" stroke="#5f7c62" strokeWidth="1.8"/><path d="M117 213h169q2 11-12 12H132q-14 0-15-12Z" fill="#728f75"/><rect x="151" y="132" width="97" height="22" rx="5" fill="#466653"/><Line d="M160 141h22m-22 5h31m43-8v10m-6-7v7m-6-4v4" stroke="#aec4a3" strokeWidth="1.5"/>{['1','2','3','4','5','6','7','8','9','*','0','#'].map((n,i)=><g key={n}><rect x={157+(i%3)*29} y={163+Math.floor(i/3)*13} width="22" height="10" rx="3" fill="#e6e3cd" stroke="#71886b" strokeWidth=".7"/><text x={168+(i%3)*29} y={170.3+Math.floor(i/3)*13} textAnchor="middle" fontSize="7" fontFamily="Arial,sans-serif" fill={c.ink}>{n}</text></g>)}<path d="M117 115q-8-33 20-43q65-23 124 1q27 11 22 42l-34 3-7-23q-44-15-85-1l-7 24Z" fill="#59785e" stroke="#42634d" strokeWidth="1.8"/><Line d="M140 79q58-18 114 0" stroke="#8ea78b" strokeWidth="2.5"/>{[126,137,261,272].map(x=><Line key={x} d={`M${x} 102v6`} stroke="#a7ba9c" strokeWidth="1.5"/>)}<circle cx="119" cy="114" r="3.5" fill={c.ink}/><Line d="M119 114q-25 17-16 29q20 7 7 19q-16 9-4 18q17 10 1 19q-8 11 14 17" stroke="#516e5c" strokeWidth="3.3"/><circle cx="121" cy="216" r="3" fill={c.ink}/><Line d="M88 77q-17 16-12 33m230-33q18 16 12 33" stroke={c.goldDark} strokeWidth="2.8"/></>;
 case 'clock':return <><Line d="m148 221-17 43m120-43 17 43" stroke={c.ink} strokeWidth="9"/><circle cx="200" cy="145" r="96" fill={c.gold} stroke={c.goldDark} strokeWidth="2"/><circle cx="200" cy="145" r="85" fill={c.paper} stroke="#e6d8b1" strokeWidth="2"/>{Array.from({length:60},(_,i)=><Line key={i} d={`M200 69v${i%5===0?8:3.5}`} transform={`rotate(${i*6} 200 145)`} stroke={i%5===0?'#8e805d':'#c4ba9b'} strokeWidth={i%5===0?2.1:1}/>)}{[[200,90,'12'],[256,150,'3'],[200,209,'6'],[144,150,'9']].map(([x,y,n])=><text key={n} x={x} y={y} fill={c.ink} fontFamily="Arial,sans-serif" fontSize="15" textAnchor="middle">{n}</text>)}<Line d="M200 145 173 114" stroke={c.ink} strokeWidth="6"/><Line d="M200 145 239 99" stroke={c.ink} strokeWidth="4"/><Line d="M200 145v34" stroke="#b98e78" strokeWidth="1.4"/><circle cx="200" cy="145" r="6" fill={c.goldDark}/><circle cx="200" cy="145" r="2" fill={c.paper}/><Line d="M89 120q-11 23 0 46m222-46q11 23 0 46" stroke={c.blueDark} strokeWidth="2.8"/></>;
 default:return null;
 }
}
