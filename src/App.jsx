import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import MainNavbar from "./components/MainNavbar";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import HighLightedCoffeeSection from "./components/HighLightedCoffeeSection";
import ProductList from "./components/ProductList";
import ThemeProvider from "./context/ThemeContext";
import Cafe from "./Pages/cafe";
import Electronics from "./Pages/Electronics";
import Home from "./Pages/Home";
import Toy from "./Pages/toy";
import Fresh from "./Pages/Fresh";
import Mobile from "./Pages/Mobile";
import Beauty from "./Pages/Beauty";
import Fashion from "./Pages/Fashion";
import DealZone from "./Pages/DealZone";
import BabyStore from "./Pages/BabyStore";
function App() {
  return (
    <>
      <Router>
        <ThemeProvider>   
               <MainNavbar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cafe" element={<Cafe/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/toy" element={<Toy/>}></Route>
          <Route path="/Fresh" element={<Fresh/>}></Route>
          <Route path="/Elec" element={<Electronics/>}></Route>
          <Route path="/Mob" element={<Mobile/>}></Route>
          <Route path="/beauty" element={<Beauty/>}></Route>
          <Route path="fashion" element={<Fashion/>}></Route>
          <Route path="dealZ" element={<DealZone/>}></Route>
          <Route path="babys" element={<BabyStore/>}></Route>
          <Route path="/login" element={<Login />}/>
        </Routes>
        </ThemeProvider>

      </Router>
      {/* <HomePage/> */}
      <HighLightedCoffeeSection/>
      <ProductList/>
      <Footer />

    </>
  );
}

export default App;
