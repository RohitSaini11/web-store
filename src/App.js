import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import Login from "./pages/LogIn";
import Signup from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { NotificationContainer } from 'react-notifications';


function App() {

  const [user,setUser]=useState();

  // const isLoggedIN = ()=>{
  //   // if (auth.currentUser) {
  //   //   // User is signed in, see docs for a list of available properties
  //   //   // https://firebase.google.com/docs/reference/js/auth.user
      
  //   //   console.log("Oh yes, Someone is here",auth.currentUser);
  //   // } else {
  //   //   // No user is signed in.
  //   //   console.log("Nada, nobody is here.");
  //   // }
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       const uid = user.uid;
  //       console.log("Oh yes, Someone is here",uid);
  //       setUser(user);
  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...
  //       console.log("Nada, nobody is here.");
  //     }
  //   });
  // }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            setUser(user);
            // ...
          } 
        });
  })
  

  return (
    <> 
    <Navbar user={user} setUser={setUser} />
    <Routes>
      {/* create a 404 page for any other route than the following */}
      {/* <Route path="/Home" element={<Home isLoggedIN={isLoggedIN}/>} /> */}
      
      <Route path="/" element={<Home user={user} />} />

      <Route path="/Login" element={<Login setUser={setUser} />} />

      <Route path="/Signup" element={<Signup setUser={setUser} />} />

      <Route path="/Product" element={<Product />} />

      <Route path="Product/ShowDetails/:id" element={<ProductDetails user={user} />} />

      <Route path="ShowDetails/:id" element={<ProductDetails  user={user} />} />

      <Route path="/Booking" element={<Booking />} />
        
      <Route path="/Contact" element={<Contact />} />
    
      <Route path="/Cart" element={<Cart user={user} />} />

      <Route path="*" element={<NotFound />} />

      

    </Routes>
    <NotificationContainer/>
    <Footer />
    </>
  );
}

export default App;
