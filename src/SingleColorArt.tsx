import {SingleColorDetails} from './SingleColorDetails';
import {useId,type ReactNode} from 'react';
import {colorPalette,type ColorId} from './colorContent';

/** Familiar objects with a large, flat area of the colour being taught. */
export function SingleColorArt({name}:{name:string}){
 const detailClipId='single-detail-'+useId();
 if(!name.startsWith('single-'))return null;
 const id=name.slice(7) as ColorId,color=colorPalette[id];if(!color)return null;
 const fill=color.fill,stem='#78634b',leaf='#548452';
 const detailBoundary=id==='lightblue'?'M155 244 C128 225 131 181 151 139 Q179 82 231 44 C253 77 258 109 242 145 Q215 203 155 244Z':id==='darkgreen'?'M200 38 Q180 79 140 114 L151 115 125 137 Q143 140 159 133 Q139 166 108 185 L120 185 97 205 Q120 210 140 201 Q116 229 88 242 Q120 258 156 244 Q185 262 200 249 Q220 263 244 245 Q282 259 312 242 Q281 225 260 201 Q280 210 303 205 L280 185 H292 Q262 164 241 133 Q258 140 275 137 L249 115 260 114 Q220 78 200 38Z':id==='lavender'?'M195 154 Q112 35 87 103 Q76 154 148 172 Q82 191 115 242 Q162 270 199 172 M205 154 Q288 35 313 103 Q324 154 252 172 Q318 191 285 242 Q238 270 201 172':undefined;
 const drawings:Record<ColorId,ReactNode>={
  red:<><path d="M200 92 C119 45 85 128 112 207 Q143 275 200 251 Q257 275 288 207 C315 128 281 45 200 92Z" fill={fill}/><path d="M200 95 Q194 62 210 44" stroke={stem} strokeWidth="9" fill="none"/><path d="M199 69 Q205 63 214 61" fill="none" stroke={leaf} strokeWidth="4"/><path d="M209 65 Q239 31 264 54 Q246 80 209 65Z" fill={leaf}/><path d="M143 121 Q126 143 133 164" stroke="#fff" opacity=".35" strokeWidth="8" fill="none" strokeLinecap="round"/></>,
  yellow:<><path d="M95 100 L84 66 Q92 58 100 63 L112 86 103 110Z" fill={stem} stroke="#6e624d" strokeWidth="2"/><path d="M103 84 Q120 204 253 196 Q287 191 314 170 Q278 269 173 250 Q79 234 77 141Z" fill={fill}/><path d="M91 69 L101 88" fill="none" stroke="#5d503e" strokeWidth="2"/><path d="M309 176 L320 164" fill="none" stroke={stem} strokeWidth="8"/><path d="M103 114 Q124 236 283 207" fill="none" stroke="#b69c38" strokeWidth="3"/></>,
  blue:<><path d="M112 105 Q200 -3 288 105" stroke="#7b8584" strokeWidth="9" fill="none"/><path d="M100 105 H300 L277 248 Q200 275 123 248Z" fill={fill}/><ellipse cx="200" cy="105" rx="100" ry="22" fill={fill}/><path d="M140 137 L152 226" stroke="white" opacity=".3" strokeWidth="10" strokeLinecap="round"/></>,
  green:<><path d="M99 247 Q62 80 300 51 Q331 232 99 247Z" fill={fill}/><path d="M91 264 L274 80 M143 210 L131 144 M183 169 L180 112 M183 169 L256 177 M143 210 L211 219" fill="none" stroke="#296f3b" strokeWidth="4" strokeLinecap="round"/></>,
  orange:<><circle cx="200" cy="164" r="94" fill={fill}/><path d="M200 79 V55" stroke={stem} strokeWidth="8"/><path d="M205 65 Q246 29 267 62 Q237 88 205 65Z" fill={leaf}/>{[[145,145],[176,115],[235,127],[252,183],[193,215],[141,192]].map(([x,y])=><circle key={x} cx={x} cy={y} r="3" fill="#b76725" opacity=".55"/>)}</>,
  purple:<><path d="M200 71 Q190 48 210 35" stroke={stem} strokeWidth="7" fill="none"/><path d="M198 60 Q204 58 213 55" fill="none" stroke={leaf} strokeWidth="4"/><path d="M207 56 Q235 25 267 49 Q240 80 207 56Z" fill={leaf}/>{[[164,99],[209,98],[248,109],[139,140],[185,142],[231,149],[164,184],[210,193],[189,231]].map(([x,y])=><circle key={x+'-'+y} cx={x} cy={y} r="29" fill={fill}/>)}</>,
  pink:<><path d="M201 174 V260" fill="none" stroke={leaf} strokeWidth="8"/>{[0,72,144,216,288].map(a=><path key={a} d="M200 146 C171 134 153 114 158 89 Q165 61 187 69 Q198 64 210 72 Q239 77 236 104 Q233 127 200 146Z" transform={`rotate(${a} 200 146)`} fill={fill}/>)}<circle cx="200" cy="146" r="18" fill="#e9ca66"/></>,
  brown:<><path d="M125 77 L260 62 294 226 Q231 280 106 247Z" fill={fill}/><ellipse cx="194" cy="76" rx="69" ry="24" fill="#d3ae7d"/><ellipse cx="194" cy="76" rx="45" ry="14" fill="none" stroke={stem}/><ellipse cx="194" cy="76" rx="22" ry="6" fill="none" stroke={stem}/><path d="M145 115 L139 205 M194 119 L208 245 M238 110 L261 214 M161 172 l15 28" stroke="#6f472b" strokeWidth="5" fill="none"/></>,
  black:<>
   <path d="M107 164 L229 77 260 78 281 95 291 125 297 143 176 245 Q130 263 104 226 Q87 193 107 164Z" fill={fill}/>
   <path d="M111 167 L232 83 255 84 277 99 287 128 292 140 177 228Z" fill="#303030" stroke="none"/>
   <ellipse cx="136" cy="205" rx="39" ry="49" transform="rotate(-35 136 205)" fill="#333333" stroke="#626663"/>
   <ellipse cx="136" cy="205" rx="26" ry="35" transform="rotate(-35 136 205)" fill="none" stroke="#717570" strokeWidth="1.7"/>
   <ellipse cx="136" cy="205" rx="13" ry="20" transform="rotate(-35 136 205)" fill="none" stroke="#717570" strokeWidth="1.5"/>
   <path d="M150 165 L243 98 M168 181 L264 117 M180 204 L283 138" fill="none" stroke="#626663" strokeWidth="2.5"/>
  </>,
  white:<>{[0,60,120].map(a=><g key={a} transform={`rotate(${a} 200 148)`}>{[19,15].map((width,i)=><path key={width} d="M200 52 V244 M171 72 L200 101 229 72 M171 224 L200 195 229 224" fill="none" stroke={i?fill:"#bfcacc"} strokeWidth={width} strokeLinecap="round"/>)}</g>)}</>,
  gray:<><path d="M90 218 Q64 157 126 118 Q142 63 211 83 Q265 69 291 122 Q338 152 308 219 Q245 277 129 252Z" fill={fill}/><path d="M119 164 Q150 114 211 118 M246 206 l25 -13" fill="none" stroke="#b8b8b8" strokeWidth="6" strokeLinecap="round"/></>,
  cyan:<><path d="M106 105 L231 63 299 113 176 161Z" fill={fill}/><path d="M106 105 L176 161 V259 L106 205Z" fill={fill}/><path d="M176 161 L299 113 V212 L176 259Z" fill={fill}/><path d="M106 105 L176 161 299 113 M176 161 V259" fill="none" stroke="#24898b" strokeWidth="4"/></>,
  lightblue:<><path d="M155 244 C128 225 131 181 151 139 Q179 82 231 44 C253 77 258 109 242 145 Q215 203 155 244Z" fill={fill}/><path d="M143 271 Q178 166 231 44" stroke="#6098bc" strokeWidth="3" fill="none"/></>,
  navy:<g stroke="#304d6a" strokeWidth="2" strokeLinejoin="round">
   <path d="M154 148 Q168 124 182 130 Q180 140 196 143Z" fill={fill}/>
   <path d="M112 158 C139 139 174 129 211 137 C247 127 291 133 316 150 C339 167 351 197 338 219 C325 243 284 249 248 245 L190 241 C151 237 120 221 97 204 Q82 197 78 184 Q68 160 78 130 C59 126 43 111 40 91 Q66 88 87 107 Q106 82 136 79 C137 104 120 121 100 128 Q95 150 112 158Z" fill={fill}/>
   <path d="M110 206 C171 227 250 251 307 230 Q329 223 338 209 C326 245 287 252 248 245 L190 241 C151 237 120 221 110 206Z" fill="#adc5dc" stroke="none"/>
   <path d="M232 197 C211 206 197 232 195 253 Q197 265 211 262 C232 251 244 229 246 208Z" fill="#1e3c6b"/>
   <path d="M303 216 Q323 222 337 207" fill="none" stroke="#173454" strokeWidth="2.5"/>
   <ellipse cx="303" cy="182" rx="6.2" ry="6.8" fill="#f9f6e9" stroke="none"/><circle cx="305" cy="182" r="3.7" fill="#182f48" stroke="none"/><circle cx="306" cy="180" r="1.4" fill="white" stroke="none"/>
   <ellipse cx="270" cy="135" rx="5" ry="2" fill="#173454" stroke="none"/>
   <path d="M270 128 Q265 92 245 99 M272 126 Q279 91 297 99" fill="none" stroke="#8bc9ef" strokeWidth="5" strokeLinecap="round"/>
   <ellipse cx="245" cy="96" rx="3.5" ry="5" fill="#8bc9ef" stroke="none" transform="rotate(-30 245 96)"/><ellipse cx="298" cy="96" rx="3" ry="4.5" fill="#8bc9ef" stroke="none" transform="rotate(30 298 96)"/>
  </g>,
  lightgreen:<><path d="M200 258 V121" stroke={stem} strokeWidth="7"/><path d="M199 185 Q85 200 103 101 Q195 92 199 185Z M202 149 Q196 54 294 65 Q308 153 202 149Z" fill={fill}/><path d="M200 185 L128 126 M202 149 L270 90" stroke="#699c48" strokeWidth="3" fill="none"/></>,
  darkgreen:<><path d="M185 216 H215 V268 H185Z" fill={stem}/><path d="M200 38 Q180 79 140 114 L151 115 125 137 Q143 140 159 133 Q139 166 108 185 L120 185 97 205 Q120 210 140 201 Q116 229 88 242 Q120 258 156 244 Q185 262 200 249 Q220 263 244 245 Q282 259 312 242 Q281 225 260 201 Q280 210 303 205 L280 185 H292 Q262 164 241 133 Q258 140 275 137 L249 115 260 114 Q220 78 200 38Z" fill={fill}/><path d="M155 149 H244 M133 205 H267" stroke="#164e33" strokeWidth="4"/></>,
  lightyellow:<><path d="M178 89 Q171 64 196 54 Q221 58 219 88 Q217 119 249 149 Q296 195 263 239 Q218 272 151 251 Q103 226 131 173 Q181 121 178 89Z" fill={fill}/><path d="M197 59 Q191 38 209 29" stroke={stem} strokeWidth="7" fill="none"/>{[[169,166],[211,191],[246,208],[162,216]].map(([x,y])=><circle key={x} cx={x} cy={y} r="2" fill="#baaa65"/>)}</>,
  darkred:<><path d="M149 149 Q170 91 230 48 Q223 110 251 158" fill="none" stroke={leaf} strokeWidth="6"/><circle cx="145" cy="193" r="51" fill={fill}/><circle cx="254" cy="204" r="48" fill={fill}/><path d="M118 179 l8 -12 M230 191 l9 -10" stroke="white" opacity=".4" strokeWidth="6" strokeLinecap="round"/></>,
  peach:<><path d="M200 154 V267" stroke={leaf} strokeWidth="8"/><path d="M199 234 Q126 236 130 188 Q176 185 199 234 M203 216 Q264 220 277 175 Q228 174 203 216" fill={leaf}/><path d="M124 73 Q148 89 156 106 L197 62 235 106 Q250 85 276 73 Q279 181 200 191 Q120 179 124 73Z" fill={fill}/><path d="M156 106 Q169 143 200 177 Q233 142 235 106" stroke="#c54d64" strokeWidth="3" fill="none"/></>,
  lavender:<><path d="M195 154 Q112 35 87 103 Q76 154 148 172 Q82 191 115 242 Q162 270 199 172 M205 154 Q288 35 313 103 Q324 154 252 172 Q318 191 285 242 Q238 270 201 172" fill={fill}/><path d="M200 126 V219 M197 130 Q180 98 169 112 M203 130 Q220 98 231 112" stroke="#6e5c7d" strokeWidth="7" fill="none" strokeLinecap="round"/></>,
  beige:<><path d="M148 109 V79 Q200 25 252 79 V109" stroke={fill} strokeWidth="17" fill="none"/><path d="M112 101 H288 L303 251 Q200 277 97 251Z" fill={fill}/><path d="M145 115 V148 M255 115 V148 M129 209 Q200 224 271 209" stroke="#b9a47f" strokeWidth="4" fill="none"/></>,
  teal:<><path d="M90 166 C124 104 216 85 273 145 Q298 130 327 109 Q320 167 327 225 Q296 201 273 186 C214 250 126 235 90 176Z" fill={fill}/><path d="M174 107 L211 67 241 122 M180 218 L214 251 241 208" fill={fill}/><circle cx="133" cy="160" r="7" fill="#fff"/><path d="M165 135 Q180 165 165 197 M221 144 L191 170 224 186" fill="none" stroke="#166663" strokeWidth="4"/></>,
  ochre:<>
   <path d="M154 148 V92 H170 V74 H185 V93 H205 V74 H221 V93 H237 V148Z" fill={fill}/>
   <path d="M98 139 H306 V244 Q200 275 98 244Z" fill={fill}/>
   <path d="M84 130 Q120 144 156 130 V243 Q120 262 84 243Z M244 130 Q280 144 316 130 V243 Q280 262 244 243Z" fill={fill}/>
   <path d="M84 112 H101 V94 H120 V112 H137 V94 H156 V141 Q120 153 84 141Z M244 112 H263 V94 H282 V112 H299 V94 H318 V141 Q282 153 244 141Z" fill={fill}/>
   <path d="M179 260 V213 Q201 183 223 213 V260Z" fill="#9e742f"/>
   <path d="M184 256 V214 Q201 193 218 214 V256 M88 234 Q120 246 152 234 M248 234 Q280 246 312 234 M158 146 H242 M174 122 H217" fill="none" stroke="#8d6d37" strokeWidth="1.5"/>
   <path d="M91 151 V221 M251 152 V222" stroke="white" strokeWidth="3" opacity=".22"/>
  </>,
  darkgray:<><path d="M108 146 Q46 120 58 178 Q64 205 108 193 M292 146 Q354 120 342 178 Q336 205 292 193" stroke={fill} strokeWidth="14" fill="none"/><path d="M104 132 H296 L283 239 Q200 273 117 239Z" fill={fill}/><ellipse cx="200" cy="129" rx="104" ry="19" fill={fill}/><path d="M110 119 Q120 83 200 83 Q280 83 290 119Z" fill={fill}/><path d="M179 82 V66 H221 V82" fill="none" stroke={fill} strokeWidth="9"/></>,
  rose:<><path d="M200 169 V265" stroke={leaf} strokeWidth="8"/><path d="M200 230 Q134 241 125 193 Q173 186 200 230 M201 211 Q253 219 274 171 Q228 168 201 211" fill={leaf}/><path d="M200 73 Q242 47 267 82 Q306 101 278 144 Q275 188 229 194 Q190 222 158 187 Q112 181 119 137 Q94 95 139 77 Q166 46 200 73Z" fill={fill}/><path d="M155 103 Q170 76 198 91 Q224 72 247 100 M129 127 Q142 104 174 113 Q181 144 204 150 M272 127 Q252 112 226 118 Q220 143 204 150 M144 163 Q174 186 200 166 Q223 190 258 161 M177 110 Q194 95 215 112 Q227 130 205 144 Q185 144 179 125 Q174 113 191 109 M202 166 Q203 185 226 193" fill="none" stroke="#9d225c" strokeWidth="3"/></>,
 };
 return <g className="character single-color-object" stroke="#77766b" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">{drawings[id]}{detailBoundary?<><defs><clipPath id={detailClipId}><path d={detailBoundary}/>{id==='darkgreen'&&<rect x="185" y="245" width="30" height="23"/>}</clipPath></defs><g clipPath={`url(#${detailClipId})`}><SingleColorDetails id={id}/></g></>:<SingleColorDetails id={id}/>}</g>;
}
