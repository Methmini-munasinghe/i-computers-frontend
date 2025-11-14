import { Link, Route, Routes } from "react-router-dom";
import { LuClipboardList } from "react-icons/lu";
import { BsBoxes } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { MdOutlineRateReview } from "react-icons/md";

export default function AdminPage() {
  return (
    <div className="w-full h-full flex bg-accent">
      <div className="w-[300px] h-full bg-accent">
        <div className="w-full h-[100px] flex items-center text-white ">
          <img src="/logo.png" alt="logo" className="h-full border border-2  border-transparent shadow shadow-2xl  rounded-2xl" />
          <h1 className="text-2xl p-2.5">Admin</h1>
        </div>
        <div className="w-full h-[400px] text-white flex flex-col">
          <Link to="/admin"  className="w-full flex items-center h-[50px] gap-2.5"><LuClipboardList />Orders</Link>
          <Link to="/admin/products" className="w-full flex items-center h-[50px] gap-2.5"><BsBoxes />Products</Link>
          <Link to="/admin/users" className="w-full flex items-center h-[50px] gap-2.5"><FiUsers />Users</Link>
          <Link to="/admin/reviews" className="w-full flex items-center h-[50px] gap-2.5"><MdOutlineRateReview />Reviews</Link>

        </div>
      </div> 
      <div className="w-[calc(100%-300px)] h-full max-h-full custom-scrollbar border-2.5 border-accent rounded-3xl bg-white overflow-y-scroll">
        <Routes >
          <Route path="/" element={<h1>Orders</h1>} />
          <Route path="/products" element={<h1>Products</h1>} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/reviews" element={<h1>Reviews</h1>} />
        </Routes>

      </div>
    </div>
  )
}