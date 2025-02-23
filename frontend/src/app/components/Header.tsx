"use client";

import { RootState } from "@/store/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BookLock,
  ChevronRight,
  FileTerminal,
  Heart,
  HelpCircle,
  Lock,
  LockIcon,
  LogOut,
  Menu,
  Package,
  PiggyBank,
  Search,
  ShoppingCart,
  User,
  User2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginDialog } from "@/store/slices/userSlice";

const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const user = {
    profilePicture: "",
    name: "rohitbisht",
    email: "rohitbisht@gmail.com",
  };
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoginOpen } = useSelector((state: RootState) => state.user);

  const userPlaceholder = "";

  const handleLoginClick = () => {
    dispatch(toggleLoginDialog());
    setIsDropDownOpen(false);
  };
  const handleLogoutClick = () => {};

  const handleProtectioNavigation = (href: string) => {
    if (user) {
      router.push(href);
      setIsDropDownOpen(false);
    } else {
      dispatch(toggleLoginDialog());
      setIsDropDownOpen(false);
    }
  };

  const menuItems = [
    ...(user && user
      ? [
          {
            href: "account/profile",
            content: (
              <div className="flex items-center gap-4">
                <Avatar className="w-8 h-8 rounded-full">
                  {user?.profilePicture ? (
                    <AvatarImage src="" alt="user image" className="h-4 w-4" />
                  ) : userPlaceholder ? (
                    <AvatarFallback>{userPlaceholder}</AvatarFallback>
                  ) : (
                    <User className="" />
                  )}
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-semibold">{user.name}</span>
                  <span className="text-xs text-gray-500">{user.email}</span>
                </div>
              </div>
            ),
          },
        ]
      : [
          {
            icon: <LockIcon className="h-5 w-5" />,
            label: "Login / Sign up",
            onclick: handleLoginClick,
          },
        ]),

    {
      icon: <User className="h-5 w-5" />,
      label: "My Profile",
      onclick: () => handleProtectioNavigation("/account/profile"),
    },
    {
      icon: <Package className="h-5 w-5" />,
      label: "My Orders",
      onclick: () => handleProtectioNavigation("/account/orders"),
    },
    {
      icon: <PiggyBank className="h-5 w-5" />,
      label: "My Selling Orders",
      onclick: () => handleProtectioNavigation("/account/selling-products"),
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      label: "Cart",
      onclick: () => handleProtectioNavigation("/checkout/cart"),
    },
    {
      icon: <Heart className="h-5 w-5" />,
      label: "My Wishlist",
      onclick: () => handleProtectioNavigation("/account/wishlist"),
    },
    {
      icon: <User2 className="h-5 w-5" />,
      label: "About us",
      href: "/about-us",
    },
    {
      icon: <FileTerminal className="h-5 w-5" />,
      label: "Term & Use",
      href: "/terms-of-use",
    },
    {
      icon: <BookLock className="h-5 w-5" />,
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      icon: <HelpCircle className="h-5 w-5" />,
      label: "Help",
      href: "/how-it-works",
    },
    ...(user && [
      {
        icon: <LogOut className="h-5 w-5" />,
        label: "Logout",
        onclick: handleLogoutClick,
      },
    ]),
  ];

  const MenuItems = ({ className = "" }) => {
    return (
      <div className={className}>
        {menuItems.map((item, index) =>
          item?.href ? (
            <Link
              key={index}
              className="flex items-center gap-3 text-sm py-2 px-4 rounded-lg hover:bg-gray-300"
              href={item.href}
              onClick={() => setIsDropDownOpen(true)}
            >
              {item.icon}
              <span>{item.label}</span>
              {item?.content && <div className="mt-1">{item?.content}</div>}
              <ChevronRight className="h-4 w-4 ml-auto" />
            </Link>
          ) : (
            <Button
              key={index}
              className="w-full flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-300"
              onClick={item.onclick}
              variant={"ghost"}
            >
              {item.icon}
              <span>{item.label}</span>
              <ChevronRight className="h-4 w-4 ml-auto" />
            </Button>
          )
        )}
      </div>
    );
  };

  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      {/* Desktop View */}
      <div className="container w-[80%] mx-auto hidden lg:flex items-center justify-between p-4">
        <Link href={"/"} className="flex items-center">
          {/* <Image
            src={""}
            width={450}
            height={100}
            alt="desktop logo"
            className=""
          /> */}
          Book Vault
        </Link>

        <div className="flex flex-1 items-center justify-between max-w-xl px-4 gap-4 ">
          <div className="relative w-full">
            <Input
              type="text"
              className="w-full pr-10"
              placeholder="Book Name / Author / Publisher"
            />
            <Button
              className="absolute right-0 top-0"
              size="icon"
              variant={"ghost"}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href={"/book-sell"}>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Sell Used Books
            </Button>
          </Link>

          <DropdownMenu open={isDropDownOpen} onOpenChange={setIsDropDownOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"}>
                <Avatar className="w-8 h-8 rounded-full">
                  {user?.profilePicture ? (
                    <AvatarImage src="" alt="user image" />
                  ) : userPlaceholder ? (
                    <AvatarFallback>CN</AvatarFallback>
                  ) : (
                    <User className="mt-2 ml-2" />
                  )}
                </Avatar>
                My Account
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <MenuItems />
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={"/checkout/cart"}>
            <div className="relative">
              <Button className="relative" variant="ghost">
                <ShoppingCart className="w-4 h-4" />
                Cart
              </Button>
              {user && (
                <span className="absolute left-6 bg-red-600 px-1 text-white rounded-full text-xs">
                  3
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile View */}
      <div className="container mx-auto flex lg:hidden items-center justify-center p-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="" size={"icon"} variant={"ghost"}>
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className="w-80 p-0">
            <SheetHeader>
              <SheetTitle className="sr-only"></SheetTitle>
            </SheetHeader>
            <Link href="/">
              <div className="text-center font-bold text-2xl py-2">
                BookVault
              </div>
            </Link>
            <MenuItems className="py-2" />
          </SheetContent>
        </Sheet>

        <div className="text-center font-semibold  py-2">BookVault</div>
        <div className="flex flex-1 items-center justify-between max-w-xl px-4 gap-4 ">
          <div className="relative w-full">
            <Input
              type="text"
              className="w-full pr-10"
              placeholder="Search Books"
            />
            <Button
              className="absolute right-0 top-0"
              size="icon"
              variant={"ghost"}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Link href={"/checkout/cart"}>
          <div className="relative">
            <Button className="relative" variant="ghost">
              Cart
            </Button>
            {user && (
              <span className="absolute left-6 bg-red-600 px-1 text-white rounded-full text-xs">
                3
              </span>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
