import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import HomeComponent from "./components/HomeComponent";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
          <Header />
          <main className="flex-grow">
            {/* Your routes/components will come here */}
            <HomeComponent />
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
