import BoolTableItem from "./boolTableItem";
import TableItem from "./tableItem";
import { useState } from "react";
import { useEffect } from "react";
export default function PlanCompare() {

  const [featureList,setList] = useState([]);
  const featureData = [
    {
      boolType:false,
      name:'Message credits/month',
      first:20,
      second:2500,
      third:20000,
      fourth:40000
    },
    {
      boolType:false,
      name:'Chatbots',
      first:1,
      second:2,
      third:5,
      fourth:20
    },
    {
      boolType:false,
      name:'Characters/Chatbot',
      first:400000,
      second:12000000,
      third:15000000,
      fourth:20000000
    },
    {
      boolType: true,
      name: 'Unlimited links to train on',
      first: false,
      second: true,
      third: true,
      fourth: true
    },
    {
      boolType: true,
      name: 'Embed on unlimited websites',
      first: true,
      second: true,
      third: true,
      fourth: true
    },
    {
      boolType: true,
      name: 'Upload multiple files',
      first: true,
      second: true,
      third: true,
      fourth: true
    },
    {
      boolType: true,
      name: 'Escalate to human',
      first: false,
      second: true,
      third: true,
      fourth: true
    },
    {
      boolType: true,
      name: 'View conversation history',
      first: true,
      second: true,
      third: true,
      fourth: true
    },
    {
      boolType: true,
      name: 'Chatbot analytics',
      first: false,
      second: true,
      third: true,
      fourth: true
    },
    {
      boolType: true,
      name: 'Capture leads',
      first: true,
      second: true,
      third: true,
      fourth: true
    },
    {
      boolType: true,
      name: 'API access',
      first: false,
      second: true,
      third: true,
      fourth: true
    },
    {
      boolType: true,
      name: 'Zapier integration',
      first: false,
      second: true,
      third: true,
      fourth: true
    },
    {
      boolType: true,
      name: 'Slack integration',
      first: false,
      second: true,
      third: true,
      fourth: true
    },
    {
      boolType: true,
      name: 'WordPress integration',
      first: false,
      second: true,
      third: true,
      fourth: true
    },
    {
      boolType: true,
      name: 'WhatsApp integration',
      first: false,
      second: true,
      third: true,
      fourth: true
    },
    {
      boolType: true,
      name: 'Messenger integration',
      first: false,
      second: true,
      third: true,
      fourth: true
    },
    {
      boolType: true,
      name: 'Option to Choose GPT-4',
      first: false,
      second: false,
      third: true,
      fourth: true
    },
    {
      boolType: true,
      name: 'Image capabilities',
      first: false,
      second: false,
      third: true,
      fourth: true
    },
    {
      boolType: true,
      name: "Remove 'Powered by Elephant.ai'",
      first: false,
      second: false,
      third: false,
      fourth: true
    }
  ]
  useEffect(()=>{
    setList([]);
    for(let i = 0;i<featureData.length;i++)
    {
      if(featureData[i].boolType)
        setList(lst=>[...lst,<BoolTableItem name={featureData[i].name} first={featureData[i].first} second = {featureData[i].second} third = {featureData[i].third} fourth={featureData[i].fourth}/>])
      else
        setList(lst=>[...lst,<TableItem name={featureData[i].name} first={featureData[i].first} second = {featureData[i].second} third = {featureData[i].third} fourth={featureData[i].fourth}/>])


    }
  },[])
  return (
    <div className="mx-auto w-full max-w-screen-xl lg:px-20 my-16 px-0">
      <div class="mx-auto mb-12 text-center sm:max-w-lg">
        <h2 class="font-display text-4xl font-extrabold text-black [text-wrap:balance] sm:text-5xl sm:leading-tight">
          Compare plans and features
        </h2>
        <p class="mt-5 text-gray-600 sm:text-lg">
          Choose the plan that's right for your business.
          <br />
          With <b>Elephant.ai</b>, you can start for free and upgrade as you grow.
        </p>
      </div>
      <div className="overflow-x-scroll md:overflow-x-visible">
        <table className="w-full table-fixed border-gray-200 border">
          <thead>
            <tr class="divide-x divide-gray-200 border border-gray-200">
              <th class="sticky left-0 z-20 w-40 bg-gray-50 p-6 md:top-0 md:w-1/4"></th>
              <th class="sticky z-10 w-40 bg-gray-50 p-6 md:top-0 md:w-auto">
                <div class="mb-4 flex items-center space-x-2">
                  <div class="h-3 w-3 flex-none rounded-full md:h-5 md:w-5 bg-black"></div>
                  <h3 class="font-display text-xl font-bold text-black md:text-2xl">
                    Free
                  </h3>
                </div>
                <a
                  class="block w-full rounded-full border py-1 text-center text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent md:py-1.5 md:text-base bg-black border-black hover:text-black"
                  href="/register"
                >
                  Start for free
                </a>
              </th>
              <th class="sticky z-10 w-40 bg-gray-50 p-6 md:top-0 md:w-auto">
                <div class="mb-4 flex items-center space-x-2">
                  <div class="h-3 w-3 flex-none rounded-full md:h-5 md:w-5 bg-blue-500"></div>
                  <h3 class="font-display text-xl font-bold text-black md:text-2xl">
                    Hobby
                  </h3>
                </div>
                <a
                  class="block w-full rounded-full border py-1 text-center text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent md:py-1.5 md:text-base bg-blue-500 border-blue-500 hover:text-blue-500"
                  href="/register"
                >
                  Get started
                </a>
              </th>
              <th class="sticky z-10 w-40 bg-gray-50 p-6 md:top-0 md:w-auto">
                <div class="mb-4 flex items-center space-x-2">
                  <div class="h-3 w-3 flex-none rounded-full md:h-5 md:w-5 bg-sky-900"></div>
                  <h3 class="font-display text-xl font-bold text-black md:text-2xl">
                    Standard
                  </h3>
                </div>
                <a
                  class="block w-full rounded-full border py-1 text-center text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent md:py-1.5 md:text-base bg-sky-900 border-sky-900 hover:text-sky-900"
                  href="/register"
                >
                  Get started
                </a>
              </th>
              <th class="sticky z-10 w-40 bg-gray-50 p-6 md:top-0 md:w-auto">
                <div class="mb-4 flex items-center space-x-2">
                  <div class="h-3 w-3 flex-none rounded-full md:h-5 md:w-5 bg-violet-600"></div>
                  <h3 class="font-display text-xl font-bold text-black md:text-2xl">
                    Unlimited
                  </h3>
                </div>
                <a
                  class="block w-full rounded-full border py-1 text-center text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent md:py-1.5 md:text-base bg-violet-600 border-violet-600 hover:text-violet-600"
                  href="/enterprise"
                >
                  Contact us
                </a>
              </th>
            </tr>
          </thead>

        {featureList}
        </table>
      </div>
    </div>
  );
}
