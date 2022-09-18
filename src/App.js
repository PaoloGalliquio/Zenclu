import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './components/Principal';
import Zwallet from './components/ZWallet/ZWallet';
import NewUser from './components/NewUser/NewUser';
import Suscripciones from './components/Suscripciones/Suscripciones';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NewUser/>}/>
        <Route path='Home' element={<Principal/>}/>
        <Route path='Zwallet' element={<Zwallet/>}/>
        <Route path='Suscripciones' element={<Suscripciones/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
