import {useId,type ReactNode} from 'react';
import type {ColorShape} from './colorContent';

const threeColorShapes=['rocket','train','sailboat','robot','backpack','sneaker','dress','icecream','cake','drum'] as const;
export type ThreeColorShape=typeof threeColorShapes[number];
export function isThreeColorShape(shape:ColorShape):shape is ThreeColorShape{return threeColorShapes.includes(shape as ThreeColorShape)}

/** A separate set of objects for the three-colour lessons and questions. */
export function ThreeColorArt({shape,colors}:{shape:ThreeColorShape;colors:readonly string[]}){
 const coneClipId='icecream-cone-'+useId();
 const [first,second,third]=colors;
 const line={fill:'none',stroke:'#46534a',strokeWidth:1.5,opacity:.42};
 const light={fill:'none',stroke:'white',strokeWidth:3,opacity:.45};
 const drawings:Record<ThreeColorShape,ReactNode>={
  rocket:<>
   <path d="M157 178 Q116 200 119 249 L164 234Z M243 178 Q284 200 281 249 L236 234Z" fill={third}/>
   <path d="M157 200 Q157 91 200 43 Q243 91 243 200 L232 240 H168Z" fill={first}/>
   <path d="M171 91 Q183 63 200 43 Q217 63 229 91Z" fill={second}/>
   <path d="M161 201 H239 L232 240 H168Z" fill={second}/>
   <circle cx="200" cy="136" r="29" fill={second}/><circle cx="200" cy="136" r="21" fill={third}/>
   <path d="M188 122 l-4 9 M180 209 H220 M178 230 H222" {...light}/>
   <path d="M173 96 Q164 130 167 168 M232 106 V172 M173 235 H227" {...line}/>
   <path d="M185 241 L180 267 199 255 218 267 214 241Z" fill={third}/>
   <path d="M200 190 V249" stroke={third} strokeWidth="7"/>
  </>,
  train:<>
   <path d="M62 250 H339 M72 260 H333" {...line} strokeWidth="3"/>
   <rect x="179" y="91" width="123" height="139" rx="5" fill={first}/><path d="M167 81 H316 V98 H167Z" fill={third}/>
   <path d="M93 161 H179 V229 H70 V189 Q70 167 93 161Z" fill={first}/><rect x="106" y="118" width="29" height="44" fill={third}/><rect x="99" y="110" width="43" height="13" rx="3" fill={third}/>
   <rect x="197" y="112" width="37" height="52" rx="4" fill={second}/><rect x="249" y="112" width="36" height="52" rx="4" fill={second}/>
   <path d="M204 121 l12 -3 M256 121 l12 -3" {...light}/><path d="M87 181 H168 M195 181 H287 M240 172 V219" {...line}/>
   <path d="M79 223 H308 V236 H79Z" fill={third}/><path d="M69 207 L44 236 H79Z" fill={third}/>
   {[115,200,279].map((x,i)=><g key={x}><circle cx={x} cy="236" r={i===1?29:23} fill={second}/><circle cx={x} cy="236" r="10" fill={third}/><path d={`M${x-14} 236 H${x+14} M${x} 222 V250`} stroke={third} strokeWidth="2"/></g>)}
   <path d="M115 236 H279" stroke={third} strokeWidth="5"/><circle cx="115" cy="236" r="4" fill={first}/><circle cx="279" cy="236" r="4" fill={first}/>
  </>,
  sailboat:<>
   <path d="M192 49 V220" stroke={third} strokeWidth="6"/>
   <path d="M182 65 L91 195 H182Z" fill={second}/><path d="M203 79 L293 195 H203Z" fill={third}/>
   <path d="M182 166 H112 L96 189 H182Z" fill={third}/><path d="M209 101 L274 187 M173 87 L109 183" {...line}/>
   <path d="M193 48 L236 58 193 74Z" fill={third}/><path d="M182 65 H192 M182 195 H192 M203 79 H192 M203 195 H192" fill="none" stroke={third} strokeWidth="2.5"/>
   <path d="M77 217 H325 L291 260 H119Z" fill={first}/><path d="M88 224 H314 M116 250 H297" {...line}/>
   <path d="M116 220 L141 205 H259 L282 220Z" fill={third}/>
   <path d="M109 234 H151 M167 234 H210 M225 234 H271" stroke={second} strokeWidth="5" strokeLinecap="round"/>
   <path d="M66 270 q14 7 28 0 t28 0 M249 277 q14 7 28 0 t28 0" {...line} stroke="#82aaa6"/>
  </>,
  robot:<>
   <path d="M200 68 V46" stroke={third} strokeWidth="5"/><circle cx="200" cy="39" r="8" fill={second}/>
   <rect x="127" y="68" width="146" height="90" rx="19" fill={first}/><rect x="141" y="83" width="118" height="56" rx="12" fill={second}/>
   <circle cx="172" cy="106" r="9" fill={third}/><circle cx="228" cy="106" r="9" fill={third}/><path d="M183 126 H217" stroke={third} strokeWidth="4"/>
   <rect x="117" y="93" width="12" height="32" rx="4" fill={third}/><rect x="271" y="93" width="12" height="32" rx="4" fill={third}/>
   <rect x="184" y="157" width="32" height="13" fill={third}/><rect x="144" y="169" width="112" height="77" rx="14" fill={first}/>
   <path d="M140 186 L113 213 M260 186 L287 213" stroke={third} strokeWidth="17"/><circle cx="111" cy="216" r="13" fill={second}/><circle cx="289" cy="216" r="13" fill={second}/>
   <rect x="166" y="185" width="68" height="41" rx="5" fill={second}/><circle cx="183" cy="206" r="6" fill={third}/><path d="M198 198 H224 M198 210 H218" stroke={third} strokeWidth="3"/>
   <path d="M167 245 V265 M233 245 V265" stroke={third} strokeWidth="15"/><rect x="149" y="259" width="41" height="16" rx="6" fill={second}/><rect x="212" y="259" width="41" height="16" rx="6" fill={second}/>
   <path d="M150 76 H178 M152 178 V201" {...light}/>
  </>,
  backpack:<>
   <path d="M137 125 Q99 141 109 249 M263 125 Q301 141 291 249" fill="none" stroke={third} strokeWidth="17"/>
   <path d="M174 78 V57 Q200 35 226 57 V78" fill="none" stroke={second} strokeWidth="12"/>
   <path d="M127 126 Q125 69 200 68 Q275 69 273 126 V249 Q200 277 127 249Z" fill={first}/>
   <path d="M127 121 Q125 72 200 68 Q275 72 273 121 L258 148 Q200 172 142 148Z" fill={second}/>
   <rect x="148" y="177" width="104" height="63" rx="13" fill={third}/><path d="M153 192 H247 M137 166 V242 Q200 264 263 242 V166" {...line} strokeDasharray="3 4"/>
   <path d="M189 120 H211 V161 H189Z" fill={first}/><rect x="190" y="144" width="20" height="15" rx="2" fill={third}/><path d="M196 148 H204 V155 H196Z" fill={first}/>
   <path d="M231 192 v12 h6 v-12 M153 211 V225" {...light} strokeWidth="2"/>
  </>,
  sneaker:<>
   <path d="M95 170 L117 101 Q138 107 159 129 Q183 146 206 131 L229 111 Q242 140 257 168 L303 185 Q332 196 326 229 L311 247 H93 Q66 242 72 215Z" fill={first}/>
   <path d="M92 173 L116 119 Q139 135 153 155 L129 194 92 204Z" fill={third}/>
   <path d="M165 141 Q188 153 206 138 L246 175 198 190Z" fill={second}/>
   <path d="M159 142 L203 180 M170 143 L214 174 M183 144 L225 169" stroke={third} strokeWidth="4"/>
   <path d="M78 218 Q171 232 327 216 L325 237 Q316 254 294 255 H96 Q76 251 73 238Z" fill={second}/>
   <path d="M80 235 Q184 245 319 233 M99 207 L144 195 M247 178 L288 194 M105 179 L118 147" {...line}/>
   <path d="M250 200 L282 191 306 201" {...light}/>
   <path d="M200 189 Q219 184 241 188 Q226 205 201 211 L154 211 Q181 205 200 189Z" fill={third}/>
  </>,
  dress:<>
   <path d="M174 64 Q200 85 226 64 L271 106 249 136 230 121 Q238 191 285 249 Q200 282 115 249 Q162 191 170 121 L151 136 129 106Z" fill={first}/>
   <path d="M174 64 L200 87 226 64 230 86 211 106 200 87 189 106 170 86Z" fill={second}/>
   <path d="M162 157 Q200 170 238 157 L246 177 Q200 191 154 177Z" fill={third}/>
   <path d="M200 173 L177 158 V186Z M200 173 L223 158 V186Z" fill={third}/><circle cx="200" cy="173" r="7" fill={second}/>
   <path d="M166 189 L140 242 M183 193 L178 251 M219 191 L240 246 M128 247 Q200 271 272 247" {...line} strokeDasharray="3 4"/>
   <path d="M149 105 l9 -8 M237 103 l12 11" {...light}/>
   <circle cx="200" cy="120" r="3" fill={second}/><circle cx="200" cy="137" r="3" fill={second}/>
  </>,
  icecream:<>
   <path d="M144 155 H256 L209 275 Q200 283 191 275Z" fill={second}/>
   <defs><clipPath id={coneClipId}><path d="M144 155 H256 L209 275 Q200 283 191 275Z"/></clipPath></defs><g clipPath={`url(#${coneClipId})`}><path d="M152 176 L225 247 M162 202 L216 255 M173 230 L206 265 M247 177 L176 246 M237 202 L186 256 M227 228 L196 265" {...line} strokeWidth="1.5"/></g>
   <path d="M143 154 Q111 135 131 106 Q131 72 165 69 Q183 43 211 57 Q246 54 258 86 Q285 104 270 132 Q274 157 247 166 Q225 179 200 167 Q169 180 143 154Z" fill={first}/>
   <path d="M135 100 Q135 73 165 69 Q183 43 211 57 Q246 54 258 86 L264 104 Q253 117 245 103 Q236 126 225 108 Q210 131 200 111 Q182 126 176 105 Q152 119 144 101Z" fill={third}/>
   <path d="M143 137 Q153 152 167 147 M215 154 Q235 163 250 146" {...line}/>
   <path d="M160 84 l8 -4 M199 72 l10 -2 M234 87 l7 4" stroke={second} strokeWidth="4" strokeLinecap="round"/>
  </>,
  cake:<>
   <ellipse cx="200" cy="258" rx="135" ry="16" fill={second}/>
   <path d="M103 130 H297 V239 Q200 277 103 239Z" fill={first}/>
   <path d="M103 172 Q200 206 297 172 V196 Q200 230 103 196Z" fill={third}/>
   <path d="M103 220 Q200 254 297 220 V239 Q200 277 103 239Z" fill={third}/>
   <path d="M103 130 Q200 94 297 130 V153 Q290 170 279 154 Q263 177 251 159 Q233 182 217 162 Q199 180 184 160 Q164 180 152 158 Q133 174 122 154 Q111 170 103 153Z" fill={second}/>
   <ellipse cx="200" cy="130" rx="97" ry="26" fill={second}/>
   {[138,178,219,260].map(x=><g key={x}><path d={`M${x-10} 125 q-2 -14 10 -21 q13 8 10 21Z`} fill={first}/><path d={`M${x-5} 124 l5 -12`} {...light} strokeWidth="2"/></g>)}
   <path d="M118 159 V168 M118 202 V214 M283 203 V218" {...light} strokeWidth="2"/>
  </>,
  drum:<>
   <path d="M99 109 H301 V235 Q200 276 99 235Z" fill={first}/>
   <path d="M104 131 L139 229 175 132 211 231 246 132 283 230 299 147" fill="none" stroke={third} strokeWidth="4"/>
   <path d="M99 222 Q200 254 301 222 V239 Q200 274 99 239Z" fill={third}/>
   <ellipse cx="200" cy="109" rx="103" ry="32" fill={third}/><ellipse cx="200" cy="107" rx="91" ry="23" fill={second}/>
   <path d="M119 102 Q198 72 281 102" {...light} strokeWidth="2"/>
   <path d="M105 129 Q200 158 295 129 M108 233 Q200 261 292 233" {...line}/>
   <path d="M135 37 L252 102 M274 37 L169 105" stroke={third} strokeWidth="6" strokeLinecap="round"/><ellipse cx="131" cy="35" rx="9" ry="7" fill={second} transform="rotate(30 131 35)"/><ellipse cx="278" cy="34" rx="9" ry="7" fill={second} transform="rotate(-30 278 34)"/>
  </>,
 };
 return drawings[shape];
}
