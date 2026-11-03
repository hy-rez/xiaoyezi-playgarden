import {Turtle,Frog} from './SmallAnimals';
import {Eye} from './Details';
export type AquaticName='dolphin'|'whale'|'seal'|'alligator'|'turtle'|'frog';
export function AquaticAnimal({name}:{name:AquaticName}){
 if(name==='turtle')return <Turtle/>;
 if(name==='frog')return <Frog/>;
 if(name==='dolphin')return <g>
 <path d="M172 151 Q187 121 204 125 Q198 142 211 157Z" fill="#719ca6"/>
 <path d="M106 178 C82 175 75 163 58 166 Q61 185 80 195 Q59 202 61 220 Q87 218 108 202Z" fill="#79a3ac"/>
 <path d="M94 181 C118 155 159 140 197 145 C231 146 251 159 277 158 L307 151 Q322 149 323 157 Q323 164 310 168 L289 175 C265 197 238 213 201 214 C157 214 119 201 94 193Z" fill="#91b5bd"/>
 <path d="M111 188 Q178 219 239 199 L282 173 Q266 197 235 207 Q166 225 111 188Z" fill="#cadbd6"/>
 <path d="M198 184 C200 205 222 236 242 225 Q247 219 229 205 L216 184Z" fill="#719ca6"/>
 <Eye x={278} y={164} r={3.9}/><path d="M284 177 Q297 179 310 168" fill="none" stroke="#4f7d87" strokeWidth="2" strokeLinecap="round"/>
 <path d="M257 157 L264 155" stroke="#618e99" strokeWidth="2.4" strokeLinecap="round"/>
 </g>;
 if(name==='whale')return <g>
 <path d="M112 184 C83 184 74 168 55 172 Q57 189 76 199 Q58 208 60 225 Q87 221 116 211Z" fill="#658d9c"/>
 <path d="M104 187 C128 153 174 143 211 151 Q229 158 239 156 C283 151 315 167 323 190 C333 219 304 236 271 239 L193 237 C150 232 126 214 104 208Z" fill="#7da4b0"/>
 <path d="M175 153 Q186 138 197 149 L214 157" fill="#648b98"/>
 <path d="M121 208 C179 230 262 246 314 215 Q294 245 242 240 Q164 237 121 208Z" fill="#d0dfd8"/>
 <path d="M205 201 C210 228 234 264 260 249 Q267 243 251 235 L228 202Z" fill="#628d9e"/>
 <path d="M274 220 Q300 229 316 210" stroke="#4b7888" strokeWidth="2.4" fill="none"/>
 <Eye x={297} y={191} r={4}/><path d="M275 165 Q282 161 286 165" stroke="#4c7988" strokeWidth="2" fill="none"/>
 <path d="M274 149 Q276 120 257 122 M277 149 Q289 119 302 130" stroke="#a9c9ca" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
 <path d="M272 224 Q270 231 268 234 M283 225 Q282 231 280 235 M294 224 L293 233" stroke="#adc9c8" strokeWidth="1.5" fill="none"/>
 </g>;
 if(name==='seal')return <g>
 <path d="M137 222 Q109 213 84 226 Q93 235 111 239 Q85 242 82 253 Q106 264 144 244Z" fill="#9d8d77"/>
 <path d="M225 213 Q193 230 183 250 Q200 260 229 243Z" fill="#8e7d69"/>
 <path d="M119 218 C119 192 152 184 183 195 Q211 207 225 190 L232 148 C233 124 249 112 266 117 C286 121 292 145 282 162 C276 175 282 197 276 216 C267 238 235 247 204 244 L154 242 Q129 239 119 218Z" fill="#b09e84"/>
 <path d="M238 145 Q218 133 223 151 Q228 158 235 155Z" fill="#8e7d69"/>
 <path d="M235 218 C216 234 216 251 227 257 Q245 258 259 243 L262 226Z" fill="#917f69"/>
 <path d="M228 245 L230 252 M238 243 L240 250 M248 239 L250 246" stroke="#c9b89a" strokeWidth="1.8"/>
 <ellipse cx="279" cy="154" rx="23" ry="14" fill="#d5bea1"/><Eye x={267} y={137} r={4.1}/><ellipse cx="296" cy="150" rx="6" ry="4.5" fill="#544f43"/>
 <path d="M281 160 Q288 165 295 158 M281 158 L313 156 M281 165 L309 172" fill="none" stroke="#796d58" strokeWidth="1.6" strokeLinecap="round"/>
 </g>;
 return <g>
 <path d="M147 221 C121 225 109 249 86 250 Q62 251 59 234 Q76 240 87 225 L111 202Z" fill="#819972"/>
 <path d="M157 213 Q139 230 145 248 L165 251 M236 216 Q249 232 263 239 L270 247" fill="none" stroke="#728d65" strokeWidth="13" strokeLinecap="round"/>
 <path d="M109 209 C109 183 145 176 178 183 L224 188 Q247 176 270 182 L310 187 Q331 186 337 201 Q341 211 323 216 L282 221 Q254 242 218 241 L151 239 C128 237 112 225 109 209Z" fill="#91a87d"/>
 <path d="M137 230 Q122 245 127 255 Q140 265 155 258 L168 243 M227 230 Q224 249 238 256 L262 257" fill="none" stroke="#819972" strokeWidth="14" strokeLinecap="round"/>
 <path d="M129 253 l-6 6 M138 257 l-1 6 M147 255 l3 6 M248 255 l1 7 M257 254 l3 7" stroke="#dce3bf" strokeWidth="2"/>
 <path d="M147 185 Q154 172 161 186 M171 184 Q178 170 185 186 M197 187 Q205 174 212 190" fill="#708b63"/>
 <path d="M132 217 Q174 238 222 229" stroke="#c0cba3" strokeWidth="7" fill="none" strokeLinecap="round"/>
 <path d="M247 184 Q245 166 258 167 Q272 169 268 187" fill="#91a87d"/><Eye x={259} y={179} r={4}/>
 <path d="M273 207 Q305 212 329 203" stroke="#576f4c" strokeWidth="2.3" fill="none"/>
 <path d="M286 209 l4 7 5 -7 M309 209 l4 6 4 -8" fill="#f5efcf"/>
 <ellipse cx="323" cy="196" rx="2.8" ry="2" fill="#596e4d"/>
 </g>;
}
