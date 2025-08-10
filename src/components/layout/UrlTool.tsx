"use client"

import { useState } from "react";
import URLshortnerTool from "../ui/URLshortnerTool";
import URLtrackerTool from "../ui/URLtrackerTool";

export default function UrlTool() {
    const [showLinkTracker, setShowLinkTracker] = useState(false);
    return (
        <div className="w-full flex flex-col gap-8 justify-center items-center">
            <div className="flex gap-3 text-sm">
                <div 
                className={`${!showLinkTracker? 'underline underline-offset-4': 'bg-muted'} transition-all duration-300 px-3 py-1 rounded-full cursor-pointer`}
                onClick={()=>setShowLinkTracker(false)}
                >
                    Short URL
                </div>
                <div 
                className={`${showLinkTracker? 'underline underline-offset-4': 'bg-muted'} transition-all duration-300 px-3 py-1 rounded-full cursor-pointer`}
                onClick={()=>setShowLinkTracker(true)}
                >
                    Track Links
                </div>
            </div>

            {showLinkTracker? <URLtrackerTool/>: <URLshortnerTool/>}
            
        </div>
    )
}