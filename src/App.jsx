import { Routes, Route } from "react-router-dom";

import NavbarComponents from "./components/NavbarComponents";
// import FooterComponents from "./components/FooterComponents";

import HomePage from "./pages/Homepage";
import Skills from "./pages/Skills";
import Develope from "./pages/Develope";
import About from "./pages/About";


function App() {
  return (
    <div>
      <NavbarComponents/>

      <Routes>
        {/* Route harus ada di dalam routes */}
        {/* Ketika kita mengakses route pertama kita, maka kita akan mengakses sebuah komponen yang akan mengarahkan ke file dari HomPage */}
        <Route path="/" Component={HomePage} />
        <Route path="/skills" Component={Skills} />
        <Route path="/develope" Component={Develope} />
        <Route path="/about" Component={About} />
      </Routes>
      
      {/* <FooterComponents/> */}
    </div>
  );
}

export default App
