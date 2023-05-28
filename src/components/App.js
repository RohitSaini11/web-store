import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Booking from "./Booking";
import Contact from "./Contact"
// import { createBrowserRouter , RouterProvider } from "react-router-dom";
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
    <div className="App">
     <Navbar />
    <Routes>

      <Route exact path="/" element={<Home />} />
        
      <Route exact path="/About" element={<About />} />
        
      <Route exact path="/Product" element={<Product/>} />
       
      <Route exact path="/Booking" element={<Booking />} />
        
      <Route exact path="/Contact" element={<Contact/>} />
    
    </Routes>
    </div>
    </>
  );
}

export default App;
