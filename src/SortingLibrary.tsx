import {useState} from 'react';
import {sortingGroups} from './sortingContent';
import {Art} from './Art';
import type {Page} from './types';
export function SortingLibrary({pages,onSelect}:{pages:Page[];onSelect:(index:number)=>void}){
 const [group,setGroup]=useState(0);
 return <div className="sorting-library">
 <nav className="sorting-tabs" aria-label="物品分类">{sortingGroups.map((g,i)=><button key={g.name} aria-pressed={group===i} onClick={()=>setGroup(i)}>{g.name}<small>{g.items.length}种</small></button>)}</nav>
 <h2>{sortingGroups[group].name}<small>点一件，认识一下</small></h2>
 <div className="animal-picker" aria-label={'选择'+sortingGroups[group].name+'物品'}>{pages.slice(group*6,group*6+6).map((p,i)=><button key={p.audio} onClick={()=>onSelect(group*6+i)}><Art name={p.art}/><span>{p.title}</span></button>)}</div>
 </div>;
}
