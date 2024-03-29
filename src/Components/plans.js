import PlanItem from "./planItem";
import { useState } from "react";
import { useEffect } from "react";
export default function Plan(props){
  const monthy = [0,19,99,399];
  const yearly = [0,190,990,3999]
  const [priceList,setPriceList] = useState(monthy);
  
    const hobbyFeatures = [
        "2,500 message credits/month",
        "2 chatbots",
        "12,000,000 characters/chatbot",
        "Unlimited links to train on",
        "Embed on unlimited websites",
        "Upload multiple files",
        "Zapier integration",
        "Slack integration",
        "WordPress integration",
        "WhatsApp integration",
        "Messenger integration"
      ];
    const freeFeatures = [
    "20 message credits/month",
    "1 chatbot",
    "400,000 characters/chatbot",
    "Limit to 10 links to train on",
    "Embed on unlimited websites",
    "Upload multiple files",
    "View conversation history",
    "Capture leads"
    ];
    const standardFeatures = [
        "20,000 message credits/month",
        "5 chatbots",
        "15,000,000 characters/chatbot",
        "Unlimited links to train on",
        "Embed on unlimited websites",
        "Upload multiple files",
        "Escalate to human",
        "View conversation history",
        "WordPress integration",
        "WhatsApp integration",
        "Messenger integration",
        "Option to Choose GPT-4",
        "Image capabilities"
      ];
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
      if(props.yearly)
      {
        setPriceList(yearly)
      }
      else
        setPriceList(monthy)
    },[props.yearly])
      
    return (
        <div className="mx-10 items-center outlin grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-3">
            <PlanItem name="Free" price={priceList[0]} list={freeFeatures} />
            <PlanItem name="Hobby" price={priceList[1]} list={hobbyFeatures} popular={true} />
            <PlanItem name="Standard"price={priceList[2]} list={standardFeatures}/>
            <PlanItem name="Unlimited"price={priceList[3]} list={unlimitedFeatures}/>
        </div>
    )
}