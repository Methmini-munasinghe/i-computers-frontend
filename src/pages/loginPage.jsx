import { Link,useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();

    async function login(){
        console.log("login clicked");
        console.log("Email:", email);
        console.log("Password:", password);

        try{
            const res = await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/login",{
            email: email,
            password: password
        })
           console.log(res)

           localStorage.setItem("token", res.data.token);

           const token = localStorage.getItem("token");

           if(res.data.role==="admin"){
            navigate("/admin");
           } else{
            navigate("/");
           }

           toast.success("Login successful!");

        }catch(err){
            toast.error("Login failed. Please check your credentials.");
            console.log("error during login:")
            console.log(err)

        }


    }

     
    return (
        <div 
        className="w-full h-screen relative flex">
            {/* Background image */}
            <div 
            className="absolute inset-0 bg-[url('/background_img.jpg')] bg-cover bg-center bg-no-repeat">
                <div 
                className="w-full h-full bg-gradient-to-r from-black/70 via-black/30 to-transparent">
                </div>
            </div>

            {/* Content */}
            <div 
            className="w-[50%] h-full flex flex-col justify-center items-center relative z-10 px-8">
                <div 
                className="w-[250px] h-[250px] backdrop-blur-lg shadow-2xl rounded-2xl flex justify-center items-center  ">
                    <img 
                    src="/ICM.png" alt="logo" 
                    className="w-[200px] h-[200px] object-cover rounded-2xl" />
                </div>
                <h1 className="text-[50px] text-[#ffffff] text-shadow-3xs text-shadow-black font-bold text-center">
                    Empowering Sri Lanka Through Technology
                </h1>
                <p className="text-[30px] text-gold font-semibold italic text-center">
                    Your trusted destination for quality computers, accessories, and IT solutions.
                </p>

            </div>

            <div className="w-[50%] h-full flex justify-center items-center relative z-10">
                <div 
                className="w-[450px] h-[600px] backdrop-blur-lg shadow-2xl rounded-2xl flex flex-col justify-center items-center p-[30px] border-2 border-gold">
                    <h1 
                    className="text-[40px] font-bold mb-5 text-white">
                        Login
                    </h1>
                    <input 
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full h-[50px] mb-5 rounded-lg border border-white p-2.5 text-[20px] focus:outline-none focus:ring-2 focus:ring-gold text-white"/>
                    <input 
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    type="password" 
                    placeholder="Your Password" 
                    className="w-full h-[50px]  rounded-lg border border-white p-2.5 text-[20px] focus:outline-none focus:ring-2 focus:ring-gold text-white"/>
                    <p 
                    className=" w-full text-right text-white mb-5 non-italic">
                        Forgot your password?
                        <Link to="/reset-password" 
                        className="text-gold  italic">
                            Reset here
                        </Link>
                    </p>
                    <button 
                    onClick={login}
                    className="w-full h-[50px] bg-gold border border-gold text-[#1B2A49] font-semibold text-[20px] rounded-lg hover:bg-transparent hover:text-primary transition-colors">
                        Login
                    </button>
                    <p 
                    className="text-white  not-italic">Don't have an account? 
                        <Link to="/register" 
                        className="text-gold  italic">
                        Register here
                        </Link>
                    </p>

                    
                </div>
            </div>
        </div>
    )
}
