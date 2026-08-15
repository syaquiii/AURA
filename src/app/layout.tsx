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
  title: "Aura Design System",
  description: "Aura Next.js application with Shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans leading-[1.4] tracking-normal">
        <ReactQueryProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
