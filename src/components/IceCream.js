import React from 'react'
import { connect } from 'react-redux'
import {actionCreators} from '../redux/index'
import NewIceCream from "./NewIceCream";
const IceCream = (props) =>{
    return(
        <div className = 'boxClass'>

                  {/* //נקבל את המידע של הסטייט דרך פרופס  */}
                  <h2>Ice Cream on stock: {props.numOfIceCream}</h2> 

                   {/* //נגדיר את האקשן קריאטור כפונקציה שמופעלת בעת לחיצה על הכפתור */}
            <button className = 'addRemoveBtn' onClick ={props.buyIceCream} > + </button>
            <button className = 'addRemoveBtn' onClick ={props.removeIceCream} > - </button>

            <img src = {props.iceCreamImg}></img>
            <NewIceCream />
        </div>
    )
}
// שלב ראשון - ייבוא והמרת הסטייט לפרופס
const mapStateToProps = state => {
    return{
        numOfIceCream: state.iceCream.numOfIceCream,
        iceCreamImg: state.iceCream.img
    }
}

//שלב שני - ייבוא האקשן קריאטור
const mapDispatchToProps = dispatch =>{
    return{
        buyIceCream: () => dispatch(actionCreators.iceCream.buyIceCream()),
        removeIceCream: () => dispatch(actionCreators.iceCream.removeIceCream())
    }
}

//שלב שלישי - חיבור הפונקציות לסטור
export default connect(mapStateToProps, mapDispatchToProps)(IceCream)