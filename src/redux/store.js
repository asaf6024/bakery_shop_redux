//Import middleWare 
import { createStore, applyMiddleware } from 'redux'
// Import plugin
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

//נשים את הקומפוס בתוך הסטור ובתוכו את המידלוור
//createStore recives - Reducer + composeWithDevTools function that included applyMiddleware (logger, thunk)
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger, thunk), 
    // other store enhancers if any
  ));

export default store