import {React, useState} from 'react'
import { connect } from 'react-redux'
import {actionCreators} from '../redux/index'
import  "./css/newCake.css";

const NewIceCream = (props) =>{

    const [number, setNumber] = useState(newFunction(1))

    return(
        <div className= 'newCake'>

            {/* //נקבל את המידע של הסטייט דרך פרופס  */}
            {/* <h2>Cakes on stock: {props.numOfCakes}</h2>  */}

            <input type = 'text' value = {number} onChange = {e => setNumber(e.target.value)}></input>
            {/* //נגדיר את האקשן קריאטור כפונקציה שמופעלת בעת לחיצה על הכפתור */}
            <button onClick ={() =>props.buyIceCream(number)} >Buy {number} IceCream</button>
            
        </div>
        
    )
}
// שלב ראשון - ייבוא והמרת הסטייט לפרופס
const mapStateToProps = state => {
    console.log(state)
    return{
        numOfIceCream: state.iceCream.numOfIceCream,
        iceCreamImg: state.iceCream.img
    }
}

//שלב שני - ייבוא האקשן קריאטור
const mapDispatchToProps = dispatch =>{
    return{
        buyIceCream: (number) => dispatch(actionCreators.iceCream.buyIceCream(number)),
        removeIceCream: () => dispatch(actionCreators.iceCream.removeIceCream())
    }
}

//שלב שלישי - חיבור הפונקציות לסטור
export default connect(mapStateToProps, mapDispatchToProps)(NewIceCream)

function newFunction() {
    return 1;
}
