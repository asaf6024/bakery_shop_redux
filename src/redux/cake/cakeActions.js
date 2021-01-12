import {BUY_CAKE, REMOVE_CAKE} from './cakeTypes'

//הפונקציה מקבלת פרמטר מספר
export const buyCake = (number = 1) =>{
   return{
         type: BUY_CAKE,
         payload: number
    }
   }

export const removeCake = () =>{
   return{
         type: REMOVE_CAKE
    }
   }

