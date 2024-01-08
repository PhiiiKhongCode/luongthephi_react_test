import Writing from "../pages/Writing";
import Reading from "../pages/Reading";
import { useState } from "react";


const LayoutWebsite = () => {
    const [checkLayout, setCheckLayout] = useState(true)

    const handleChangeLayout = ()=>{
        setCheckLayout(!checkLayout)
        console.log(checkLayout);
        
    }
   return <>
    <div className="w-full h-10 flex flex-row justify-center gap-11 text-lg bg-purple-50"><div className="h-10 w-40 flex justify-center items-center bg-purple-200 cursor-pointer" onClick={handleChangeLayout}>Writing</div><div className="h-10 w-40 flex justify-center items-center bg-purple-200 cursor-pointer" onClick={handleChangeLayout}>Reading</div></div>
    {
        checkLayout===true? <Writing/>:<Reading/>
    }
    </>
};

export default LayoutWebsite;
