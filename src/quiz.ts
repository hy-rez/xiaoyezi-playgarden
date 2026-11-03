import type {Question} from './types';
export function sampleQuestions(questions:Question[],size?:number,random= Math.random){
 const result=[...questions];
 if(size===undefined)return result;
 for(let i=result.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[result[i],result[j]]=[result[j],result[i]]}
 return result.slice(0,Math.max(0,Math.min(size,result.length)));
}
