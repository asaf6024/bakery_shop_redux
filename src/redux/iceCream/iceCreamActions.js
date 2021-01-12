import { BUY_ICECREAM, REMOVE_ICECREAM } from './iceCreamTypes'

//הפונקציה מקבלת פרמטר מספר
export const buyIceCream = (number = 1) =>{
   return{
         type: BUY_ICECREAM,
         payload: number
    }
}

   export const removeIceCream = () =>{
      return{
            type: REMOVE_ICECREAM
       }
      }
