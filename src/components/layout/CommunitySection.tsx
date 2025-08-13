import Image from "next/image";
import { Card } from "../ui/card";
import { FaDiscord } from "react-icons/fa6";

export default function CommunitySection() {
    return (
        <Card>
            <div className="w-full flex flex-col items-center gap-9 px-4 pt-11 pb-9 relative">
                <div className="absolute -top-18 left-1/2 -translate-x-1/2">
                    <Image src="https://cdn.discordapp.com/icons/1381660834836517024/ae3e71e8394100518030bd6075fcf271.png?size=1024" width={1024} height={1024} alt="server icon" className="w-24 rounded-3xl drop-shadow-[0px_2px_3px_theme(colors.muted-foreground)]" />
                </div>
                <div className="w-full text-center flex-col gap-2 flex items-center">
                    <span className="text-3xl tracking-[-0.05em]">A Barely Devs Project</span>
                    <span className="italic text-muted-foreground max-w-115 leading-5">
                        Barely Dev is a fun community for fellow developers ofcourse both learner and advanced nerds.
                    </span>
                    <div className="w-max absolute -bottom-11 left-1/2 -translate-x-1/2 flex gap-3 items-center bg-foreground text-background px-5 py-2 rounded-full font-semibold cursor-pointer">
                        <FaDiscord className="text-xl" />
                        <span>Join the community</span>
                    </div>
                </div>
                <div className="w-full max-w-155 text-justify">
                    This project started out as a fastApi Learning project in our community. Sayan was learning basic fastApi structure and things got kinda sidetracked on his part. That's when Mayank jumped in with the frontend and sidetracked it even more – and this is what it ended up turning into.
                </div>
            </div>
        </Card>

    )
}