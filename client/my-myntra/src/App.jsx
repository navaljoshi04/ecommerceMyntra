import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import HomeComponent from "./components/HomeComponent";
import ProductComponents from "./components/ProductComponents";
import Wishlists from "./components/Wishlists";
import Login from "./components/Login";

const App = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/products/:category" element={<ProductComponents />} />
        <Route
          path="/products/:category/:subcategory"
          element={<ProductComponents />}
        />
        <Route path="/wishlist" element={<Wishlists />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {location.pathname != "/login" && <Footer />}
    </div>
  );
};

export default App;
