import {useState} from 'react';
import {encyclopediaPhoto} from './courses/encyclopedia/catalog';
export function PhotoArt({name,className='',loading='eager'}:{name:string;className?:string;loading?:'eager'|'lazy'}){
 const item=encyclopediaPhoto(name)!;
 const [failed,setFailed]=useState(false);
 return <span className={'art photo-art '+className}>
 {failed?<span className="photo-error" role="status">{item.name}图片暂时没加载出来，请刷新页面重试。</span>:<img src={import.meta.env.BASE_URL+'images/encyclopedia/'+item.id+'.jpg'} alt={item.name+'的真实照片'} width="960" height="720" loading={loading} decoding="async" onError={()=>setFailed(true)}/>}
 </span>;
}
