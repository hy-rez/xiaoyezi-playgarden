import {Art} from './Art';
import {encyclopediaCategories,encyclopediaPhoto} from './courses/encyclopedia/catalog';
import type {Page} from './types';

export function EncyclopediaLibrary({pages,onSelect}:{pages:Page[];onSelect:(index:number)=>void}){
 const groups=encyclopediaCategories.map((category,index)=>({
  category,id:`encyclopedia-group-${index}`,
  entries:pages.map((page,pageIndex)=>({page,pageIndex})).filter(({page})=>encyclopediaPhoto(page.art)?.category===category),
 }));
 return <div className="encyclopedia-library">
  <nav className="encyclopedia-categories" aria-label="百科分类">
   {groups.map(group=><button key={group.id} onClick={()=>{
    const heading=document.getElementById(group.id);
    heading?.scrollIntoView({block:'start'});
    heading?.focus({preventScroll:true});
   }}>{group.category}<span>{group.entries.length}</span></button>)}
  </nav>
  {groups.map(group=><section key={group.id} aria-labelledby={group.id}>
   <h2 id={group.id} tabIndex={-1}>{group.category}<small>{group.entries.length} 张卡片</small></h2>
   <div className="animal-picker" aria-label={'选择'+group.category+'卡片'}>
    {group.entries.map(({page,pageIndex})=><button key={page.audio} onClick={()=>onSelect(pageIndex)}>
     <Art name={page.art} loading="lazy"/><span>{page.title}</span>
    </button>)}
   </div>
  </section>)}
 </div>;
}
