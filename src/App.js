import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './components/Principal';
import Zwallet from './components/ZWallet/ZWallet';
import NewUser from './components/NewUser/NewUser';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NewUser/>}/>
        <Route path='Zenclu' element={<Principal/>}/>
        <Route path='Zwallet' element={<Zwallet/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
