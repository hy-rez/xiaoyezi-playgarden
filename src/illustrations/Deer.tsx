import {Eye,Hoof} from './Details';
const coat='#b98d5d',shade='#98734f',cream='#e9d4af';
export function Deer(){return <g>
 <path d="M122 188 Q104 183 102 195 Q112 201 123 196Z" fill={cream}/>
 <path d="M152 206 L149 236 157 258 166 258 161 234 169 206 M222 201 L229 231 229 258 239 258 243 229 239 199" fill={shade}/><Hoof x={161} y={262} width={10}/><Hoof x={234} y={262} width={10}/>
 <path d="M116 192 C116 173 138 161 162 165 L202 169 Q219 162 228 139 L238 111 C240 96 254 89 267 96 Q282 100 281 112 L295 126 Q303 134 295 140 Q283 149 270 139 L262 163 C259 192 240 212 211 215 L145 215 Q119 213 116 192Z" fill={coat}/>
 <path d="M238 115 Q216 98 215 86 Q235 82 249 106 M268 105 Q282 84 298 86 Q300 102 278 117" fill={coat}/>
 <path d="M223 91 Q231 94 241 105 M278 105 L290 92" stroke="#d8b894" strokeWidth="4" fill="none"/>
 <g fill="none" stroke="#86694a" strokeWidth="3.6"><path d="M247 99 Q235 81 234 61 L226 43 M237 77 L222 70 217 59 M233 61 L244 47 M270 98 Q279 76 278 56 L287 36 M278 62 L294 55 299 43 M277 78 L264 65 261 54"/></g>
 <path d="M249 145 Q260 142 269 139 L260 168 Q255 187 241 191 L236 185 Q247 166 249 145Z" fill={cream}/>
 <path d="M276 126 Q291 122 298 131 Q299 141 288 142 Q279 142 276 126Z" fill={cream}/>
 <path d="M293 126 Q300 126 300 132 Q295 136 291 132Z" fill="#514c3c"/><Eye x={269} y={113} r={4}/>
 <path d="M264 105 l5 -2 M286 137 q5 3 10 -1" stroke="#795d41" strokeWidth="1.5" fill="none"/>
 <path d="M137 203 Q129 220 132 235 L126 258 137 259 146 235 153 206 M216 203 L211 230 214 259 225 259 225 232 233 201" fill={coat}/>
 <Hoof x={131} y={264} width={11}/><Hoof x={220} y={264} width={11}/>
 <path d="M134 225 l6 2 M215 225 l7 -1 M123 193 Q129 202 141 205" stroke="#d6b78c" strokeWidth="1.6" fill="none"/>
 </g>}
