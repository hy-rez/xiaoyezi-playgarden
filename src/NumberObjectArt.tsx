import {numberItems} from './numberContent';
/** Each instance draws exactly one countable object in a 50 × 50 box. */
export function NumberObjectArt({itemIndex}:{itemIndex:number}){
 const id=numberItems[itemIndex-1].id;
 switch(id){
 case 'apple':return <><path d="M0-14C-26-29-29 18-11 22Q0 27 11 22C29 18 26-29 0-14" fill="#d46950"/><path d="M0-14Q-2-26 6-28" stroke="#657b50" strokeWidth="4" fill="none"/></>;
 case 'pear':return <><path d="M-7-17C-8-30 8-30 9-17C9-6 25 4 20 17C14 31-18 29-22 15C-25 2-8-7-7-17" fill="#c5b24c"/><path d="M0-24 4-30" stroke="#657b50" strokeWidth="3"/></>;
 case 'banana':return <path d="M-22-20Q-8 10 23-12Q19 18-1 23Q-24 27-22-20Z" fill="#edc34f" stroke="#b89537" strokeWidth="2"/>;
 case 'orange':return <><circle r="23" fill="#e49a46"/><path d="M0-22Q5-32 19-27Q14-15 0-22" fill="#7d9d59"/></>;
 case 'strawberry':return <><path d="M-22-13Q0-25 22-13Q27 2 0 26Q-27 2-22-13" fill="#cc6250"/><path d="m-18-15 8-5 10 5 8-6 10 6-15 5Z" fill="#72944e"/>{[-10,0,10].map((x,i)=><path key={x} d={`M${x} ${i===1?12:0}v4`} stroke="#ffe1a0" strokeWidth="3"/>)}</>;
 case 'lemon':return <path d="M-27 0Q-16-27 8-19Q22-15 27 0Q17 26-8 20Q-23 14-27 0" fill="#e8cb53" stroke="#c5ad46" strokeWidth="2"/>;
 case 'watermelon':return <><path d="M-25-17H25Q23 25 0 25Q-23 25-25-17" fill="#7c9e60"/><path d="M-20-15H20Q17 19 0 19Q-17 19-20-15" fill="#d77c69"/><path d="M-9-5v4M8-5v4M0 8v4" stroke="#625948" strokeWidth="3"/></>;
 case 'balloon':return <><ellipse cy="-7" rx="18" ry="23" fill="#83aebb"/><path d="m0 15-4 6h8ZM0 21q9 8 0 13" fill="#83aebb" stroke="#617c83" strokeWidth="2"/></>;
 case 'star':return <path d="m0-27 8 17 19 3-14 13 3 20L0 17-17 26l3-20-14-13 20-3Z" fill="#dfba57"/>;
 case 'flower':return <><path d="M0 0V30M0 23q-18-14-19-3q9 10 19 3" fill="#82a16b" stroke="#82a16b" strokeWidth="3"/>{[0,60,120,180,240,300].map(a=><ellipse key={a} cy="-15" rx="8" ry="13" transform={`rotate(${a})`} fill="#d69b9a"/>)}<circle r="8" fill="#e8c35b"/></>;
 case 'leaf':return <><path d="M-24 24Q-35-17 24-27Q35 15-24 24" fill="#7d9f6b"/><path d="M-22 22 20-22M0 0-12-7M9-9 17 2" fill="none" stroke="#4f7955" strokeWidth="2"/></>;
 case 'fish':return <><path d="m-14 0-17-19v38Z" fill="#cf9b68"/><ellipse cx="5" rx="23" ry="16" fill="#dcad75"/><circle cx="18" cy="-4" r="3" fill="#485d50"/></>;
 case 'ball':return <><circle r="25" fill="#87aeba"/><path d="M-23-9Q-6 9 22-12M-5-24Q-23-2 7 24" stroke="#f2e5bd" strokeWidth="5" fill="none"/></>;
 case 'car':return <><path d="M-27-3h7l8-16h22L22-3h7v21h-56Z" fill="#b87b64"/><path d="m-8-15-5 12H15L7-15Z" fill="#dbe6dd"/><circle cx="-17" cy="18" r="8" fill="#516359"/><circle cx="18" cy="18" r="8" fill="#516359"/></>;
 case 'umbrella':return <><path d="M-29 0Q0-40 29 0Q16-8 10 0Q0-8-10 0Q-19-8-29 0" fill="#bda2b3"/><path d="M0-27v48q0 13 12 6" fill="none" stroke="#716455" strokeWidth="4"/></>;
 case 'cup':return <><path d="M15-13h10q14 22-10 24" fill="none" stroke="#92a995" strokeWidth="6"/><path d="M-24-20h41v38q-20 15-41 0Z" fill="#a0b6a1"/><ellipse cx="-3" cy="-20" rx="20" ry="5" fill="#e9e2cb"/></>;
 case 'book':return <><path d="M-25-22h42v47h-42q-7-4 0-10Z" fill="#a18caa"/><path d="M-25 15h41v10h-41q-7-5 0-10" fill="#f0e4c9"/><path d="M-13-10H7M-13-2H4" stroke="#f0e4c9" strokeWidth="3"/></>;
 case 'gift':return <><rect x="-24" y="-10" width="48" height="36" rx="2" fill="#c78d70"/><path d="M-28-15h56v12h-56Z" fill="#d6ab80"/><path d="M0-15v41" stroke="#eee0ac" strokeWidth="7"/><path d="M0-15Q-27-15-17-28Q-6-35 0-15Q8-37 20-27Q27-15 0-15" fill="none" stroke="#dfc981" strokeWidth="5"/></>;
 case 'carrot':return <><path d="M-14-13Q-6-22 8-13L-8 29Z" fill="#d7954f"/><path d="M-4-17q-15-26-4-17M-4-17q4-27 13-18" stroke="#7c9d60" strokeWidth="5" fill="none"/></>;
 case 'butterfly':return <><path d="M0-4C-40-49-36 20-6 9C-29 21-15 43 0 17C15 43 29 21 6 9C36 20 40-49 0-4" fill="#c7a26c"/><path d="M0-11v34M0-10-7-22M0-10 7-22" stroke="#655e4e" strokeWidth="4" fill="none"/></>;
 }
}
