import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

const Item = (props) =>{
    return(
        <div>
            <h2>Item {props.item}</h2>
            <button onClick = {props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {

//בודקים אם הגיע פרופס.
    const itemState = ownProps.cake
     ? state.cake.numOfCakes //אם הגיע - נחזיר מספר עוגות
     : state.iceCream.numOfIceCream //אם לא הגיע - נחזיר מספר גלידות

    return{
        item: itemState
    }
}


//בודקים אם הפרופס שהגיע הוא עוגה
const mapDispatchToProps = (dispatch, ownProps) =>{
    const dispatchFunction = ownProps.cake
    ? dispatch(buyCake()) //אם הגיע - נחזיר פונקציית קניית עוגות
    : dispatch(buyIceCream()) //אם לא הגיע - נחזיר פונקציית קניית גלידות

    return{
       buyItem: dispatchFunction
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Item)

