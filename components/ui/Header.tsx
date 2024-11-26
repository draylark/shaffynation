import Link from "next/link"
import Image from "next/image"
import { anton_sc } from "@/utils/fonts"
import { NavBar } from "./NavBar"
import shaffynationlogo from '@/public/shaffynationlog.png'
import { ModeToggle } from "./ModeToggle"


export default function Header(){
    return (
        <header className="flex items-center justify-center py-3 gap-5 md:gap-2 fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src={shaffynationlogo}
                    width={60}
                    height={60}
                    alt="ShaffyNation Logo"
                />
                <h1 className={`${anton_sc.className} text-2xl`}>SHAFFYNATION</h1>
            </Link>
            
            <NavBar/>

            <ModeToggle/>
        </header>
    )
}