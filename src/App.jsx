import Navbar from "./Views/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import AboutUs from "./Pages/AboutUs";
import Description from "./Pages/Description";
import Thankyou from "./Pages/Thankyou";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/description" element={<Description />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </Router>
  );
}

export default App;
