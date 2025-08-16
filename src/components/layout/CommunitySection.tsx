import Image from "next/image";
import { FaDiscord } from "react-icons/fa6";
import ProfileCard from "../ui/ProfileCard";
import { FadeInSection } from "./FadeInSection";

export default function CommunitySection() {
    return (
        <div className="w-full flex flex-col gap-24 bg-background white-shadow">
            <div>
                <FadeInSection>
                    <div className="w-full flex flex-col items-center gap-9 px-4 pt-11 pb-9 relative">
                        <div className="flex w-full justify-center z-26">
                            <Image src="https://cdn.discordapp.com/icons/1381660834836517024/ae3e71e8394100518030bd6075fcf271.png?size=1024" width={1024} height={1024} alt="server icon" className="w-24 rounded-3xl drop-shadow-[0px_2px_3px_theme(colors.muted-foreground)]" />
                        </div>
                        <div className="w-full text-center flex-col gap-2 flex items-center z-26">
                            <span className="text-3xl tracking-[-0.05em]">A Barely Devs Project</span>
                            <span className="max-w-115 leading-5 tracking-[-0.05em]">
                                Barely Dev is a fun community for fellow developers ofcourse both learner and advanced nerds.
                            </span>
                            <a href="https://discord.gg/EsaZWDDn" target="_blank" rel="noopener noreferrer" className="w-max absolute -bottom-11 left-1/2 -translate-x-1/2 flex gap-3 items-center bg-foreground text-background px-5 py-2 rounded-full font-semibold cursor-pointer">
                                <FaDiscord className="text-xl" />
                                <span>Join the community</span>
                            </a>
                        </div>
                        <div className="w-full max-w-155 p-4 bg-muted text-muted-foreground italic border-l-4 border-muted-foreground rounded-tr-2xl rounded-br-2xl leading-relaxed text-sm sm:text-base white-shadow">
                            This project started out as a fastApi Learning project in our community. <a href="https://github.com/synbhwl" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground transition-all duration-300 ease-in-out">Sayan</a> was learning basic fastApi structure and things got kinda sidetracked on his part. {"That's"} when <a href="https://github.com/MAYANK-T0MAR" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground transition-all duration-300 ease-in-out">Mayank</a> jumped in with the frontend and sidetracked it even more – and this is what it ended up turning into.
                        </div>
                    </div>
                </FadeInSection>
            </div>

            <FadeInSection delay={300}>
                <div className="w-full flex flex-col gap-9">
                    <div className="text-3xl z-26">Credits</div>
                    <div className="w-full flex gap-13 flex-col items-center md:flex-row">
                        <ProfileCard
                            gitHubPfp="https://github.com/synbhwl.png"
                            name="Sayan Bhowal"
                            description="Python-focused backend dev who powered this project's server-side."
                            gitHubLink="https://github.com/synbhwl"
                            twitterLink="https://x.com/Sayancodes"
                            discordLink="https://discord.com/users/1381466802189631540"
                            mailAddress="sayanbhowalcode@gmail.com"
                        />
                        <ProfileCard
                            gitHubPfp="https://github.com/MAYANK-T0MAR.png"
                            name="Mayank Tomar"
                            description="Full Stack Dev who built the frontend and made it all come alive."
                            gitHubLink="https://github.com/MAYANK-T0MAR"
                            twitterLink="https://x.com/MayankDotTxT"
                            discordLink="https://discord.com/users/875257441355448371"
                            mailAddress="mayanktomar281@gmail.com"
                        />
                    </div>
                </div>
            </FadeInSection>

        </div>


    )
}