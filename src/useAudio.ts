import {useEffect,useRef,useState} from 'react';
export function useAudio(muted:boolean,background=false,onEnd?:()=>void){
 const ref=useRef<HTMLAudioElement|null>(null),end=useRef(onEnd);end.current=onEnd;
 const [playing,setPlaying]=useState(false),[error,setError]=useState(''),[duration,setDuration]=useState(0),[position,setPosition]=useState(0);
 useEffect(()=>{const a=new Audio();ref.current=a;a.preload='metadata';a.onplay=()=>setPlaying(true);a.onpause=()=>setPlaying(false);a.onended=()=>{setPlaying(false);end.current?.()};a.ontimeupdate=()=>setPosition(a.currentTime);a.onloadedmetadata=()=>setDuration(Number.isFinite(a.duration)?a.duration:0);a.onerror=()=>{setError('声音暂时没准备好，点一下重试');setPlaying(false)};return()=>{a.pause();a.removeAttribute('src');a.load();ref.current=null}},[]);
 useEffect(()=>{if(ref.current)ref.current.muted=muted},[muted]);
 useEffect(()=>{const pause=()=>{if(document.hidden&&!background)ref.current?.pause()};document.addEventListener('visibilitychange',pause);return()=>document.removeEventListener('visibilitychange',pause)},[background]);
 function play(id?:string){const a=ref.current;if(!a)return;setError('');if(id){a.src=import.meta.env.BASE_URL+'audio/'+id+'.m4a';setPosition(0);setDuration(0)}a.muted=muted;void a.play().catch(()=>{setPlaying(false);setError('点这里，再听一次')})}
 return {play,pause:()=>ref.current?.pause(),stop:()=>{const a=ref.current;if(a){a.pause();a.currentTime=0}},seek:(n:number)=>{if(ref.current)ref.current.currentTime=n},playing,error,duration,position};
}
