"use client"

import { useState } from "react"
import { FaWandMagicSparkles } from "react-icons/fa6"
import { RiScissorsCutLine } from "react-icons/ri";
import URLshortResult from "./URLshortResult";


export default function URlshortnerTool() {
    const [urlInput, setUrlinput] = useState("")
    const [customUrl, setCustomUrl] = useState("")
    const [expiresIn, setExpiresIn] = useState("Never")
    const [isOpen, setIsOpen] = useState(false)
    const shortenedURl = "https://mochi.up.railway.app/something"

    const expirePeriod = [
        "1 Hour",
        "1 Day",
        "1 Week",
        "1 Month",
        "Never"
    ]


    return (
        <div className="w-full flex flex-col gap-3.5">
            <div className="w-full relative">
                <input
                    id="URLinputbox"
                    type="text"
                    className="w-full h-16 bg-muted px-7 py-3 pr-17 md:pr-40 rounded-full outline-0"
                    placeholder="Enter your long urls here"
                    value={urlInput}
                    onChange={(e) => setUrlinput(e.target.value)}
                />

                <div className="absolute right-0 top-0 bottom-0 flex items-center pr-3.5">
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-contras border border-muted-contrast px-[14px] py-[14px] md:px-5 md:py-2 rounded-full font-semibold flex gap-1.5 items-center cursor-pointer">
                        <FaWandMagicSparkles />
                        <span className="hidden md:block">Cutomize</span>
                    </div>
                </div>
            </div>


            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} flex flex-col gap-3.5`}>
                <div className="w-full relative">
                    <input
                        id="customUrlInputbox"
                        type="text"
                        className="w-full h-14 bg-muted rounded-full outline-0 px-7 pl-50 py-2"
                        placeholder="Enter a custom alias"
                        value={customUrl}
                        onChange={(e) => setCustomUrl(e.target.value)}
                    />
                    <div className="text-muted-foreground font-medium absolute top-0 left-0 bottom-0 flex items-center pl-7" >mochi.up.railway.app/</div>
                </div>

                <div className="w-full flex gap-1 md:gap-6 flex-wrap justify-center items-center mb-5">
                    <div>Expires in:</div>
                    <div className="flex items-center justify-center flex-wrap">
                        {expirePeriod.map((expiresInPeriod, i) => (
                            <div
                                key={i}
                                className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-all duration-300 ${expiresInPeriod === expiresIn ? 'bg-secondary text-foreground' : 'text-muted-foreground'}`}
                                onClick={() => setExpiresIn(expiresInPeriod)}
                            >
                                {expiresInPeriod}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-center w-full justify-center">
                <div className="flex gap-1.5 items-center bg-foreground text-background px-5 py-2 rounded-full font-semibold cursor-pointer">
                    <RiScissorsCutLine />
                    <span>Shorten</span>
                </div>
            </div>

            <URLshortResult shortenedURl={shortenedURl}/>



        </div>

    )
}