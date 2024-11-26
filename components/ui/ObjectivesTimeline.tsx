import Image from "next/image";
import React from "react";
import { anton_sc } from "@/utils/fonts";
import { Timeline } from "@/components/ui/timeline";

export function ObjectivesTimeline() {
  const data = [
    {
      title: "Short Term",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
                Launch the First Shaffy NFT Collection
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/di4cxzart/image/upload/v1732387428/shaffys-nft/qizzt7ralkh1riczxmdz.png"
              alt="shaffy 1"
              width={500}
              height={500}
              
              className="rounded-lg object-cover object-top h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/di4cxzart/image/upload/v1732387423/shaffys-nft/fc6wx4yfbgr3cl0gwlny.png"
              alt="shaffy 2"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/di4cxzart/image/upload/v1732387431/shaffys-nft/fcvvleoo44nsd3vcnum6.png"
              alt="shaffy template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/di4cxzart/image/upload/v1732387439/shaffys-nft/ppn3s1m9eyhzcxojzpbs.png"
              alt="shaffy template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Medium Term",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
            Build an Active Community on Discord
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Reach at least 1000 active members on Discord, fostering a vibrant community with activities such 
            as meme contests, cryptocurrency discussions, and exclusive events for ShaffyCoin holders.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="https://res.cloudinary.com/di4cxzart/image/upload/v1732389527/ramdom/nrbnouwrcf8whiyex1it.jpg"
              alt="discord symbol"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Long Term",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-4">
            Introduce Gamification into the Ecosystem
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Develop a thematic minigame where players can interact with Shaffys and earn small amounts of ShaffyCoin or exclusive NFTs.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/di4cxzart/image/upload/v1732390879/ramdom/fnl5ogvnxgvhj5pnkobk.webp"
              alt="hypothetical game"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/di4cxzart/image/upload/v1732390880/ramdom/gtrsrqtwsclum8o0odmd.webp"
              alt="hypothetical game"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Long Term",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-4">
            Form Strategic Partnerships
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Collaborate with at least 1 relevant crypto projects or NFT collections to expand ShaffyNation’s 
            visibility, whether through joint events, cross-campaigns, or promotional partnerships.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full ">
      <Timeline data={data} />
    </div>
  );
}
