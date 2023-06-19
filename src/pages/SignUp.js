import { Link , NavLink, useNavigate, } from "react-router-dom";
import InputControl from "../components/InputControl";
import {auth} from "../firebase/firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";


function SignUp(){
        const navigate = useNavigate();
        
        const [email,setEmail] = useState('');
        const [password,setPassword] = useState('');
        const [name,setName] = useState('');
        const [errorMsg,setErrorMsg] = useState('');

        const createUser= async () =>{
                if( name ==='' || email === '' || password === ''){
                    setErrorMsg("Fill all the Fields.");
                    return;
                }
                await createUserWithEmailAndPassword(auth,email,password)
                    .then((userCredential) =>{
                        //console.log(userCredential);
                        //Signed IN
                        const user = userCredential.user;
                        console.log(user);
                        navigate("/");
                        //
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode,errorMessage);    
                    })
        }


    return(
        <div className=" bg-gray-200  h-[85vh] flex items-center justify-center font-san">
            <div className=" bg-white w-[30rem] flex flex-col items-center gap-5 p-5 rounded-md shadow-lg">
                <h1 className="font-medium text-2xl ">SignUp</h1>
                <InputControl lable={"Name"} placeholder={"Enter Name"} type={"text"} onChange={(event) => setName(event.target.value)} />
                <InputControl lable={"Email"} placeholder={"Enter Email"} type={"email"} onChange={(event) => setEmail(event.target.value)} />
                <InputControl lable={"Password"} placeholder={"Enter Password"} type={"password"} onChange={(event) => setPassword(event.target.value)} />
                <p className="text-red-600 font-semibold">{errorMsg}</p>
                <div className="">
                    <button onClick={createUser} className="w-64 p-1 bg-orange-400 text-white rounded-md font-medium">SignUp</button>
                    <p className="text-center">
                        Already have an account?
                        <span className="authBtn"><Link to="/" className="text-orange-500"> Login</Link></span>
                    </p>
                </div>
            </div>
        </div>   
     );
    }
    
    export default SignUp;