import React from "react";
import { anton_sc } from "@/utils/fonts";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import {
Popover,
PopoverContent,
PopoverTrigger,
} from "@/components/ui/popover"


export default function Events() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-[10rem]">
        <div className="flex flex-col gap-10">
            <div className="w-full px-5">
                <h1 className={`${anton_sc.className} text-xl md:text-md`}>SHAFFYNATION PRESENTS</h1>
                <h1 className={`${anton_sc.className} text-3xl md:text-5xl`}>Events 3-10 January, 2025</h1>                
            </div>
            
            <BentoGrid className="max-w-4xl">
                {items.map((item, i) => (             
                    <Popover key={i}>
                        <PopoverTrigger asChild>
                            <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            date={item.date}
                            className={
                                i === 3 || i === 6
                                ? "md:col-span-2"
                                : i === 7
                                ? "md:col-span-3"
                                : ""
                            }
                            />
                        </PopoverTrigger>

                        <PopoverContent side="center">
                            <div className="flex flex-col gap-4 max-w-[25rem] max-h-[30rem] p-4 overflow-y-auto">
                            <div
                                className="w-full min-h-48 rounded-lg"
                                style={
                                item.header
                                    ? {
                                        backgroundImage: `url(${(item.header as any).props.url})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: i === 1 ? "80% 20%" : "center",
                                    }
                                    : {}
                                }
                            ></div>
                            <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-200">
                                {item.title}
                            </h1>

                            <div className="text-neutral-800 dark:text-neutral-300 space-y-4">
                                {item.largeDescription
                                .trim()
                                .split("\n")
                                .filter((line) => line.trim() !== "")
                                .map((line, index) => {
                                    const isHeading = line.toLowerCase().includes("how it works") || line.toLowerCase().includes("rewards");
                                    return (
                                    <p
                                        key={index}
                                        className={isHeading ? "font-bold text-lg text-neutral-900 dark:text-neutral-200" : ""}
                                    >
                                        {line}
                                    </p>
                                    );
                                })}
                            </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                ))}
            </BentoGrid>       
        </div>
    </div>
  );
}

const Skeleton = ({ url, position = "center", customPosition }: { 
    url: string; 
    position?: string; 
    customPosition?: { x: string; y: string }; 
  }) => {
    const backgroundPosition = customPosition 
      ? `${customPosition.x} ${customPosition.y}` 
      : position;
  
    return (
      <div 
        style={{ 
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition, // Dinámico según prop o coordenadas
        }}
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
      ></div>
    );
  };
  
  const items = [
    {
      title: "Meme Contest #1",
      date: "January 3-5, 2025",
      description: "Create hilarious, creative memes inspired by ShaffyNation and share them with the community. The best memes will earn fame, exclusive roles, and a stack of $SHAFFY tokens!",
      largeDescription: `
  Unleash your creativity!
  ShaffyNation’s first Meme Contest invites you to create the funniest, most creative memes inspired by our lovable humanoid rock hyrax, Shaffy. This event is all about humor, originality, and community engagement. Whether you’re a meme expert or just love to have fun, this is your chance to show off your skills and make the community laugh out loud.
  
  Date: January 3-5, 2025
  
  How it works:
  
      1. Create memes featuring Shaffy or ShaffyNation themes.
      2. Share your memes on social media and tag us or post them directly in the dedicated channel on Discord.
      3. The top three memes will be selected based on creativity, humor, and community reactions.
  
  Rewards:
  
      1st Place: 50,000 $SHAFFY + exclusive role: “Shaffy Meme Lord.”
      2nd Place: 25,000 $SHAFFY.
      3rd Place: 10,000 $SHAFFY.
      `,
      header: <Skeleton position="center" url="https://res.cloudinary.com/di4cxzart/image/upload/v1735835810/memecontest.png" />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Build Your Shaffy Backstory",
      date: "January 4-6, 2025",
      description: "Propose unique backstories or ideas for your personal Shaffy or the ShaffyNation lore. The best contributions will become part of our official story, with amazing rewards for the top storytellers!",
      largeDescription: `
  Help shape ShaffyNation’s lore!
  Every hero has an origin story, and now it’s your turn to give Shaffy or the ShaffyNation universe a unique backstory. This event is for storytellers, dreamers, and creative minds who want to leave their mark on the ShaffyNation project.
  
  Date: January 4-6, 2025
  
  How it works:
  
      1. Submit your ideas for Shaffy’s backstory, origin, or other elements of the ShaffyNation lore.
      2. Post your stories in the dedicated Discord channel: #shaffy-lore-ideas.
      3. The community and team will review submissions to pick the top three most creative and impactful entries.
  
  Rewards:
  
      1st Place: 10,000 $SHAFFY + exclusive role: “Shaffy Lore Builder.”
      2nd Place: 7,000 $SHAFFY.
      3rd Place: 5,000 $SHAFFY.
      `,
      header: <Skeleton customPosition={{ x: "10%", y: "20%" }} position="80%" url="https://res.cloudinary.com/di4cxzart/image/upload/v1735835824/backstory.png" />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "First Airdrop Express",
      date: "January 5, 2025",
      description: "The top 100 most active members in Discord (minimum Level 5) will receive a surprise airdrop of $SHAFFY tokens. Stay engaged, and don’t miss your chance to be rewarded for your participation and contributions!",
      largeDescription: `
    Stay active, stay rewarded!
    The First Airdrop Express is your chance to get rewarded just for being an active and engaged community member. We’re dropping $SHAFFY tokens directly to the top contributors in Discord, so don’t miss out!
    
    Date: January 5, 2025
    
    How it works:
    
        1. Engage in meaningful conversations, participate in events, and interact with fellow ShaffyNation members in Discord.
        2. Reach at least Level 5 in the Discord ranking system to qualify.
        3. The 100 most active members will be selected based on activity metrics during the week leading up to the event.
    
    Rewards:
    
        Each selected participant will receive 5,000 $SHAFFY tokens.
        `,
      header: <Skeleton url="https://res.cloudinary.com/di4cxzart/image/upload/v1735835839/expressairdrop.png" />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },    
    {
      title: "Scavenger Hunt Virtual",
      date: "January 6-7, 2025",
      description:
        "Embark on a thrilling scavenger hunt across the ShaffyNation Discord server and social media. Solve riddles, find hidden clues, and complete the ultimate challenge to claim your prize!",
      largeDescription: `
  Ready for an adventure?
  The ShaffyNation Scavenger Hunt challenges you to find hidden clues and solve riddles scattered across Discord and social media. It’s a fun, interactive way to explore the ShaffyNation universe and win amazing prizes!
  
  Date: January 6-7, 2025
  
  How it works:
  
      1. Clues will be posted in various places, such as Discord channels and social media accounts.
      2. Solve the riddles and find the answers to complete the hunt.
      3. The fastest and most accurate participants will win.
  
  Rewards:
  
      1st Place: 15,000 $SHAFFY + exclusive role: “Shaffy Detective.”
      2nd Place: 10,000 $SHAFFY.
      3rd Place: 10,000 $SHAFFY.
      `,
      header: <Skeleton customPosition={{ x: "10%", y: "35%" }} url="https://res.cloudinary.com/di4cxzart/image/upload/v1735835811/scavenger.png" />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "AMA: Ask Shaffy Anything",
      date: "January 7, 2025",
      description: "Join our AMA (Ask Me Anything) session in a dedicated Discord chat! Ask your burning questions and get answers from the team or the iconic 'Shaffy' about the future of ShaffyNation, the Member Pass, NFTs, and more!",
      largeDescription: `
    Ask us anything!
    Join our dedicated AMA (Ask Me Anything) chat session on Discord, where the ShaffyNation team (and Shaffy himself!) will answer all your burning questions. Learn about the future of ShaffyNation, upcoming features like the Member Pass and NFTs, and more.
    
    Date: January 7, 2025
    
    How it works:
    
        1. Enter the dedicated AMA channel on Discord during the scheduled time.
        2. Post your questions directly in the chat.
        3. The team will answer as many questions as possible during the session.
    
    Exclusive opportunity:
    Active participants will have the chance to earn special roles and be the first to hear about future developments.
      `,
      header: <Skeleton url="https://res.cloudinary.com/di4cxzart/image/upload/v1735836155/ama.png" />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Countdown Party",
      date: "January 9, 2025",
      description: "Get ready to celebrate the launch of ShaffyCoin with a virtual party like no other! Join us for live music, meme battles, and exciting last-minute announcements about the Member Pass and NFTs. Prizes await the most active participants!",
      largeDescription: `
    Celebrate with us!
    Get ready for an epic party to mark the countdown to the official launch of $SHAFFY. Join us for live music, fun activities, and exciting last-minute announcements about ShaffyNation.
    
    Date: January 9, 2025
    
    What to expect:
    
        1. Live DJ sets and music.
        2. Quick meme battles in real-time.
        3. Last-minute updates about the Member Pass and NFT collection.
        4. Community interaction and prizes for active participants.
    
    Rewards:
    
        5,000 $SHAFFY tokens and exclusive roles for activity winners.
      `,
      header: <Skeleton customPosition={{ x: "10%", y: "30%" }} url="https://res.cloudinary.com/di4cxzart/image/upload/v1735835764/theparty.png" />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Meme Contest #2",
      date: "January 10-12, 2025",
      description: "Double the memes, double the fun! Celebrate the launch of $SHAFFY with our second meme contest. Create launch-themed memes and showcase your creativity to the world. Amazing rewards await!",
      largeDescription: `
    Memes for the launch!
    The second Meme Contest is here to celebrate the official launch of $SHAFFY. Let’s make it bigger, better, and more viral than ever. Share your creativity and be part of this historic moment for ShaffyNation!
    
    Date: January 10-12, 2025
    
    How it works:
    
        1. Create memes centered around the $SHAFFY launch.
        2. Share them on social media or post them in the dedicated Discord channel.
        3. The top three memes will be selected based on creativity, humor, and community votes.
    
    Rewards:
    
        1st Place: 50,000 $SHAFFY + exclusive role: “Shaffy Meme Lord.”
        2nd Place: 25,000 $SHAFFY.
        3rd Place: 10,000 $SHAFFY.
      `,
      header: <Skeleton customPosition={{ x: "10%", y: "45%" }} url="https://res.cloudinary.com/di4cxzart/image/upload/v1735836619/MEMECONTESST2.png" />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Official Launch of $SHAFFY Token",
      date: "January 10, 2025",
      description: "The moment we’ve all been waiting for! ShaffyCoin officially goes live. Join us across all platforms for a massive campaign celebrating the launch. Be among the first to secure your $SHAFFY tokens and experience the beginning of something revolutionary.",
      largeDescription: `
    The moment we’ve all been waiting for!
    ShaffyNation is proud to officially launch $SHAFFY, the token that represents our dynamic community and vision for the future. Don’t miss this historic moment to be part of something revolutionary.
    
    Date: January 10, 2025
    
    What to expect:
    
        1. The launch announcement across all platforms.
        2. Updates to the official ShaffyNation website with new sections, including NFTs and Roadmap.
        3. Dedicated Discord channels for community support and Q&A.
    
    Join the revolution and be part of ShaffyNation from the very beginning!
      `,
      header: <Skeleton customPosition={{ x: "10%", y: "39%" }} url="https://res.cloudinary.com/di4cxzart/image/upload/v1735835813/%24shaffy.png" />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    
  ];
  