export function read<T>(key:string,fallback:T):T {try {const value=localStorage.getItem(key);return value===null?fallback:JSON.parse(value)} catch{return fallback}}
export function save(key:string,value:unknown){try{localStorage.setItem(key,JSON.stringify(value))}catch{/* Private mode may disable storage. */}}
export function award(existing:string[],id:string){return [...new Set([...existing,id])]}
export function timerExpired(deadline:number|null,now:number){return deadline!==null&&now>=deadline}
