import { useState } from "react";
export default function AddOnItem(props){

    const [total,setTotal] = useState(props.price);
    let handleChange = (e)=>{
        let amount =Math.max(1, e.target.value);
        setTotal((amount*props.price)/props.factor);
    }
    return(
        <div className="px-8 py-6 rounded-lg min-h-[100px] border border-gray-200 bg-white shadow-lg">
            <div className="outlin font-bold text-lg md:text-xl">
                {props.title}
            </div>
            <div className="outlin my-1 text-gray-400">
                {props.description}
            </div>
{ props.quant &&            <div className="flex items-center mt-6">
                    <div>
                        Quantity:
                    </div>
                    <div className="mx-2">
                        <input step={props.factor} min={props.factor} onChange={handleChange} type="number" defaultValue={props.factor} className="border text-end px-2 py-1 w-[80px] outline-none" />
                    </div>
                </div>}
            <div className=" flex items-end outlin">
                <div className="font-bold text-lg ">
                    Total :
                </div>
                <div className="text-xl md:text-5xl mx-2 font-semibold">
                    ${total} 
                </div>
                <div className="text-gray-500">
                    / month
                </div>
                <div className="ml-auto mt-8">
                    <button className="bg-blue-500 text-sm md:text-base text-white px-4 py-2 hover:border-blue-500 hover:bg-white hover:text-blue-500 transition-all border rounded-3xl">
                        Get Add-On
                    </button>
                </div>
            </div>
        </div>
    )
}