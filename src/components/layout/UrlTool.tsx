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
                className={`${!showLinkTracker? 'text-muted-foreground cursor-text': 'bg-muted cursor-pointer'} transition-all duration-300 px-3 py-1 rounded-full`}
                onClick={()=>setShowLinkTracker(false)}
                >
                    Short URL
                </div>
                <div 
                className={`${showLinkTracker? 'text-muted-foreground cursor-text': 'bg-muted cursor-pointer'} transition-all duration-300 px-3 py-1 rounded-full`}
                onClick={()=>setShowLinkTracker(true)}
                >
                    Track Links
                </div>
            </div>

            {showLinkTracker? <URLtrackerTool/>: <URLshortnerTool/>}
            
        </div>
    )
}