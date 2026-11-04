import type {ThinkingArtName} from './thinkingContent';
import {comparisonConcepts,spatialConcepts} from './thinkingContent';
import {sortingGroups} from './sortingContent';
import {ComparisonArt} from './ComparisonArt';
import {PositionArt} from './PositionArt';
import {SortingArt} from './SortingArt';
export function ThinkingArt({name,className=''}:{name:ThinkingArtName;className?:string}){
 const [kind,mode,a,b,c,d]=name.split('-');const cover=mode==='cover',intro=mode==='intro';
 if(kind==='sorting'){
  const group=cover?0:Number(a),item=cover||intro||mode==='pair'?0:Number(b);
  const pair=cover||intro||mode==='pair'||mode==='match';
  const otherGroup=cover||intro?group:mode==='pair'?Number(b):Number(c);
  const otherItem=mode==='match'?Number(d):1;
  const label=cover?'给物品找伙伴':intro?sortingGroups[group].name:pair?`${sortingGroups[group].items[item].name}和${sortingGroups[otherGroup].items[otherItem].name}`:sortingGroups[group].items[item].name;
  return <svg className={'art '+className} viewBox="0 0 400 300" role="img" aria-label={label}><ellipse cx="200" cy="274" rx="145" ry="9" fill="#d5ddbd"/><g className="character"><SortingArt group={group} item={item} pair={pair} otherGroup={otherGroup} otherItem={otherItem}/></g></svg>;
 }
 const index=Number(intro?a:mode),variant=Number(a),level=Number(b);
 const label=cover?(kind==='compare'?'大小不同的皮球':'树前的皮球'):kind==='compare'?intro?`比较${comparisonConcepts[index].name}和${comparisonConcepts[index+1].name}`:`更${comparisonConcepts[index-index%2+(level?0:1)].name}的${comparisonConcepts[index].objects[variant]}`:`皮球在${spatialConcepts[index].reference}${spatialConcepts[index].name}`;
 return <svg className={'art '+className} viewBox="0 0 400 300" role="img" aria-label={label}><ellipse cx="200" cy="274" rx="145" ry="9" fill="#d5ddbd"/><g className="character">{kind==='compare'?<ComparisonArt concept={cover?0:index} intro={cover||intro} variant={intro||cover?0:variant} level={level}/>:<PositionArt position={cover?4:index}/>}</g></svg>;
}
