"use client"

import { useState } from "react"
import Image from "next/image";
import { FiActivity } from "react-icons/fi"
import URLtrackResult from "./URLtrackResult"
import { Card } from "./card"

type urlTrackResultType = {
    clicks_time_history: string[],
    redirects_to: string,
    shortened_url: string,
    total_clicks: number,
    unique_visits: number,
}

export default function URLtrackerTool() {
    const [shortUrlInput, setShortUrlInput] = useState("")
    const [urlTrackResult, setUrlTrackResult] = useState<urlTrackResultType | null>(null)
    const [urlInputError, setUrlInputError] = useState("")
    const [urlFoundError, setUrlFoundError] = useState(false)
    // const urlTrackResult = {
    //     shortenedUrl: "mochi.up.railway.app/something",
    //     redirectsTo: "https://www.google.com",
    //     totalClicks: 36,
    //     uniqueViews: 21,
    //     clicksTimeDistribution: [
    //         "2024-01-15T08:30:00Z",
    //         "2024-01-15T08:30:00Z",
    //         "2024-01-15T08:30:00Z",
    //         "2024-02-20T14:45:00Z",
    //         "2024-02-20T14:45:00Z",
    //         "2024-03-10T09:15:00Z",
    //         "2024-03-10T09:15:00Z",
    //         "2024-03-10T09:15:00Z",
    //         "2024-03-10T09:15:00Z",
    //         "2024-04-05T16:20:00Z",
    //         "2024-04-05T16:20:00Z",
    //         "2024-05-12T11:00:00Z",
    //         "2024-05-12T11:00:00Z",
    //         "2024-05-12T11:00:00Z",
    //         "2024-06-18T13:30:00Z",
    //         "2024-06-18T13:30:00Z",
    //         "2024-07-22T07:45:00Z",
    //         "2024-07-22T07:45:00Z",
    //         "2024-07-22T07:45:00Z",
    //         "2024-07-22T07:45:00Z",
    //         "2024-07-22T07:45:00Z",
    //         "2024-08-30T15:10:00Z",
    //         "2024-08-30T15:10:00Z",
    //         "2024-09-14T10:25:00Z",
    //         "2024-09-14T10:25:00Z",
    //         "2024-09-14T10:25:00Z",
    //         "2024-10-03T12:50:00Z",
    //         "2024-10-03T12:50:00Z",
    //         "2024-11-11T18:15:00Z",
    //         "2024-11-11T18:15:00Z",
    //         "2024-11-11T18:15:00Z",
    //         "2024-11-11T18:15:00Z",
    //         "2024-12-25T06:00:00Z",
    //         "2024-12-25T06:00:00Z",
    //         "2025-01-08T14:35:00Z",
    //         "2025-01-08T14:35:00Z"
    //     ],
    // }

    const trackUrl = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setUrlTrackResult(null)
        setUrlFoundError(false)
        setUrlInputError("")

        // urlInput (required)
        if (!shortUrlInput || shortUrlInput.trim() === "") {
            setUrlInputError("URL is required.")
            return
        }

        // Basic URL validation
        try {
            new URL(shortUrlInput)
        } catch {
            setUrlInputError("Please enter a valid URL.")
            return
        }


        try {
            const res = await fetch(`https://mochi-production.up.railway.app/analytics?url=${shortUrlInput}`)
            const data = await res.json()
            console.log(data)
            if (data.shortened_url) {
                setUrlTrackResult(data)
                setUrlFoundError(false)
            }
            else {
                setUrlTrackResult(null)
                setUrlFoundError(true)
            }

        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="w-full flex flex-col gap-3.5">
            <div className="w-full relative">
                <input
                    id="URLinputbox"
                    type="text"
                    className={`w-full h-16 bg-muted px-7 py-3 pr-17 md:pr-40 rounded-full outline-0 ${urlInputError ? 'border border-destructive' : 'border-0'}`}
                    placeholder="Enter your shortened url here"
                    value={shortUrlInput}
                    onChange={(e) => setShortUrlInput(e.target.value)}
                />
            </div>
            <div className="text-sm text-destructive">{urlInputError}</div>


            <button
                className="flex items-center w-full justify-center"
                onClick={trackUrl}
            >
                <div className="flex gap-1.5 items-center bg-foreground text-background px-5 py-2 rounded-full font-semibold cursor-pointer">
                    <FiActivity />
                    <span>Track</span>
                </div>
            </button>

            {
                !urlInputError ? (
                    urlTrackResult ? (
                        <URLtrackResult urlTrackResult={urlTrackResult} />
                    ) : urlFoundError ? (
                        <Card className="w-full flex flex-col items-center justify-center text-muted-foreground">
                            <Image
                                src="/crashed-error.svg"
                                height={100}
                                width={100}
                                alt="error illustration"
                                className="w-full max-w-2xs"
                            />
                            <div className="text-xl text-muted-foreground">URL Not Found</div>
                        </Card>
                    ) : null
                ) : null
            }



        </div>
    )
}