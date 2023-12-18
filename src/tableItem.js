import SubItem from "./subItem";
import { useEffect, useState,useRef } from "react";
import { MdOutlineExpandMore,MdExpandLess,MdAddCircleOutline  } from "react-icons/md";
export default function TableItem(props){
    const [hidden,setHidden] = useState(true);
    const [list,setList] = useState([]);
    const [product1,setProduct1] = useState(props.data.Product1);
    const [product2,setProduct2] = useState(props.data.Product2);
    const [product3,setProduct3] = useState(props.data.Product3);

    let data = props.data;
    let handleClick = ()=>{
        // here reveal the sub - geographies:
        setHidden(state=>!state);
    }
    useEffect(()=>{
        setList([]);
        props.setTotal1(val=>val+props.data.Product1);
        props.setTotal2(val=>val+props.data.Product2);
        props.setTotal3(val=>val+props.data.Product3);

        for(let i=0;i<data.sub_geographies.length;i++)
        {
            setList(lst=>[...lst,<SubItem setTotal1={props.setTotal1} setTotal2={props.setTotal2} setTotal3={props.setTotal3}  setProduct1={setProduct1} setProduct2={setProduct2} setProduct3={setProduct3} name={data.sub_geographies[i].Geography} products={[data.sub_geographies[i].Product1,data.sub_geographies[i].Product2,data.sub_geographies[i].Product3]}/>])
        }
    },[])
    let handleAdd = ()=>{
            setList(lst=>[...lst,<SubItem setTotal1={props.setTotal1} setTotal2={props.setTotal2} setTotal3={props.setTotal3}  setProduct1={setProduct1} setProduct2={setProduct2} setProduct3={setProduct3} name={"Untitled"} products={[0,0,0]}/>])
    }
    return (
    <div className="relative">
    <div className="py-3  w-full flex justify-around">
        <div className=" font-bold w-2/5   ">
            <div className="ml-4">
            {data.Geography}
            </div>
        </div>
        <div onKeyUp={(e)=>{
            setProduct1(parseInt(e.target.innerText) || 0)
        }}  className="w-1/5 text-center ">
            {product1}
        </div>
        <div  onKeyUp={(e)=>{
            setProduct2(parseInt(e.target.innerText) || 0)
        }}  className="w-1/5 text-center ">
            {product2}
        </div>
        <div  onKeyUp={(e)=>{
            setProduct3(parseInt(e.target.innerText) || 0)
        }}  className="w-1/5 text-center ">
            {product3}
        </div>
        <div className="font-bold w-1/5 text-center ml-auto">
            {product1+product2+product3}
        </div>
    </div>
    <div onClick={handleClick} className="text-2xl absolute top-0 right-full mx-2 cursor-pointer">
       {hidden?<MdOutlineExpandMore />:<MdExpandLess />}
    </div>
    <div className={`${hidden?'hidden':''}`}>
       {list}
       <div onClick={handleAdd} className="mt-2 ml-auto mr-auto text-xl cursor-pointer w-fit">
                <MdAddCircleOutline />
        </div>
    </div>


    </div>
    )
}