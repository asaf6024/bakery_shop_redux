import { BUY_ICECREAM, REMOVE_ICECREAM } from './iceCreamTypes'
import iceCream from '../img/iceCream.jpg'

const initialState = {
    numOfIceCream: 20,
    img: iceCream,
    iceCreamForCustomer: 0,
    price: 10,
    totalPrice: 0
}

const iceCreamReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_ICECREAM: return {
                ...state,
                numOfIceCream: state.numOfIceCream > 1 ? state.numOfIceCream - action.payload : 0,
                iceCreamForCustomer: state.iceCreamForCustomer < 10 && state.numOfIceCream > 1 ? state.iceCreamForCustomer + 1 : 10,
                price: state.price,
                totalPrice: state.iceCreamForCustomer < 10 ?  state.price * (state.iceCreamForCustomer + 1) : state.iceCreamForCustomer * state.price

            }

            case REMOVE_ICECREAM: return {
                ...state,
                numOfIceCream: state.numOfIceCream < 10 ? state.numOfIceCream + 1 : 10,
                iceCreamForCustomer: state.iceCreamForCustomer > 0 ? state.iceCreamForCustomer - 1 : 0,
                price: state.price,
                totalPrice: state.iceCreamForCustomer > 0 ?  state.price * (state.iceCreamForCustomer - 1) : 0


            }
        default: return state
    }
}

export default iceCreamReducer