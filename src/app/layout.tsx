import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Yash Dubbalwar — Full-Stack Developer | MERN & Django Expert",
  description:
    "Full-Stack Developer with 2+ years shipping production systems. Skilled in Django, Golang, React, Docker, Kubernetes, and GCP. Published researcher.",
  authors: [{ name: "Yash Dubbalwar", url: "https://github.com/yash717" }],
  openGraph: {
    title: "Yash Dubbalwar — Full-Stack Developer | MERN & Django Expert",
    description:
      "Full-Stack Developer with 2+ years shipping production systems. Skilled in Django, Golang, React, Docker, Kubernetes, and GCP.",
    siteName: "Yash Dubbalwar Portfolio",
    url: "https://github.com/yash717",
    type: "website",
    images: [
      {
        url: "/hero-profile.png",
        width: 1200,
        height: 630,
        alt: "Yash Dubbalwar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Dubbalwar — Full-Stack Developer",
    description:
      "Full-Stack Developer with 2+ years shipping production systems. Skilled in Django, Golang, React, Docker, Kubernetes, and GCP.",
    images: ["/hero-profile.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  metadataBase: new URL("https://github.com/yash717"),
};

const nougat = localFont({
  src: "../components/fonts/Nougat.ttf",
  variable: "--font-nougat",
  display: "swap",
});

const payback = localFont({
  src: "../components/fonts/PayBack.ttf",
  variable: "--font-payback",
  display: "swap",
});

const leaguespartan = localFont({
  src: "../components/fonts/LeagueSpartan.ttf",
  variable: "--font-leaguespartan",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nougat.variable} ${payback.variable} ${leaguespartan.variable} font-leaguespartan antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="mx-auto flex-1 px-5 pb-10">
          <ScrollProgress className="bg-primary" />
          {children}
        </main>
        <Loader />
      </body>
    </html>
  );
}
