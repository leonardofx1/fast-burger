import type { Metadata } from "next";
import {Roboto}from 'next/font/google'
import "../styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import ContextProvider from "@/components/Providers/ContextProvider";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
 

export const metadata: Metadata = {
  title: "fastBurger",
  description: "lanches de qualidade e preço baixo",
};

export default function RootLayout({
  children,session
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={roboto.className}>
  
      <body >
      <SessionProvider session={session}>
      <Header />
      <ContextProvider>  {children}</ContextProvider>
        <Footer />
      </SessionProvider>
        </body>
    </html>
  );
}
