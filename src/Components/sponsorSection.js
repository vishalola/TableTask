import { useState,useEffect } from "react";

export default function Sponsor(props){
    const [list,setList] = useState([]);
    const imageLinks = [
        "https://images.ctfassets.net/xny2w179f4ki/1pboI4XzFexUNY0RBS6u5e/116e7f84280289e56c40e09498b63dfd/Logo_Frameio_Padding-slate.svg",
        "https://images.ctfassets.net/xny2w179f4ki/2X2qIzo5thQD8OmdTviBoW/7b964d14c30283463a871d5deecb7296/Logo_Coda_Padding-slate.svg",
        "https://images.ctfassets.net/xny2w179f4ki/4kTdxPrGZbixXuFDcW6lBx/be87dbbabe9461f0b1adc1229bdd0a7c/Logo_Inter_Padding-slate.svg",
        "https://images.ctfassets.net/xny2w179f4ki/6Ng42UjBnzp6H3sBvp330G/6a76ec4cf3600bdc72c93a046152377b/Logo_ClickTravel_Padding-slate.svg",
        "https://images.ctfassets.net/xny2w179f4ki/XszOfm3dkyc2F4BIld5vb/4db1114045dfb20c2878c4e6b91dd0bd/Logo_Etoro_Padding-slate.svg",
        "https://images.ctfassets.net/xny2w179f4ki/2rcZ8WWnTSou60ksn1sOhd/d531c065056d6d1fcabf6e8b7c21ce58/Logo_H_RBlock_Padding-slate.svg",
        "https://images.ctfassets.net/xny2w179f4ki/6VqorSujbSSHlrCt4plu9G/e6b9f921eb43d5bff6aa530cee7b354e/Logo_NewRelic_Padding-slate.svg",
        "https://images.ctfassets.net/xny2w179f4ki/OHr1oL0JGHK5uVRLVktR1/7ba5d7d222311791f71dec1b26f83f31/Logo_Xero_Padding-slate.svg",
        "https://images.ctfassets.net/xny2w179f4ki/fcKpST8WSPyQUYtL1OfEZ/e7d5e7e9c3cafb4c49c91023b3f3268f/Logo_Angi_Padding-slate.svg",
        "https://images.ctfassets.net/xny2w179f4ki/7x42mifYCM1BdDqM82Z3Ui/c01eb409fad28ad0c8a0d3527d23974b/Logo_Spendesk_Padding-slate.svg",
        "https://images.ctfassets.net/xny2w179f4ki/3MEUE17dn8QhVKxJCUFkZ3/ebd6d85d26f835da6db9501a8665cae2/Logo_Ratemyagent_Padding-slate.svg",
        "https://images.ctfassets.net/xny2w179f4ki/7rafhWWBcIryF5YCaxLqkX/1efe9f5687f7b78cdf20f56f25f06c33/Logo_Outschool_Padding-slate.svg",
    ];
    useEffect(()=>{
        setList([]);
        for(let i = 0;i<imageLinks.length;i++)
            setList(lst=>[...lst,<img alt="image-not-found" loading="lazy" width="520" height="182" decoding="async" data-nimg="1" className="blur-0  h-12 grayscale transition-all hover:grayscale-0 md:h-20" src={imageLinks[i]}/>])
    },[])
    return (
        <div className="my-20">
            <p className="mx-auto max-w-sm text-center text-gray-600 sm:max-w-xl sm:text-lg">
                Trusted &amp; loved by modern teams at world-className companies
            </p>
            <a  className="mx-auto gap-4 mb-24 mt-8 grid w-full max-w-screen-lg grid-cols-2 items-center px-5 md:grid-cols-6 md:px-0">
                {list}
            </a>
        </div>
    )
}