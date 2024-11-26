import { anton_sc } from "@/utils/fonts"
import Link from "next/link"

export function FooterLinks ({ classes = '' }: { classes?: string }) {
    return (
        <ul className={classes}>     
            <li>
                <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://linktr.ee/shaffynation"    
                    className={`${anton_sc.className} hover:underline`}
                >
                    Join the community
                </a>
            </li>      
            <li>
                <Link href="/about-disclaimer" className={`${anton_sc.className} hover:underline`}>
                    About & Disclaimer
                </Link>
            </li>
            <li>
                <Link href="/tokenomics" className={`${anton_sc.className} hover:underline`}>
                    Tokenomics
                </Link>
            </li>
            <li>
                <a 
                    href="mailto:contact@shaffynation.com?subject=About ShaffyNation&body=I%20would%20like%20to%20know%20more%20about%20ShaffyNation." 
                    className={`${anton_sc.className} hover:underline`}>
                    Contact
                </a>
            </li>    
        </ul>
    )
}