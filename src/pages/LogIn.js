import { Link, NavLink, useNavigate } from "react-router-dom";
import InputControl from "../components/InputControl";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import {auth} from "../firebase/firebase";
import { useState } from "react";

function LogIn(props){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg,setErrorMsg] = useState('');

    // create the the reset password functionality.

    const checkUser = () =>{
        if( email === '' || password === '' ){
            setErrorMsg("Fill all the Fields.");
            return;
        }
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            // console.log(userCredential);
            // console.log(userCredential.user);
            //Logged In
            const user = userCredential.user;
            props.setUser(user);
            // props.setUser(user);
            navigate('/');
            // console.log(user);
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode === "auth/user-not-found"){
                setErrorMsg("User Not Found!");
            }
            else if(errorCode === "auth/wrong-password"){
                setErrorMsg("Incorrect Email / Password!");
            }
            else if(errorCode === "auth/too-many-requests"){
                setErrorMsg("Too many failed attempts! Account Temporarily Blocked , Please try again later.");
            }
            console.log(errorCode,errorMessage);
        })
    }

return(
    <div className=" bg-gray-200  h-[85vh] flex items-center justify-center font-san">
        <div className=" bg-white w-[30rem] shadow-lg flex flex-col items-center gap-5 p-5 rounded-md">
            <h1 className="font-medium text-2xl ">Login</h1>
            
            <InputControl lable={"Email"} placeholder={"Enter Email"} type={"email"} onChange={(event) => setEmail(event.target.value)} />
            <InputControl lable={"Password"} placeholder={"Enter Password"} type={"password"} onChange={(event) => setPassword(event.target.value)} />
            <p className="text-red-600 font-semibold">{errorMsg}</p>
            <div className="">
                <button onClick={checkUser} className="w-64 p-1 bg-orange-400 text-white rounded-md font-medium">Login</button>
                <p className="text-center">
                    Don't have an account?
                    <span className="authBtn"><Link to="/Signup" className="text-orange-500"> SignUp</Link></span>
                </p>
            </div>
        </div>
    </div> 
 );
}

export default LogIn;