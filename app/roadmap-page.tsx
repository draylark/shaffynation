import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { anton_sc } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "ShaffyNation — Roadmap",
  description:
    "Explore the roadmap of ShaffyNation, detailing our plans for the future of ShaffyCoin ($SHAFFY) and the community.",
  keywords: [
    "ShaffyNation",
    "ShaffyCoin",
    "$SHAFFY",
    "roadmap",
    "crypto development",
    "blockchain",
    "community growth",
  ],
  openGraph: {
    title: "ShaffyNation — Roadmap",
    description:
      "Discover the roadmap for ShaffyNation and the future plans for $SHAFFY.",
    url: "https://www.shaffynation.com/roadmap",
    type: "article",
    images: [
      {
        url: "https://www.shaffynation.com/roadmap-banner.webp",
        width: 1200,
        height: 630,
        alt: "ShaffyNation Roadmap Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShaffyNation — Roadmap",
    description:
      "Learn about the roadmap for ShaffyNation and the future of $SHAFFY.",
    images: ["https://www.shaffynation.com/roadmap-banner.webp"],
  },
};

export default function Roadmap() {
  return (
    <div className="flex flex-wrap min-h-[1000px]">
      <div className="flex flex-col gap-10 w-full pt-[10rem] px-[3rem] md:p-[12rem]">
        <ScrollReveal>
          <h1 className={`${anton_sc.className} text-3xl md:text-5xl`}>SHAFFYNATION ROADMAP</h1>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className={`${anton_sc.className} text-2xl md:text-4xl`}>Q1 2025: Foundation and Community Building</h2>
          <ul className="list-disc ml-5 text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            <li><strong>Launch of ShaffyCoin ($SHAFFY):</strong> Officially launch the token on the Solana blockchain, ensuring all technical aspects are thoroughly tested and secure.</li>
            <li><strong>Community Engagement:</strong> Initiate community-building activities through social media, forums, and events to foster a vibrant ecosystem. This includes AMAs (Ask Me Anything), community polls, and feedback sessions.</li>
            <li><strong>Token Distribution:</strong> Begin the distribution of tokens according to the planned allocation:
              <ul className="list-disc ml-5 mt-2">
                <li><strong>72% Circulation:</strong> Ensure wide and accessible distribution to the community through various platforms and exchanges.</li>
                <li><strong>18% Contributors:</strong> Reward early developers and partners with vested interests to incentivize long-term commitment.</li>
                <li><strong>10% Marketing and Media:</strong> Allocate funds for initial marketing campaigns, including influencer partnerships and promotional events.</li>
              </ul>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className={`${anton_sc.className} text-2xl md:text-4xl`}>Q2 2025: Expanding Utility and Partnerships</h2>
          <ul className="list-disc ml-5 text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            <li><strong>Partnership Development:</strong> Establish strategic partnerships with other blockchain projects and influencers to enhance visibility and credibility. This includes collaborations with NFT projects and DeFi platforms.</li>
            <li><strong>NFT Launch:</strong> Introduce a unique NFT collection that embodies the spirit of ShaffyNation, allowing community members to engage creatively. This will include limited edition NFTs that provide holders with special privileges.</li>
            <li><strong>Marketing Campaigns:</strong> Launch targeted marketing campaigns to promote ShaffyCoin and its unique value proposition, utilizing social media ads, content marketing, and community-driven initiatives.</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className={`${anton_sc.className} text-2xl md:text-4xl`}>Q3 2025: Enhancing Features and Community Engagement</h2>
          <ul className="list-disc ml-5 text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            <li><strong>Community Events:</strong> Organize online and offline events to engage the community, including contests, giveaways, and educational webinars. This will help in building a strong community bond and increasing awareness.</li>
            <li><strong>Platform Development:</strong> Begin development of a dedicated platform for ShaffyCoin holders to access exclusive content, rewards, and community features, such as forums and voting mechanisms for community decisions.</li>
            <li><strong>Feedback Loop:</strong> Implement a system for community feedback to continuously improve the project based on user input, ensuring that the community feels heard and valued.</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className={`${anton_sc.className} text-2xl md:text-4xl`}>Q4 2025: Growth and Sustainability</h2>
          <ul className="list-disc ml-5 text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            <li><strong>Token Utility Expansion:</strong> Explore additional use cases for $SHAFFY within the ecosystem, such as staking, governance, and rewards for community contributions, enhancing the token's value proposition.</li>
            <li><strong>Sustainability Initiatives:</strong> Develop strategies to ensure the long-term sustainability of the project, including eco-friendly practices and responsible growth, such as carbon offset initiatives.</li>
            <li><strong>Regulatory Compliance:</strong> Stay updated on cryptocurrency regulations and ensure compliance to protect the community and the project, including legal consultations and audits.</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className={`${anton_sc.className} text-2xl md:text-4xl`}>2026 and Beyond: Long-Term Vision</h2>
          <ul className="list-disc ml-5 text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
            <li><strong>Global Community Expansion:</strong> Focus on growing the ShaffyNation community globally, promoting financial independence and creativity through localized initiatives and partnerships.</li>
            <li><strong>Continuous Innovation:</strong> Keep innovating by exploring new technologies, trends, and opportunities within the blockchain space, including potential integrations with emerging technologies like AI and IoT.</li>
            <li><strong>Regular Updates:</strong> Provide regular updates to the community about progress, changes, and future plans to maintain transparency and trust, including quarterly reports and community meetings.</li>
          </ul>
        </ScrollReveal>
      </div>
    </div>
  );
}
