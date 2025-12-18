import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CHESN Warji Branch | Community Health Education & Sanitation Network",
  description: "Promoting community health education, sanitation, and well-being in Warji LGA, Bauchi State, Nigeria. Join us in building a healthier community.",
  keywords: "CHESN, community health, sanitation, Warji, Bauchi, Nigeria, health education, immunization, family planning",
  openGraph: {
    title: "CHESN Warji Branch",
    description: "Building a healthy, informed, and empowered community",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main style={{ minHeight: '100vh' }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
