import {Eye} from './Details';
const coat='#cf8b50',cream='#fff4dc';
export function Fox(){return <g>
 {/* A broad tail narrows into the haunch; its white tip follows the fur contour. */}
 <path d="M235 224 C268 228 286 212 294 183 L307 145 C322 183 324 220 296 237 Q269 259 235 245Z" fill={coat}/>
 <path d="M294 183 L307 145 C315.7 167.04 320.03 188.74 316.66 206.4 L309 202 304 210 295 205 288 211 Q294 196 294 183Z" fill={cream}/>
 <path d="M276 234 Q293 230 301 218" stroke="#b87946" strokeWidth="1.7" fill="none"/>
 <path d="M150 211 C150 190 169 181 196 183 C222 182 245 195 245 220 L239 248 Q200 264 157 246Z" fill={coat}/>
 <path d="M175 198 Q200 185 222 199 L213 210 219 216 212 242 Q200 254 185 243 L177 215 183 211Z" fill={cream}/>
 <path d="M145 123 L146 72 Q164 83 183 107 M217 107 Q236 83 254 72 L255 123" fill={coat}/>
 <path d="M153 106 L153 87 173 106 M227 106 L247 87 247 106" fill="#e6baa0"/>
 <path d="M139 141 C139 109 166 98 200 100 C234 98 261 109 261 141 Q260 174 245 187 L251 189 238 193 Q222 207 200 209 Q178 207 162 193 L149 189 155 187 Q140 173 139 141Z" fill={coat}/>
 <path d="M140 151 Q162 151 184 171 L200 184 216 171 Q238 151 260 151 Q258 175 239 187 L245 188 Q225 202 200 209 Q175 202 155 188 L161 187 Q142 175 140 151Z" fill={cream}/>
 <Eye x={176} y={141}/><Eye x={224} y={141}/>
 <path d="M191 176 Q200 171 209 176 Q210 182 200 186 Q190 182 191 176Z" fill="#384740"/>
 <path d="M200 185 V190 M200 189 Q190 200 181 190 M200 189 Q210 200 219 190" stroke="#384740" strokeWidth="2.3" fill="none"/>
 <path d="M166 174 L147 170 M166 181 L144 182 M234 174 L253 170 M234 181 L256 182" stroke="#a78c69" strokeWidth="1.1"/>
 <path d="M163 216 Q157 234 165 250 M237 216 Q243 234 235 250" stroke="#b87946" strokeWidth="1.6" fill="none"/>
 <ellipse cx="170" cy="256" rx="25" ry="11" fill={coat}/><ellipse cx="230" cy="256" rx="25" ry="11" fill={coat}/>
 <path d="M160 255 v5 M168 257 v5 M232 257 v5 M240 255 v5" stroke="#a96f41" strokeWidth="1.3"/>
 </g>}
