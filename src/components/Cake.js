import React from 'react'
import { connect } from 'react-redux'
import {actionCreators} from '../redux/index'
import NewCake from "./NewCake";

const Cake = (props) =>{
    
    return(
        <div className= 'boxClass'>

            
            <h2>Cakes on stock: {props.numOfCakes}</h2> 

            <button className = 'addRemoveBtn' onClick ={props.buyCake} > + </button>
            <button className = 'addRemoveBtn' onClick ={props.removeCake} > - </button>

            <div className = 'productImg'>
            <img src = {props.cakeImg}></img>
            <p className ='price'>Price for 1 unit: {props.price}₪</p>
            </div>
            
            <NewCake/>
            
        </div>
        
    )
}
// Step 1 - Convert State to Props
const mapStateToProps = state => {

    return{
        numOfCakes: state.cake.numOfCakes,
        cakeImg: state.cake.img,
        price: state.cake.price
    }
}

//Step 2 - Import Action Creator
const mapDispatchToProps = dispatch =>{
    return{
        buyCake: () => dispatch(actionCreators.cakes.buyCake()),
        removeCake: () => dispatch(actionCreators.cakes.removeCake())
    }
}

//Step 3 - Connnect mapStateToProps + mapDispatchToProps to the Store
export default connect(mapStateToProps, mapDispatchToProps)(Cake)