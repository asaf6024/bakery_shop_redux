import { Provider } from 'react-redux'
import store from './redux/store'

import './App.css';
import Cake from './components/Cake'
import IceCream from "./components/IceCream";
import Order from './components/Order'
import HooksCake from './components/HooksCake'

import Item from './components/Item'
import UserContainer from './components/UserContainer';

function App() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Shop</h1>
         
          {/* <HooksCake /> */}
          <div className = 'order'>
            <Cake />
            <IceCream/>
         
            {/* <NewCake /> */}
            <Order />
          
          </div>
          <UserContainer/>  
          {/* <Item cake/>
          <Item/> */}

        </div>
        </Provider>
      ); 
}
export default App;
