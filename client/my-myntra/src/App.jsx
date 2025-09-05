import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import HomeComponent from "./components/HomeComponent";
import ProductComponents from "./components/ProductComponents";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/products/:category" element={<ProductComponents />} />
          <Route
            path="/products/:category/:subcategory"
            element={<ProductComponents />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
