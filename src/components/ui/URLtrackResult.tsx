import Image from "next/image";
import MinimalTimeGraph from "../layout/MinimalTimeGraph";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type urlTrackResultProps = {
    clicks_time_history: string[],
    redirects_to: string,
    shortened_url: string,
    total_clicks: number,
    unique_visits: number,
}

export default function URLtrackResult({ urlTrackResult }: { urlTrackResult: urlTrackResultProps | null }) {
    return (
        <div className="w-full bg-muted rounded-3xl mt-5 p-2 flex flex-col gap-2">
            <div className="w-full flex flex-col wrap-break-word items-center py-3">
                <span className="font-medium wrap-anywhere">{urlTrackResult?.shortened_url}</span>
                <span className="text-sm text-muted-foreground">Redirects to <span className="underline underline-offset-4">{urlTrackResult?.redirects_to}</span></span>
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-2">
                <div className="flex-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Total Clicks</CardTitle>
                            <CardDescription>Number of times the shortened link clicked.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-7xl text-right">{urlTrackResult?.total_clicks}</div>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Unique Views</CardTitle>
                            <CardDescription>Number of unique views on the shortened link.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-7xl text-right">{urlTrackResult?.unique_visits}</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="w-full bg-contras rounded-2xl">
                {urlTrackResult && urlTrackResult.clicks_time_history?.length > 0 ? 
                <MinimalTimeGraph clicksTimeDistribution={urlTrackResult.clicks_time_history} />
                :
                <Card className="w-full flex flex-col items-center justify-center text-muted-foreground">
                    <Image src="/surreal-hourglass.svg" height={100} width={100} alt="error illustration" className="w-full max-w-2xs"/>
                    <div className="text-xl text-muted-foreground">No click activities yet...</div>
                </Card>
                }
                
                
            </div>
        </div>
    )
}