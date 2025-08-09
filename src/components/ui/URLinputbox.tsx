"use client"

import { useState } from "react"
import { FaWandMagicSparkles } from "react-icons/fa6"


export default function URLinputbox() {
    const [urlInput, setUrlinput] = useState("")
    return (
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
                <div className="bg-contras border border-muted-contrast px-[14px] py-[14px] md:px-5 md:py-2 rounded-full font-semibold flex gap-1.5 items-center cursor-pointer">
                    <FaWandMagicSparkles />
                    <span className="hidden md:block">Cutomize</span>
                </div>
            </div>

        </div>
    )
}