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
                numOfIceCream: state.numOfIceCream > 1 ? state.numOfIceCream - parseInt( action.payload) : 0,
                iceCreamForCustomer: state.iceCreamForCustomer < 20 && state.numOfIceCream > 1 ? state.iceCreamForCustomer + parseInt(action.payload) : 20,
                price: state.price,
                totalPrice: state.iceCreamForCustomer < 20 ?  state.price * (state.iceCreamForCustomer + parseInt(action.payload)) : 200

            }

            case REMOVE_ICECREAM: return {
                ...state,
                numOfIceCream: state.numOfIceCream < 20 ? state.numOfIceCream + 1 : 20,
                iceCreamForCustomer: state.iceCreamForCustomer > 0 ? state.iceCreamForCustomer - 1 : 0,
                price: state.price,
                totalPrice: state.iceCreamForCustomer > 0 ?  state.price * (state.iceCreamForCustomer - 1) : 0


            }
        default: return state
    }
}

export default iceCreamReducer