import Image from "next/image";
import { FaDiscord, FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";

type profileCardProps = {
    gitHubPfp : string,
    name: string,
    description: string,
    gitHubLink: string,
    twitterLink: string,
    discordLink: string,
    mailAddress: string
}


export default function ProfileCard({gitHubPfp, name, description, gitHubLink, twitterLink, discordLink, mailAddress}: profileCardProps) {
    return (
        <div className="max-w-105 flex-col flex gap-4 flex-1 bg-card rounded-4xl border border-border shadow-[0px_8px_24px_rgba(149,157,165,0.2)] p-2">
            <Image src={gitHubPfp} height={460} width={460} alt="Sayan Bhawal Github Pfp" className="w-full rounded-3xl brightness-125" />
            <div className="flex flex-col gap-1 px-5">
                <div className="flex gap-2 items-center text-2xl">
                    <span className="tracking-[-0.05em] font-semibold">{name}</span>
                    <MdOutlineVerified />
                </div>
                <div className="text-muted-foreground">
                    {description}
                </div>
                <div className="flex justify-between mt-4 mb-3">
                    <div className="flex gap-6 items-center text-2xl">
                        <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                        </a>
                        <a href={discordLink} target="_blank" rel="noopener noreferrer">
                            <FaDiscord />
                        </a>
                    </div>

                    <a href={`mailto:${mailAddress}`} target="_blank" rel="noopener noreferrer" className="px-5 py-2 font-semibold flex items-center gap-2 rounded-full bg-foreground text-background">
                        <span>Mail</span>
                        <RiMailSendLine />
                    </a>
                </div>
            </div>
        </div>
    )
}