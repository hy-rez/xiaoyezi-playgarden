import type {Question} from './types';
export function sampleQuestions(questions:Question[],size?:number,random= Math.random){
 const result=[...questions];
 if(size===undefined)return result;
 for(let i=result.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[result[i],result[j]]=[result[j],result[i]]}
 if(result.length&&result.every(q=>q.difficulty!==undefined)){
  const levels=[1,2,3];
  const buckets=levels.map(level=>result.filter(q=>q.difficulty===level));
  const picked:Question[]=[];
  while(picked.length<Math.min(size,result.length)){
   let added=false;
   for(const bucket of buckets){if(bucket.length&&picked.length<size){picked.push(bucket.shift()!);added=true}}
   if(!added)break;
  }
  return picked.sort((a,b)=>a.difficulty!-b.difficulty!);
 }
 return result.slice(0,Math.max(0,Math.min(size,result.length)));
}
