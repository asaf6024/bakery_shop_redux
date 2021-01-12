import React from 'react'
import { connect } from 'react-redux'
import {actionCreators} from '../redux/index'
import NewCake from "./NewCake";

const Cake = (props) =>{

    return(
        <div className= 'boxClass'>

            {/* //נקבל את המידע של הסטייט דרך פרופס  */}
            <h2>Cakes on stock: {props.numOfCakes}</h2> 
            {/* //נגדיר את האקשן קריאטור כפונקציה שמופעלת בעת לחיצה על הכפתור */}
            <button className = 'addRemoveBtn' onClick ={props.buyCake} > + </button>
            <button className = 'addRemoveBtn' onClick ={props.removeCake} > - </button>
            <img src = {props.cakeImg}></img>
            <NewCake/>
            
        </div>
        
    )
}
// שלב ראשון - ייבוא והמרת הסטייט לפרופס
const mapStateToProps = state => {

    return{
        numOfCakes: state.cake.numOfCakes,
        cakeImg: state.cake.img
    }
}

//שלב שני - ייבוא האקשן קריאטור
const mapDispatchToProps = dispatch =>{
    return{
        buyCake: () => dispatch(actionCreators.cakes.buyCake()),
        removeCake: () => dispatch(actionCreators.cakes.removeCake())
    }
}

//שלב שלישי - חיבור הפונקציות לסטור
export default connect(mapStateToProps, mapDispatchToProps)(Cake)