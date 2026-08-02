import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Paws & Tasks — Build better pet habits",
  description:
    "Join our pet parents creating calmer, happier routines. Get a free Welcome Home starter kit or a custom toolkit made for you and your pet.",
  metadataBase: new URL("https://pawsandtasks.com"),
  openGraph: {
    title: "Build better pet habits, five minutes at a time",
    description:
      "Get your free Welcome Home starter kit instantly or take the Pathfinder for a custom toolkit made for you and your pet.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
