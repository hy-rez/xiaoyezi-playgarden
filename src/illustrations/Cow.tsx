import {Eye,FrontLegs} from './Details';
const coat='#faf2db',spot='#536055',rose='#dfa79a';
export function Cow(){return <g>
 {/* The tail grows out of the hindquarters and falls into a soft tuft. */}
 <path d="M245 213 C267 217 289 218 289 235 Q290 248 278 254" stroke="#d4ceb3" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
 <path d="M279 250 C286 254 284 263 279 268 Q269 267 271 259 Q273 254 279 250Z" fill="#69715d"/>
 <path d="M276 257 Q273 262 276 266 M280 255 Q281 261 278 266" stroke="#93967d" strokeWidth="1.2" fill="none"/>
 <FrontLegs fill={coat} shade="#dddcc3" hoof="#797460"/>
 <path d="M148 207 C147 189 163 181 181 183 L220 183 C241 185 254 198 251 217 L246 234 Q227 246 200 246 Q171 246 153 233Z" fill={coat}/>
 {/* Spots stay on the body, away from the pale ankles. */}
 <path d="M155 205 C155 196 165 194 173 198 Q188 200 186 211 C188 221 177 227 169 224 Q156 222 155 214Z" fill={spot}/>
 <path d="M222 195 Q236 190 244 203 C249 211 243 224 232 223 Q220 225 218 213 Q213 202 222 195Z" fill={spot}/>
 <path d="M159 103 C145 88 139 69 149 55 Q168 63 174 99 M226 99 Q232 63 251 55 C261 69 255 88 241 103Z" fill="#cdb381"/>
 <path d="M149 115 C126 97 102 103 104 118 Q109 136 142 138 M251 115 C274 97 298 103 296 118 Q291 136 258 138" fill={coat}/>
 <path d="M142 118 Q116 106 114 117 Q119 128 141 130 M258 118 Q284 106 286 117 Q281 128 259 130" fill="#e6b5a5"/>
 <path d="M139 145 C137 107 160 90 197 90 C237 89 262 109 261 147 L258 175 C249 201 224 210 200 210 Q156 209 141 179Z" fill={coat}/>
 <path d="M146 113 C152 98 165 93 177 99 Q194 111 186 128 Q181 141 167 148 L145 143Z" fill={spot}/>
 <ellipse cx="176" cy="141" rx="6.2" ry="7" fill={coat}/><Eye x={176} y={141} r={4.3}/><Eye x={224} y={141}/>
<path d="M160 72 Q164 82 165 91 M240 72 Q236 82 235 91" stroke="#b59c72" strokeWidth="1.5" fill="none"/>
 <ellipse cx="200" cy="180" rx="58" ry="31" fill={rose}/>
<path d="M174 165 Q179 163 183 165 M217 165 Q222 163 226 165" stroke="#ecc3ae" strokeWidth="1.8" fill="none"/>
 <ellipse cx="178" cy="177" rx="6.5" ry="9" fill="#946c62"/><ellipse cx="222" cy="177" rx="6.5" ry="9" fill="#946c62"/>
 <path d="M188 194 Q200 205 212 194" fill="none" stroke="#59654f" strokeWidth="2.6" strokeLinecap="round"/>
 <path d="M166 160 Q173 156 181 158" stroke="#ebc1ae" strokeWidth="3" fill="none" strokeLinecap="round"/>
 </g>}
