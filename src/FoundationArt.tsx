import {numberItems} from './numberContent';
import {ShapeArt} from './ShapeArt';
import {NumberArt} from './NumberArt';
import type {FoundationArt as Name} from './types';
const shapes=['圆形','三角形','正方形','长方形','椭圆形','星形','半圆形','菱形','梯形','心形'];
const objects=['盘子','三角尺','方形手帕','门','椭圆镜子','星形饼干','半圆西瓜','菱形风筝','梯形花盆','心形饼干'];
export function FoundationArt({name,className=''}:{name:Name;className?:string}){const [kind,value,quantity]=name.split('-');const cover=value==='cover',n=cover?1:Number(value);const shape=['shapes','shape','object'].includes(kind);const label=cover?({shapes:'形状伙伴',body:'我的身体',numbers:'数字与数量'}[kind]||''):shape?(kind==='object'?objects:shapes)[n-1]:kind==='count'?`${quantity?Number(quantity):n}${numberItems[n-1].unit}${numberItems[n-1].name}`:`数字${n}`;return <svg className={'art '+className} viewBox="0 0 400 300" role="img" aria-label={label}><g className="character">{shape?kind==='shapes'&&!cover?<><g transform="translate(-15 60) scale(.58)"><ShapeArt n={n}/></g><g transform="translate(160 60) scale(.58)"><ShapeArt n={n} object/></g></>:<ShapeArt n={n} object={kind==='object'}/>:<NumberArt n={cover?3:quantity?Number(quantity):n} itemIndex={cover?3:n} digit={kind==='digit'} intro={kind==='numbers'}/>}</g></svg>}
