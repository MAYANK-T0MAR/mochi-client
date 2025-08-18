"use client"

import { useState } from "react";
import URLshortnerTool from "../ui/URLshortnerTool";
import URLtrackerTool from "../ui/URLtrackerTool";

export default function UrlTool() {
    const [showLinkTracker, setShowLinkTracker] = useState(false);
    return (
        <div className="w-full flex flex-col gap-8 justify-center items-center">

            <div className="relative flex bg-muted rounded-full w-63 py-3 px-1.5">
                <div
                    className={`absolute top-1 bottom-1 w-1/2 bg-background rounded-full shadow-sm transition-transform duration-300 ${showLinkTracker ? "translate-x-[114px]" : "translate-x-0"}`}
                />
                <button
                    onClick={() => setShowLinkTracker(false)}
                    className={`relative z-10 flex-1 px-4 text-sm ${showLinkTracker? 'cursor-pointer': 'cursor-auto'}`}
                >
                    Short URL
                </button>
                <button
                    onClick={() => setShowLinkTracker(true)}
                    className={`relative z-10 flex-1 px-4 text-sm ${showLinkTracker? 'cursor-auto': 'cursor-pointer'}`}
                >
                    Track Links
                </button>
            </div>


            {showLinkTracker ? <URLtrackerTool /> : <URLshortnerTool />}

        </div>
    )
}