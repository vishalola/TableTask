import AddOnItem from "./addOnItem";

export default function AddOns(){

    return (
        <div className="mx-auto mt-20 outlin w-full max-w-screen-xl px-2.5 lg:px-20 ">
            <div className="outlin mx-auto mb-12 text-center sm:max-w-lg">
                <h2 className="font-display text-4xl font-extrabold text-black [text-wrap:balance] sm:text-5xl sm:leading-tight">
                Choose Add-Ons <br/> with existing plan
                </h2>
            </div>
            <div className="outlin p-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <AddOnItem quant={true} factor={1} title = "Extra Chatbots" description="$7 per extra chatbot" price={7}/>
                <AddOnItem quant={true} factor={1000} title = "Extra Message Credits" description="$7 per 1000 message credits" price={7}/>
                <AddOnItem quant={false} factor={1000} title = "Remove 'Powered By Elephant.ai'" description="Remove the Elephant.ai branding from the iframe and widget." price={39}/>
                <AddOnItem quant={false} actor={1000} title = "Custom Domains" description="Custom domains for the embed script, iframe, and chatbot link." price={59}/>



            </div>
        </div>
    )
}