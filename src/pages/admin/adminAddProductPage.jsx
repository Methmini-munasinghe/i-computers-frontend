import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminAddProductPage() {
    const [productID, setProductID] = useState("");
    const [name, setName] = useState("");
    const [altNames, setAltNames] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [labeledPrice, setLabeledPrice] = useState("");
    const [images, setImages] = useState([]);
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [stock, setStock] = useState(0);
    const [isAvailable, setIsAvailable] = useState(false);
    const navigate = useNavigate();

    async function addProduct() {
        const token = localStorage.getItem("token");
        if(token===null){
            toast.error("You must be logged in as an admin to add products.");
            navigate("/login");
            return;

        }

        if(productID==""|| name=="" || description=="" || price<=0 || category=="" || brand=="" || model==""){
            toast.error("Please fill in all required fields.");
            return;
        }

        try {
            const altNamesArray = altNames.split(",");
            const imagesArray = images.split(",");
            await axios.post(import.meta.env.VITE_BACKEND_URL + "/products/", {
                productID : productID,
                name: name,
                altNames: altNamesArray,
                description: description,
                price: price,
                labeledPrice: labeledPrice,
                images: imagesArray,
                category: category,
                brand: brand,
                model: model,
                stock: stock,
                isAvailable: isAvailable
            }, 
        {
            headers: {
                Authorization:"Bearer "+ token          
              }
        });
        toast.success("Product added successfully!");
        navigate("/admin/products");

        }catch (err) {
            console.log("error during adding product:")
            console.log(err)
            toast.error("Failed to add product. Please try again.");
        }
    }

    return (
        <div className="w-full min-h-screen flex justify-center items-start bg-gray-100 p-10 overflow-y-auto">
          <div className="w-full max-w-2xl bg-primary/80 p-8 rounded-3xl shadow-lg">
            <div className="w-full flex items-center gap-2 mb-4">
               <AiOutlineProduct className="text-2xl text-white" />
               <h1 className="text-xl font-bold text-white">Add New Product</h1>
            </div>


                <div className="w-full bg-white p-8 rounded-2xl shadow-inner">

                    {/* ---------- PRODUCT ID + NAME ---------- */}
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <div className="w-full md:w-1/2">
                            <label>Product ID:</label>
                            <input
                                type="text"
                                value={productID}
                                onChange={(e) => setProductID(e.target.value)}
                                className="w-full h-10 rounded-2xl border border-secondary shadow-2xl px-4"
                            />
                            <p className="text-sm text-gray text-right mt-1">Unique ID</p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <label>Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full h-10 rounded-2xl border border-secondary shadow-2xl px-4"
                            />
                        </div>
                    </div>

                    {/* ---------- ALTERNATIVE NAME + STOCK + AVAILABLE ---------- */}
                    <div className="flex flex-col md:flex-row gap-6 mb-6">

                        <div className="w-full md:w-1/2">
                            <label>Alternative Name:</label>
                            <input
                                type="text"
                                value={altNames}
                                onChange={(e) => setAltNames(e.target.value)}
                                className="w-full h-10 rounded-2xl border border-secondary shadow-2xl px-4"
                            />
                            <p className="text-sm text-gray text-right mt-1">
                                Separate multiple Names with commas
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <div>
                                <label>Stock Quantity:</label>
                                <input
                                    type="number"
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                    className="w-full h-10 rounded-2xl border border-secondary shadow-2xl px-4"
                                />
                            </div>

                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={isAvailable}
                                    onChange={(e) => setIsAvailable(e.target.checked)}
                                    className="w-5 h-5 rounded-2xl border border-secondary shadow-2xl"
                                />
                                <label >Is Available?</label>
                            </div>
                        </div>
                    </div>

                    {/* ---------- DESCRIPTION ---------- */}
                    <div className="mb-6">
                        <label>Description:</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full h-[60px] rounded-2xl border border-secondary shadow-2xl px-4 py-3"
                        />
                    </div>

                    {/* ---------- PRICE + LABELED PRICE ---------- */}
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <div className="w-full md:w-1/2">
                            <label>Price (in LKR):</label>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full h-10 rounded-2xl border border-secondary shadow-2xl px-4"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <label>Labeled Price:</label>
                            <input
                                type="text"
                                value={labeledPrice}
                                onChange={(e) => setLabeledPrice(e.target.value)}
                                className="w-full h-10 rounded-2xl border border-secondary shadow-2xl px-4"
                            />
                        </div>
                    </div>

                    {/* ---------- IMAGES ---------- */}
                    <div className="mb-6">
                        <label>Images:</label>
                        <textarea
                            value={images}
                            onChange={(e) => setImages(e.target.value)}
                            className="w-full h-[60px] rounded-2xl border border-secondary shadow-2xl px-4 py-3"
                        />
                    </div>

                    {/* ---------- CATEGORY + BRAND + MODEL ---------- */}
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <div className="w-full md:w-1/3">
                            <label>Category:</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full h-10 rounded-2xl border border-secondary shadow-2xl px-3 bg-white"
                            >
                                <option value="">Select Here</option>
                                <option value="CPU_coolers">CPU Coolers</option>
                                <option value="CPU">CPU</option>
                                <option value="Graphic_card">Graphic cards</option>
                                <option value="Motherboard">Motherboards</option>
                                <option value="RAM">RAM</option>
                                <option value="Storage">Storage</option>
                                <option value="Power_supply">Power Supplies</option>
                                <option value="Cooling_systems">Cooling Systems</option>
                                <option value="Computer_case">Computer Cases</option>
                                <option value="Mouse">Mouse</option>
                                <option value="Keyboard">Keyboards</option>
                                <option value="Monitor">Monitors</option>
                                <option value="Headset">Headsets</option>
                                <option value="Laptops">Laptops</option>
                                <option value="cables">Cables</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>

                        <div className="w-full md:w-1/3">
                            <label>Brand:</label>
                            <input
                                type="text"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                className="w-full h-10 rounded-2xl border border-secondary shadow-2xl px-4"
                            />
                        </div>

                        <div className="w-full md:w-1/3">
                            <label>Model:</label>
                            <input
                                type="text"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                                className="w-full h-10 rounded-2xl border border-secondary shadow-2xl px-4"
                            />
                        </div>
                    </div>
                 {/* ---------- CANCEL + SUBMIT BUTTONS ---------- */}
                    <div className="w-full flex gap-4">
                      <Link to="/admin/products" className="flex-1">
                        <button className="w-full h-12 bg-gray-400 text-white font-semibold rounded-2xl hover:bg-red-900 transition-colors">
                          Cancel
                        </button>
                      </Link>
                    
                      <button
                        onClick={addProduct}
                        className="flex-1 h-12 bg-primary text-white font-semibold rounded-2xl hover:bg-green-800/80 transition-colors"
                      >
                        Add Product
                      </button>
                    </div>


                </div>
            </div>
        </div>
    );
}
