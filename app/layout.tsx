import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DALSET BILVERKSTED | Ingebrigt Dalset",
  description: "Dalset Bilverksted - Over 40 års erfaring med traktorreparasjon, landbruksmekanikk og sveis. Servicepunkt for Orkel og Lilleseth kramp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

