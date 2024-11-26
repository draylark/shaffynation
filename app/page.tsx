import { Metadata } from "next";
import { PresentationGradient } from "@/components/ui/PresentationGradient";
import About from "@/components/ui/About";
import { ObjectivesTimeline } from "@/components/ui/ObjectivesTimeline";

export const metadata: Metadata = {
  title: "ShaffyNation - Where Humor and Decentralization Meet",
  description:
    "Join ShaffyNation, a unique community blending humor and cryptocurrency. Discover $SHAFFY and be part of a decentralized future.",
  keywords: [
    "ShaffyNation",
    "memecoins",
    "cryptocurrency",
    "ShaffyCoin",
    "decentralization",
    "crypto community",
  ],
  openGraph: {
    title: "ShaffyNation - Where Memes and Decentralization Meet",
    description:
      "Explore ShaffyNation, a vibrant community connecting crypto enthusiasts through humor, memes, and $SHAFFY.",
    url: "https://www.shaffynation.com",
    type: "website",
    images: [
      {
        url: "https://www.shaffynation.com/logo.png",
        width: 1200,
        height: 630,
        alt: "ShaffyNation Home Page Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShaffyNation - Where Memes and Decentralization Meet",
    description:
      "Discover ShaffyNation, a unique mix of humor, memes, and cryptocurrency. Explore $SHAFFY today.",
    images: ["https://www.shaffynation.com/logo.png"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <PresentationGradient />
      <About />
      <ObjectivesTimeline />
    </div>
  );
}