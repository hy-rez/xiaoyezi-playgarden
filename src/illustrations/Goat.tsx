import {Hoof} from './Details';

const coat='#e9dfc8',light='#fff4dd',shade='#cbbd9f',horn='#a08b6c';

/** A compact goat: swept horns, a tapered face, horizontal pupil and short upright tail. */
export function Goat(){return <g>
  {/* Far limbs and the short raised tail are covered at their roots by the torso. */}
  <path d="M116 179 Q96 180 87 161 Q101 159 119 172Z" fill={coat}/>
  <path d="M98 165 Q106 168 112 173" fill="none" stroke={shade} strokeWidth="1.5"/>
  <path d="M144 210 L139 236 145 258 154 258 153 237 162 209 M226 207 L234 235 233 258 243 258 248 231 243 204" fill={shade}/>
  <Hoof x={150} y={263} width={11}/><Hoof x={238} y={263} width={11}/>

  {/* Filled tapered horns bend backward; all ridges stay inside the horn shapes. */}
  <path d="M260 103 C266 73 252 47 223 38 C242 55 248 77 247 104Z" fill="#b8a589"/>
  <path d="M238 104 C240 77 221 49 192 47 C218 61 222 82 224 107Z" fill={horn}/>
  <path d="M228 91 l8 -2 M225 81 l8 -2 M221 71 l7 -3 M252 87 l7 -1 M250 76 l7 -1 M246 65 l6 -1" stroke="#88775d" strokeWidth="1.3" fill="none"/>

  <path d="M108 186 C109 166 127 155 150 156 C174 157 191 165 210 160 C220 148 220 124 233 108 C242 96 257 95 267 103 C276 112 275 120 282 130 L301 147 C309 156 301 166 291 166 C281 167 273 162 266 157 L262 182 C260 205 242 222 219 225 L146 226 C122 225 105 210 108 186Z" fill={coat}/>
  <path d="M117 191 Q123 212 148 216 L210 216 Q235 214 245 202 Q236 225 213 225 L146 226 Q121 224 117 191Z" fill="#ded1b5"/>
  {/* The chin covers the beard root; a soft tuft replaces the detached triangle. */}
  <path d="M275 158 Q284 164 294 160 Q292 179 283 188 L282 182 277 185 Q279 179 275 173Z" fill="#b9aa8b"/>
  <path d="M284 169 Q285 175 282 179" stroke="#9d8e72" strokeWidth="1.2" fill="none"/>

  {/* A narrow cheek and small muzzle, rather than the horse-like round muzzle. */}
  <path d="M262 120 C265 132 278 144 290 149 Q299 152 303 155 Q302 166 291 166 Q275 165 266 152 Q259 138 262 120Z" fill={light}/>
  <path d="M298 147 Q304 148 305 153 Q300 157 296 153Z" fill="#786a54"/>
  <path d="M299 155 L297 159 Q292 162 286 159" stroke="#857257" strokeWidth="1.4" fill="none"/>
  <path d="M252 100 Q265 93 278 98 Q278 109 265 115Z" fill={coat}/>
  <path d="M261 105 Q267 101 273 101 Q271 107 264 110Z" fill="#ccb194"/>
  <path d="M242 111 C229 100 215 99 205 103 C211 117 224 123 237 118Z" fill={coat}/>
  <path d="M233 112 Q221 105 212 106 Q220 115 231 115Z" fill="#ceb79a"/>
  <path d="M242 103 Q249 100 254 105 L251 109 246 106 242 109Z" fill={light}/>
  <path d="M255 123 Q261 118 267 123 Q263 130 256 127Z" fill="#826e4d"/>
  <ellipse cx="261" cy="123.5" rx="4.1" ry="3.2" fill="#c9af6d"/>
  <rect x="257.7" y="122.5" width="6.2" height="1.9" rx=".9" fill="#394337"/>
  <circle cx="259" cy="122" r=".8" fill="#fff8e8"/>
  <path d="M254 117 Q259 114 264 116" stroke="#b8a78a" strokeWidth="1.2" fill="none"/>

  {/* Slender near legs with a subtle hock and paired hooves. */}
  <path d="M129 210 Q126 225 130 238 L126 260 138 260 143 237 151 211 M216 211 L212 235 215 260 227 260 226 237 234 208" fill={coat}/>
  <Hoof x={132} y={265} width={13}/><Hoof x={221} y={265} width={13}/>
  <path d="M130 236 l8 1 M215 235 l7 1 M246 172 Q245 186 237 194" stroke="#c1b292" strokeWidth="1.3" fill="none"/>
</g>}
