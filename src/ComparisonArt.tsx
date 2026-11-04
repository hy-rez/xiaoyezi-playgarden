import {NumberObjectArt} from './NumberObjectArt';
import {comparisonConcepts} from './thinkingContent';
function Object({concept,variant,level}:{concept:number;variant:number;level:number}){
 const dimension=comparisonConcepts[concept].dimension;
 if(dimension==='size')return <g transform={`translate(200 153) scale(${level?2:1})`}><NumberObjectArt itemIndex={variant?8:13}/></g>;
 if(dimension==='length')return variant?<g><path d={`M${level?60:135} 128H${level?310:235}V174H${level?60:135}Z`} fill="#d8bb76"/><path d={`M${level?310:235} 128l35 23-35 23Z`} fill="#c5a07a"/><path d={`M${level?340:265} 148l5 3-5 3Z`} fill="#65755d"/></g>:<g><rect x={level?45:120} y="125" width={level?310:160} height="52" rx="9" fill="#b88777"/>{[0,1,2,3].map(i=><path key={i} d={`M${(level?50:125)+i*9} 175v18M${(level?320:245)+i*9} 175v18`} stroke="#b88777" strokeWidth="5"/>)}</g>;
 if(dimension==='height')return <g>{variant?<>{Array.from({length:level?5:2},(_,i)=><rect key={i} x="161" y={221-i*34} width="78" height="32" rx="3" fill={i%2?'#d0ad75':'#91aa8a'}/>)}</>:<><rect x="189" y={level?100:185} width="22" height={level?153:68} fill="#b49774"/><path d={level?'M200 35 125 175H275Z':'M200 150 152 227H248Z'} fill="#91aa8a"/></>}<path d="M100 255H300" stroke="#b6c3a4" strokeWidth="4"/></g>;
 const count=level?5:2;return <g>{Array.from({length:count},(_,i)=><g key={i} data-compare-count="item" transform={`translate(${count===2?155+i*90:90+i*55} 150) scale(.8)`}><NumberObjectArt itemIndex={variant?9:1}/></g>)}</g>;
}
export function ComparisonArt({concept,variant=0,level=1,intro=false}:{concept:number;variant?:number;level?:number;intro?:boolean}){
 if(intro&&comparisonConcepts[concept].dimension==='size')return <><g transform="translate(-55 30) scale(.8)"><Object concept={concept} variant={variant} level={1}/></g><g transform="translate(135 30) scale(.8)"><Object concept={concept} variant={variant} level={0}/></g></>;
 return intro?<><g transform="translate(-4 60) scale(.51)"><Object concept={concept} variant={variant} level={1}/></g><g transform="translate(200 60) scale(.51)"><Object concept={concept} variant={variant} level={0}/></g></>:<Object concept={concept} variant={variant} level={level}/>;
}
