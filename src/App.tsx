import React from 'react'
import { Button } from 'antd'
import './index.css'


const App: React.FC = () => {


    return(
        <div className="border-box m-0 p-0 w-full min-h-screen">
            <div className="  w-full border">
                <h4 className=" mx-auto text-[#aa0453] text-[1.125rem]">Tailwindcss works</h4>
                <Button type="default" size="large" className="mx-auto bg-[#0333b8] text-[#ffe]">Button from antd</Button>
            </div>
        </div>
    )
}


export default App