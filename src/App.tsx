import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Product from "./pages/product";
import ProductReducer from "./pages/product-reducer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product-reducer" element={<ProductReducer />} />
      </Routes>
    </>
  );
}

export default App;
