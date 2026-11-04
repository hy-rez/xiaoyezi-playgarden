import {ThreeColorArt,isThreeColorShape,type ThreeColorShape} from './ThreeColorArt';
import type {ReactNode} from 'react';
import {colorPalette,colorObjects,type ColorId,type ColorObjectArt,type ColorShape} from './colorContent';

export function ColorArt({name}:{name:string}){
 if(name.endsWith('-balloon')){
  const color=colorPalette[name.slice(0,-8) as ColorId];
  if(!color)return null;
  return <g className="character"><path d="M200 198 Q170 230 200 265" fill="none" stroke="#a59c83" strokeWidth="3"/><ellipse cx="200" cy="118" rx="68" ry="83" fill={color.fill} stroke="#77766b" strokeWidth="2"/><path d="M200 198 l-8 13 h16Z" fill={color.fill}/><ellipse cx="182" cy="98" rx="8" ry="16" fill="#fff" opacity=".35" transform="rotate(25 182 98)"/></g>;
 }
 const object=colorObjects[name as ColorObjectArt];if(!object)return null;
 const colors=object.colors.map(c=>colorPalette[c].fill);
 const [first,second]=colors,third=colors[2]||first;
 const seam='#46534a';
 const stitch={fill:'none',stroke:seam,strokeWidth:1.5,opacity:.4,strokeDasharray:'3 4'};
 const light={fill:'none',stroke:'#fff',strokeWidth:3,opacity:.4};
 const drawings:Record<Exclude<ColorShape,ThreeColorShape>,ReactNode>={
  umbrella:<>
   <path d="M200 60 V232 Q200 258 180 258 Q164 258 163 243" fill="none" stroke="#6c746b" strokeWidth="7" strokeLinecap="round"/>
   <path d="M200 39 V54" strokeWidth="5"/>
   {colors.map((fill,i)=>{const left=70+260*i/colors.length,right=70+260*(i+1)/colors.length;
    return <g key={i}><path d={`M200 55 Q${left} 65 ${left} 170 Q${(left+right)/2} 149 ${right} 170 Q${right} 65 200 55Z`} fill={fill}/><path d={`M200 61 Q${(left+right)/2} 95 ${(left+right)/2} 158`} {...light} strokeWidth="2" opacity=".25"/><path d={`M${left+4} 164 Q${(left+right)/2} 145 ${right-4} 164`} {...stitch}/></g>;
   })}
   <path d="M200 58 V155" fill="none" stroke={seam} strokeWidth="1.2" opacity=".35"/>
   <path d="M200 218 V232 Q201 252 183 253" {...light} strokeWidth="2"/>
   <circle cx="70" cy="171" r="3" fill={first}/><circle cx="330" cy="171" r="3" fill={colors.at(-1)}/>
  </>,
  ball:<>
   {colors.map((fill,i)=>{const a=-Math.PI/2+i*2*Math.PI/colors.length,b=a+2*Math.PI/colors.length;return <path key={i} d={`M200 150 L${200+95*Math.cos(a)} ${150+95*Math.sin(a)} A95 95 0 ${b-a>Math.PI?1:0} 1 ${200+95*Math.cos(b)} ${150+95*Math.sin(b)}Z`} fill={fill}/>})}
   <circle cx="200" cy="150" r="95" fill="none"/>
   <path d="M132 99 Q112 132 121 159" {...light} strokeWidth="7" strokeLinecap="round"/>
   <path d="M259 211 Q230 240 191 234" fill="none" stroke={seam} opacity=".2" strokeWidth="5"/>
   <circle cx="200" cy="150" r="10" fill={first}/><circle cx="200" cy="150" r="4" fill="none" strokeWidth="1"/>
   <path d="M197 147 l6 6 M203 147 l-6 6" strokeWidth="1" opacity=".45"/>
   {colors.map((_,i)=>{const a=-Math.PI/2+i*2*Math.PI/colors.length;return <path key={i} d={`M${200+Math.cos(a)*17+3} ${150+Math.sin(a)*17+3} L${200+Math.cos(a)*86+3} ${150+Math.sin(a)*86+3}`} {...stitch}/>})}
  </>,
  kite:<>
   <path d="M200 222 Q242 236 217 254 Q193 267 218 285" fill="none" stroke="#9b896e" strokeWidth="2.5"/>
   {[0,1].map(i=><path key={i} d="M0 0 l-12 -6 v13Z M0 0 l12 -6 v13Z" transform={`translate(${i?207:223} ${i?271:246}) rotate(${i?20:-16})`} fill={colors[i%colors.length]} strokeWidth="1.5"/>)}
   {colors.length===2?<><path d="M200 35 L105 120 200 225Z" fill={first}/><path d="M200 35 L295 120 200 225Z" fill={second}/></>:<><path d="M200 35 L105 120 H295Z" fill={first}/><path d="M105 120 H200 V225Z" fill={second}/><path d="M200 120 H295 L200 225Z" fill={third}/></>}
   <path d="M200 43 V216 M113 120 H287" fill="none" stroke={seam} strokeWidth="2" opacity=".48"/>
   <path d="M200 44 L115 120 200 215 285 120Z" {...stitch}/>
   <path d="M192 51 L122 115 M211 207 L274 130" {...light} strokeWidth="2"/>
   <circle cx="200" cy="120" r="4" fill={first}/>
  </>,
  pinwheel:<>
   <path d="M196 148 H204 V267 H196Z" fill={first}/><path d="M199 168 V260" {...light} strokeWidth="1.5"/>
   {[0,1,2,3].map(i=><g key={i} transform={`rotate(${i*90} 200 144)`}>
    <path d="M200 144 Q154 128 117 58 H200Z" fill={colors[i%colors.length]}/>
    <path d="M117 58 Q159 68 170 100 Q181 127 200 144Z" fill={colors[(i+1)%colors.length]}/>
    <path d="M126 66 Q160 81 167 104" {...light} strokeWidth="2"/>
    <path d="M199 66 V125" {...stitch}/>
   </g>)}
   <circle cx="200" cy="144" r="11" fill={second}/><circle cx="200" cy="144" r="4" fill={first}/><circle cx="198" cy="141" r="2" fill="white" stroke="none" opacity=".6"/>
  </>,
  hat:<>
   <ellipse cx="200" cy="205" rx="128" ry="31" fill={second}/>
   <path d="M125 192 L142 86 Q200 64 258 86 L275 192 Q200 218 125 192Z" fill={first}/>
   <path d="M135 133 Q200 146 265 133 L272 175 Q200 188 128 175Z" fill={third}/>
   <path d="M146 90 Q200 109 254 90 M153 91 Q160 109 164 122 M245 91 Q239 111 238 123" fill="none" opacity=".35"/>
   <path d="M142 140 Q200 154 261 140 M134 169 Q200 182 268 169" {...stitch}/>
   <ellipse cx="200" cy="208" rx="117" ry="21" {...stitch}/>
   <path d="M94 206 Q111 224 155 225 M283 219 Q302 215 309 208" {...light} strokeWidth="2"/>
   <path d="M226 143 L248 140 251 165 229 168Z" fill={second}/><path d="M231 147 L244 145 246 161 233 163Z" fill={third} strokeWidth="1"/>
  </>,
  sock:<>
   <path d="M167 68 H250 V188 Q252 221 226 238 L159 267 Q102 279 94 245 Q90 223 119 211 L167 188Z" fill={first}/>
   <path d="M167 68 H250 V105 H167Z" fill={second}/>
   <path d="M117 212 Q148 219 149 267 Q103 278 94 245 Q90 225 117 212Z" fill={third}/>
   <path d="M223 174 H250 V191 Q250 217 225 235 Q209 204 223 174Z" fill={second}/>
   {[177,187,197,207,217,227,237].map(x=><path key={x} d={`M${x} 75 V99`} fill="none" strokeWidth="1.4" opacity=".4"/>)}
   <path d="M172 109 H245 M121 218 Q144 232 143 260 M226 179 Q215 204 228 228" {...stitch}/>
   {Array.from({length:5},(_,row)=><path key={row} d={`M179 ${123+row*12} l4 3 4 -3 m8 0 l4 3 4 -3 m8 0 l4 3 4 -3 m8 0 l4 3 4 -3`} fill="none" strokeWidth="1" opacity=".2"/>)}
   <path d="M105 245 Q108 260 129 261" {...light} strokeWidth="2"/>
  </>,
  cup:<>
   <path d="M269 114 H294 Q336 115 329 157 Q327 190 269 193Z" fill={second}/>
   <path d="M284 132 H296 Q314 132 309 153 Q306 169 282 171Z" fill={first}/>
   <path d="M113 90 H282 L269 240 Q200 270 126 240Z" fill={first}/>
   <path d="M119 151 H277 L273 193 H123Z" fill={third}/>
   <ellipse cx="198" cy="90" rx="85" ry="17" fill={second}/>
   <ellipse cx="198" cy="91" rx="72" ry="10" fill={first}/>
   <path d="M129 93 Q199 111 267 93 M129 231 Q200 254 266 232 M122 155 H275 M125 189 H273" fill="none" strokeWidth="1.3" opacity=".4"/>
   <path d="M136 119 L142 142 M145 205 L148 225 M304 120 Q320 125 322 140" {...light} strokeWidth="4" strokeLinecap="round"/>
  </>,
  car:<>
   <path d="M102 160 L145 93 Q149 86 161 86 H237 Q247 86 252 95 L293 160Z" fill={second}/>
   <path d="M203 86 H237 Q247 86 252 95 L293 160 H203Z" fill={third}/>
   <path d="M115 154 L153 100 H191 V154Z" fill={second}/><path d="M215 100 H238 L273 154 H215Z" fill={third}/>
   <path d="M66 182 Q66 163 87 157 H312 Q335 163 335 187 V218 Q333 236 313 236 H87 Q66 236 66 218Z" fill={first}/>
   <path d="M198 168 V219 M110 175 H303 M105 224 H313" fill="none" opacity=".45" strokeWidth="1.5"/>
   <path d="M174 184 H185 M272 184 H283" stroke={second} strokeWidth="5" strokeLinecap="round"/>
   <path d="M69 186 H86 V200 H68 M314 184 H334 V198 H316Z" fill={second}/>
   <rect x="62" y="213" width="30" height="9" rx="4" fill={second}/><rect x="310" y="213" width="29" height="9" rx="4" fill={second}/>
   {[127,278].map(x=><g key={x}><circle cx={x} cy="234" r="29" fill={second}/><circle cx={x} cy="234" r="19" fill={first}/><circle cx={x} cy="234" r="7" fill={second}/>{[0,60,120].map(a=><path key={a} d={`M${x-13} 234 H${x+13}`} transform={`rotate(${a} ${x} 234)`} fill="none" stroke={second} strokeWidth="2"/>)}<path d={`M${x-21} 225 q8 -15 24 -13`} {...light} strokeWidth="2"/></g>)}
   <path d="M141 135 L159 108 M232 112 l16 21 M95 167 H175" {...light} strokeWidth="3"/>
  </>,
  house:<>
   <rect x="244" y="65" width="28" height="53" rx="2" fill={second}/><path d="M240 64 H276 V75 H240Z" fill={first}/>
   <path d="M105 126 H295 V259 H105Z" fill={first}/><path d="M76 137 L200 44 324 137Z" fill={second}/>
   <path d="M91 131 L200 53 309 131" fill="none" opacity=".5" strokeWidth="3"/>
   <path d="M155 87 H246 M129 106 H272 M102 125 H298 M181 69 V87 M213 69 V87 M160 88 V106 M197 88 V106 M234 88 V106 M137 107 V124 M176 107 V124 M215 107 V124 M254 107 V124" fill="none" opacity=".3" strokeWidth="1.2"/>
   <path d="M178 259 V181 Q200 162 222 181 V259Z" fill={third}/><path d="M184 254 V184 Q200 172 216 184 V254Z" fill="none" opacity=".4" strokeWidth="1.2"/>
   {[125,243].map(x=><g key={x}><rect x={x} y="162" width="32" height="39" rx="3" fill={second}/><path d={`M${x+16} 165 V198 M${x+3} 181 H${x+29}`} stroke={first} strokeWidth="3"/><path d={`M${x-3} 205 H${x+35}`} stroke={second} strokeWidth="4"/></g>)}
   <circle cx="210" cy="220" r="3" fill={second}/><path d="M108 250 H175 M225 250 H292 M111 221 H149 M250 227 H288 M111 235 H159" fill="none" opacity=".3" strokeWidth="1.5"/>
   <path d="M178 260 H222 L229 268 H171Z" fill={second}/>
  </>,
  gift:<>
   <rect x="100" y="128" width="200" height="132" rx="6" fill={first}/><path d="M184 128 H216 V260 H184Z" fill={third}/>
   <rect x="89" y="101" width="222" height="38" rx="5" fill={second}/>
   <path d="M200 101 Q150 100 143 78 Q135 51 157 53 Q186 54 200 101Z M200 101 Q250 100 257 78 Q265 51 243 53 Q214 54 200 101Z" fill={third}/>
   <path d="M157 62 Q181 66 194 96 Q158 87 153 74 Q149 63 157 62Z M243 62 Q219 66 206 96 Q242 87 247 74 Q251 63 243 62Z" fill={second}/>
   <path d="M188 100 L163 151 184 146 195 159 204 102 M211 100 L243 150 221 145 211 157 198 103" fill={third}/>
   <rect x="187" y="94" width="26" height="23" rx="6" fill={third}/>
   <path d="M106 146 H179 M220 146 H294 M109 250 H177 M221 250 H290 M190 166 V254 M210 166 V254" {...stitch}/>
   <path d="M106 151 V234 M96 108 H170 M224 108 H299 M197 99 V109" {...light} strokeWidth="2.5"/>
   <path d="M292 143 V253 M104 254 H180 M220 254 H292" fill="none" opacity=".2" strokeWidth="4"/>
  </>,
 };
 return <g className="character color-object" stroke="#697265" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">{isThreeColorShape(object.shape)?<ThreeColorArt shape={object.shape} colors={colors}/>:drawings[object.shape]}</g>;
}
