import Image from "next/image"
import shaffyLogo from '@/public/shaffynationlog.png'
import { anton_sc } from "@/utils/fonts"
import { FooterLinks } from "./FooterLinks"

export default function Footer(){

    return (
        <footer className="flex flex-col min-h-[450px] w-full md:px-[10rem] pt-[5rem]">
            <div className="flex flex-wrap">

                <div className="flex p-5 w-full md:w-1/2 justify-center">
                    <div className="flex flex-col gap-5">

                        <div className="flex items-center">
                            <Image src={shaffyLogo} alt="shaffy logo" height={120} width={120} />
                            <h5 className={`${anton_sc.className} text-2xl`}>SHAFFYNATION</h5>
                        </div>

                        <p className="pl-7 text-sm max-w-xs">
                        ShaffyNation is the community where humor, memes, and cryptocurrencies converge. Join the movement!
                        </p>

                        <FooterLinks classes="flex flex-col gap-2 md:hidden pl-7" />
                    </div>            
                </div>

                <FooterLinks classes="hidden md:flex md:flex-col p-5 gap-2 w-full md:w-1/2 justify-center items-center" />
            </div>

            <div className={`${anton_sc.className} flex flex-grow justify-center items-center py-10 md:py-0`}>
                <p className="md:text-lg">© 2024 SHAFFYNATION | ALL RIGHTS RESERVED</p>
            </div>
        </footer>
    )
}