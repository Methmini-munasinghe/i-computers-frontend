import { Route, Routes } from "react-router-dom";
import Header from "../components/header";

export default function HomePage() {
  return (
    <div className="w-full h-full over-flow-y-scroll ">
        <Header />
        <div className="w-full min-h-[calc(100%-100px)]">
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/products" element={<h1>Products</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
         
        </div>
    </div>
  )
}