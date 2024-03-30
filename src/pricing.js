import { useState } from "react";
import FAQ from "./Components/faq";
import PlanCompare from "./Components/planCompare";
import Plan from "./Components/plans";
import Sponsor from "./Components/sponsorSection";
import confetti from "https://esm.run/canvas-confetti@1";
import Enterprise from "./Components/enterprise";
export default function Pricing(props){
    const [isYearly, setIsYearly] = useState(false);

    const handleModeToggle = () => {
    if(!isYearly)
    {
        confetti({
            particleCount: 150,
            spread: 100
          });
    }
      setIsYearly(!isYearly);
    };
    return (
        <div className="">
            <div className="outlin mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 mb-8 mt-16">
                <div className="outlin mx-auto mb-6 text-center sm:max-w-lg">
                    <h1 className="font-display text-4xl font-extrabold text-black [text-wrap:balance] sm:text-5xl sm:leading-tight">
                        <div className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            Straightforward,
                        </div>
                        affordable pricing
                    </h1>
                    <p className="mt-5 text-gray-600 sm:text-lg">
                        Find a plan that fits your needs. <br/> Start for free, no credit card required.
                    </p>
                </div>
                <div className="mx-auto mb-12 flex max-w-fit items-center space-x-2 text-center">
                    <p className="outli font-medium text-gray-600">Monthly</p>
                    <div className="flex outlin items-center">
                        <button
                            className={`${
                            isYearly ? 'bg-blue-500' : 'bg-gray-300'
                            } w-10 h-5 flex items-center px-1 rounded-full  transition-colors duration-300 ease-in-out`}
                            onClick={handleModeToggle}
                        >
                            <div
                            className={`${
                                isYearly ? 'translate-x-full' : 'translate-x-0'
                            } bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out`}
                            ></div>
                        </button>

                    </div>
                    <p className="w-14 outlin font-medium text-gray-600">Yearly</p>
                </div>
            </div>
            <Plan yearly={isYearly}/>
            <Enterprise/>
            <Sponsor/>
            <PlanCompare/>
            <FAQ/>
        </div>
    )
}