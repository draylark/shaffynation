import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { anton_sc } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "ShaffyNation — Shaffy NFT",
  description:
    "Explore the unique Shaffy NFT collection, celebrating creativity, humor, and community values.",
  keywords: [
    "ShaffyNation",
    "Shaffy NFT",
    "rock hyrax",
    "digital art",
    "crypto community",
    "blockchain art",
  ],
  openGraph: {
    title: "ShaffyNation — Shaffy NFT",
    description:
      "Discover the Shaffy NFT collection and how it embodies the spirit of the ShaffyNation community.",
    url: "https://www.shaffynation.com/nft",
    type: "article",
    images: [
      {
        url: "https://www.shaffynation.com/nft-banner.webp",
        width: 1200,
        height: 630,
        alt: "Shaffy NFT Collection Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShaffyNation — Shaffy NFT",
    description:
      "Learn about the unique Shaffy NFT collection and its community-driven values.",
    images: ["https://www.shaffynation.com/nft-banner.webp"],
  },
};

export default function ShaffyNFT() {
  return (
    <div className="flex flex-wrap min-h-[1000px]">
      <div className="flex flex-col gap-10 w-full pt-[10rem] px-[3rem] md:p-[12rem]">
        <ScrollReveal>
          <h1 className={`${anton_sc.className} text-3xl md:text-5xl`}>SHAFFY NFT COLLECTION</h1>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className={`${anton_sc.className} text-2xl md:text-4xl`}>NFT Collection Name: "Shaffy NFT"</h2>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            The "Shaffy NFT" will consist of a series of unique digital artworks inspired by the "rock hyrax," the mascot of ShaffyNation. Each NFT will represent different aspects of the community's values, such as creativity, humor, and financial independence. The collection will celebrate the vibrant ecosystem of ShaffyNation and its commitment to decentralization and community growth.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className={`${anton_sc.className} text-2xl md:text-4xl`}>Design Elements:</h2>
          <ul className="list-disc ml-5 text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            <li>
              <strong>Art Style:</strong>
              <ul className="list-disc ml-5 mt-2">
                <li><strong>Vibrant and Playful:</strong> The artwork will feature bright colors and playful designs, reflecting the fun and humorous nature of the ShaffyCoin community.</li>
                <li><strong>Character Designs:</strong> Each NFT will depict a stylized rock hyrax character engaging in various activities that symbolize community values (e.g., creating art, participating in events, collaborating with others).</li>
              </ul>
            </li>
            <li>
              <strong>Unique Attributes:</strong>
              <ul className="list-disc ml-5 mt-2">
                <li>Each NFT will have unique attributes, such as different backgrounds, accessories, and expressions, making each piece one-of-a-kind.</li>
                <li>Special editions could include animated elements or interactive features that enhance the user experience.</li>
              </ul>
            </li>
            <li>
              <strong>Rarity Tiers:</strong>
              <ul className="list-disc ml-5 mt-2">
                <li><strong>Common:</strong> Basic designs with standard attributes.</li>
                <li><strong>Rare:</strong> Unique designs with special accessories or backgrounds.</li>
                <li><strong>Legendary:</strong> Highly detailed and animated NFTs that represent significant milestones or events in the ShaffyNation community.</li>
              </ul>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className={`${anton_sc.className} text-2xl md:text-4xl`}>Utility:</h2>
          <ul className="list-disc ml-5 text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            <li>
              <strong>Exclusive Access:</strong>
              <ul className="list-disc ml-5 mt-2">
                <li>Holders of the NFTs will gain access to exclusive community events, such as private webinars, AMAs with the development team, and special giveaways.</li>
                <li>NFT holders could receive early access to future NFT drops or other community initiatives.</li>
              </ul>
            </li>
            <li>
              <strong>Rewards and Incentives:</strong>
              <ul className="list-disc ml-5 mt-2">
                <li>Implement a staking mechanism where NFT holders can stake their NFTs to earn $SHAFFY tokens or other rewards.</li>
                <li>Create a loyalty program where long-term holders receive additional benefits, such as discounts on merchandise or access to premium content.</li>
              </ul>
            </li>
            <li>
              <strong>Community Voting:</strong>
              <ul className="list-disc ml-5 mt-2">
                <li>NFT holders could participate in community voting on future projects, themes for new NFTs, or other initiatives within the ShaffyNation ecosystem.</li>
              </ul>
            </li>
          </ul>
        </ScrollReveal>
      </div>
    </div>
  );
}
