import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Fruits from "./pages/Fruits";
import Vegetables from "./pages/Vegetables";
import Meats from "./pages/Meats";
import Cart from "./pages/Cart";
import "./utils/i18next.js";
import Help from "./pages/Help.jsx";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Fruits />} />
          <Route path="vegetables" element={<Vegetables />} />
          <Route path="meats" element={<Meats />} />
          <Route path="cart" element={<Cart />} />
          <Route path="help" element={<Help />} />
          
        </Route>
      </Routes>
  );
};

export default App;
