
import "@/app/globals.css";

import {  useTranslations } from "next-intl";
import { notFound } from "next/navigation";

import { Roboto_Condensed } from "next/font/google";
import { Staatliches } from "next/font/google";


import { Toaster } from "react-hot-toast";


import { Analytics } from "@vercel/analytics/react";

import { Metadata } from 'next';


const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-staatliches",
});

const robotoCondensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "Tonhain Kollektiv",
  description:
    "A new chamber music society in Berlin",
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    googleBot: {
      index: true
    }
  }
};


export type MenuLink = {
  title: string;
  path: string;
  subLinks?: SubLink[]
}

export type SubLink = {
  title: string;
  path: string;
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  const { locale } = params;





  if (params.locale !== locale) {
    notFound();
  }

  
  return (
    <html lang={locale}>
      <body
        className={`${robotoCondensed.variable} ${staatliches.variable} font-sans font-normal bg-black text-white`}
      >
       

        <div>{children}</div>
        

      </body>
    </html>
  );
}
