import TableItem from "./tableItem";
import Data from './Assets/data.json';
import { useEffect, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
export default function Table(){

    const [list,setList] = useState([]);
    const [total1,setTotal1] = useState(0);
    const [total2,setTotal2] = useState(0);
    const [total3,setTotal3] = useState(0);

    useEffect(()=>{
        setList([]);
        for(let i=0;i<Data.length;i++)
        {
            setList(lst=>[...lst,<TableItem setTotal1={setTotal1} setTotal2={setTotal2} setTotal3={setTotal3} data={Data[i]}/>])
        }
    },[])

    let handleAdd = ()=>{
        let newData = {
            "Geography": "Untitled",
            "Product1": 0,
            "Product2": 0,
            "Product3": 0,
            "sub_geographies": []
            };
        setList(lst=>[...lst,<TableItem setTotal1={setTotal1} setTotal2={setTotal2} setTotal3={setTotal3} data={newData}/>])
    }
    return (

        <div className="relative w-2/3 min-w-[600px] shadow-lg border-0 border-black">
            <div className="titles py-3 border-b-[1px] border-black w-full flex justify-around">
                <div className="text-center w-2/5 font-bold ">
                    Product/Geography
                </div>
                <div className="w-1/5 font-bold text-center  ">
                    Product 1
                </div>
                <div className="w-1/5 font-bold text-center  ">
                    Product 2
                </div>
                <div className="w-1/5 font-bold text-center  ">
                    Product 3
                </div>
                <div className="w-1/5 font-bold text-center ml-auto">
                    Total
                </div>
            </div>
            {list}
            <div onClick={handleAdd} className="mt-2 ml-auto mr-auto text-2xl cursor-pointer w-fit">
                <MdAddCircleOutline />
            </div>
            <div className="result  py-3  w-full flex justify-around">
                <div className="text-center w-2/5 font-bold ">
                    Summary
                </div>
                <div className="w-1/5 font-bold text-center ">
                    {total1}
                </div>
                <div className="w-1/5 font-bold text-center  ">
                    {total2}
                </div>
                <div className="w-1/5 font-bold text-center ">
                    {total3}
                </div>
                <div className="w-1/5 font-bold text-center ml-auto">
                    {total1+total2+total3}
                </div>
            </div>
        </div>
    )
}