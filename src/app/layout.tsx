import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/shared/lib/react-query";
import { TooltipProvider } from "@/shared/components/ui/tooltip";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AURA - AI Retail Assistant",
  description:
    "Intelligent AI-powered retail assistant for optimizing inventory and business decisions.",
  icons: {
    icon: "/assets/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans leading-[1.4] tracking-normal">
        <ReactQueryProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
