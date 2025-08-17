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
    const [shortenedURl, setShortenedUrl] = useState("")
    const [customCodeError, setCustomCodeError] = useState("")
    const [urlInputError, setUrlInputError] = useState("")
    const [mainError, setMainError] = useState("")

    const expirePeriod = [
        "1 Hour",
        "1 Day",
        "1 Week",
        "1 Month",
        "Never"
    ];

    type requestDataProps = {
        url: string,
        custom_code?: string,
        expiry?: string,
    }

    const VALID_CUSTOM_CODE = /^[a-zA-Z0-9_-]{3,30}$/;

    const shorten = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setCustomCodeError("")
        setUrlInputError("")
        setMainError("")
        setShortenedUrl("")

        // urlInput (required)
        if (!urlInput || urlInput.trim() === "") {
            setUrlInputError("URL is required.")
            return
        }

        // Basic URL validation
        try {
            new URL(urlInput)
        } catch {
            setUrlInputError("Please enter a valid URL.")
            return
        }

        // customUrlInput validation
        if (customUrl) {
            if (!VALID_CUSTOM_CODE.test(customUrl)) {
                setCustomCodeError("Custom code must be 3–30 chars (letters, numbers, - or _ only).")
                return
            }
        }

        let requestData: requestDataProps = { url: urlInput }
        if (customUrl) requestData.custom_code = customUrl
        if (expiresIn != "Never") {
            if (expiresIn === "1 Hour") requestData.expiry = "1h"
            else if (expiresIn === "1 Day") requestData.expiry = "1d"
            else if (expiresIn === "1 Week") requestData.expiry = "1w"
            else if (expiresIn === "1 Month") requestData.expiry = "1m"
        }

        try {
            const res = await fetch("https://mochi-production.up.railway.app/shorten", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestData),
            })

            const result = await res.json()
            console.log(result)

            if (typeof result.short_url === "string") {
                setShortenedUrl(result.short_url)
                setCustomCodeError('')
            }
            else if (result.detail) {
                setCustomCodeError("Custom URL not available.")
            }
        } catch (error) {
            console.error(error)
            setMainError("Something went wrong. Please try again.")
        }
    }


    return (
        <div className="w-full flex flex-col gap-3.5">
            <div className="w-full flex flex-col gap-1 relative">
                <input
                    id="URLinputbox"
                    type="text"
                    className={`w-full h-16 bg-muted px-7 py-3 pr-17 md:pr-40 rounded-full outline-0 ${urlInputError ? 'border border-destructive' : 'border-0'}`}
                    placeholder="Enter your long urls here"
                    value={urlInput}
                    onChange={(e) => setUrlinput(e.target.value)}
                />

                <div className={`absolute right-0 top-0 ${urlInputError ? 'bottom-6' : 'bottom-1'} flex items-center pr-3.5`}>
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-contras border border-muted-contrast px-[14px] py-[14px] md:px-5 md:py-2 rounded-full font-semibold flex gap-1.5 items-center cursor-pointer">
                        <FaWandMagicSparkles />
                        <span className="hidden md:block">Cutomize</span>
                    </div>
                </div>
                <div className="text-sm text-destructive px-7">{urlInputError}</div>
            </div>


            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} flex flex-col gap-3.5`}>
                <div className="w-full flex flex-col gap-1 relative">
                    <input
                        id="customUrlInputbox"
                        type="text"
                        className={`w-full h-14 bg-muted rounded-full outline-0 px-7 pl-7 sm:pl-73 py-2 ${customCodeError ? 'border border-destructive' : 'border-0'}`}
                        placeholder="Enter a custom alias"
                        value={customUrl}
                        onChange={(e) => setCustomUrl(e.target.value)}
                    />
                    <div className={`hidden sm:flex text-muted-foreground font-medium absolute top-0 left-0 ${customCodeError ? 'bottom-[26px]' : 'bottom-[6px]'} items-center pl-7`} >mochi-production.up.railway.app/</div>
                    <div className="text-sm text-destructive px-7">{customCodeError}</div>
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
                <button
                    className="flex gap-1.5 items-center bg-foreground text-background px-5 py-2 rounded-full font-semibold cursor-pointer"
                    onClick={shorten}
                >
                    <RiScissorsCutLine />
                    <span>Shorten</span>
                </button>
            </div>

            <div className="text-sm text-destructive text-center">{mainError}</div>
            <URLshortResult shortenedURl={shortenedURl} />



        </div>

    )
}