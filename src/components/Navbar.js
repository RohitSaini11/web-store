import { Link, useNavigate } from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "../firebase/firebase";
import { useEffect } from "react";
import GetUser from "./GetUser";

function Navbar(){

    const navigate = useNavigate();
    // const user="User";

    const signout =()=>{
            signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log("sign-out success!");
                navigate('/');
              }).catch((error) => {
                // An error happened.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
              });
    }

    return(
        <nav className=" shadow-lg bg-gray-100 py-4 px-5 flex justify-between  items-center container mx-auto">
            <div className="">
                <Link className="text-orange-700 font-normal  text-4xl" >WebStore</Link>
            </div>
            <div className="flex items-center gap-2 ">
                <ul className="list-none flex justify-center gap-5">
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/About">About</Link>
                    </li> */}
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

                
                {/* MAKE IT SHOW ONLY WHEN USER IS LOGGED 
                <div id="username_nav" className=" bg-orange-300 text-white min-w-[5rem] font-semibold p-1" >
                    <p className="text-center cursor-default">Hello! <br/> {props.user.displayName}</p>
                </div> */}
                <button className="bg-red-500 text-white p-1" onClick={signout}>Log out!</button>
            </div>
                
        </nav>
    );
}

export default Navbar;