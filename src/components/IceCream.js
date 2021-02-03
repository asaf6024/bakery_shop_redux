import React from 'react'
import { connect } from 'react-redux'
import {actionCreators} from '../redux/index'
import NewIceCream from "./NewIceCream";
const IceCream = (props) =>{
    return(
        <div className = 'boxClass'>

            <h2>Ice Cream on stock: {props.numOfIceCream}</h2> 

            <button className = 'addRemoveBtn' onClick ={props.buyIceCream} > + </button>
            <button className = 'addRemoveBtn' onClick ={props.removeIceCream} > - </button>       

            <div className = 'productImg'>
            <img src = {props.iceCreamImg}></img>
            <p className ='price'>Price for 1 unit: {props.price}₪</p>
            </div>

            <NewIceCream />
        </div>
    )
}
// Step 1 - Convert State to Props
const mapStateToProps = state => {
    return{
        numOfIceCream: state.iceCream.numOfIceCream,
        iceCreamImg: state.iceCream.img,
        price: state.iceCream.price
    }
}

//Step 2 - Import Action Creator
const mapDispatchToProps = dispatch =>{
    return{
        buyIceCream: () => dispatch(actionCreators.iceCream.buyIceCream()),
        removeIceCream: () => dispatch(actionCreators.iceCream.removeIceCream())
    }
}

//Step 3 - Connnect mapStateToProps + mapDispatchToProps to the Store
export default connect(mapStateToProps, mapDispatchToProps)(IceCream)