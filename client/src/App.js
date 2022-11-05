import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids"
import Product from "./pages/SingleProduct"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


const App = () => {
  const user = true
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/products/men" element = {<Men />} />
        <Route path="/products/women" element = {<Women />} />
        <Route path="/products/kids" element = {<Kids />} />
        <Route path="/product/:id" element = {<Product />} />
        <Route path="/login" element = {user ? <Navigate to="/"/> : <Login />} />
        <Route path="/register" element = {user ? <Navigate to="/"/> : <Register />} />
        <Route path="/cart" element = {<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;