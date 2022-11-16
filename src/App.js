import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Zwallet from "./pages/ZWallet/ZWallet";
import NewUser from "./pages/NewUser/NewUser";
import Suscripciones from "./pages/Subscriptions/Suscripciones";
import Store from "./pages/Store/Store";
import Topic from "./pages/Topic/Topic";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import HelpCenter from "./pages/HelpCenter/HelpCenter";
import Configuration from "./pages/Configuration/Configuration";
import Profile from "./pages/Profile/Profile";
import PaymentMethods from "./pages/PaymentMethods/PaymentMethods";
import CreatorProfile from "./pages/CreatorProfile/CreatorProfile";
import VideoCourse from "./pages/VideoCourse/VideoCourse";
import Product from "./pages/Product/Product";

function App() {

  return (
    <div className="App">
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
          <Route path="Profile" element={<Profile />} />
          <Route path="CreatorProfile" element={<CreatorProfile />} />
          <Route path="PaymentMethods" element={<PaymentMethods />} />
          <Route path="VideoCourse" element={<VideoCourse />} />
          <Route path="Product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
