import React from 'react'
import { connect } from 'react-redux'

const Order = (props) =>{
    const totalPriceIceCream = parseInt(props.iceCream.totalPrice)
    const totalPriceCake= parseInt(props.cake.totalPrice)
    return(
        <div className = 'totalOrder'>
            <h2>Total Order:</h2>
            <p>Number of Cakes: {props.cake.CakeForCustomer}, Price: {props.cake.totalPrice}₪</p>
            <p>Ice Cream: {props.iceCream.iceCreamForCustomer}, Price: {props.iceCream.totalPrice}₪</p>
            <h2>Total</h2>
            
           {totalPriceIceCream + totalPriceCake}₪
           <br/><br/>
        </div>
    )
}

//Convert State to Props
const mapStateToProps = state => {
    return{
        cake: state.cake,
        iceCream: state.iceCream
    }

}
//Step 3 - Connnect mapStateToProps  to the Store
export default connect(mapStateToProps)(Order)
