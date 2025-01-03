import Audio from "@/components/Audio/Audio";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://sridhar-portfolio.com"),
  title: "Sridhar | Full Stack Developer",
  description:
    "Experienced Full Stack Developer specializing in modern web technologies. Connect with me on LinkedIn and Instagram for professional updates.",
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
  ],
  authors: [
    {
      name: "Sridhar",
      url: "https://www.linkedin.com/in/e-sridhar-1720721a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
  creator: "Sridhar",
  publisher: "Sridhar",
  alternates: {
    canonical: "https://sridhar-portfolio.com",
  },
  openGraph: {
    title: "Sridhar | Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in modern web technologies. Follow me on Instagram and connect on LinkedIn.",
    url: "https://sridhar-portfolio.com",
    siteName: "Sridhar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sridhar - Full Stack Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        suppressHydrationWarning
        className="bg-alt-black text-white selection:bg-white selection:text-black cursor-none antialiased"
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <Toaster />
          <Audio />
        </SmoothScroll>
      </body>
    </html>
  );
}
