import {
  Facebook,
  Instagram,
  TwitchIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-6 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-bold mb-4 text-lg">ABOUT BOOKVAULT</h3>
            <ul className="space-y-2">
              <li>
                <Link href={"/about"}>Who We Are</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact Us</Link>
              </li>
              <li>
                <Link href={"/faq"}>FAQs</Link>
              </li>
              <li>
                <Link href={"/support"}>Customer Support</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">USEFUL LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href={"/how-it-works"}>How BookVault Works?</Link>
              </li>
              <li>
                <Link href={"/sell-books"}>Sell Your Books</Link>
              </li>
              <li>
                <Link href={"/buy-books"}>Browse Books</Link>
              </li>
              <li>
                <Link href={"/blog"}>Blog & Articles</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">POLICIES & INFO</h3>
            <ul className="space-y-2">
              <li>
                <Link href={"/terms"}>Terms of Service</Link>
              </li>
              <li>
                <Link href={"/privacy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/refund-policy"}>Refund Policy</Link>
              </li>
              <li>
                <Link href={"/shipping"}>Shipping & Delivery</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">STAY CONNECTED</h3>
            <div className="flex items-center gap-3 cursor-pointer">
              <Facebook />
              <Instagram />
              <TwitchIcon />
              <TwitterIcon />
              <YoutubeIcon />
            </div>
            <p className="mt-4">
              <strong>BookVault</strong> is your trusted marketplace for buying
              and selling second-hand books. Find rare collections, save money,
              and give books a second life. Join our growing community today!
            </p>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400 text-sm">
          © {new Date().getFullYear()} BookVault. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
