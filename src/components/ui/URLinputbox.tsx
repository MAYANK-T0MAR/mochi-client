"use client"

import { useState } from "react"


export default function URLinputbox() {
    const [urlInput, setUrlinput] = useState("")
    return (
        <div className="w-full">
            <input 
            id="URLinputbox"
            type="text" 
            className="w-full h-16 bg-muted px-7 py-3 rounded-full outline-0" 
            placeholder="Enter your long urls here"
            value={urlInput}
            onChange={(e)=>setUrlinput(e.target.value)}
            />
        </div>
    )
}