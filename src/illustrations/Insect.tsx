import {Bumblebee} from './Bumblebee';
import {Eye} from './Details';
export const insectNames=['bee','cricket','cicada'] as const;
export type InsectName=typeof insectNames[number];
export function Insect({name}:{name:InsectName}){return name==='bee'?<Bumblebee/>:<OtherInsect name={name}/>;}
function OtherInsect({name}:{name:InsectName}){
 if(name==='cricket')return <g>
 <g stroke="#8d9b73" strokeWidth="2.5" fill="none"><path d="M168 202 L145 224 126 232 M191 211 L183 234 167 245 M232 208 L254 177 276 246"/></g>
 <path d="M151 175 C139 137 121 105 106 88 M161 173 C155 133 166 92 179 73" fill="none" stroke="#69794e" strokeWidth="2"/>
 <path d="M176 187 C195 174 236 177 260 195 Q277 209 257 220 Q215 233 178 213Z" fill="#7e8f5d"/>
 <path d="M178 187 Q223 173 259 201 Q239 217 183 210Z" fill="#a1ad78"/>
 <path d="M184 190 Q219 189 252 202 M189 197 Q218 202 242 206 M198 188 L206 211 M213 188 L222 211 M229 192 L235 210" stroke="#7d9160" strokeWidth="1.3" fill="none"/>
 <path d="M264 207 L298 204 M265 214 L295 220" stroke="#647849" strokeWidth="2.4"/>
 <path d="M174 182 Q189 184 188 208 L172 214 Q157 205 162 189Z" fill="#708354"/>
 <path d="M174 187 L181 207" stroke="#a7b37e" strokeWidth="2"/>
 <path d="M174 180 C168 167 150 168 141 181 Q131 196 147 208 L161 212 174 201Z" fill="#7e8f5d"/><Eye x={149} y={184} r={4.5}/>
 <path d="M143 199 Q147 202 151 200" stroke="#4f633f" strokeWidth="1.4" fill="none"/>
 <path d="M237 207 L263 164 Q266 160 269 167 L290 245" stroke="#647849" strokeWidth="6" fill="none"/>
 <path d="M237 207 L263 164" stroke="#99a672" strokeWidth="2"/>
 <path d="M176 210 L161 239 146 242 143 247 M197 218 L192 248 179 251 177 255 M290 245 L283 254 269 256" fill="none" stroke="#647849" strokeWidth="3"/>
 <path d="M273 192 l4 -1 M276 203 l4 -1 M279 215 l4 -1 M282 227 l4 -1" stroke="#647849" strokeWidth="1.5"/>
 </g>;
 return <g>
 <g stroke="#7c896c" strokeWidth="2.6" fill="none"><path d="M181 153 L148 140 135 153 M180 178 L146 178 130 193 M182 201 L152 215 141 238 M219 153 L252 140 265 153 M220 178 L254 178 270 193 M218 201 L248 215 259 238"/></g>
 <path d="M194 130 L178 119 172 109 M206 130 L222 119 228 109" fill="none" stroke="#53644b" strokeWidth="2"/>
 <path d="M179 162 C177 188 178 236 200 258 C222 236 223 188 221 162Z" fill="#9a9972"/>
 <path d="M180 181 Q200 188 220 181 M180 197 Q200 204 220 197 M183 214 Q200 221 217 214 M188 231 Q200 236 212 231 M194 246 H206" stroke="#696d53" strokeWidth="3" fill="none"/>
 <g fill="#d9e2cd" fillOpacity=".78" stroke="#aab99a" strokeWidth="1.2"><path d="M183 151 C164 153 138 203 133 239 Q131 262 146 257 C169 245 190 196 195 161Z"/><path d="M217 151 C236 153 262 203 267 239 Q269 262 254 257 C231 245 210 196 205 161Z"/></g>
 <g fill="none" stroke="#9faa8d" strokeWidth="1.25"><path d="M185 158 L143 248 M175 178 L151 189 146 207 161 208 M165 199 L141 219 140 237 M158 216 L153 240 M175 178 L178 196 M215 158 L257 248 M225 178 L249 189 254 207 239 208 M235 199 L259 219 260 237 M242 216 L247 240 M225 178 L222 196"/></g>
 <path d="M177 145 Q200 132 223 145 L219 169 Q200 183 181 169Z" fill="#7e8963"/>
 <path d="M183 151 Q200 141 217 151 M188 156 L187 167 M212 156 L213 167" stroke="#a9b18a" strokeWidth="2" fill="none"/>
 <ellipse cx="200" cy="136" rx="32" ry="21" fill="#8f946f"/><Eye x={173} y={135} r={5.6}/><Eye x={227} y={135} r={5.6}/>
 <g fill="#c2b891"><circle cx="193" cy="131" r="2"/><circle cx="207" cy="131" r="2"/><circle cx="200" cy="141" r="2"/></g><path d="M200 151 V163" stroke="#596a50" strokeWidth="2"/>
 </g>;
}
