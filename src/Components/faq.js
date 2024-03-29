import FAQItem from "./faqItem";
import { useState } from "react";
import { useEffect } from "react";
export default function FAQ(){
    let [list,setList] = useState([]);
    let data = [
        {
          "question": "Is there a free plan?",
          "answer": "Yes, just by signing up you get 30 message credits and 1 chatbot (400k characters). You can use these to test out Elephant.ai and see if it works for you."
        },
        {
          "question": "What counts as one chatbot?",
          "answer": "One chatbot means a chatbot that contains specific data and can answer any question about this data. Even if it was created using multiple documents."
        },
        {
          "question": "How many users can use my chatbot?",
          "answer": "If your chatbot is private, only you have access to it. If you decide to make it public, anyone with the link will be able to interact with it."
        },
        {
          "question": "How do I know how many characters are in my document?",
          "answer": "Once you attach your document(s) for upload, Elephant.ai will show you the character count of all the attached documents."
        },
        {
          "question": "How do message credits work?",
          "answer": "One AI response with gpt-3.5-turbo (the default) costs 1 message credit. One AI response with gpt-4 costs 20 message credits. You can change which model your chatbot uses in the chatbot settings. The difference is because gpt-4 costs 15x (prompt tokens) and 30x (completion tokens) what gpt-3.5-turbo costs on OpenAI."
        },
        {
          "question": "When are my message credits renewed?",
          "answer": "Your message credits are renewed every month on the same date that you originally subscribed. So, if you subscribe on the 15th of March, your credits will be renewed on the 15th of April, and so on each month."
        },
        {
          "question": "Can I upload multiple files to one chatbot?",
          "answer": "Yes, if you have a paid plan you can upload multiple files to one chatbot. Just click ctrl (windows) or cmd (mac) and select as many files as you want."
        },
        {
          "question": "How much data can I give one chatbot?",
          "answer": "Free plan: 400K Characters (~5MB) | Hobby/Standard/Unlimited: 11M Characters (~140MB)"
        }
      ]
    
      useEffect(()=>{
        for(let i = 0;i<data.length;i++)
        {
            setList(lst=>[...lst,<FAQItem key={i} question = {data[i].question} answer={data[i].answer}/>])
        }
      },[])
    return (
        <div className="border-t border-gray-200 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
            <div className="outlin mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 my-20">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    <div clasName="p-3">
                        <h2 className="font-display text-4xl font-extrabold text-black [text-wrap:balance] sm:text-5xl sm:leading-tight">
                            Frequently Asked <br/> Questions
                        </h2>
                    </div>
                    <div class="col-span-2 px-3 pb-[100px] sm:px-0" data-orientation="vertical">
                        {list}
                    </div>
                </div>
            </div>
        </div>
    )
}