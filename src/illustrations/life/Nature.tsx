import {AnimalArt,type AnimalName} from '../../AnimalArt';
import {Line,Stone,Tuft,palette as p} from './shared';
export function NatureDrawing({id}:{id:string}){
 if(['pigeon','frog','cricket','cicada','bee'].includes(id))return <g transform={['cricket','cicada'].includes(id)?'translate(-16 -12) scale(1.08)':undefined}><AnimalArt name={id as AnimalName}/></g>;
 switch(id){
 case 'rain':return <>
 <rect x="98" y="43" width="204" height="215" rx="7" fill={p.woodDark}/><rect x="106" y="51" width="188" height="199" rx="3" fill="#cadcda"/>
 <path d="M112 117q-7-24 17-29q5-22 28-16q19-24 40-3q27-8 37 17q25-1 27 22q1 12-16 14H125q-11 0-13-5Z" fill="#ecede1"/>
 <path d="M109 225q40-21 88-3t95-4v30H109Z" fill="#a4bc9f"/>{[[133,140],[175,163],[247,142],[269,183],[142,201],[225,211]].map(([x,y])=><g key={x}><path d={`M${x} ${y}c-4 7-8 12-6 16q5 8 11 1q4-5-5-17Z`} fill={p.blueDark}/><Line d={`M${x-2} ${y+8}l-1 5`} stroke={p.blueLight} strokeWidth="1.5"/></g>)}
 <Line d="M122 61v59m0 16v13m156 47v39" stroke="#e5eee4" strokeWidth="3"/>
 <path d="M196 51h8v199h-8ZM106 146h188v8H106Z" fill={p.cream}/><Line d="M197 53v191M109 147h181" stroke={p.paper} strokeWidth="2"/><rect x="91" y="252" width="218" height="9" rx="3" fill={p.wood}/><Line d="M97 254h206" stroke={p.woodLight} strokeWidth="2"/></>;
 case 'stream':return <>
 <path d="M64 191q6-67 91-99q40-20 81-31q67-13 95 49q24 56 11 140q-112 40-255 12q-35-11-23-71Z" fill={p.sageLight}/>
 <path d="M239 64q-58 26-61 62q-1 25 17 47q23 36-53 97q68 9 137-3q-67-49-59-82q4-15 5-30q-1-41 29-88Z" fill={p.blue}/>
 <path d="M237 76q-38 30-39 56q3 20 12 40q14 37-43 91h39q38-47 23-83q-18-50 16-104Z" fill="#b9d5d9"/>
 <Line d="M218 100q-18 24-12 40m-1 50q-1 21-21 43m37-19q-5 14-13 25m-25 18h23m32-11 13 9" stroke="#eaf2e8" strokeWidth="3"/>
 <path d="M76 211q38-24 79-20m98 33q28-6 58 5" fill="none" stroke="#a7bd94" strokeWidth="3" strokeLinecap="round"/><Stone x={166} y={148} scale={.75}/><Line d="M145 158q20 9 39 0" stroke={p.blueLight} strokeWidth="2"/><Stone x={266} y={232} scale={.85}/><Tuft x={118} y={186}/><Tuft x={286} y={174} flip/><Tuft x={131} y={244} flip/>
 </>;
 case 'waves':return <>
 <path d="M70 97q48-39 127-36q84-2 126 47v129H70Z" fill="#e3e8d8"/><circle cx="277" cy="91" r="19" fill={p.gold}/><path d="M69 126q126-17 262 0v104H69Z" fill="#a8c9cd"/>
 <path d="M69 163q30 6 51-6q22-15 35 1q13 17 33 8q26-18 48-2q25 15 50-3q22-10 45 0v72H69Z" fill={p.blue}/>
 <Line d="M78 163q23 5 43-7q20-12 32 1q14 17 35 8q25-16 47-2q25 15 50-2q20-9 36-2" stroke="#edf3e8" strokeWidth="5"/>
 <path d="M69 223q66-27 131-6q54 17 131-13v40q-127 38-262 0Z" fill={p.cream}/><path d="M69 215q63-24 132-5q63 19 130-12v10q-67 31-130 14q-65-20-132 4Z" fill="#edf3e8"/>
 <Line d="M106 186q23 6 43-2m75 4q23 8 48-1m-153 56 15-3m133 0 10-3" stroke="#c8dfe0" strokeWidth="2.5"/>
 <path d="M97 238q6-15 16-2l-8 7Z" fill={p.rose}/><Line d="m101 238 4 3m1-6 1 5" stroke="#a77f6a" strokeWidth="1"/><Stone x={290} y={241} scale={.35}/></>;
 case 'wind':return <>
 <path d="M67 252q127-21 267 0" fill="none" stroke="#c4d1ae" strokeWidth="5" strokeLinecap="round"/>
 <path d="M179 253q14-55 47-102q22-28 42-45M204 198q-1-30-12-47m38 14 39-9" fill="none" stroke={p.woodDark} strokeWidth="12" strokeLinecap="round"/><Line d="M180 250q16-55 47-99" stroke={p.woodLight} strokeWidth="4"/>
 <path d="M172 145q-18-15-4-32q5-20 30-18q1-25 29-25q13-24 39-9q23-14 42 6q30 0 28 22q20 20-3 36q-4 23-32 20q-15 20-39 7q-15 13-38 2q-32 14-52-9Z" fill={p.sage}/><path d="M181 120q4-19 26-16q6-24 29-21q12-15 31-8q18-9 35 3" fill="none" stroke={p.sageLight} strokeWidth="7" strokeLinecap="round"/>
 <Line d="M56 74h66q28 0 22-17M54 166h76q25 0 23-16M70 218h40q23 0 25-14m138-11h35q18 0 15-15" stroke={p.blue} strokeWidth="3.5"/>
 <path d="M292 224q14-17 35-8q-12 20-35 8M113 121q11-12 28-7q-11 16-28 7" fill={p.sageDark}/><Line d="m296 223 24-5m-203-98 17-3" stroke={p.sageLight} strokeWidth="1.5"/><Tuft x={151} y={252}/></>;
 case 'waterfall':return <>
 <path d="M63 232q-8-84 20-142q24-44 73-36q29-16 55-3q47-18 85 7q39 20 41 65l-1 116Z" fill="#b0bba1"/>
 <path d="M82 95q32-30 65-20l-16 51-32 11-13 51-24 5m174-127 19 46 47 11 34 35m-77-39-8 59 34 25 2 39" fill="none" stroke="#929f85" strokeWidth="5" strokeLinejoin="round"/>
 <path d="M142 64q38 12 75-3q-7 78 20 154l-112 5q26-82 17-156Z" fill={p.blue}/><path d="M153 72q13 55-11 135h24q17-65 7-132m27-3q-8 64 18 137h-20q-23-73-15-133" fill="#cce0df"/>
 <Line d="M160 83q7 56-8 104m39-98q-4 53 14 104" stroke="#f0f4e9" strokeWidth="3"/>
 <ellipse cx="202" cy="236" rx="139" ry="33" fill={p.blue}/><ellipse cx="183" cy="222" rx="66" ry="18" fill="#d9e9e1"/><path d="M130 219q-10-13 3-20q10-5 17 8q4-20 21-13q10-21 23-7q14-12 25 8q19-5 20 15q18-2 19 12Z" fill="#eff3e8"/>
 <Line d="M106 243q66 26 154-1m-118-11q42 12 84 1" stroke="#d3e6e0" strokeWidth="3"/><Stone x={293} y={247} scale={.8}/><Stone x={88} y={237} scale={.55}/><Tuft x={105} y={105}/><Tuft x={285} y={88} flip/>
 </>;
 default:return null;
 }
}
