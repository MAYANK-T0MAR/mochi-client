import CustomUrlBox from "@/components/ui/CustomUrlBox";
import URLinputbox from "@/components/ui/URLinputbox";
import Image from "next/image";
import { RiScissorsCutLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">

      <div className="w-full relative max-w-3xl flex flex-col items-center justify-center gap-8">

        <div className="select-none pionter-events-none absolute -z-9 bg-contras white-shadow rounded-full w-full min-h-[380px]"></div>
        {/* <div className="select-none pointer-events-none absolute h-screen w-screen overflow-hidden">
          <div className="top-[-50px] absolute -z-10 w-full h-full bg-background bg-[linear-gradient(to_right,#d3d3d3_1px,transparent_1px),linear-gradient(to_bottom,#d3d3d3_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div> */}


        <Image src="/mochi_icon.png" width={3264} height={806} alt="mochi icon image" priority className="w-46 h-auto" />

        <div className="flex flex-col gap-3">
          <div className="text-4xl md:text-6xl lg:text-7xl text-center tracking-[-0.05em]">Shorten Your Links</div>
          <div className="w-full text-center max-w-150 text-secondary">
            Transform long, unwieldy URLs into clean, branded short links. Track performance, manage campaigns, and boost your click-through rates.
          </div>
        </div>

        <URLinputbox/>

        <div className="flex items-center w-full justify-center">
          <div className="flex gap-1.5 items-center bg-foreground text-background px-5 py-2 rounded-full font-semibold cursor-pointer">
            <RiScissorsCutLine/>
            <span>Shorten</span>
          </div>
        </div>

      </div>

    </div>
  );
}
