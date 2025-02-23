"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, Camera, SquareLibrary } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NewlyAddedBooks from "./components/NewlyAddedBooks";

export default function Home() {
  const blogPosts = [
    {
      imageSrc: "https://source.unsplash.com/600x400/?books,library",
      title: "10 Must-Read Books for Every Bibliophile",
      description:
        "Discover some of the best books that every book lover must read at least once in their lifetime.",
      icon: "BookOpen",
    },
    {
      imageSrc: "https://source.unsplash.com/600x400/?reading,study",
      title: "How to Develop a Daily Reading Habit",
      description:
        "Struggling to read regularly? Here are some practical tips to build a strong reading habit.",
      icon: "Timer",
    },
    {
      imageSrc: "https://source.unsplash.com/600x400/?ebooks,kindle",
      title: "Physical Books vs E-books: Which One is Better?",
      description:
        "An in-depth comparison between physical books and e-books to help you decide your preferred format.",
      icon: "Tablet",
    },
    {
      imageSrc: "https://source.unsplash.com/600x400/?bookstore,shopping",
      title: "Top 5 Websites to Buy Used Books at a Discount",
      description:
        "Save money by purchasing second-hand books from these trusted online platforms.",
      icon: "ShoppingCart",
    },
  ];

  const bannerImages = [
    "https://img.freepik.com/free-photo/library-with-books_1063-98.jpg?t=st=1740237027~exp=1740240627~hmac=f83aa9e1bfd7d8c904c4fa96ba455208956ef9308395e8d018151724bfabb653&w=1060",
    "https://cdn.stocksnap.io/img-thumbs/960w/botany-flowers_A4VGJM9LZH.jpg",
    "https://cdn.stocksnap.io/img-thumbs/280h/K4BCIJPVOE.jpg",
    "https://cdn.stocksnap.io/img-thumbs/280h/ANC5ACJ7V0.jpg",
  ];

  const sellSteps = [
    {
      step: "Step 1",
      title: "Post an Ad for Selling Used Books",
      description:
        "Create a listing with book details, condition, and a few images to attract buyers.",
      icon: "Upload",
    },
    {
      step: "Step 2",
      title: "Set the Selling Price",
      description:
        "Choose a competitive price based on the book’s condition and market value.",
      icon: "Tag",
    },
    {
      step: "Step 3",
      title: "Get Paid Directly to Your Bank or UPI",
      description:
        "Once your book is sold, receive payments securely in your preferred account.",
      icon: "Banknote",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <section className="relative h-[600px] w-full overflow-hidden">
        {bannerImages.map((image, index) => {
          return (
            <div
              className={`absolute inset-0 transition-opacity duration-200 ${
                currentImage === index ? "opacity-100" : "opacity-0"
              }`}
              key={index}
            >
              <Image
                src={image}
                alt="banner images"
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          );
        })}

        <div className="relative container mx-auto flex justify-center h-full items-center text-center p-4 flex-col">
          <h1 className="text-white md:text-6xl font-bold">
            Find, Sell & Rehome Books – Earn Cash Instantly
          </h1>
          <div className="flex items-center gap-4 mt-10 text-white">
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              <SquareLibrary className="h-4 w-4" /> Shop Used Books
            </Button>

            <Link href={"/book-sell"}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <BookOpen className="h-4 w-4" /> Sell Your Books
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <NewlyAddedBooks />

      <Button
        className="bg-blue-500 hover:bg-blue-600 text-white hover:text-white flex mx-auto py-4 px-6"
        variant={"ghost"}
      >
        <Link href={"/books"}>Explore All Books </Link>
      </Button>

      {/* How to sell section */}
      <section className="py-8 bg-gray-900">
        <div className="flex flex-col gap-2 py-4">
          <h1 className="text-2xl font-bold text-center text-yellow-400">
            Sell Your Old Books in Just 3 Simple Steps!
          </h1>
          <p className="text-center text-gray-300">
            Turn your pre-loved books into cash effortlessly with BookVault.
          </p>
        </div>
      </section>

      {/* How to buy section */}
    </main>
  );
}
