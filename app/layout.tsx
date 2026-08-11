import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nency Parmar | Full Stack Developer",
    template: "%s | Nency Parmar",
  },

  description:
    "Nency Parmar is a Full Stack Developer and B.Tech Computer Science student building modern web applications with MERN, Next.js, JavaScript, Java, Flutter and AI/ML technologies.",

  keywords: [
    "Nency Parmar",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Java Developer",
    "Flutter Developer",
    "AI ML Developer",
    "Software Developer",
    "B.Tech CSE",
  ],

  authors: [
    {
      name: "Nency Parmar",
    },
  ],

  creator: "Nency Parmar",

  openGraph: {
    title: "Nency Parmar | Full Stack Developer",
    description:
      "Portfolio of Nency Parmar — Full Stack Developer building modern web applications and software projects.",
    siteName: "Nency Parmar Portfolio",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nency Parmar | Full Stack Developer",
    description:
      "Full Stack Developer portfolio of Nency Parmar.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080512",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}