import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Paveace Technologies Limited",
  description:
    "Paveace Technologies Limited offers professional design, branding, printing, IT, CCTV, networking, solar energy, and software development services in Bida, Niger State Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
