//נייבא בראש הקובץ את האקיוס
import axios from 'axios'

import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE }
from './userTypes'

//Action Creators
export const fetchUsersRequest = () =>{
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users =>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error =>{
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () =>{
    return (dispatch) => {

        // קוראים לפונקציית הטעינה
        dispatch(fetchUsersRequest())

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
              //קוראים לפונקציית ההצלחה ומציגים ממנה את המשתמשים שהתקבלו
              const users = response.data
              dispatch(fetchUsersSuccess(users))
        })
        .catch(error =>{
               //קוראים לפונקציית הכשלון
               dispatch(fetchUsersFailure(error.message))
        })
    }
}
