import './App.css'

function App() {
  return (
    <div className="border w-[600px] h-[600px] bg-gray-400 ">
      <div className = "border w-[500px] h-[500px] bg-yellow-100 flex flex-col items-center justify-center ">
        <div className=" w-[100px] h-[100px] bg-blue-600">
        </div>

        <div className="w-[100px] h-[100px] bg-red-600 fixed left-[550px] top-[550px]">
        </div>

      
        <div className="w-[100px] h-[100px] bg-green-700">
        </div>

        <div className="w-[100px] h-[100px] bg-purple-700 absolute right-[20px] bottom-[20px]">
        </div>

      </div>

    </div>

  );
}

export default App
