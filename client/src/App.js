import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids"
import Product from "./pages/SingleProduct"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import ScrollToTop from "./components/ScrollToTop"


const App = () => {
  const user = useSelector((state)=>state.user.currentUser )
  return (
    <Router>
      <ScrollToTop>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/products/men" element = {<Men />} />
        <Route path="/products/women" element = {<Women />} />
        <Route path="/products/kids" element = {<Kids />} />
        <Route path="/product/:id" element = {<Product />} />
        <Route path="/login" element = {user ? <Navigate to="/"/> : <Login />} />
        <Route path="/register" element = {user ? <Navigate to="/"/> : <Register />} />
        <Route path="/cart" element = {<Cart />} />
        <Route path="/success" element = {<Success />} />
      </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;