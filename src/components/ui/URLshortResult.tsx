"use client"
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";


export default function URLshortResult({ shortenedURl }: { shortenedURl: string }) {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(shortenedURl)
            .then(() => {
                setIsCopied(true)
                setTimeout(() => setIsCopied(false), 5000);
            })
            .catch((err) => {
                console.error("Copy failed", err);
            });
    }

    return (
        <div className="w-full flex flex-col items-center mt-5">
            <div 
            className={`max-w-full flex items-center gap-4 bg-contras border ${isCopied? 'border-success': 'border-muted-contrast text-foreground'} pl-7 pr-3 py-3 rounded-full cursor-pointer`}
            onClick={handleCopy}
            >
                <div className="w-full overflow-x-auto whitespace-nowrap">{shortenedURl}</div>
                <div className={`flex gap-1.5 items-center ${isCopied? 'bg-success text-background': 'bg-muted text-foreground'} px-3 py-3 md:py-1 rounded-full`}>
                  {!isCopied ? <IoCopyOutline /> : <MdDone />}  
                  <span className="hidden md:block">
                    {isCopied? "Copied": "Copy"}
                  </span>
                </div>
                
            </div>
        </div>
    )
}