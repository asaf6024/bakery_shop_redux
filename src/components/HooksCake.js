import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

const HooksCake = () =>{

//נחזיר מהסטייט את הערך של מספר העוגות בעזרת הפונקציה הזאת
const numOfCakes = useSelector(state => state.cake.numOfCakes)

//נקרא לאקשיינס ע"י הפונקציה הזאת. קודם ניצור משתנה ששווה לה
const dispatch = useDispatch()
    return(
        <div>
            <h2>Number of Cakes (useSelector function): {numOfCakes}</h2>

{/* //נשתמש בפונקציה של דיספאטצ' כדי להחזיר את הפונקציה של קניית עוגה */}
            <button onClick = {() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}
export default HooksCake