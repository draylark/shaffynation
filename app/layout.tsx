import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
// const url = process.env.NEXT_URL;

export const metadata: Metadata = {
  title: "ShaffyNation - Crypto, Humor, Decentralization.",
  description:
    "Join ShaffyNation, the community where humor and cryptocurrencies converge. Discover $SHAFFY, a memecoin celebrating decentralization and community impact.",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://www.shaffynation.com",
    title: "ShaffyNation - Crypto, Humor, Decentralization.",
    description:
      "Explore ShaffyNation, a vibrant community where memes and decentralization are the foundation of a crypto revolution with $SHAFFY.",
    images: [
      {
        url: `https://www.shaffynation.com/logo.png`,
        width: 1200,
        height: 630,
        alt: "ShaffyNation OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShaffyNation - Crypto, Humor, Decentralization.",
    description:
      "Explore ShaffyNation, a vibrant community where memes and decentralization are the foundation of a crypto revolution with $SHAFFY.",
    images: [`https://www.shaffynation.com/logo.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/sicon.png" sizes="48x48" type="image/png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
