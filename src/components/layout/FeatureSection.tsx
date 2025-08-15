import Image from "next/image";
import { Card } from "../ui/card";
import { FadeInSection } from "@/components/layout/FadeInSection";

export default function FeatureSection() {
    return (
        <div className="w-full flex flex-col gap-4">

            <div className="text-5xl text-center tracking-[-0.05em] mb-8 underline underline-offset-10">Features</div>
            <FadeInSection>
                <div className="w-full flex items-center justify-center gap-4 flex-col md:flex-row">
                    <Card className="flex-1 max-w-94 shadow-inner pb-0">
                        <div className="flex flex-col px-4 overflow-hidden">
                            <span className="text-xl font-medium tracking-[-0.05em]">Shorten Any Link</span>
                            <span className="text-muted-foreground max-w-80 mb-10 leading-5 mt-1">Turn long, hard-to-share links into short and simple ones you can share anywhere</span>
                            <div className="w-full relative h-46">
                                <Image src="paper-plane.svg" width={100} height={100} alt="feature illustration" className="rotate-[30deg] absolute top-[-30px] left-[30px] w-full max-w-63 hover:translate-x-11 hover:translate-y-4 transition-all duration-300 ease-in-out" />
                            </div>
                            <div className="w-full"></div>
                        </div>
                    </Card>

                    <Card className="flex-1 max-w-94 shadow-inner pb-0">
                        <div className="flex flex-col px-4 overflow-hidden">
                            <span className="text-xl font-medium tracking-[-0.05em]">See How Your Links Perform</span>
                            <span className="text-muted-foreground max-w-80 mb-10 leading-5 mt-1"> Check how many times your link was clicked so you know what’s working</span>
                            <div className="w-full relative h-46">
                                <Image src="analysis-presentation.svg" width={100} height={100} alt="feature illustration" className="absolute w-full hover:rotate-[-7deg] transition-all duration-300 ease-in-out" />
                            </div>
                        </div>
                    </Card>
                </div>
            </FadeInSection>

            <FadeInSection delay={300}>
                <div className="w-full flex items-center justify-center gap-4 flex-col md:flex-row">
                    <Card className="flex-1 max-w-94 shadow-inner pb-0">
                        <div className="flex flex-col px-4 overflow-hidden">
                            <span className="text-xl font-medium tracking-[-0.05em]">Track Unique Visitors</span>
                            <span className="text-muted-foreground max-w-80 mb-10 leading-5 mt-1">Find out how many different people clicked your link — not just repeat clicks</span>
                            <div className="w-full relative h-46">
                                <Image src="happy-man-waving.svg" width={100} height={100} alt="feature illustration" className="absolute w-full hover:rotate-[-7deg] hover:-translate-y-6 transition-all duration-300 ease-in-out" />
                            </div>
                        </div>
                    </Card>

                    <Card className="flex-1 max-w-94 shadow-inner pb-0">
                        <div className="flex flex-col px-4 overflow-hidden">
                            <span className="text-xl font-medium tracking-[-0.05em]">Click Activity Over Time</span>
                            <span className="text-muted-foreground max-w-80 mb-10 leading-5 mt-1">See when people are clicking your link the most, shown in an easy-to-read chart</span>
                            <div className="w-full relative h-46">
                                <Image src="keynote_presentation.svg" width={100} height={100} alt="feature illustration" className="absolute w-full left-8 rotate-[-14deg] hover:-translate-y-6 hover:-translate-x-6 transition-all duration-300 ease-in-out" />
                            </div>
                        </div>
                    </Card>
                </div>
            </FadeInSection>
        </div>
    )
}