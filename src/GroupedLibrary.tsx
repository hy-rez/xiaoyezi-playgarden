import {useState,type CSSProperties} from 'react';
import {Art} from './Art';
import type {Page,LibraryGroup} from './types';
export function GroupedLibrary({pages,groups,onSelect}:{pages:Page[];groups:LibraryGroup[];onSelect:(index:number)=>void}){
 const [selected,setSelected]=useState(0);const group=groups[selected];
 return <div className="sorting-library grouped-library"><nav className="sorting-tabs" aria-label="内容分组" style={{'--library-columns':groups.length,'--library-mobile-columns':groups.length>3?2:groups.length} as CSSProperties}>{groups.map((g,i)=><button key={g.title} aria-pressed={selected===i} onClick={()=>setSelected(i)}>{g.title}<small>{g.toIndex-g.fromIndex}项</small></button>)}</nav><h2>{group.title}<small>点一张，认识一下</small></h2><div className="animal-picker" data-count={group.toIndex-group.fromIndex} aria-label={'选择'+group.title}>{pages.slice(group.fromIndex,group.toIndex).map((p,i)=><button key={p.audio} onClick={()=>onSelect(group.fromIndex+i)}><Art name={p.art}/><span>{p.title}</span></button>)}</div></div>;
}
