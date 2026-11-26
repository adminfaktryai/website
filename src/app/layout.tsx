import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faktry AI — AI Operations Agents Platform",
  description:
    "Faktry AI catches silent revenue leaks, manages all your operations agents from one board, and builds custom agents tailored to your business.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const reqHeaders = await headers();
  const nonce = reqHeaders.get("x-nonce") ?? undefined;

  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
      data-csp-nonce={nonce ? "active" : "static"}
    >
      <body className="font-sans bg-white text-slate-950 selection:bg-emerald-100 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
