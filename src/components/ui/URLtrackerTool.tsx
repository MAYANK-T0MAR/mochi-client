"use client"

import { useState } from "react"
import { FiActivity } from "react-icons/fi"

export default function URLtrackerTool() {
    const [shortUrlInput, setShortUrlInput] = useState("")
    return (
        <div className="w-full flex flex-col gap-3.5">
            <div className="w-full relative">
                <input
                    id="URLinputbox"
                    type="text"
                    className="w-full h-16 bg-muted px-7 py-3 pr-17 md:pr-40 rounded-full outline-0"
                    placeholder="Enter your shortened url here"
                    value={shortUrlInput}
                    onChange={(e) => setShortUrlInput(e.target.value)}
                />
            </div>


            <div className="flex items-center w-full justify-center">
                <div className="flex gap-1.5 items-center bg-foreground text-background px-5 py-2 rounded-full font-semibold cursor-pointer">
                    <FiActivity />
                    <span>Track</span>
                </div>
            </div>

            {/* <div className="bg-foreground w-full h-56 rounded"></div> */}



        </div>
    )
}