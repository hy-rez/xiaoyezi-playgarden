import {useState} from 'react';
import {bodyPhotos} from './bodyPhotos';
export const bodyPhotoNames=bodyPhotos.map(photo=>photo.name);
export function BodyPhotoArt({name,className='',loading='eager'}:{name:string;className?:string;loading?:'eager'|'lazy'}){
 const n=Number(name.slice(5));
 const photo=bodyPhotos[n-1];
 const label=photo.name;
 const [failed,setFailed]=useState(false);
 return <span className={'art photo-art body-photo '+className} role="img" aria-label={label+'的真实照片'}>
 {failed?<span className="photo-error" role="status">{label}图片暂时没加载出来，请刷新页面重试。</span>:<img src={import.meta.env.BASE_URL+`images/body/${photo.file}`} alt={label+'的真实照片'} loading={loading} decoding="async" onError={()=>setFailed(true)}/>}
 </span>;
}
