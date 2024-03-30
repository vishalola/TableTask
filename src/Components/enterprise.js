import { useEffect } from "react";
import { useState } from "react";
import EnterpriseItem from "./enterpriseItem";

export default function Enterprise() {
    const [featureList,setList] = useState([]);
    const unlimitedFeatures = [
        "40,000 message credits/month",
        "20 chatbots",
        "20,000,000 characters/chatbot",
        "Unlimited links to train on",
        "Embed on unlimited websites",
        "Upload multiple files",
        "Zapier integration",
        "Slack integration",
        "WordPress integration",
        "WhatsApp integration",
        "Messenger integration",
        "Option to Choose GPT-4",
        "Image capabilities",
        "Remove 'Powered by Elephant.ai'"
      ];
    useEffect(()=>{
        setList([]);
        for(let i = 0;i<unlimitedFeatures.length;i++)
        {
            setList(lst=>[...lst,<EnterpriseItem name={unlimitedFeatures[i]}/>])
        }
    },[])
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 ">
      <div className="mx-auto mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg sm:w-4/5">
        <div className="flex flex-col justify-between space-y-4 p-8 pb-0 sm:flex-row sm:items-center sm:space-y-0 sm:p-16 sm:pb-0">
          <div>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Elephant.ai{" "}
              <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                Enterprise
              </span>
            </h3>
            <p className="mt-4 max-w-lg text-gray-500 [text-wrap:balance]">
              Custom tailored plans for large enterprises. Whether you're
              running a SMS campaign with <i>millions</i> of short links or a
              large marketing campaign with <i>billions</i> of clicks, we've got
              you covered.
            </p>
          </div>
          <a
            className="group rounded-full border bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-2 text-center font-medium text-white transition-all duration-200 ease-in-out hover:scale-105 active:scale-95"
            href="/enterprise"
          >
            Contact us
          </a>
        </div>
        <div className="relative outlin mx-8 mt-4 mb-3 overflow-hidden sm:mx-16">
            <div className="outlin pointer-events-none absolute -top-1 z-10 h-40 w-full bg-gradient-to-b from-white to-transparent"></div>
            <div className="outlin pointer-events-none absolute -bottom-1 z-10 h-40 w-full bg-gradient-to-t from-white to-transparent"></div>
            <div className="outlin pointer-events-none absolute -left-1 z-10 h-full w-40 bg-gradient-to-r from-white to-transparent"></div>
            <div className="outlin pointer-events-none absolute -right-1 z-10 h-full w-40 bg-gradient-to-l from-white to-transparent"></div>
            <div className="outlin scroll_animation mx-auto grid h-[250px] w-[300px] grid-cols-1 gap-5 sm:w-[600px] sm:grid-cols-2" style={{animationPlayState:"running"}}>
                {featureList}
            </div>
        </div>
      </div>
    </div>
  );
}
