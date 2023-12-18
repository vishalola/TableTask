import { useState } from "react";
export default function SubItem(props){

    const [product1,setProduct1] = useState(props.products[0]);
    const [product2,setProduct2] = useState(props.products[1]);
    const [product3,setProduct3] = useState(props.products[2]);
    return (
    <div className="bg-slate-100 py-3 border-t-0 border-0
    border-black w-full flex justify-around">
        <div className="  w-2/5 ">
            <div className="ml-10">
                {props.name}
            </div>
        </div>
        <div onKeyUp={(e)=>{
            let prevValue = product1;
            let change = (parseInt(e.target.innerText) || 0) - prevValue;
            props.setTotal1(prev=>prev+change);
            props.setProduct1(prev=>prev+change)
            setProduct1(parseInt(e.target.innerText) || 0)
        }}   contentEditable className="w-1/5 text-center  ">
            {props.products[0]}
        </div>
        <div onKeyUp={(e)=>{
            let prevValue = product2;
            let change = (parseInt(e.target.innerText) || 0) - prevValue;
            props.setTotal2(prev=>prev+change);
            props.setProduct2(prev=>prev+change)

            setProduct2(parseInt(e.target.innerText) || 0)
        }} contentEditable className="w-1/5 text-center ">
            {props.products[1]}
        </div>
        <div onKeyUp={(e)=>{
            let prevValue = product3;
            let change = (parseInt(e.target.innerText) || 0) - prevValue;
            props.setTotal3(prev=>prev+change);
            props.setProduct3(prev=>prev+change)
            setProduct3(parseInt(e.target.innerText) || 0)
        }} contentEditable className="w-1/5 text-center">
            {props.products[2]}

        </div>
        <div className="w-1/5 text-center ml-auto">
            {product1 + product2 + product3}
        </div>
    </div>
    
    )
}