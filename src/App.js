import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './components/Principal';
import Zwallet from './pages/ZWallet/ZWallet';
import NewUser from './pages/NewUser/NewUser';
import Suscripciones from './pages/Subscriptions/Suscripciones';
import Store from './pages/Store/Store';
import Topic from './pages/Topic/Topic';

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NewUser/>}/>
        <Route path='Home' element={<Principal/>}/>
        <Route path='Zwallet' element={<Zwallet/>}/>
        <Route path='Suscripciones' element={<Suscripciones/>}/>
        <Route path='Tienda' element={<Store/>}/>
        <Route path='Topic' element={<Topic/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
