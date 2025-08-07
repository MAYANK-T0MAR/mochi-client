import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full relative max-w-3xl flex flex-col items-center justify-center gap-8">

        <div className="select-none pointer-events-none absolute h-[calc(100%+200px)] w-[calc(100%+100px)] rounded-full overflow-hidden">
          <div className="top-[-10px] absolute -z-10 w-full h-full bg-background bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <Image src="/mochi_icon.png" width={3264} height={806} alt="mochi icon image" priority className="w-46 h-auto" />

        <div className="flex flex-col gap-3">
          <div className="text-7xl text-center tracking-[-0.05em]">Shorten Your Links</div>
          <div className="w-full text-center max-w-150 text-secondary">
            Transform long, unwieldy URLs into clean, branded short links. Track performance, manage campaigns, and boost your click-through rates.
          </div>
        </div>

      </div>

    </div>
  );
}
