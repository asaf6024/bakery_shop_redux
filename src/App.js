import { Provider } from 'react-redux'
import store from './redux/store'

import './App.css';
import Cake from './components/Cake'
import IceCream from "./components/IceCream";
import Order from './components/Order'
import HooksCake from './components/HooksCake'

import Item from './components/Item'

import Delivery from './components/Delivery'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import Header from './components/Header'
import User from './components/User'

function App() {
 
    return (
      <Provider store={store}>
        <div className="App">
         
          <Header/>
          {/* <HooksCake /> */}
        
          <div className = 'order'>
         
            <Cake />
            <IceCream/>
         
            {/* <NewCake /> */}
            <Order />
            <Delivery/>
            <User />
           
            
          </div>
         
          {/* <Item cake/>
          <Item/> */}
        <Footer/>
        </div>
        </Provider>
      ); 
}
export default App;
