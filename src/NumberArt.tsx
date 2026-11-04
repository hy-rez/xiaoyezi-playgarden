import {numberItems} from './numberContent';
import {NumberObjectArt} from './NumberObjectArt';
export function NumberArt({n,itemIndex=n,digit=false,intro=false}:{n:number;itemIndex?:number;digit?:boolean;intro?:boolean}){
 const columns=Math.min(n,5),rows=Math.ceil(n/5),stepX=68,stepY=52;
 const startX=200-(columns-1)*stepX/2,startY=(intro?184:150)-(rows-1)*stepY/2;
 return <>{(digit||intro)&&<text x="200" y={digit?210:66} textAnchor="middle" fontSize={digit?120:64} fontWeight="700" fill="#657b62">{n}</text>}
 {!digit&&<g>{Array.from({length:n},(_,i)=><g key={i} data-count-item={numberItems[itemIndex-1].id} transform={`translate(${startX+(i%5)*stepX} ${startY+Math.floor(i/5)*stepY}) scale(.68)`}><NumberObjectArt itemIndex={itemIndex}/></g>)}</g>}</>;
}
