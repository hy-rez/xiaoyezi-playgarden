/** A friendly, clothed child in the garden's flat illustration palette. */
export function BodyCover({className=''}:{className?:string}){
 return <svg className={'art '+className} viewBox="0 0 400 300" role="img" aria-label="挥手的小朋友，认识我们的身体">
  <ellipse cx="200" cy="270" rx="142" ry="15" fill="#d5ddbd"/>
  <circle cx="75" cy="60" r="18" fill="#eed798"/>
  <path d="M300 82Q335 40 354 85Q330 105 300 82" fill="#c1d0ab"/>
  <path d="M40 252Q60 217 80 252M325 252Q345 212 360 249" stroke="#9aac82" fill="none" strokeWidth="7" strokeLinecap="round"/>
  <g className="character" strokeLinecap="round" strokeLinejoin="round">
   <path d="M180 224 177 260M218 224 223 260" stroke="#d6b18b" strokeWidth="19"/>
   <path d="M166 263h17M217 263h20" stroke="#8f9d83" strokeWidth="17"/>
   <path d="M171 145Q148 168 137 194" stroke="#e7bf9b" strokeWidth="18" fill="none"/>
   <ellipse cx="134" cy="200" rx="10" ry="13" fill="#e7bf9b" transform="rotate(20 134 200)"/>
   <path d="M228 149Q248 155 265 119" stroke="#e7bf9b" strokeWidth="18" fill="none"/>
   <path d="M264 120 261 101M267 118 270 97M271 119 279 103M263 121 252 111" stroke="#e7bf9b" strokeWidth="7" fill="none"/>
   <path d="M173 137Q200 125 227 137L239 159 220 171 220 215H177V172L160 166Z" fill="#a4b99a"/>
   <path d="M177 207h43v23h-19v-15h-5v15h-19Z" fill="#94aab3"/>
   <path d="M189 126v13q11 13 22 0v-13" fill="#e7bf9b"/>
   <circle cx="157" cy="91" r="11" fill="#e7bf9b"/>
   <circle cx="243" cy="91" r="11" fill="#e7bf9b"/>
   <ellipse cx="200" cy="85" rx="44" ry="49" fill="#efd0ae"/>
   <path d="M157 83Q145 43 173 35Q196 17 223 35Q252 37 243 83L232 59Q208 68 191 49Q183 66 163 67Z" fill="#79644f"/>
   <path d="M176 83h7M217 83h7" stroke="#79644f" strokeWidth="3"/>
   <ellipse cx="180" cy="92" rx="3" ry="4" fill="#605b49"/>
   <ellipse cx="220" cy="92" rx="3" ry="4" fill="#605b49"/>
   <path d="M199 94 196 102h6" stroke="#c79879" strokeWidth="2" fill="none"/>
   <ellipse cx="173" cy="104" rx="7" ry="4" fill="#dcac96"/>
   <ellipse cx="227" cy="104" rx="7" ry="4" fill="#dcac96"/>
   <path d="M189 112Q200 124 211 112" stroke="#98735f" strokeWidth="3" fill="none"/>
  </g>
 </svg>;
}
