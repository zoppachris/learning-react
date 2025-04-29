import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Product from "./pages/product";
import ProductReducer from "./pages/product-reducer";
import ProductRedux from "./pages/product-redux";
import ProductId from "./pages/product-id";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<ProductId />} />
        <Route path="/product-reducer" element={<ProductReducer />} />
        <Route path="/product-redux" element={<ProductRedux />} />
      </Routes>
    </>
  );
}

export default App;
