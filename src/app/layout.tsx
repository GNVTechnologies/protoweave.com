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
  title: "ProtoWeave - Automated Component Generation & AEM Integration",
  description: "Transform your designs into production-ready components with ProtoWeave. Automated component generation and seamless AEM integration for modern development workflows.",
  keywords: ["component generation", "AEM integration", "design automation", "web development"],
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
