import {BUY_CAKE, REMOVE_CAKE} from './cakeTypes'
import cake from '../img/cake.jpg'

const initialState = {
    numOfCakes: 10,
    img: cake,
    CakeForCustomer: 0,
    price: 100,
    totalPrice: 0
}

const cakeReducer = (state = initialState, action) =>{
    
    switch(action.type){
        case BUY_CAKE: return {
                ...state,
                numOfCakes: state.numOfCakes > 1 ? state.numOfCakes - parseInt(action.payload) : 0,
                CakeForCustomer: state.CakeForCustomer < 10 && state.numOfCakes > 1 ? state.CakeForCustomer + parseInt(action.payload) : 10,
                price: state.price,
                totalPrice: state.CakeForCustomer < 10 ?  state.price * (state.CakeForCustomer +parseInt(action.payload)) : 1000

            }

            case REMOVE_CAKE: return {
                ...state,
                numOfCakes: state.numOfCakes < 10 ? state.numOfCakes + 1 : 10,
                CakeForCustomer: state.CakeForCustomer > 0 ? state.CakeForCustomer - 1 : 0,
                price: state.price,
                totalPrice: state.CakeForCustomer > 0 ?  state.price * (state.CakeForCustomer - 1) : 0


            }
        default: return state
    }
}

export default cakeReducer