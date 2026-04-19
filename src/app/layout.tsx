import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav, Footer } from "@/components/ui/nav-footer";
import { ThemeProvider } from "@/lib/theme";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ProtoWeave - Asset Intelligence, Content Governance, and Personalization",
  description: "Automate metadata and asset intelligence, streamline content QA and governance, and optimize personalization workflows across CMS platforms.",
  keywords: ["asset intelligence", "metadata automation", "content governance", "personalization"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} min-h-screen bg-background font-sans antialiased selection:bg-primary/20`}>
        <ThemeProvider>
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
