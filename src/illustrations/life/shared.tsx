import type {SVGProps} from 'react';
export const palette={ink:'#435c50',edge:'#78876f',paper:'#fff8e9',cream:'#f0e4c9',sage:'#8fa785',sageLight:'#b8c9a5',sageDark:'#607c5c',wood:'#b69670',woodLight:'#d5bd96',woodDark:'#907450',blue:'#8eb5c2',blueLight:'#c6dce1',blueDark:'#648e9f',metal:'#aebfbd',metalLight:'#e3e9dd',metalDark:'#738e91',gold:'#d5b774',goldDark:'#a88a52',rose:'#bf9381',skin:'#e3b797',skinLine:'#b58b70'} as const;
// Open detail paths must never fall back to SVG's default black fill.
export function Line({stroke=palette.edge,strokeWidth=2,...props}:Omit<SVGProps<SVGPathElement>,'fill'>){
 return <path {...props} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" data-detail-line="true"/>;
}
export function Screw({x,y,r=2}:{x:number;y:number;r?:number}){return <g><circle cx={x} cy={y} r={r} fill={palette.metalLight} stroke={palette.metalDark} strokeWidth=".9"/><Line d={`M${x-r*.5} ${y+r*.35}l${r} ${-r*.7}`} stroke={palette.metalDark} strokeWidth=".8"/></g>}
export function Tuft({x,y,flip=false}:{x:number;y:number;flip?:boolean}){return <g transform={`translate(${x} ${y}) scale(${flip?-1:1} 1)`}><Line d="M0 0q-1-12-7-19M0 0q1-15 6-23M0 0q5-10 13-12" stroke={palette.sageDark} strokeWidth="2.5"/></g>}
export function Stone({x,y,scale=1}:{x:number;y:number;scale?:number}){return <g transform={`translate(${x} ${y}) scale(${scale})`}><path d="M-24 2q2-18 20-19q22-3 29 17q-1 11-26 11q-22 0-23-9Z" fill="#a7afa2" stroke="#89978a" strokeWidth="1.5"/><path d="M-17-2q6-11 18-10q10 0 16 9q-17 4-34 1Z" fill="#c5cabc"/></g>}
