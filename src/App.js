import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";

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

      <Route  path="/" element={<Home />} />
        
      <Route  path="/Product" element={<Product/>} />

      <Route path="Product/:id" element={<ProductDetails />} />

      <Route path="/:id" element={<ProductDetails />} />

      <Route  path="/Booking" element={<Booking />} />
        
      <Route  path="/Contact" element={<Contact/>} />
    
      <Route path="/Cart" element={<Cart />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
