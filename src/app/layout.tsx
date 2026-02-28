import type { Metadata } from "next";
import { Abyssinica_SIL, Iceland } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/Background";
import Navbar from "@/components/Navbar";

const abyssinicaSil = Abyssinica_SIL({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const iceland = Iceland({
  weight: "400",
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Arafa N — Builder | Maker | Manager",
  description:
    "Builder, maker, and developer passionate about crafting digital solutions and innovative technology. I blend creativity with technical expertise to solve real-world problems and empower communities.",
  authors: [{ name: "Arafa.N", url: "https://alvinn.me/" }],
  openGraph: {
    title: "Arafa N — Builder | Maker | Manager",
    description:
      "Builder, maker, and developer passionate about crafting digital solutions and innovative technology. I blend creativity with technical expertise to solve real-world problems and empower communities.",
    siteName: "Arafa N — Builder | Maker | Manager",
    url: "https://alvinn.me/",
    type: "website",
    images: [
      {
        url: "/assets/og.webp",
        width: 1200,
        height: 630,
        alt: "Arafa N Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arafa N — Builder | Maker | Manager",
    description:
      "Builder, maker, and developer passionate about crafting digital solutions and innovative technology. I blend creativity with technical expertise to solve real-world problems and empower communities.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
  },
  metadataBase: new URL("https://alvinn.me/"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${abyssinicaSil.variable} ${iceland.variable} font-body antialiased bg-background`}
      >
        <div className="fixed inset-0 pointer-events-none -z-10">
          <Background position={-1} />
          <Background position={0} />
          <Background position={1} />
          <Background position={2} />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
