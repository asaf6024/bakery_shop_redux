import React from 'react'
import { connect } from 'react-redux'

const Order = (props) =>{
    const totalPriceIceCream = parseInt(props.iceCream.totalPrice)
    const totalPriceCake= parseInt(props.cake.totalPrice)
    return(
        <div className = 'totalOrder'>
            <h2>Total Order:</h2>
            <p>Number of Cakes: {props.cake.CakeForCustomer}, Price: {props.cake.totalPrice}</p>
            <p>Ice Cream: {props.iceCream.iceCreamForCustomer}, Price: {props.iceCream.totalPrice}</p>
            <h2>Total</h2>
            
           {totalPriceIceCream + totalPriceCake}
           <br/><br/>
        </div>
    )
}

// שלב ראשון - ייבוא והמרת הסטייט לפרופס
const mapStateToProps = state => {
    return{
        cake: state.cake,
        iceCream: state.iceCream
    }

}
//שלב שלישי - חיבור הפונקציות לסטור
export default connect(mapStateToProps)(Order)
