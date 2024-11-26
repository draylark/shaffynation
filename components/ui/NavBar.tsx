'use client'

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandX,
  IconBrandDiscord,
  IconBrandInstagram,
  IconBrandTelegram
} from "@tabler/icons-react";
 
export function NavBar() {
  const links = [
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/shaffynation/",
    }, 
    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/shaffynation",
    },
    {
      title: "Discord",
      icon: (
        <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://discord.gg/YZ5aNxCm",
    },
    {
      title: "Telegram",
      icon: (
        <IconBrandTelegram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://t.me/shaffynation",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <FloatingDock
        mobileClassName="" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}