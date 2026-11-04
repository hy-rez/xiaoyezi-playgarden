import {Eye,Hoof} from './Details';
const coat='#8f7c65',shade='#71634f';
export function Boar(){return <g>
 <path d="M118 203 Q98 203 94 223" stroke={shade} strokeWidth="3.2" fill="none"/><path d="M94 220 Q88 226 92 233 Q100 232 98 225Z" fill="#574f42"/>
 <path d="M153 215 L153 251 168 252 177 214 M235 212 L241 252 255 251 253 207" fill={shade}/><Hoof x={160} y={259} width={13}/><Hoof x={248} y={259} width={13}/>
 <path d="M111 203 C111 180 133 165 158 168 C179 164 205 159 228 159 Q248 156 266 168 L312 188 Q328 196 320 210 Q314 221 299 217 L275 211 Q253 235 218 234 L144 234 Q112 230 111 203Z" fill={coat}/>
 <path d="M140 172 L146 167 151 170 158 163 164 167 172 159 178 164 187 157 192 162 202 157 209 162 222 159 229 164Z" fill={shade}/>
 <path d="M245 169 Q231 157 232 145 Q248 144 257 164 M271 169 Q274 152 286 153 L282 174" fill={coat}/>
 <path d="M239 151 Q246 153 250 161 M278 159 L279 168" stroke="#bd9f7a" strokeWidth="2.3" fill="none"/>
 <path d="M252 173 Q262 166 272 176 L305 197 Q297 213 278 207 L258 195Z" fill="#7d6c56"/>
 <path d="M136 218 L133 256 Q141 263 151 256 L160 219 M216 219 L220 256 Q229 263 240 256 L241 218" fill={coat}/><Hoof x={142} y={264} width={15}/><Hoof x={230} y={264} width={15}/>
 <path d="M304 187 C320 183 331 192 328 203 Q327 217 313 218 Q302 217 301 204Z" fill="#b29a7b"/>
 <ellipse cx="313" cy="201" rx="2.5" ry="4" fill="#615240"/><ellipse cx="323" cy="201" rx="2.2" ry="3.7" fill="#615240"/>
 <Eye x={273} y={178} r={3.7}/><path d="M264 172 Q271 168 278 173" stroke="#5d5140" strokeWidth="1.8" fill="none"/>
 <path d="M286 209 Q303 218 319 211" stroke="#554b3a" strokeWidth="1.7" fill="none"/>
 <path d="M286 214 C295 212 300 203 298 190 Q309 202 300 216 Q294 222 286 218Z" fill="#efe3c4"/>
 <path d="M298 210 Q302 205 300 199" stroke="#d6c5a4" strokeWidth="1" fill="none"/>
 <path d="M149 180 l5 -5 M164 177 l5 -5 M183 176 l6 -5 M198 173 l5 -5 M144 201 l9 2 M171 189 l9 2 M191 211 l10 -1 M220 187 l7 2" stroke="#ac9475" strokeWidth="1.4"/>
 </g>}
