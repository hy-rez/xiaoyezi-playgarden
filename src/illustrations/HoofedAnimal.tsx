import {Boar} from './Boar';
import {Eye,Hoof} from './Details';
export const hoofedNames=['horse','zebra','giraffe','donkey','goat','deer','bison','camel','boar'] as const;
export type HoofedName=typeof hoofedNames[number];
function isBoar(name:string){return name==='boar';}
const cream='#f8eed8';

const palettes:Record<HoofedName,[string,string,string]>={horse:['#ba8d64','#9d724f','#e5c9a7'],zebra:['#f4efdf','#d8d6c5','#d2cdbb'],giraffe:['#e0b96d','#bf9453','#eed8a3'],donkey:['#a7a99c','#858f84','#ded7bf'],goat:['#e6dfc8','#c1bda8','#f4ebd5'],deer:['#bf9561','#a27c50','#e2c69c'],bison:['#99764e','#705b41','#b99a70'],camel:['#cfac72','#b38d57','#ead3a7'],boar:['#93816b','#786b57','#bfa68a']};
export function HoofedAnimal({name}:{name:HoofedName}){
 if(isBoar(name))return <Boar/>;
 const [coat,shadow,muzzle]=palettes[name];
 const tall=name==='giraffe',low=name==='bison';
 const headX=low?272:tall?264:270,headY=low?161:tall?83:123;
 const split=!['horse','zebra','donkey'].includes(name);
 function foot(x:number,y:number,width:number){return name==='camel'?<g><path d={`M${x-width/2-3} ${y-5} Q${x} ${y-12} ${x+width/2+4} ${y-4} L${x+width/2+5} ${y} Q${x} ${y+5} ${x-width/2-4} ${y}Z`} fill="#a98b63"/><ellipse cx={x-4} cy={y-1} rx="2.7" ry="2" fill="#e1c79b"/><ellipse cx={x+4} cy={y-1} rx="2.7" ry="2" fill="#e1c79b"/></g>:<Hoof x={x} y={y} width={width} split={split}/>;}
 const body=name==='camel'?
 'M103 206 C101 184 116 173 133 171 C145 166 140 137 157 136 C171 134 173 166 190 163 C206 160 204 132 220 132 C237 132 230 172 245 176 C263 177 257 139 253 123 C244 104 246 89 259 86 C274 80 286 99 285 114 L300 135 C310 144 304 157 290 159 C278 163 278 168 280 187 C285 215 262 233 237 233 L140 236 C119 234 108 223 103 206Z':
 tall?'M103 208 C100 183 127 168 156 172 L213 178 C226 156 230 105 231 82 C227 65 237 51 255 53 C273 52 281 66 280 80 L302 98 C310 107 302 120 288 120 C275 121 268 116 263 111 L262 201 C262 225 243 235 224 234 L141 235 C119 236 108 224 103 208Z':
 name==='bison'?'M97 208 C96 182 113 170 145 173 C160 172 163 145 190 143 C215 140 226 162 244 163 C261 140 283 139 297 154 C310 168 301 184 306 196 C307 212 288 220 277 217 C263 235 242 235 224 234 L132 235 C111 234 99 224 97 208Z':
 isBoar(name)?'M101 210 C100 183 120 168 151 171 C178 167 194 172 215 178 C234 170 249 162 267 167 C285 171 291 185 307 188 C322 190 326 202 314 209 C302 218 287 221 273 216 C258 232 237 236 216 235 L141 237 C119 237 103 227 101 210Z':
 'M104 205 C103 179 126 165 156 169 C177 171 198 175 216 171 C227 153 220 124 233 105 C245 86 265 86 279 103 C288 113 285 123 294 134 L309 149 C317 160 306 173 294 174 C278 178 268 168 263 161 L261 207 C257 229 239 235 216 234 L143 236 C119 236 107 225 104 205Z';
 const legTop=low?215:212;
 return <g>
 {/* Tails and far legs sit behind the continuous body contour. */}
 {['horse','zebra'].includes(name)?<><path d="M109 195 C83 194 75 220 82 247 Q91 257 95 248 C87 230 95 215 113 211Z" fill={name==='zebra'?'#59635a':'#755842'}/><path d="M101 205 Q80 219 88 246 M105 208 Q88 222 92 240" stroke={name==='zebra'?'#8c9380':'#9d7655'} strokeWidth="1.5" fill="none"/></>:<path d={isBoar(name)?'M111 210 Q79 207 83 232 Q87 242 94 230':name==='giraffe'?'M109 202 Q89 214 94 241':'M110 202 Q83 196 88 239'} stroke={shadow} strokeWidth="4" fill="none" strokeLinecap="round"/>}
 {!['horse','zebra','boar'].includes(name)&&<path d="M94 234 Q81 233 84 251 Q100 251 98 238Z" fill={shadow}/>}
 {[151,238].map(x=><g key={x}><path d={`M${x-9} ${legTop} Q${x-8} 236 ${x-3} 254 Q${x+3} 260 ${x+9} 253 L${x+13} ${legTop}Z`} fill={shadow}/>{foot(x+3,258,13)}</g>)}
 {/* Ears, horns and mane remain distinct; no outline runs through the neck. */}
 {name==='giraffe'&&<path d="M231 83 L222 87 224 98 220 109 223 120 218 131 222 142 216 155 220 168 230 166 240 83Z" fill="#a27c47"/>}
 {name==='donkey'&&<path d="M233 106 Q225 104 224 113 L221 116 223 127 220 130 221 141 217 147 219 159 216 165 219 175 228 177 241 108Z" fill="#626f62"/>}
 {(name==='horse'||name==='zebra')&&<path d="M231 106 Q209 112 214 143 Q220 168 208 182 L230 185 Q242 151 233 123Z" fill={name==='zebra'?'#62685a':'#755842'}/>}
 {name==='donkey'?<><path d="M247 107 C233 84 226 49 237 45 C250 44 260 87 257 106Z M266 105 C265 75 272 42 282 48 C291 56 283 91 277 109Z" fill={coat}/><path d="M246 89 Q237 54 240 55 M274 88 Q278 54 280 57" stroke="#cda895" strokeWidth="5" fill="none" strokeLinecap="round"/></>:
 name==='goat'?<><path d="M244 105 Q215 72 237 60 M265 102 Q266 65 286 64" stroke="#a4a08a" strokeWidth="8" fill="none" strokeLinecap="round"/><path d="M244 102 Q210 89 214 110 Q223 126 242 119Z" fill={coat}/></>:
 name==='deer'?<><path d="M241 111 Q210 86 214 107 Q221 123 242 123 M274 105 Q297 81 299 99 Q295 115 278 116" fill={coat}/><path d="M234 111 L222 103 M280 106 L292 98" stroke="#dfbf96" strokeWidth="4"/><g stroke="#877050" strokeWidth="5" fill="none" strokeLinecap="round"><path d="M245 107 Q231 78 231 55 L224 43 M233 69 L218 66 M237 86 L247 70 M269 107 Q278 80 277 55 L286 41 M277 66 L291 64 M274 83 L260 69"/></g></>:
 name==='giraffe'?<><path d="M245 62 L243 35 M263 60 L269 35" stroke="#ab844b" strokeWidth="7" strokeLinecap="round"/><circle cx="243" cy="33" r="6" fill="#886c43"/><circle cx="269" cy="33" r="6" fill="#886c43"/><path d="M238 69 Q207 52 211 71 Q219 84 238 81 M274 66 Q296 45 299 63 Q294 80 277 79" fill={coat}/></>:
 name==='bison'?<><path d="M249 158 Q224 150 231 128 Q237 143 254 142 M279 150 Q300 139 291 121 Q290 139 276 136" fill="#e0ceb1"/></>:
 isBoar(name)?<><path d="M249 178 Q228 147 247 148 Q262 149 260 173Z" fill={shadow}/><path d="M133 173 Q144 159 154 170 Q167 154 179 170 Q193 158 204 176" fill={shadow}/></>:
 <><path d="M246 107 Q228 82 235 76 Q248 79 257 103 M268 102 Q273 77 282 81 Q289 89 279 111" fill={coat}/></>}
 <path d={body} fill={coat}/>
 {['horse','zebra','camel'].includes(name)&&<path d="M243 99 Q237 88 239 84 L249 100 M274 100 Q277 88 280 87 L278 104" fill={name==='zebra'?'#a5ac98':'#c19e7b'}/>}
 {name==='goat'&&<><path d="M242 109 Q221 98 216 106 Q222 119 242 119Z" fill={muzzle}/><path d="M273 109 Q296 94 298 105 Q291 121 275 121Z" fill={coat}/><path d="M279 113 L291 106" stroke="#c9b49b" strokeWidth="3"/><path d="M230 75 L236 78 M229 83 L237 86 M272 75 L279 78 M269 84 L276 87" stroke="#848876" strokeWidth="1.4"/></>}
 {name==='giraffe'&&<path d="M222 70 L232 75 M282 67 L291 61" stroke="#c39362" strokeWidth="3"/>}
 {['horse','donkey'].includes(name)&&<path d="M218 128 Q225 141 216 164" stroke={name==='horse'?'#b18a63':'#839080'} strokeWidth="1.7" fill="none"/>}

 {/* Near legs emerge from the belly; only the hoof tip is dark. */}
 {[134,220].map(x=><g key={x}><path d={`M${x-10} ${legTop+3} Q${x-10} 240 ${x-3} 260 Q${x+3} 266 ${x+10} 259 L${x+15} ${legTop+4}Z`} fill={coat}/>{foot(x+4,265,16)}</g>)}
 {name==='zebra'&&<g fill="#59635a"><path d="M127 178 Q149 189 143 224 L133 225 Q138 194 119 185Z M158 172 Q176 191 172 231 L162 231 Q167 194 149 174Z M190 176 Q208 194 201 230 L191 231 Q198 196 182 176Z M221 151 L237 159 235 173 219 163Z M228 126 L244 133 248 145 226 138Z M241 107 L255 116 255 126 235 119Z M259 103 Q264 107 265 113 L259 124 255 115Z"/><path d="M125 240 H144 V247 H127Z M215 239 H235 V246 H217Z"/></g>}
 {name==='giraffe'&&<g fill="#ae8248">{[[141,190],[172,204],[204,190],[242,147],[243,119],[243,177]].map(([x,y])=><path key={x} d={`M${x-7} ${y-7} Q${x+5} ${y-12} ${x+10} ${y} L${x+4} ${y+9} ${x-9} ${y+4}Z`}/>)}</g>}

 {name==='deer'&&<path d="M109 208 Q122 223 145 226" stroke="#ecd7ae" strokeWidth="5" fill="none" strokeLinecap="round"/>}
 {name==='bison'&&<><path d="M231 158 Q238 151 245 156 L248 151 Q260 154 262 163 L265 172 Q252 169 248 177 L241 169 234 174Z" fill={shadow}/><path d="M219 169 l8 10 M223 184 l8 9 M230 204 l7 7 M246 176 l3 11 M238 159 l3 6" stroke="#8d7656" strokeWidth="1.6" fill="none"/><path d="M213 153 Q245 144 258 164 L259 203 Q245 228 223 220 Q232 208 218 202 Q225 191 215 183Z" fill={shadow}/><path d="M266 209 Q264 230 277 235 Q287 220 282 212Z" fill={shadow}/></>}
 {name==='goat'&&<g>
  {/* The muzzle overlaps the root so the beard grows from the chin. */}
  <path d="M278 163 Q285 168 294 164 C294 175 291 185 285 193 L284 186 280 190 280 182 276 185 Q274 173 278 163Z" fill="#b2b29a"/>
  <path d="M282 173 Q280 180 282 184 M288 174 Q288 181 285 186" stroke="#969d85" strokeWidth="1.1" fill="none"/>
 </g>}
 {isBoar(name)?<><ellipse cx="310" cy="200" rx="15" ry="11" fill={muzzle}/><ellipse cx="314" cy="198" rx="2.7" ry="4" fill="#766452"/><path d="M288 213 Q302 207 299 190 Q312 204 297 217Z" fill={cream}/></>:
 <path d={low?'M274 186 Q300 179 304 196 Q302 211 285 211 Q268 208 274 186Z':tall?'M271 95 Q294 93 304 103 Q303 117 289 118 Q274 115 271 95Z':'M277 143 Q297 136 309 151 Q309 166 295 170 Q277 169 277 143Z'} fill={muzzle}/>}
 <Eye x={headX} y={headY} r={low?4.7:4.5}/>
 <path d={low?'M292 207 Q299 211 305 205':tall?'M288 110 Q295 113 300 107':'M293 161 Q300 164 304 158'} fill="none" stroke="#786951" strokeWidth="2" strokeLinecap="round"/>
 <ellipse cx={low?300:tall?299:304} cy={low?194:tall?101:149} rx="2.3" ry="3" fill="#82705b"/>
 <path d="M130 246 L142 246 M219 246 L230 246" stroke={shadow} strokeWidth="1.2" fill="none"/>
 {name==='horse'&&<path d="M247 102 Q240 119 253 136 L261 140 Q253 118 257 107Z" fill="#ead5b6"/>}
 </g>;
}
