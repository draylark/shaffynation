import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { anton_sc, julius_sans_one, bangers, bebasNeue } from "@/utils/fonts"


export default function Tokenomics(){
    return (
        <div className="flex flex-col md:items-center gap-10 min-h-[1000px] pt-[10rem] px-[3rem] md:p-[12rem]">
                <ScrollReveal>
                    <h1 className={`${anton_sc.className} text-3xl md:text-5xl`}>SHAFFYCOIN TOKENOMICS</h1>
                </ScrollReveal>  

            <div className="flex flex-col gap-10 max-w-[430px]">
                <ScrollReveal>
                    <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>TOKEN DISTRIBUTION</h3>
                    <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                        ShaffyCoin's ($SHAFFY) distribution is designed to promote sustainable 
                        growth for the ecosystem and reward those contributing to the project.
                    </p>

                    <div className="flex flex-col mt-5">
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md">
                            <span className="font-bold mr-1">Circulation:</span> 69%
                        </p>                        
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md">
                            <span className="font-bold mr-1">Contributors:</span> 20%
                        </p>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md">
                            <span className="font-bold mr-1">Marketing and Media:</span> 11%
                        </p>
                    </div>                    
                </ScrollReveal>


                <ScrollReveal>
                        <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>HOW IT WORKS</h3>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                        <span className="font-bold mr-1">Contributors (20%):</span> Tokens reserved to reward developers, partners, and key contributors driving the project forward.
                        </p>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                        <span className="font-bold mr-1">Marketing and Media (11%):</span> Funds allocated for advertising campaigns, strategic partnerships, and expanding ShaffyNation.
                        </p>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                        <span className="font-bold mr-1">Initial Circulation (69%):</span> Tokens available to the community from the start, ensuring wide and accessible distribution.
                        </p>
                </ScrollReveal>
            </div>

            <div className="">

            </div>

        </div>
    )
}