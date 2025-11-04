import { useState } from "react";

export default function Test() {

    const [count, setCount] = useState(0)
    const [isOn, setIsOn] = useState("🌞")




  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
        <div className="w-[400px] h-[300px] shadow-2xl flex justify-center items-center">
            <button className="w-[100px] h-[50px] bg-red-600 text-white" onClick={()=>{
                setCount(count - 1);
            }}>
                Decrement
            </button>

            <h1 className="w-[100px] h-[50px] text-[30px] text-center ">{count}</h1>
            <button onClick={()=>{
                setCount(count + 1);

            }} className="w-[100px] h-[50px] bg-blue-600 text-white">
                Increment
            </button>

        </div>
        <div className="w-[400px] h-[300px] shadow-2xl flex justify-center items-center flex-col">
            <span className="h-[30px] text-2xl font-bold">
                {isOn}
            </span>
            <div className="w-full h-[50px] flex justify-center items-center">
                <button className="w-[100px] text-white h-full bg-red-600" onClick={
                    ()=>{
                        setIsOn("🌚")
                    }
                }>off</button>
                <button className="w-[100px] text-white h-full bg-green-600" onClick={
                    ()=>{
                        setIsOn("🌞")
                    }
                }>On</button>

            </div>

        </div>
    </div>
  )
}