
import { ScrollReveal } from "./ScrollReveal";
import { anton_sc } from "@/utils/fonts";
import Link from "next/link"

export function LandingPage(){
    
    return (
        <div 
            className="h-screen w-full"
            style={
                {
                    backgroundImage: "url('https://res.cloudinary.com/di4cxzart/image/upload/v1735850575/shaffynation/en7yriridehxx2cfcl7g.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "80% 60%",
                }
            }
        >
            <div className="flex flex-col  justify-center items-center h-full w-full bg-black/40 px-[8rem]">
                <div className="max-w-[40rem] p-10 rounded-2xl">
            -        <ScrollReveal>
                    <div className="flex flex-col gap-5 justify-center items-center pt-[13rem]">
                        <div className="flex flex-col  justify-center items-center">
                            <p className={`${anton_sc.className} bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/50 text-5xl md:text-7xl lg:text-7xl`}>
                                SHAFFYNATION
                            </p>
                            <p className="text-center bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/30 text-3xl md:text-4xl lg:text-4xl">
                                Crypto, humor and <br/>decentralization.
                            </p>                             
                        </div>
                       
                        <button className=" relative inline-flex h-16 w-[12rem] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 pointer-events-auto">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />  
                            <span className="relative inline-flex flex-col items-center justify-center h-full w-full cursor-pointer rounded-full bg-slate-950 px-3 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                                <span className={`font-bold text-md  px-2`}>
                                BUY $SHAFFY
                                </span>
                            </span>
                        </button>    
                              
                    </div>  
                    </ScrollReveal>                    
                </div>


            </div>
        </div>
    )

}