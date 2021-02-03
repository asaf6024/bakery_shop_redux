import {React, useState} from 'react'
import { connect } from 'react-redux'
import {actionCreators} from '../redux/index'
import  "./css/newCake.css";

const NewCake = (props) =>{

    const [number, setNumber] = useState(1)

    return(
        <div className= 'newCake'>
            <input type = 'text' value = {number} onChange = {e => setNumber(e.target.value)}></input>
            <button onClick ={() =>props.buyCake(number)} >Buy {number} Cakes</button>            
        </div>
        
    )
}
// Step 1 - Convert State to Props
const mapStateToProps = state => {
    console.log(state)
    return{
        numOfCakes: state.cake.numOfCakes,
        cakeImg: state.cake.img
    }
}

//Step 2 - Import Action Creator
const mapDispatchToProps = dispatch =>{
    return{
        buyCake: (number) => dispatch(actionCreators.cakes.buyCake(number)),
        removeCake: () => dispatch(actionCreators.cakes.removeCake())
    }
}

//Step 3 - Connnect mapStateToProps + mapDispatchToProps to the Store
export default connect(mapStateToProps, mapDispatchToProps)(NewCake)