import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../shared/styles/globals.css";
import '../shared/styles/main.scss';
import { Providers } from "@/shared/Providers/Providers";

const open_sans = Open_Sans({
  weight: ['300','400','500','600','700','800'],
  style: ['normal'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" >
      <body
        className={`${open_sans.className} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
