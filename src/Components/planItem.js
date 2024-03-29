import Feature from "./feature";
import {useState} from "react";
import { useEffect } from "react";
export default function PlanItem(props){
    const [featureList,setList]= useState([]);
    useEffect(()=>{
        if(props.list)
        {
            setList([]);
            props.list.forEach(item=>{
                setList(lst=>[...lst,<Feature name={item} popular={props.popular}/>])
            })
        }

    },[props.list])
    return (
        <div className={`relative h-full rounded-2xl bg-white ${props.popular?'border-2 border-blue-600 shadow-blue-200':'border border-gray-200'} shadow-lg`}>
        
            {props.popular && <div class="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-center text-sm font-medium text-white">Popular</div>}
            <div class="p-8">
                <div class="flex items-center space-x-2">
                    <div class={`h-5 w-5 rounded-full ${props.popular?'bg-blue-500':'bg-black'}`}></div>
                    <h3 class="font-display text-2xl font-bold text-black">
                        {props.name || 'name'}
                    </h3>
                </div>
                <p class="mt-2 text-gray-500">
                    {props.description || 'description'}
                </p>
                <div class="my-4 flex items-end space-x-2">
                    <p class="font-display text-5xl font-semibold">${props.price || '0'}</p>
                    <p class="text-gray-500">/ month</p>

                </div>
            </div>
            <div class="flex items-center justify-center border-b border-t border-gray-200 bg-gray-50 px-8 py-5">
                <a class={`block w-full rounded-full border py-2 text-center font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent ${props.popular?'bg-blue-500 border-blue-500 hover:text-blue-500':'bg-black border-black hover:text-black'} `} href="https://app.dub.co/register">
                    Subscribe
                </a>
            </div>
            <h4 class="mt-4 px-8 font-medium text-gray-600">What's included:</h4>
            <ul className="mb-10 outlin mt-4 space-y-3 px-8">
                {featureList}
            </ul>
        </div>
    )
}