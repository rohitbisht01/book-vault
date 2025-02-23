"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Banknote,
  BookOpen,
  Camera,
  ChevronRight,
  CreditCard,
  Package,
  ShoppingCart,
  SquareLibrary,
  Tablet,
  Tag,
  Timer,
  Upload,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NewlyAddedBooks from "./components/NewlyAddedBooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const blogPosts = [
    {
      imageSrc: "https://cdn.stocksnap.io/img-thumbs/280h/K4BCIJPVOE.jpg",
      title: "10 Must-Read Books for Every Bibliophile",
      description:
        "Discover some of the best books that every book lover must read at least once in their lifetime.",
      icon: <BookOpen />,
    },
    {
      imageSrc: "https://cdn.stocksnap.io/img-thumbs/280h/ANC5ACJ7V0.jpg",
      title: "How to Develop a Daily Reading Habit",
      description:
        "Struggling to read regularly? Here are some practical tips to build a strong reading habit.",
      icon: <Timer />,
    },
    {
      imageSrc:
        "https://cdn.stocksnap.io/img-thumbs/960w/botany-flowers_A4VGJM9LZH.jpg",
      title: "Physical Books vs E-books: Which One is Better?",
      description:
        "An in-depth comparison between physical books and e-books to help you decide your preferred format.",
      icon: <Tablet />,
    },
    {
      imageSrc: "https://cdn.stocksnap.io/img-thumbs/280h/ANC5ACJ7V0.jpg",
      title: "Top 5 Websites to Buy Used Books at a Discount",
      description:
        "Save money by purchasing second-hand books from these trusted online platforms.",
      icon: <ShoppingCart />,
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
        "Create a listing with book details, condition, and a few images to attract buyers. ",
      icon: <Upload />,
    },
    {
      step: "Step 2",
      title: "Set the Selling Price",
      description:
        "Choose a competitive price based on the book’s condition and market value.",
      icon: <Tag />,
    },
    {
      step: "Step 3",
      title: "Get Paid Directly to Your Bank or UPI",
      description:
        "Once your book is sold, receive payments securely in your preferred account.",
      icon: <Banknote />,
    },
  ];

  const buySteps = [
    {
      step: "Step 1",
      title: "Browse and Choose Your Books",
      description:
        "Explore thousands of pre-loved books and pick your favorites.",
      icon: <ShoppingCart />,
    },
    {
      step: "Step 2",
      title: "Securely Place Your Order",
      description: "Proceed to checkout and complete your payment with ease.",
      icon: <CreditCard />,
    },
    {
      step: "Step 3",
      title: "Get Books Delivered to Your Doorstep",
      description:
        "Sit back and relax—your books will arrive at your doorstep soon.",
      icon: <Package />,
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
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 text-white">
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
      <section className="py-8 bg-gray-800">
        <div className="flex flex-col gap-2 py-4 container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center text-yellow-400">
            Sell Your Old Books in Just 3 Simple Steps!
          </h1>
          <p className="text-center text-gray-300">
            Turn your pre-loved books into cash effortlessly with BookVault.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 relative my-8">
          {sellSteps.map((step, index) => (
            <div key={index} className="flex flex-col h-full relative">
              <div className="flex flex-grow flex-col text-center shadow-lg bg-white h-full rounded-md relative p-8">
                <div className="absolute top-3 left-3 bg-yellow-500 text-xs rounded-full px-2 py-1">
                  {step.step}
                </div>
                <div className="w-16 h-16 bg-primary/10 mx-auto rounded-full flex items-center justify-center my-3">
                  {step.icon}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to buy section */}
      <section className="py-8 bg-gray-900">
        <div className="flex flex-col gap-2 py-4 text-center container mx-auto px-4">
          <h1 className="text-2xl font-bold text-yellow-400">
            How to Buy second hand books online on BookVault?
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Browse a wide collection, compare prices, and grab the best deals.
            Add books to your cart, checkout easily, and get them delivered to
            your doorstep—affordable and hassle-free!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 relative my-8">
          {buySteps.map((step, index) => (
            <div key={index} className="flex flex-col h-full relative">
              <div className="flex flex-grow flex-col text-center shadow-lg bg-white h-full rounded-md relative p-8">
                <div className="absolute top-3 left-3 bg-yellow-500 text-xs rounded-full px-2 py-1">
                  {step.step}
                </div>
                <div className="w-16 h-16 bg-primary/10 mx-auto rounded-full flex items-center justify-center my-3">
                  {step.icon}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Read from our blog */}
      <section className="py-8 bg-gray-100">
        <h1 className="text-2xl text-center font-bold text-yellow-400 container mx-auto px-4">
          Read from our Blog
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 relative my-8">
          {blogPosts.map((blog, index) => (
            <Card key={index} className="h-full flex flex-col overflow-hidden">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="relative h-48">
                  <Image
                    src={blog.imageSrc}
                    alt="blog"
                    className="transition-transform duration-300 hover:scale-105"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col p-6 gap-4">
                  <div className="flex gap-2 items-center">
                    <div className="">{blog.icon}</div>
                    <h2 className="font-semibold text-lg">{blog.title}</h2>
                  </div>
                  <p className="">{blog.description}</p>
                  <div className="flex items-center justify-center gap-2 cursor-pointer mt-4 font-semibold">
                    Read More <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
