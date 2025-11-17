import { Link, Route, Routes, useLocation } from "react-router-dom";
import { LuClipboardList } from "react-icons/lu";
import { BsBoxes } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { MdOutlineRateReview } from "react-icons/md";
import AdminProductsPage from "./admin/adminProductsPage";
import AdminAddProductPage from "./admin/adminAddProductPage";

export default function AdminPage() {
  const location = useLocation();

  const menuItems = [
    { path: "/admin", label: "Orders", icon: <LuClipboardList /> },
    { path: "/admin/products", label: "Products", icon: <BsBoxes /> },
    { path: "/admin/users", label: "Users", icon: <FiUsers /> },
    { path: "/admin/reviews", label: "Reviews", icon: <MdOutlineRateReview /> },
  ];

  return (
    <div className="w-full h-full flex bg-primary">

      {/* Sidebar */}
      <div className="w-[300px] h-full bg-primary shadow-2xl">

        {/* Header */}
        <div className="w-full h-[100px] flex items-center px-4">
          <img
            src="/logo.png"
            alt="logo"
            className="h-[80%] rounded-xl shadow-xl bg-white p-1"
          />
          <h1 className="text-2xl pl-4 text-white tracking-wide font-semibold">
            Admin Panel
          </h1>
        </div>

        {/* Line under header */}
        <div className="w-full h-[1.5px] bg-white opacity-50 mb-3"></div>

        {/* Sidebar Menu */}
        <div className="flex flex-col text-white mt-2">

          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`w-full flex items-center h-[50px] px-5 gap-3 transition-all duration-200
                ${location.pathname === item.path
                  ? "bg-gold text-primary font-semibold rounded-r-lg"
                  : "hover:bg-white/20"
                }
              `}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-lg">{item.label}</span>
            </Link>
          ))}

        </div>
      </div>

      {/* Main Content */}
      <div className="w-[calc(100%-300px)] h-full custom-scrollbar border-2.5 border-accent rounded-3xl bg-white overflow-y-scroll p-5">
        <Routes>
          <Route path="/" element={<h1>Orders</h1>} />
          <Route path="/products" element={<AdminProductsPage />} />
          <Route path="/add-product" element={<AdminAddProductPage />} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/reviews" element={<h1>Reviews</h1>} />
        </Routes>
      </div>

    </div>
  );
}
