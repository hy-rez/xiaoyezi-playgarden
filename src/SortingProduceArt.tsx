/** Detailed produce silhouettes for the larger classification cards. */
export function SortingProduceArt({kind}:{kind:'apple'|'banana'|'orange'|'pear'|'strawberry'|'watermelon'|'carrot'|'cabbage'|'broccoli'|'cucumber'|'eggplant'|'pumpkin'}){
 if(kind==='orange')return <g strokeLinecap="round"><circle cy="3" r="29" fill="#df9c4d" stroke="#c5853e" strokeWidth="1.2"/><path d="M-17-14Q-25-6-22 6" stroke="#f0be76" strokeWidth="4" fill="none"/><path d="M-2-25 1-33" stroke="#826a4e" strokeWidth="3"/><path d="M0-29Q12-42 25-32Q17-22 0-29" fill="#8aa465"/><path d="M4-29 20-32" stroke="#6c8b56" fill="none"/>{[[-12,14],[3,22],[17,12],[19,-1],[-4,-6]].map(([x,y])=><circle key={x} cx={x} cy={y} r="1.2" fill="#c78b43"/>)}</g>;
 if(kind==='pear')return <g strokeLinecap="round"><path d="M-9-20C-12-35 10-38 13-20C14-9 29-1 28 15C27 35-26 38-29 16C-31 1-12-7-9-20Z" fill="#c3b568" stroke="#a69951" strokeWidth="1.2"/><path d="M-13-10Q-28 6-20 19" stroke="#dfd294" strokeWidth="4" fill="none"/><path d="M2-30Q-1-38 6-44" stroke="#826a4e" strokeWidth="3" fill="none"/><path d="M4-35Q15-43 23-34Q14-27 4-35" fill="#8da56d"/>{[[-7,13],[4,23],[17,14],[10,4],[-10,25]].map(([x,y])=><circle key={x} cx={x} cy={y} r=".9" fill="#9e9552"/>)}</g>;
 if(kind==='strawberry')return <g strokeLinejoin="round"><path d="M-28-16Q-2-34 27-17C36-4 19 23 0 36C-19 27-36-2-28-16Z" fill="#c96f60" stroke="#ad5d51" strokeWidth="1.2"/><path d="M-21-9Q-26-1-17 10" stroke="#e49a83" strokeWidth="4" fill="none" strokeLinecap="round"/><path d="m-27-19 17-2 8-14 5 13 20-6-11 13 17 9-24-3-8 11-5-15-17 4Z" fill="#89a365"/><path d="m-1-27 3-12" stroke="#6e8e54" strokeWidth="3"/>{[[-16,0],[-3,1],[14,0],[-9,13],[8,14],[0,25]].map(([x,y])=><ellipse key={x+','+y} cx={x} cy={y} rx="1.5" ry="2.4" fill="#efc591"/>)}</g>;
 if(kind==='watermelon')return <g strokeLinejoin="round"><path d="M-34-20H34Q33 21 0 36Q-33 21-34-20Z" fill="#789768" stroke="#5e8055" strokeWidth="1.2"/><path d="M-29-19H29Q27 16 0 30Q-27 16-29-19Z" fill="#d5d49c"/><path d="M-25-19H25Q23 12 0 25Q-23 12-25-19Z" fill="#d78270"/>{[[-16,-9],[0,-8],[15,-8],[-8,6],[7,6],[0,17]].map(([x,y])=><ellipse key={x+','+y} cx={x} cy={y} rx="1.6" ry="2.7" transform={`rotate(${-x} ${x} ${y})`} fill="#6f5e4d"/>)}</g>;
 if(kind==='broccoli')return <g strokeLinecap="round" strokeLinejoin="round"><path d="M-8 35-6 2-23-14-15-20 1-5 13-23 22-16 7 3 12 35Z" fill="#afbd7e" stroke="#8e9e64" strokeWidth="1.2"/><path d="M0 31V-3M0 10-11-4M2 5 13-9" stroke="#dae0a8" strokeWidth="2" fill="none"/><path d="M-30-11Q-40-24-26-29Q-26-41-11-36Q-2-47 10-36Q25-41 27-28Q40-23 30-11Q24-1 10-8Q-2 0-12-9Q-24 1-30-11Z" fill="#789966" stroke="#638656" strokeWidth="1.2"/>{[[-24,-22],[-11,-28],[5,-30],[21,-22],[-7,-14],[14,-15]].map(([x,y])=><path key={x} d={`M${x-4} ${y+2}q-1-7 6-5`} stroke="#9cb481" strokeWidth="2" fill="none"/>)}</g>;
 if(kind==='cucumber')return <g strokeLinecap="round"><path d="M-27 20C-25-3-9-36 4-36C21-36 26-26 20-9L-4 31C-13 42-29 35-27 20Z" fill="#7d9e69" stroke="#658755" strokeWidth="1.2"/><path d="M-20 22Q-10-9 7-27M-13 29Q-1-1 15-22" stroke="#a8bc83" strokeWidth="2" fill="none"/>{[[-15,15],[-7,-3],[3,-21],[3,4],[-4,20]].map(([x,y])=><circle key={x} cx={x} cy={y} r="1.1" fill="#527847"/>)}<ellipse cx="18" cy="25" rx="17" ry="14" fill="#7b9963" stroke="#5f814e"/><ellipse cx="18" cy="24" rx="14" ry="11" fill="#e0dfb1"/>{[[12,21],[23,21],[18,28]].map(([x,y])=><ellipse key={x} cx={x} cy={y} rx="1.7" ry="3" fill="#bac38c"/>)}</g>;
 if(kind==='eggplant')return <g strokeLinejoin="round" strokeLinecap="round"><path d="M3-26C20-23 28-3 22 14C17 34-6 39-20 25C-36 9-17-3-10-16Q-7-25 3-26Z" fill="#9c869f" stroke="#7c6b84" strokeWidth="1.2"/><path d="M-13 3Q-24 16-13 23" stroke="#c0a9c1" strokeWidth="4" fill="none"/><path d="m-10-18-1-10 10 2 11-7-3 11 8 8-14-3-7 9Z" fill="#86a16b"/><path d="M1-28Q4-40 15-37" stroke="#6f8b59" strokeWidth="4" fill="none"/></g>;
 if(kind==='pumpkin')return <g strokeLinecap="round"><path d="M0-25Q-4-38 6-42L12-37Q4-32 7-25" fill="#8a8f5b" stroke="#737b4f"/><path d="M0-23C-28-36-42-6-28 19C-20 34 20 34 29 19C42-6 28-36 0-23Z" fill="#d49958" stroke="#b9844a" strokeWidth="1.2"/><path d="M-6-23C-21-14-24 16-11 29M7-23C23-12 24 16 12 29" stroke="#bc8347" strokeWidth="1.6" fill="none"/><path d="M0-22C-10-7-10 17 0 30C10 17 10-7 0-22Z" fill="#e3ad6b"/><path d="M-23-10Q-29 0-24 11" stroke="#ebbb7c" strokeWidth="3" fill="none"/></g>;
 if(kind==='banana')return <g strokeLinecap="round" strokeLinejoin="round">
  <path d="M-22-19C-15 2 5 5 19-24L25-21C20 11-7 28-25-8Z" fill="#d9ae46" stroke="#ba913e" strokeWidth="1.1"/>
  <path d="M-28-9C-19 12 8 15 25-18L30-14C23 17 2 34-17 25C-29 19-34 5-31-6Z" fill="#edc75c" stroke="#bd9841" strokeWidth="1.2"/>
  <path d="M-27-7C-17 12 9 18 27-14C18 17-5 26-18 19C-26 15-29 5-27-7" fill="#f4d878"/>
  <path d="M-26 2C-15 25 9 24 25-8" fill="none" stroke="#d5ad4c" strokeWidth="1.3"/>
  <path d="M-23 9C-11 23 7 21 18 9" fill="none" stroke="#fbdf92" strokeWidth="1.4"/>
  <path d="m19-23 3-12 8 2-2 17" fill="#b69a51" stroke="#998344" strokeWidth="1"/>
  <path d="m23-34 6 1" stroke="#77674b" strokeWidth="3"/>
  <path d="m-31-8 5-1 1 6-5 2Z" fill="#8a7451"/>
  <path d="m-25-19 4-1 2 5-4 2Z" fill="#8a7451"/>
 </g>;
 if(kind==='carrot')return <g strokeLinecap="round" strokeLinejoin="round">
  <path d="M-4-17Q-13-30-12-40M-2-17Q-1-34 5-42M0-17Q11-32 19-34" fill="none" stroke="#668853" strokeWidth="2.1"/>
  <path d="M-10-31Q-23-32-23-40Q-13-41-10-31M-11-33Q-5-44-10-46Q-17-43-11-33M0-30Q-7-40-2-44Q6-41 0-30M4-36Q13-46 16-41Q14-33 4-36M11-27Q21-37 25-31Q23-24 11-27" fill="#85a563"/>
  <path d="M-18-13Q-7-24 8-16Q18-12 13-1C9 12 0 27-9 38Q-14 26-17 9Q-23-7-18-13Z" fill="#db924d" stroke="#bc7b43" strokeWidth="1.2"/>
  <path d="M-14-12Q-4-19 3-15Q-4-1-6 12Q-8 25-10 30Q-13 15-16 4Q-19-8-14-12Z" fill="#edb469"/>
  <path d="M-17-2l10 2M4-5l8 2M-13 9l9 1M-2 17l5 1M-10 24l4 1" fill="none" stroke="#b97740" strokeWidth="1.4"/>
  <path d="M-6-17-3-23 2-22 0-16" fill="#7e9357"/>
 </g>;
 if(kind==='cabbage')return <g strokeLinecap="round" strokeLinejoin="round">
  <path d="M-9 32C-27 25-31 4-26-11C-29-20-20-30-14-25C-9-40 7-39 13-28C23-34 30-20 25-10C33 7 23 30 9 33Z" fill="#7f9f64" stroke="#698957" strokeWidth="1.1"/>
  <path d="M-6 31C-22 21-26 6-20-5C-25-15-18-25-11-20C-8-34 3-34 9-25C20-30 24-18 18-8C26 8 18 26 7 32Z" fill="#a9bf83"/>
  <path d="M-4 33C-14 20-14 7-12-3C-17-13-9-22-4-19C-5-29 7-31 10-21C18-20 18-8 13-2C17 10 10 28 5 33Z" fill="#c6d49a"/>
  <path d="M-8 31Q-5 9-8-12Q-1-5 3 10Q8-11 7-23Q16 1 10 31L7 36H-4Z" fill="#f0eac6"/>
  <path d="M-4 29Q-7 13-17 4M-7 15Q-22 5-22-10M-12 7Q-20 1-23-1M-17-1Q-16-13-20-18M-4 30Q-14 23-19 15M6 29Q18 17 21 0M13 18Q22 14 23 9M17 9Q12-1 17-13M3 16Q-1 0-5-7M8 11Q12 1 10-8" fill="none" stroke="#e1e3af" strokeWidth="1.4"/>
  <path d="M-3 34H7" stroke="#c4c796" strokeWidth="1.5"/>
 </g>;
 return <g strokeLinecap="round">
  <path d="M0-19C-10-30-29-23-29-5C-30 14-19 33-7 29Q0 25 7 29C20 33 30 12 29-5C29-24 12-31 0-19Z" fill="#cb7560" stroke="#b96754" strokeWidth="1.1"/>
  <path d="M-17-18Q-26-9-22 3" fill="none" stroke="#e8a084" strokeWidth="4"/>
  <path d="M0-20Q-3-30 4-36" fill="none" stroke="#826a4e" strokeWidth="3"/>
  <path d="M3-28Q10-42 24-34Q18-22 3-28" fill="#88a26a"/>
  <path d="m5-28 14-5" stroke="#6d8a56" strokeWidth="1.2"/>
 </g>;
}
