import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { anton_sc } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "ShaffyNation — About & Disclaimer",
  description:
    "Learn about ShaffyNation, a unique community built on humor and decentralization. Read our disclaimer to understand the risks and use of $SHAFFY.",
  keywords: [
    "ShaffyNation",
    "ShaffyCoin",
    "$SHAFFY",
    "crypto disclaimer",
    "decentralization",
    "cryptocurrency risks",
    "blockchain experimentation",
    "disclaimer",
    "about",
  ],
  openGraph: {
    title: "ShaffyNation — About & Disclaimer",
    description:
      "Discover ShaffyNation's mission to unite humor and decentralization. Read our disclaimer for insights into $SHAFFY and its associated risks.",
    url: "https://www.shaffynation.com/about-disclaimer",
    type: "article",
    images: [
      {
        url: "https://www.shaffynation.com/disbout-banner.webp",
        width: 1200,
        height: 630,
        alt: "About ShaffyNation Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShaffyNation — About & Disclaimer",
    description:
      "Learn about ShaffyNation's vibrant ecosystem and the disclaimer for $SHAFFY. Understand the associated risks before participating.",
    images: ["https://www.shaffynation.com/disbout-banner.webp"],
  },
};

export default function AboutDisclaimer() {
  const handleExit = () => {
    // Redirect to the homepage or perform another action
    window.location.href = '/'; // Redirect to homepage
  };

  return (
    <div className="flex flex-wrap min-h-[1000px]">
      <div id="about" className="flex flex-col gap-10 w-full lg:w-1/2 pt-[10rem] px-[3rem] md:p-[12rem]">
        <ScrollReveal>
          <h1 className={`${anton_sc.className} text-3xl md:text-5xl`}>ABOUT SHAFFYNATION</h1>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            Welcome to ShaffyNation, a vibrant ecosystem built around creativity, community, and innovation. 
            Inspired by the unique spirit of the &quot;rock hyrax&quot;, 
            ShaffyCoin ($SHAFFY) is more than just a memecoin – it’s a movement.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>WHAT IS SHAFFYCOIN?</h3>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            ShaffyCoin is a cryptocurrency designed to bring people from all over the world together through fun, decentralization, 
            and financial freedom. Our project combines the humor and culture of cryptocurrencies with a focus on creating long-term value. 
            ShaffyNation is built on the belief that the simplest ideas can have the deepest impact.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>OUR VISION</h3>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            Our mission is to build a global community that celebrates 
            creativity and financial independence while fostering the responsible and sustainable 
            growth of the crypto ecosystem.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>WHAT MAKES SHAFFICOIN UNIQUE?</h3>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            <span className="font-bold mr-2">ShaffyNation:</span> More than a token, we are a community dedicated to collective growth and mass adoption of blockchain technologies.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            <span className="font-bold mr-2">The Power of Humor:</span> Our roots as a memecoin allow us to connect with our audience uniquely, using humor, memes, and creativity.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            <span className="font-bold mr-2">Unlimited Potential:</span> From NFTs to collaborations, ShaffyCoin is designed to expand its utility over time, creating impact both inside and outside the crypto space.
          </p>
        </ScrollReveal>
      </div>

      <div id="disclaimer" className="flex flex-col gap-10 w-full lg:w-1/2 pt-[5rem] p-[3rem] md:p-[12rem]">
        <ScrollReveal>
          <h2 className={`${anton_sc.className} text-3xl md:text-5xl`}>DISCLAIMER</h2>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            ShaffyCoin ($SHAFFY) is a Solana blockchain-based token created for experimentation and entertainment purposes. 
            It should not be considered a financial investment or a guarantee of economic returns.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>NOT INVESTMENT ADVICE</h3>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            The information presented on this website, or any other material related to ShaffyCoin, 
            does not constitute financial, legal, or professional advice. Before buying, selling, or investing in ShaffyCoin, 
            consult a qualified professional to assess the associated risks and opportunities.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>ASSOCIATED RISKS</h3>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            <span className="font-bold mr-2">Market Volatility:</span> 
            The value of ShaffyCoin may fluctuate significantly due to market conditions and other external factors.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            <span className="font-bold mr-2">Capital Loss:</span> 
            By participating in the cryptocurrency market, you assume the full risk of partial or total loss of your investment.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            <span className="font-bold mr-2">Changing Regulations:</span> 
            Cryptocurrency-related laws and regulations vary by jurisdiction and may change in the future, potentially affecting the accessibility and use of ShaffyCoin.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>LIMITATION OF LIABILITY</h3>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            ShaffyNation, its creators, and associates are not responsible for:<br/><br/>
            1. Financial losses related to the purchase or holding of ShaffyCoin.<br/><br/>
            2. Technical issues on the blockchain that impact the token's operation.<br/><br/>
            3. Investment decisions made based on the information provided on this site.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>USE AT YOUR OWN RISK</h3>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            By interacting with ShaffyCoin, you acknowledge and agree that you do so at your own risk and discretion.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>MODIFICATIONS</h3>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            ShaffyNation reserves the right to update this disclaimer at any time. We recommend checking it periodically to stay informed of any changes.
          </p>
        </ScrollReveal>
      </div>

      {/* Exit Button */}
      <div className="flex justify-center w-full mt-10">
        <button
          onClick={handleExit}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Exit
        </button>
      </div>
    </div>
  );
}
