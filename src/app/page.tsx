import Image from "next/image";
import UrlTool from "@/components/layout/UrlTool";
import FeatureSection from "@/components/layout/FeatureSection";
import CommunitySection from "@/components/layout/CommunitySection";
import FaqSection from "@/components/layout/FaqSectioin";


export default function Home() {
  return (
    <div className="w-full flex flex-col gap-52 items-center">

      <div className="w-full relative max-w-3xl flex flex-col items-center justify-center gap-8">

        <div className="select-none pionter-events-none absolute top-0 -z-9 bg-contras white-shadow rounded-full w-full h-[80%]"></div>

        <Image src="/mochi_icon.png" width={3264} height={806} alt="mochi icon image" priority className="w-46 h-auto" />

        <div className="flex flex-col gap-3">
          <div className="text-4xl md:text-6xl lg:text-7xl text-center tracking-[-0.05em]">Shorten Your Links</div>
          <div className="w-full text-center max-w-150 text-muted-foreground">
            Transform long, unwieldy URLs into clean, branded short links. Track performance, manage campaigns, and boost your click-through rates.
          </div>
        </div>

        <UrlTool />

      </div>

      <div className="w-full max-w-3xl">
        <FeatureSection />
      </div>

      <div className="w-full max-w-3xl">
        <FaqSection />
      </div>

      <div className="w-full max-w-3xl">
        <CommunitySection />
      </div>


    </div>
  );
}
