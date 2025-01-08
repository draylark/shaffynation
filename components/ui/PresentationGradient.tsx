'use client'
import Image from "next/image";
import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import shaffys from '@/public/shaffys.png'
import { useTheme } from "next-themes";
import { ScrollReveal } from "./ScrollReveal";

const darkTheme = {
  gradientBackgroundStart: "rgb(0, 0, 64)",
  gradientBackgroundEnd:"rgb(255, 0, 0)",
  firstColor:"255, 255, 255", // Blanco puro
  secondColor:"255, 85, 85", // Rojo vivo
  thirdColor:"0, 170, 255", // Azul cielo
  fourthColor:"255, 255, 128", // Amarillo suave
  fifthColor:"170, 0, 255", // Violeta profundo
  pointerColor:"255, 128, 64", // Naranja cálido
}

const lightTheme = {
  gradientBackgroundStart: "rgb(12, 3, 62)",
  gradientBackgroundEnd:"rgb(40, 0, 80)",
  firstColor:"70, 0, 130", // Índigo espacial
  secondColor:"255, 20, 147", // Rosa profundo
  thirdColor:"0, 191, 255", // Azul celeste
  fourthColor:"238, 130, 238", // Violeta brillante
  fifthColor:"75, 0, 130", // Púrpura interestelar
  pointerColor:"173, 255, 47", // Verde neón lima
}

export function PresentationGradient() {
  const { theme } = useTheme();
  console.log('theme', theme)
  
  return (
    <BackgroundGradientAnimation 
      {...(theme === "dark" || theme === 'system' ? darkTheme : lightTheme)}
    >
      <div className="flex absolute z-40 inset-0 items-center justify-center text-white font-bold px-4 pointer-events-none text-center">
        <ScrollReveal>
          <div className="flex flex-col gap-5 items-center">
            <div className="flex flex-col justify-end relative min-h-[300px] mt-[5rem]">
                <Image 
                    src={shaffys}
                    width={500}
                    height={500}
                    alt="shaffys"
                    className="absolute bottom-[5.4rem]"
                />
                <div className="flex flex-col ">
                    <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/50 text-5xl md:text-7xl lg:text-7xl">
                    ShaffyNation
                    </p>
                    <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-3xl md:text-4xl lg:text-4xl">
                        Crypto, humor and <br/>decentralization.
                    </p>           
                </div>            
            </div>

            <button className=" relative inline-flex h-16 w-[12rem] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 pointer-events-auto">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />  
              <span className="relative inline-flex flex-col items-center justify-center h-full w-full cursor-pointer rounded-full bg-slate-950 px-3 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                <span className={`font-bold text-md  px-2`}>
                  $SHAFFY
                </span>
                <span className="text-xs text-center pb-1">
                 COMING SOON
                </span>
              </span>
            </button>            
          </div>

        </ScrollReveal>
        
        {/* <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 pointer-events-auto">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <span className="font-bold border-2 border-red-500">$SHAFFY</span>  <br/>Release Date Scheduled:<br/> 11/28/2024
          </span>
        </button> */}
      </div>
    </BackgroundGradientAnimation>
  );
}
