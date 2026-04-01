import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import StoreProvider from "@/lib/redux/StoreProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nature Sumaq | Productos Naturales",
  description: "Shampoo y aceites naturales para tu bienestar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <StoreProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
          <WhatsAppFAB />
        </StoreProvider>
      </body>
    </html>
  );
}
