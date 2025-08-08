"use client"

import { useState } from "react"
import { FaWandMagicSparkles } from "react-icons/fa6"
import { IoCloseCircle } from "react-icons/io5"

export default function CustomUrlBox() {
    const [isOpen, setIsOpen] = useState(false)
    const [customName, setCustomName] = useState("")
    if (isOpen) {
        return (
            <div className="flex flex-1 gap-2 items-center">
                <span>Customize</span>
                <input 
                type="text" 
                id="CustomUrlInput"
                value={customName}
                onChange={(e)=>setCustomName(e.target.value)}
                className="w-full h-16 bg-muted px-4 py-1 rounded-full outline-0"
                placeholder="Enter a custom alias"
                />
                <div className="text-3xl cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
                    <IoCloseCircle/>
                </div>
            </div>
        )
    }
    return (
        <div 
        className="flex gap-1.5 items-center bg-muted text-secondary px-5 py-2 rounded-full font-semibold cursor-pointer"
        onClick={()=>setIsOpen(!isOpen)}
        >
            <FaWandMagicSparkles/>
            <span>Cutomize</span>
        </div>
    )


}