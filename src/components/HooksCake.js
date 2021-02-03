import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

const HooksCake = () =>{

//Return the number of Cakes from the state
const numOfCakes = useSelector(state => state.cake.numOfCakes)

//Return the Action Creator 
const dispatch = useDispatch()

    return(
        <div>
            <h2>Number of Cakes (useSelector function): {numOfCakes}</h2>            
            {/* Using the dispatch to call the buyCake() */}
            <button onClick = {() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}
export default HooksCake