/** Expressions stay gentle; feelings are named without labelling them good or bad. */
export function EmotionArt({emotion}:{emotion:number}){
 return <g strokeLinecap="round" strokeLinejoin="round">
 <path d="M114 268Q114 213 161 207H239Q286 213 286 268Z" fill="#a3b89a"/>
 <path d="M183 181V210Q200 228 217 210V181" fill="#e6bd97"/>
 <circle cx="128" cy="132" r="15" fill="#e8c29c"/><circle cx="272" cy="132" r="15" fill="#e8c29c"/>
 <ellipse cx="200" cy="124" rx="70" ry="83" fill="#efd0ae"/>
 <path d="M131 122Q117 54 155 40Q196 10 244 42Q283 56 269 122L254 83Q218 93 187 62Q166 94 139 94Z" fill="#79654f"/>
 <ellipse cx="152" cy="155" rx="10" ry="6" fill="#dfb39a"/><ellipse cx="248" cy="155" rx="10" ry="6" fill="#dfb39a"/>
 <path d="M199 135 195 148H204" stroke="#c9a080" strokeWidth="2.4" fill="none"/>
 {emotion===0?<><path d="M158 111Q168 106 178 111M222 111Q232 106 242 111M158 132Q168 120 178 132M222 132Q232 120 242 132" fill="none" stroke="#6e604d" strokeWidth="3"/><path d="M180 163Q200 171 220 163Q214 186 200 186Q186 186 180 163" fill="#a07c64"/><path d="M184 166Q200 173 216 166L211 173H189Z" fill="#f4e6ce"/></>:null}
 {emotion===1?<><path d="m157 114 20-9M223 105l20 9" fill="none" stroke="#79674f" strokeWidth="3"/><ellipse cx="168" cy="133" rx="4" ry="5" fill="#6d624f"/><ellipse cx="232" cy="133" rx="4" ry="5" fill="#6d624f"/><path d="M184 174Q200 159 216 174" fill="none" stroke="#94725c" strokeWidth="3"/><path d="M155 143Q144 158 155 161Q165 157 155 143" fill="#a6c7ce"/></>:null}
 {emotion===2?<><path d="m157 106 23 10M220 116l23-10" fill="none" stroke="#79674f" strokeWidth="3.5"/><ellipse cx="169" cy="133" rx="4" ry="5" fill="#6d624f"/><ellipse cx="231" cy="133" rx="4" ry="5" fill="#6d624f"/><path d="M186 170Q200 164 214 170" fill="none" stroke="#94725c" strokeWidth="3"/></>:null}
 {emotion===3?<><path d="m156 111 22-11M222 100l22 11" fill="none" stroke="#79674f" strokeWidth="3"/><ellipse cx="168" cy="131" rx="8" ry="9" fill="#f5e7d0"/><ellipse cx="232" cy="131" rx="8" ry="9" fill="#f5e7d0"/><ellipse cx="165" cy="133" rx="3" ry="4" fill="#6d624f"/><ellipse cx="229" cy="133" rx="3" ry="4" fill="#6d624f"/><path d="M184 171q5-5 10 0t10 0t10 0" fill="none" stroke="#94725c" strokeWidth="2.7"/></>:null}
 {emotion===4?<><path d="M156 105q11-11 22 0M222 105q11-11 22 0" fill="none" stroke="#79674f" strokeWidth="3"/><ellipse cx="168" cy="131" rx="9" ry="10" fill="#f6e8d3"/><ellipse cx="232" cy="131" rx="9" ry="10" fill="#f6e8d3"/><ellipse cx="168" cy="132" rx="4" ry="5" fill="#6d624f"/><ellipse cx="232" cy="132" rx="4" ry="5" fill="#6d624f"/><ellipse cx="200" cy="171" rx="10" ry="13" fill="#a17d66"/></>:null}
 {emotion===5?<><path d="M157 111q11-3 22 0M221 111q11-3 22 0M158 131q10 7 20 0M222 131q10 7 20 0" fill="none" stroke="#79674f" strokeWidth="3"/><path d="M188 168q12 8 24 0" fill="none" stroke="#94725c" strokeWidth="2.8"/></>:null}
 <path d="M144 246H256" stroke="#bdcbb0" strokeWidth="3"/>
 </g>;
}
