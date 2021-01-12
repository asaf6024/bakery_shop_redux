//נייבא את המידלוור מתוך רידקס
import { createStore, applyMiddleware } from 'redux'
//..נייבא את התוסף ששמו קומפוס
import { composeWithDevTools } from 'redux-devtools-extension';
//נייבא את הלוגר
import logger from 'redux-logger'

//נייבא את הטנק
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'


//נשים את הקומפוס בתוך הסטור ובתוכו את המידלוור
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger, thunk), //נוסיף כאן את הטנק
    // other store enhancers if any
  ));

export default store