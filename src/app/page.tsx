import Image from "next/image";
import UrlTool from "@/components/layout/UrlTool";


export default function Home() {
  return (
    <div className="w-full flex flex-col gap-34 items-center">

      <div className="w-full h-screen relative max-w-3xl flex flex-col items-center justify-center gap-8">

        <div className="select-none pionter-events-none absolute -z-9 bg-contras white-shadow rounded-full w-full h-[50%]"></div>

        <Image src="/mochi_icon.png" width={3264} height={806} alt="mochi icon image" priority className="w-46 h-auto" />

        <div className="flex flex-col gap-3">
          <div className="text-4xl md:text-6xl lg:text-7xl text-center tracking-[-0.05em]">Shorten Your Links</div>
          <div className="w-full text-center max-w-150 text-secondary">
            Transform long, unwieldy URLs into clean, branded short links. Track performance, manage campaigns, and boost your click-through rates.
          </div>
        </div>

        <UrlTool/>

      </div>

      {/* <div className="w-full max-w-3xl rounded-3xl bg-foreground text-background pt-5 px-5 h-77">
        <span className="text-2xl font-semibold">Track Your links</span>
      </div> */}

    </div>
  );
}
