import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Zwallet from "./pages/ZWallet/ZWallet";
import NewUser from "./pages/NewUser/NewUser";
import Suscripciones from "./pages/Subscriptions/Suscripciones";
import Store from "./pages/Store/Store";
import Topic from "./pages/Topic/Topic";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import HelpCenter from "./pages/HelpCenter/HelpCenter";
import Configuration from "./pages/Configuration/Configuration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewUser />} />
          <Route path="Home" element={<Home />} />
          <Route path="Zwallet" element={<Zwallet />} />
          <Route path="Suscripciones" element={<Suscripciones />} />
          <Route path="Tienda" element={<Store />} />
          <Route path="Topic" element={<Topic />} />
          <Route path="History" element={<History />} />
          <Route path="HelpCenter" element={<HelpCenter />} />
          <Route path="Configuration" element={<Configuration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
