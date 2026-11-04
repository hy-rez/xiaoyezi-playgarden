import {Eye} from './Details';
const coat='#cba770',shade='#ae8755',light='#ead0a2';
function Foot({x,y}:{x:number;y:number}){return <g><path d={`M${x-8} ${y-7} Q${x} ${y-12} ${x+9} ${y-6} L${x+13} ${y} Q${x+7} ${y+5} ${x} ${y+2} Q${x-8} ${y+5} ${x-13} ${y}Z`} fill={shade}/><path d={`M${x} ${y-4} v6`} stroke={light} strokeWidth="1.5"/></g>}
export function Camel(){return <g>
 <path d="M110 200 Q86 207 91 238" stroke={shade} strokeWidth="4" fill="none"/><path d="M91 234 Q83 242 90 251 Q98 248 95 239Z" fill="#8e714e"/>
 <path d="M148 212 L151 252 164 253 171 210 M230 210 L239 251 252 251 253 207" fill={shade}/><Foot x={157} y={259}/><Foot x={245} y={257}/>
 <path d="M103 204 C101 185 116 178 130 174 C143 169 140 140 156 139 C171 137 178 170 190 169 C203 168 204 135 220 137 C236 138 232 170 245 174 C263 180 261 151 252 129 C243 108 247 91 263 91 C275 90 283 98 289 108 L306 116 C321 121 319 137 305 141 L290 141 C281 155 291 179 280 204 C275 222 256 235 231 234 L143 236 Q109 232 103 204Z" fill={coat}/>
 <path d="M247 105 Q230 99 233 87 Q248 86 257 99 M274 99 Q282 86 290 93 Q292 105 283 110" fill={coat}/><path d="M241 94 L249 100 M280 99 L285 96" stroke="#ac865f" strokeWidth="2.5"/>
 <path d="M279 119 C292 111 311 115 315 124 Q321 138 303 142 Q284 145 276 132Z" fill={light}/>
 <path d="M295 129 Q305 135 314 128 M296 132 Q304 141 310 136" stroke="#926e4c" strokeWidth="1.8" fill="none"/>
 <path d="M307 120 Q312 120 312 124" stroke="#8b6b4a" strokeWidth="2.2" fill="none"/>
 <Eye x={271} y={111} r={4.2}/><path d="M265 105 Q271 101 277 105 M267 106 l-2 -3 M273 105 v-3" stroke="#886c4e" strokeWidth="1.3" fill="none"/>
 <path d="M259 144 Q274 161 273 185" stroke="#dbbb88" strokeWidth="2" fill="none"/>
 <path d="M127 216 L128 255 Q131 261 142 256 L151 216 M216 217 L219 255 Q227 261 234 255 L238 215" fill={coat}/><Foot x={135} y={263}/><Foot x={226} y={263}/>
 <path d="M131 240 l9 1 M221 241 l9 -1 M148 153 q7 -7 13 1 M213 152 q6 -8 13 -1" stroke="#b99360" strokeWidth="1.3" fill="none"/>
 </g>}
