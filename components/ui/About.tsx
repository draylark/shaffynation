import { ScrollReveal } from "./ScrollReveal"
import { anton_sc, julius_sans_one, bangers, bebasNeue } from "@/utils/fonts"

export default function About () {
    return (
        <div className="flex flex-wrap md:flex-nowrap space-y-10 md:space-y-0 w-full min-h-[400px] py-[5rem]">
            <div className="flex flex-grow flex-col gap-10 md:w-1/2 px-10 md:px-[5rem]">
                <ScrollReveal>
                    <h3 className={`${anton_sc.className} text-3xl md:text-5xl`}>WHAT IS SHAFFYNATION?</h3>
                </ScrollReveal>               
                <ScrollReveal>
                    <p className={`text-neutral-70 dark:text-neutral-300  font-normal md:text-xl`}>
                        ShaffyNation is a project that aspires to be a growing community. Inspired by the image of the Rock Hyrax, ShaffyNation aims to be a unique universe where fun, memes, and decentralization are at the core of our mission. Led by a colorful array of Shaffys, each with their own style, personality, and lore, ShaffyNation represents a new way of connecting people through humor and technology.
                        <br/>
                        <br/>
                        Our main goal is to launch ShaffyCoin, a memecoin designed to break the mold, boost creativity, and build a strong global community.
                        <br/> 
                        <br/> 
                        With ShaffyNation, every member becomes part of a revolution that mixes laughter, innovation, and the power of decentralization.
                        Whether you're a meme lover, a cryptocurrency enthusiast, or just someone who wants to be a part of something unique, ShaffyNation welcomes you!
                    </p>
                </ScrollReveal>               
            </div>
            <div className="flex flex-grow flex-col gap-10 md:w-1/2 px-10 md:px-[5rem]">
                <ScrollReveal>
                    <h3 className={`${anton_sc.className} text-3xl md:text-5xl`}>SHAFFYCOIN</h3>
                </ScrollReveal>               
                <ScrollReveal>
                    <p className={`text-neutral-70 dark:text-neutral-300  font-normal md:text-xl`}>
                        ShaffyCoin is the official coin of ShaffyNation, designed to unite the power of cryptocurrency with the fun of memes. Inspired by the mischief and cunning of the Rock Hyrax, ShaffyCoin is not just a memecoin, it is a symbol of community, creativity and decentralization.
                        <br/>
                        <br/>
                        Our goal is simple: to build an accessible, fun and vibrant community-backed coin, while taking humor and meme culture to new financial horizons. From day one, ShaffyCoin has been focused on community engagement and impact, with future plans to integrate into NFT ecosystems, gaming and more.</p>
                </ScrollReveal>               
            </div>
        </div>
    )
}