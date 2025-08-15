import { FaRegStar } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="w-full flex justify-center z-26 mt-30">
            <div className="w-full flex flex-wrap items-center justify-center md:justify-between gap-3 max-w-3xl pt-3 pb-10 border-t border-border">
                <div className="text-center text-muted-foreground">
                    Made with FastAPI & Next.js • Styled with Tailwind CSS & shadcn
                </div>
                <a href="https://github.com/synbhwl/mochi" target="_blank" rel="noopener noreferrer" className="flex w-max items-center gap-2 group/parent">
                    <FaRegStar className="text-muted-foreground group-hover/parent:text-chart-4 stroke-[30px] stroke-muted-foreground group-hover/parent:stroke-chart-4 transition-all duration-300" />
                    <div className="relative group">
                        <span className="text-muted-foreground group-hover/parent:text-foreground transition-all duration-300">
                            Drop a Star
                        </span>
                        <div className="absolute w-0 h-[2px] bg-foreground -bottom-1 left-1/2 -translate-x-1/2 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                    </div>
                </a>
            </div>
        </div>
    )
}