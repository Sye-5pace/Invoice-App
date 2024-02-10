import React from 'react'
import { useSelector } from 'react-redux'
import ArrowDown from '../assets/icon-arrow-down.svg'
import Plus from '../assets/icon-plus.svg'

const Invoices: React.FC = () => {
    const theme = useSelector((state: any) => state.theme.currentTheme )


    return(
        <main className="border w-[45.625rem] mx-auto mt-[4.5rem]">
            <section className="flex justify-between items-center" >
                <div>
                    <h2 className={` text-[2rem] font-bold ${ theme === 'light' ? 'text-vulcan' : 'text-[#fff]'} `}>Invoices</h2>
                    <p className={`font-medium text-[0.75rem] ${ theme === 'light' ? 'text-vulcan' : 'text-selago'}`}>There are 7 total invoices</p>
                </div>
                <div className="flex items-center gap-6">
                    <span className={`font-bold text-[0.75rem] flex items-baseline gap-4 ${ theme === 'light' ? 'text-vulcan' : 'text-[#fff]'}`}>
                        Filter by status
                        <img src={ArrowDown} alt="arrow-down" className="h-1 w-2"/>
                    </span>
                    <button className=" flex items-center bg-cornflowerblue w-[9.375rem] h-[3rem] rounded-[1.5rem] px-2 gap-2">
                        <div className="bg-[#fff] rounded-full w-[2rem] h-[2rem] flex items-center justify-center">
                            <img src={Plus} alt="plus"/>
                        </div>
                        <span className="font-bold text-[#fff]">New Invoice</span>
                    </button>
                </div>
            </section>
            <section></section>
        </main>
    );

}

export default Invoices;