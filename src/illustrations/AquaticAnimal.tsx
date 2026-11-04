import {Turtle,Frog} from './SmallAnimals';
import {Dolphin,Whale,Seal,Crocodile} from './MarineAnimal';
export type AquaticName='dolphin'|'whale'|'seal'|'alligator'|'turtle'|'frog';
export function AquaticAnimal({name}:{name:AquaticName}){
 switch(name){
  case 'turtle':return <Turtle/>;
  case 'frog':return <Frog/>;
  case 'dolphin':return <Dolphin/>;
  case 'whale':return <Whale/>;
  case 'seal':return <Seal/>;
  case 'alligator':return <Crocodile/>;
 }
}
