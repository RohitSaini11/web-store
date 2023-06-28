import { Link, useNavigate } from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "../firebase/firebase";
import { useEffect, useState } from "react";
import GetUser from "./GetUser";

function Navbar(props){

    const navigate = useNavigate();
    // const user = {...GetUser()};
    const user = {...props.user};
    // const user="User";
    const signout =()=>{
            signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log("sign-out success!");
                props.setUser(null);
                navigate('/');
              }).catch((error) => {
                // An error happened.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
              });
    }
    if(user.displayName!==undefined){
        return(
            <nav className=" shadow-lg w-full bg-gray-100 py-4 px-5 flex justify-between  items-center mx-auto">
                <div className="">
                    <Link className="text-orange-700 font-normal  text-4xl" >WebStore</Link>
                </div>
                <div className="flex items-center gap-2 ">
                    <ul className="list-none flex justify-center gap-5">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {/* create a conditional rendered function, which gives full navbar when a user is loggin in and gives two buttons to login and signup */}
                        <li>
                            <Link to="/Product">Product</Link>
                        </li>
                        <li>
                            <Link to="/Booking">Booking</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/Cart">Cart</Link>
                        </li>
                    </ul>
    
                    {   user.displayName !== undefined ? 
                        <div id="username_nav" className="  text-white min-w-[5rem] font-semibold p-1 flex gap-5" >
                            <p className="text-center cursor-default bg-orange-300 px-3">Hello! <br/> {user.displayName}</p>
                            <button className="bg-red-500 text-white p-1" onClick={signout}>Log out!</button>
                        </div>
                        :
                        <div></div>
                    }
                    {/* MAKE IT SHOW ONLY WHEN USER IS LOGGED 
                    <div id="username_nav" className=" bg-orange-300 text-white min-w-[5rem] font-semibold p-1" >
                        <p className="text-center cursor-default">Hello! <br/> {props.user.displayName}</p>
                    </div> */}
                    
                    
                </div>
                    
            </nav>
        );
    }
    return(
        <nav className=" shadow-lg bg-gray-100 py-4 px-5 flex justify-between  items-center container mx-auto">
            <div className="">
                <Link to="/" className="text-orange-700 font-normal  text-4xl" >WebStore</Link>
            </div>
            <div className="flex items-center gap-2 ">
                <p>Welcome!</p>
                <Link to="/Login" className=" bg-orange-400 text-white rounded-md font-medium p-1"><button  >Log In</button></Link>
                <p>New User?</p>
                <Link to="/Signup" className=" bg-orange-400 text-white rounded-md font-medium p-1"><button  >Sign Up!</button></Link>        
            </div>
                
        </nav>
    );
    
}

export default Navbar;