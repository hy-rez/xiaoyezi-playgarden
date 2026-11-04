import {Swan,Crane} from './LongNeckBirds';
import {Pigeon} from './Pigeon';
import {Parrot} from './Parrot';
import {Eye} from './Details';
export const birdNames=['duck','goose','chicken','owl','crow','pigeon','eagle','parrot','peacock','turkey','swan','crane','penguin'] as const;
export type BirdName=typeof birdNames[number];
const cream='#fff4dc';
function Feet({web=false,raptor=false}:{web?:boolean;raptor?:boolean}){return <g strokeLinecap="round" strokeLinejoin="round">
 <path d="M179 236 L177 258 M221 236 L223 258" stroke="#b18a52" strokeWidth="4" fill="none"/>
 {web?<><path d="M177 254 Q169 263 157 267 Q166 270 176 268 Q185 272 195 268 Q184 260 177 254Z M223 254 Q215 263 205 268 Q215 272 224 268 Q234 270 243 267 Q231 263 223 254Z" fill="#d5a254"/><path d="M176 259 L168 266 M178 259 L184 267 M222 259 L216 267 M224 259 L232 266" stroke="#ad8044" strokeWidth="1.3" fill="none"/></>:<><path d="M177 257 L164 266 M177 257 L177 269 M177 257 L190 266 M223 257 L210 266 M223 257 L223 269 M223 257 L236 266" stroke="#b18a52" strokeWidth={raptor?4:2.8} fill="none"/>{raptor&&<path d="M164 265 q-5 0 -5 5 M177 268 q-4 0 -4 5 M190 265 q-3 0 -3 5 M210 265 q-5 0 -5 5 M223 268 q-4 0 -4 5 M236 265 q-3 0 -3 5" stroke="#4c5145" strokeWidth="2.2" fill="none"/>}</>}
 </g>}
function Wing({long=false,fill,stroke}:{long?:boolean;fill:string;stroke:string}){return <g>
 <path d={long?'M153 205 C175 184 211 189 231 216 Q201 242 153 225 Q164 219 153 205Z':'M153 180 C183 165 220 181 230 223 Q194 241 166 212 Q159 204 153 180Z'} fill={fill}/>
 <path d={long?'M164 207 Q185 198 209 213 M171 216 Q192 209 217 220 M176 225 Q198 220 220 225':'M166 187 Q194 182 217 215 M164 196 Q185 195 205 220 M174 210 Q188 211 197 222'} fill="none" stroke={stroke} strokeWidth="1.8" opacity=".65"/>
 </g>}
export function Bird({name}:{name:BirdName}){return name==='swan'?<Swan/>:name==='crane'?<Crane/>:name==='pigeon'?<Pigeon/>:name==='parrot'?<Parrot/>:<GenericBird name={name}/>;}
function GenericBird({name}:{name:BirdName}){
 if(name==='penguin')return <g>
 <Feet web/><path d="M151 169 C120 186 116 217 130 236 Q139 223 159 205 M249 169 C280 186 284 217 270 236 Q261 223 241 205" fill="#424e49"/>
 <path d="M142 180 C141 151 149 144 153 123 C154 94 173 74 200 74 C227 74 246 94 247 123 C251 144 259 151 258 180 Q266 259 200 263 Q134 259 142 180Z" fill="#4c5550"/>
 <path d="M200 112 C172 90 155 126 168 151 C144 184 151 247 200 251 C249 247 256 184 232 151 C245 126 228 90 200 112Z" fill={cream}/>
 <Eye x={180} y={130}/><Eye x={220} y={130}/><path d="M185 147 Q200 138 215 147 L200 160Z" fill="#d5a052"/><path d="M189 148 H211" stroke="#b18743" strokeWidth="1.5"/>
 <path d="M126 217 Q128 226 130 229 M274 217 Q272 226 270 229" stroke="#718174" strokeWidth="2" fill="none"/>
 </g>;
 if(name==='owl')return <g>
 <Feet raptor/><path d="M142 142 Q123 190 141 241 L164 218 M258 142 Q277 190 259 241 L236 218" fill="#8c7657"/>
 <path d="M143 143 L144 82 173 103 Q200 91 227 103 L256 82 257 143 C273 218 245 253 200 255 C155 253 127 218 143 143Z" fill="#aa8f66"/>
 <path d="M149 107 L150 94 163 109 M237 109 L250 94 251 107" fill="#806b50"/>
 <path d="M200 120 C175 87 140 115 146 147 Q146 176 176 179 Q191 178 200 164 Q209 178 224 179 Q254 176 254 147 C260 115 225 87 200 120Z" fill={cream}/>
 <g fill="#dfc467"><circle cx="173" cy="140" r="18"/><circle cx="227" cy="140" r="18"/></g><Eye x={173} y={140} r={7}/><Eye x={227} y={140} r={7}/>
 <path d="M192 160 L200 178 208 160 Q200 156 192 160Z" fill="#9a7842"/>
 <path d="M159 199 q7 10 14 0 M183 199 q7 10 14 0 M207 199 q7 10 14 0 M231 199 q5 8 10 0 M173 219 q7 10 14 0 M201 219 q7 10 14 0 M190 238 q7 8 14 0" fill="none" stroke="#806b4d" strokeWidth="2"/>
 <path d="M138 183 Q138 208 147 222 M262 183 Q262 208 253 222" stroke="#bfa47c" strokeWidth="2" fill="none"/>
 </g>;
 if(name==='peacock'||name==='turkey'){const peacock=name==='peacock';return <g>
 {Array.from({length:11},(_,i)=><g key={i} transform={`rotate(${(i-5)*15} 200 226)`}>
 <path d="M191 225 C182 191 176 105 183 68 Q200 35 217 68 C224 105 218 191 209 225Z" fill={peacock?(i%2?'#83a381':'#779a7a'):(i%2?'#a9855d':'#8e7353')}/>
 <path d="M200 211 V86 M200 132 L189 120 M200 152 L212 140 M200 175 L189 163" stroke={peacock?'#5b8267':'#725b43'} strokeWidth="1.3" fill="none" opacity=".7"/>
 {peacock?<><ellipse cx="200" cy="83" rx="13" ry="20" fill="#d8c580"/><ellipse cx="200" cy="82" rx="8" ry="13" fill="#527d84"/><ellipse cx="200" cy="80" rx="4.5" ry="8" fill="#334e5c"/><path d="M194 76 Q200 68 206 77" stroke="#acbb91" strokeWidth="1.5" fill="none"/></>:<path d="M184 79 Q200 92 216 79 M187 95 Q200 105 213 95" stroke={cream} strokeWidth="5" fill="none"/>}
 </g>)}
 <Feet/><ellipse cx="200" cy="220" rx="40" ry="33" fill={peacock?'#547d8b':'#79664e'}/>
 <path d="M168 218 Q180 199 195 224 M205 224 Q220 199 232 218" stroke={peacock?'#416b78':'#a58a61'} strokeWidth="3" fill="none"/>
 <path d="M207 225 C195 199 194 172 210 145 Q220 132 215 120" stroke={peacock?'#547d8b':'#b77b6c'} strokeWidth={peacock?20:17} fill="none"/>
 <circle cx="217" cy="124" r="21" fill={peacock?'#547d8b':'#cda69b'}/>
 {peacock?<><path d="M214 108 L205 88 M220 105 V84 M226 108 L233 89" stroke="#547d8b" strokeWidth="2.5"/><g fill="#416b78"><circle cx="205" cy="88" r="4"/><circle cx="220" cy="84" r="4"/><circle cx="233" cy="89" r="4"/></g><path d="M220 119 Q230 114 232 120 M220 129 Q229 134 232 128" stroke={cream} strokeWidth="2.2" fill="none"/></>:<path d="M230 131 C247 140 239 160 229 164 L226 143Z" fill="#b96156"/>}
 <path d="M235 123 L254 133 235 137Z" fill="#c8a15e"/><Eye x={225} y={123} r={3.5}/>
 </g>}
 const swan=name==='swan',crane=name==='crane',goose=name==='goose',chicken=name==='chicken',duck=name==='duck',long=swan||crane||goose;
 const crow=name==='crow',pigeon=name==='pigeon',eagle=name==='eagle',parrot=name==='parrot';
 const color=crow?'#4b5553':pigeon?'#a3afae':eagle?'#8e7357':parrot?'#85a378':duck?'#e5c45e':cream;
 const wing=crow?'#394643':pigeon?'#879d9f':eagle?'#715c48':parrot?'#487f69':duck?'#d6af45':'#e7dfc7';
 const feather=crow?'#63716a':pigeon?'#566e70':eagle?'#b99a72':parrot?'#98b99a':duck?'#b9973c':'#bdb8a3';
 return <g>
 {crane?<g stroke="#72786b" fill="none"><path d="M176 226 L176 266 M215 227 L220 247 239 266" strokeWidth="4"/><path d="M176 266 L164 271 M176 266 V273 M176 266 L189 270 M239 266 L232 271 M239 266 L246 272 M239 266 L254 268" strokeWidth="2"/></g>:<Feet web={duck||goose||swan} raptor={eagle}/>}
 {chicken?<><path d="M155 201 C126 177 108 144 121 132 Q143 143 155 173 C143 139 140 117 153 119 Q176 143 169 189Z" fill="#4e6c5a"/><path d="M145 189 Q118 162 115 150 M155 182 Q143 148 152 135" stroke="#82917a" strokeWidth="2" fill="none"/></>:
 <path d={parrot?'M165 220 L143 274 Q164 263 185 237Z':eagle?'M162 217 L144 258 192 237Z':long?'M151 208 Q132 201 116 201 Q129 223 156 231Z':'M154 207 L120 224 Q141 231 170 234Z'} fill={parrot?'#467e69':color}/>}
 <ellipse cx="196" cy={long?216:202} rx={long?63:59} ry={long?32:48} fill={color}/>
 {long?<path d={swan?'M235 215 C274 202 228 150 249 115 C261 94 282 94 286 111':goose?'M232 213 C216 186 218 150 230 112 Q236 97 243 95':'M235 211 Q243 157 257 99'} stroke={color} strokeWidth={swan?22:goose?26:17} fill="none"/>:null}
 {/* A tapered neck bridges the head and breast without a circular notch. */}
 {!long&&<path d="M211 153 C210 168 211 181 206 194 L247 199 C251 184 247 173 253 158Z" fill={color}/>}
 <Wing long={long} fill={wing} stroke={feather}/>
 <circle cx={swan?277:crane?260:goose?242:236} cy={swan?106:crane?95:goose?98:135} r={long?crane?20:27:36} fill={eagle?cream:color}/>
 {crane&&<><path d="M250 110 L239 174" stroke="#48534d" strokeWidth="7"/><path d="M250 81 Q260 75 271 83" stroke="#bc6b5c" strokeWidth="6"/></>}
 {chicken&&<><path d="M213 103 C202 85 213 80 221 85 C220 62 234 62 238 84 C252 66 264 77 255 96 Q267 91 264 106Z" fill="#c85e51"/><path d="M257 155 Q276 168 260 184 Q249 175 252 159Z" fill="#c85e51"/></>}
 {pigeon&&<><path d="M216 163 Q237 180 256 158" stroke="#698f7d" strokeWidth="8" fill="none"/><path d="M220 166 L229 170" stroke="#aac0a3" strokeWidth="2"/><path d="M164 195 Q177 214 190 219 M177 187 Q194 209 208 216" stroke="#526a69" strokeWidth="4" fill="none"/></>}
 {parrot&&<path d="M239 112 Q261 113 265 132 Q264 151 250 154 L241 140Z" fill="#e6e4cd"/>}
 {swan&&<path d="M288 95 Q301 98 301 109 L288 113Z" fill="#384740"/>}
 <path d={parrot?'M264 126 Q289 126 281 150 Q276 143 268 142 L265 152 258 140Z':eagle?'M266 134 Q293 132 284 155 Q281 146 268 146Z':crane?'M278 94 L315 103 278 106Z':swan?'M297 104 Q310 104 320 115 L298 116Z':goose?'M267 96 L302 108 Q288 118 266 114Z':duck?'M268 136 Q299 132 299 145 Q299 157 265 158Z':chicken?'M269 133 L293 145 268 151Z':pigeon?'M267 133 L285 141 268 146Z':'M267 129 Q286 134 296 147 L269 149Z'} fill={crow?'#34443d':parrot?'#384740':'#cc9e52'}/>
 <path d={long?(swan?'M300 112 L314 114':goose?'M270 109 L293 109':'M280 101 L306 103'):duck?'M270 148 L292 147':parrot?'M269 136 Q276 134 282 138':eagle?'M268 141 L281 141':chicken?'M271 144 L285 145':'M270 142 L281 144'} stroke={crow?'#738173':'#9d7c43'} strokeWidth="1.2" fill="none"/>
 <Eye x={swan?284:crane?264:goose?249:247} y={swan?101:crane?92:goose?94:131} r={long?3.8:4.2}/>
 {eagle&&<path d="M235 121 L251 124" stroke="#7a694e" strokeWidth="2.3"/>}
 </g>
}
