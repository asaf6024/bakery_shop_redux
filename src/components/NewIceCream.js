import {React, useState} from 'react'
import { connect } from 'react-redux'
import {actionCreators} from '../redux/index'
import  "./css/newCake.css";

const NewIceCream = (props) =>{

    const [number, setNumber] = useState(newFunction(1))

    return(
        <div className= 'newCake'>
            <input type = 'text' value = {number} onChange = {e => setNumber(e.target.value)}></input>
            <button onClick ={() =>props.buyIceCream(number)} >Buy {number} IceCream</button>            
        </div>
        
    )
}
// Step 1 - Convert State to Props
const mapStateToProps = state => {
    console.log(state)
    return{
        numOfIceCream: state.iceCream.numOfIceCream,
        iceCreamImg: state.iceCream.img
    }
}

//Step 2 - Import Action Creator
const mapDispatchToProps = dispatch =>{
    return{
        buyIceCream: (number) => dispatch(actionCreators.iceCream.buyIceCream(number)),
        removeIceCream: () => dispatch(actionCreators.iceCream.removeIceCream())
    }
}

//Step 3 - Connnect mapStateToProps + mapDispatchToProps to the Store
export default connect(mapStateToProps, mapDispatchToProps)(NewIceCream)

function newFunction() {
    return 1;
}