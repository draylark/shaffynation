import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { anton_sc } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "ShaffyCoin — Tokenomics",
  description:
    "Explore the tokenomics of ShaffyCoin ($SHAFFY). Learn how distribution is designed to ensure sustainable growth, reward contributors, and empower the community.",
  keywords: [
    "ShaffyNation",
    "ShaffyCoin",
    "tokenomics",
    "$SHAFFY distribution",
    "crypto economy",
    "cryptocurrency",
    "decentralization",
  ],
  openGraph: {
    title: "ShaffyCoin Tokenomics",
    description:
      "Discover the distribution and economics of ShaffyCoin ($SHAFFY), the official token of ShaffyNation. Designed to reward contributors and grow the ecosystem.",
    url: "https://www.shaffynation.com/tokenomics",
    type: "article",
    images: [
      {
        url: "https://www.shaffynation.com/tokenomics-banner.webp",
        width: 1200,
        height: 630,
        alt: "ShaffyCoin Tokenomics Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShaffyCoin Tokenomics",
    description:
      "Learn how $SHAFFY is distributed to promote sustainable growth, reward contributors, and empower the community.",
    images: ["https://www.shaffynation.com/tokenomics-banner.webp"],
  },
};

export default function Tokenomics() {
  const handleExit = () => {
    // Define what happens when the exit button is clicked
    // For example, redirect to the homepage or close the modal
    window.location.href = '/'; // Redirect to homepage
  };

  return (
    <div className="flex flex-col md:items-center gap-10 min-h-[1000px] pt-[10rem] px-[3rem] md:p-[12rem]">
      <ScrollReveal>
        <h1 className={`${anton_sc.className} text-3xl md:text-5xl`}>
          SHAFFYCOIN TOKENOMICS
        </h1>
      </ScrollReveal>

      <div className="flex flex-col gap-10 max-w-[430px]">
        <ScrollReveal>
          <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>
            TOKEN DISTRIBUTION
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            ShaffyCoin&apos;s ($SHAFFY) distribution is designed to promote
            sustainable growth for the ecosystem and reward those contributing
            to the project.
          </p>
          <div className="flex flex-col mt-5">
            <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md">
              <span className="font-bold mr-1">Circulation:</span> 72%
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md">
              <span className="font-bold mr-1">Contributors:</span> 18%
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md">
              <span className="font-bold mr-1">Marketing and Media:</span> 10%
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>
            HOW IT WORKS
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            <span className="font-bold mr-1">Contributors (18%):</span> Tokens
            reserved to reward developers, partners, and key contributors
            driving the project forward.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            <span className="font-bold mr-1">Marketing and Media (10%):</span>{" "}
            Funds allocated for advertising campaigns, strategic partnerships,
            and expanding ShaffyNation.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            <span className="font-bold mr-1">Initial Circulation (72%):</span>{" "}
            Tokens available to the community from the start, ensuring wide and
            accessible distribution.
          </p>
        </ScrollReveal>

        <button
          onClick={handleExit}
          className="mt-10 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Exit
        </button>
      </div>
    </div>
  );
}
