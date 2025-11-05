import { Link } from "react-router-dom";

export default function Header (){
    return(
        <header className="w-full h-[100px] bg-accent flex">
            <img src="/logo.png" alt="logo" className="h-full"/>
            <div className="w-full h-full flex text-secondary items-center justify-center text-xl font-semibold gap-[30px]">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </div>
           
        </header>
    )
}   