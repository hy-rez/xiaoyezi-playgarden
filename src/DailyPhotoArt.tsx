import {useState} from 'react';
import {dailyPhotos} from './dailyPhotos';
export function DailyPhotoArt({name,className='',loading='eager'}:{name:string;className?:string;loading?:'eager'|'lazy'}){
 const photo=dailyPhotos[Number(name.slice(6))];
 const label=photo.name+'的真实照片';
 const [failed,setFailed]=useState(false);
 return <span className={'art photo-art daily-photo '+className} role="img" aria-label={label}>
 {failed?<span className="photo-error" role="status">{photo.name}图片暂时没加载出来，请刷新页面重试。</span>:<img src={import.meta.env.BASE_URL+'images/daily/'+photo.file} alt={label} loading={loading} decoding="async" onError={()=>setFailed(true)}/>}
 </span>;
}
