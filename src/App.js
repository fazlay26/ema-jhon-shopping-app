
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/Orders' element={<Orders></Orders>}></Route>
        <Route path='/Inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Shipment' element={<RequireAuth>
          <Shipment></Shipment>
        </RequireAuth>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}

export default App;
