import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { anton_sc } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "ShaffyNation — Events",
  description:
    "Explore the upcoming events of ShaffyNation, including launches, community activities, and special celebrations.",
  keywords: [
    "ShaffyNation",
    "ShaffyCoin",
    "$SHAFFY",
    "events",
    "crypto community",
    "blockchain events",
  ],
  openGraph: {
    title: "ShaffyNation — Events",
    description:
      "Discover the upcoming events for ShaffyNation and how you can participate.",
    url: "https://www.shaffynation.com/events",
    type: "article",
    images: [
      {
        url: "https://www.shaffynation.com/events-banner.webp",
        width: 1200,
        height: 630,
        alt: "ShaffyNation Events Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShaffyNation — Events",
    description:
      "Learn about the upcoming events for ShaffyNation and how to get involved.",
    images: ["https://www.shaffynation.com/events-banner.webp"],
  },
};

export default function Events() {
  return (
    <div className="flex flex-wrap min-h-[1000px]">
      <div className="flex flex-col gap-10 w-full pt-[10rem] px-[3rem] md:p-[12rem]">
        <ScrollReveal>
          <h1 className={`${anton_sc.className} text-3xl md:text-5xl`}>SHAFFYNATION EVENTS</h1>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className={`${anton_sc.className} text-2xl md:text-4xl`}>Upcoming Events</h2>
          <ul className="list-disc ml-5 text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            <li>
              <strong>ShaffyCoin Token Generations Events</strong>
              <br />
              <span>Date: [Insert Date]</span>
              <br />
              <span>Location: Virtual Event (Zoom/YouTube/Discord)</span>
              <br />
              <span>Description: Celebrate the official launch of ShaffyCoin ($SHAFFY) on the Solana blockchain. Join us for a live-streamed event featuring key team members, community leaders, and special guests.</span>
              <br />
              <strong>Activities:</strong>
              <ul className="list-disc ml-5 mt-2">
                <li>Live Q&A session to address community questions.</li>
                <li>Giveaways of $SHAFFY tokens to participants.</li>
                <li>Community polls to gather feedback on future initiatives.</li>
              </ul>
            </li>

            <li>
              <strong>Community Events</strong>
              <br />
              <span>Date: [Insert Date]</span>
              <br />
              <span>Location: Online (https://www.subber.xyz/dollarshaffy)</span>
              <br />
              <span>Description: A week-long series of activities designed to engage the community through fun and interactive content. Participate in challenges, share your thoughts, and connect with other community members.</span>
              <br />
              <strong>Activities:</strong>
              <ul className="list-disc ml-5 mt-2">
                <li>Meme contests with prizes in $SHAFFY.</li>
                <li>Community art showcase featuring ShaffyCoin-themed artwork.</li>
              </ul>
            </li>

            <li>
              <strong>NFT Launch Event</strong>
              <br />
              <span>Date: [Insert Date]</span>
              <br />
              <span>Location: Virtual Event (Platform TBD)</span>
              <br />
              <span>Description: Celebrate the launch of our exclusive NFT collection that embodies the spirit of ShaffyNation. This event will showcase the NFTs, their utility, and how they contribute to the community.</span>
              <br />
              <strong>Activities:</strong>
              <ul className="list-disc ml-5 mt-2">
                <li>Live auction of limited edition NFTs.</li>
                <li>Panel discussion with artists and creators involved in the NFT project.</li>
                <li>Community voting on future NFT themes and designs.</li>
              </ul>
            </li>
          </ul>
        </ScrollReveal>
      </div>
    </div>
  );
}
