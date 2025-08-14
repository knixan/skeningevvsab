import "./globals.css";
import { Roboto } from "next/font/google";
import React from "react";

export const metadata = {
  title: "Min app",
  icons: {
    icon: "/favicon.png",
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
