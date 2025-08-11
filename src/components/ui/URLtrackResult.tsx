import MinimalTimeGraph from "../layout/MinimalTimeGraph";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type urlTrackResultProps = {
    shortenedUrl: string;
    redirectsTo: string;
    totalClicks: number;
    uniqueViews: number;
    clicksTimeDistribution: string[];
}

export default function URLtrackResult({ urlTrackResult }: { urlTrackResult: urlTrackResultProps }) {
    return (
        <div className="w-full bg-muted rounded-3xl mt-5 p-2 flex flex-col gap-2">
            <div className="w-full flex flex-col wrap-break-word items-center py-3">
                <span className="font-medium wrap-anywhere">{urlTrackResult.shortenedUrl}</span>
                <span className="text-sm text-muted-foreground">Redirects to <span className="underline underline-offset-4">{urlTrackResult.redirectsTo}</span></span>
            </div>

            <div className="w-full flex gap-2">
                <div className="flex-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Total Clicks</CardTitle>
                            <CardDescription>Number of times the shortened link clicked.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-7xl">{urlTrackResult.totalClicks}</div>
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
                            <div className="text-7xl">{urlTrackResult.uniqueViews}</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="w-full bg-contras rounded-2xl">
                <MinimalTimeGraph clicksTimeDistribution={urlTrackResult.clicksTimeDistribution} />
            </div>
        </div>
    )
}