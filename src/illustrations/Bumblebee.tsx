import {useId} from 'react';
import {Eye} from './Details';
export function Bumblebee(){const id='bumblebee-'+useId().replace(/:/g,'');return <g>
 {/* Far legs and wings are behind the three body segments. */}
 <path d="M164 186 L145 209 126 216 M188 194 L188 222 175 231 M219 195 L238 218 254 225" stroke="#78816c" strokeWidth="2.6" fill="none"/>
 <g fill="#dde8e0" fillOpacity=".8" stroke="#a7c0b3" strokeWidth="1.1">
  <path d="M190 151 C198 122 224 111 233 128 Q240 146 205 161Z"/>
  <path d="M175 151 C156 137 145 119 154 113 Q171 104 185 144Z"/>
  <path d="M181 150 C161 131 151 94 164 85 C180 75 198 111 194 143Z"/>
  <path d="M196 146 C200 118 220 82 235 91 C254 103 231 139 207 154Z"/>
 </g>
 <path d="M184 143 Q171 112 166 94 M176 124 L164 115 M181 134 L190 122 M204 144 Q224 114 234 99 M218 124 L234 119 M215 149 L229 136 M175 145 L158 122" stroke="#b2c9bd" strokeWidth="1" fill="none"/>
 <defs><clipPath id={id}><path d="M187 150 C211 136 252 145 266 166 C286 199 257 223 227 222 Q198 222 181 202Z"/></clipPath></defs>
 <path d="M187 150 C211 136 252 145 266 166 C286 199 257 223 227 222 Q198 222 181 202Z" fill="#d5b65f"/>
 <g clipPath={'url(#'+id+')'}><path d="M208 139 Q197 181 211 227 M241 142 Q226 181 242 225" stroke="#465044" strokeWidth="17" fill="none"/><path d="M260 153 Q254 187 267 204 L281 198 278 164Z" fill="#e1d7aa"/></g>
 <path d="M189 148 Q181 139 175 143 Q165 134 159 142 Q148 137 145 147 C131 159 133 181 145 192 Q144 204 154 202 Q161 212 169 206 Q179 211 184 201 Q196 201 197 187 Q204 170 195 158Z" fill="#4b5346"/>
 <path d="M151 150 l5 -3 M162 146 l6 1 M174 148 l6 2 M149 192 l5 3 M163 199 l6 1 M181 193 l5 -3" stroke="#80836a" strokeWidth="1.1"/>
 <path d="M143 153 C140 136 122 129 109 140 C97 150 100 177 112 185 Q127 196 142 183 Q153 169 143 153Z" fill="#434f44"/>
 <Eye x={118} y={158} r={6}/><path d="M110 176 Q116 180 122 176" stroke="#a5aa87" strokeWidth="1.2" fill="none"/>
 <path d="M116 139 Q111 116 95 111 M134 140 Q137 117 151 113" stroke="#405044" strokeWidth="2.7" fill="none"/><circle cx="95" cy="111" r="2.5" fill="#405044"/><circle cx="151" cy="113" r="2.5" fill="#405044"/>
 <path d="M150 193 L139 216 125 225 119 222 M181 204 L180 232 168 242 162 239 M212 215 L227 235 243 242 249 238" stroke="#465044" strokeWidth="3.7" fill="none"/>
 <path d="M217 219 L225 229" stroke="#baa256" strokeWidth="5"/>
 <path d="M204 151 l4 -1 M215 151 l4 1 M222 215 l5 1 M251 211 l4 -2" stroke="#b29c54" strokeWidth="1"/>
 </g>}
