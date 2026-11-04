import {sortingGroups} from './sortingContent';
import {SortingProduceArt} from './SortingProduceArt';
import {SortingToyArt} from './SortingToyArt';
import {SortingClothingArt} from './SortingClothingArt';
import {SortingTransportArt} from './SortingTransportArt';
import {SortingTablewareArt} from './SortingTablewareArt';
export function SortingItem({group,item}:{group:number;item:number}){
 const kind=sortingGroups[group].items[item].id;
 if(group<2)return <SortingProduceArt kind={kind as Parameters<typeof SortingProduceArt>[0]['kind']}/>;
 if(group===2)return <SortingToyArt kind={kind}/>;
 if(group===3)return <SortingClothingArt kind={kind}/>;
 if(group===4)return <SortingTransportArt kind={kind}/>;
 return <SortingTablewareArt kind={kind}/>;
}
export function SortingArt({group,item=0,pair=false,otherGroup=group,otherItem=1}:{group:number;item?:number;pair?:boolean;otherGroup?:number;otherItem?:number}){
 if(pair)return <><g transform="translate(118 156) scale(2.05)"><SortingItem group={group} item={item}/></g><g transform="translate(282 156) scale(2.05)"><SortingItem group={otherGroup} item={otherItem}/></g></>;
 return <g transform="translate(200 155) scale(2.5)"><SortingItem group={group} item={item}/></g>;
}
