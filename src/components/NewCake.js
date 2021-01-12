import {React, useState} from 'react'
import { connect } from 'react-redux'
import {actionCreators} from '../redux/index'
import  "./css/newCake.css";

const NewCake = (props) =>{

    const [number, setNumber] = useState(1)

    return(
        <div className= 'newCake'>

            {/* //נקבל את המידע של הסטייט דרך פרופס  */}
            {/* <h2>Cakes on stock: {props.numOfCakes}</h2>  */}

            <input type = 'text' value = {number} onChange = {e => setNumber(e.target.value)}></input>
            {/* //נגדיר את האקשן קריאטור כפונקציה שמופעלת בעת לחיצה על הכפתור */}
            <button onClick ={() =>props.buyCake(number)} >Buy {number} Cakes</button>
            
        </div>
        
    )
}
// שלב ראשון - ייבוא והמרת הסטייט לפרופס
const mapStateToProps = state => {
    console.log(state)
    return{
        numOfCakes: state.cake.numOfCakes,
        cakeImg: state.cake.img
    }
}

//שלב שני - ייבוא האקשן קריאטור
const mapDispatchToProps = dispatch =>{
    return{
        buyCake: (number) => dispatch(actionCreators.cakes.buyCake(number)),
        removeCake: () => dispatch(actionCreators.cakes.removeCake())
    }
}

//שלב שלישי - חיבור הפונקציות לסטור
export default connect(mapStateToProps, mapDispatchToProps)(NewCake)