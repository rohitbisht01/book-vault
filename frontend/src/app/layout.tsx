import type { Metadata } from "next";
import "./globals.css";
import { Recursive } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LayoutWrapper from "./LayoutWrapper";

const recursive = Recursive({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BookVault - Discover, Buy & Read Books",
  description:
    "BookVault is your ultimate online library where you can explore, purchase, and read a vast collection of books across various genres. Start your reading journey today!",
  keywords:
    "books, buy books, read online, e-books, book collection, online bookstore, BookVault",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${recursive.className} `}>
        <LayoutWrapper>
          <Header />
          {children}
          <Footer />
        </LayoutWrapper>
      </body>
    </html>
  );
}
