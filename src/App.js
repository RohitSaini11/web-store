import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

import 
{ 
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  // const router=createBrowserRouter([
  //   {path:"/", element:<Home />},
  //   {path:"/About", element:<About />},
  //   {path:"/Product", element:<Product />},
  //   {path:"/Booking", element:<Booking />},
  //   {path:"/Contact",element:<Contact/>}
  //   // ,{path:"/Cart",element:<Cart/>}
  // ])

  return (
    <>
    
     <Navbar />
    <Routes>

      <Route exact path="/" element={<Home />} />
        
      <Route exact path="/About" element={<About />} />
        
      <Route exact path="/Product" element={<Product/>} />
       
      <Route exact path="/Booking" element={<Booking />} />
        
      <Route exact path="/Contact" element={<Contact/>} />
    
    </Routes>
    
    </>
  );
}

export default App;
