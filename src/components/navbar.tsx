"use client";
import Link from "next/link";
import { SparklesIcon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

interface NavItem {
  name: string;
  href: string;
}

export const HeroHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Trigger collapse after 50px of scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  const navItems: NavItem[] = [
    { name: "How it Works", href: "#guide" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl transition-all duration-300 ease-in-out ${
        isScrolled ? "py-1" : "py-3"
      }`}
    >
      <div
        className={`backdrop-blur-2xl border border-white/20 rounded-full px-6 py-2 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "backdrop-blur-3xl" : "backdrop-blur-2xl"
        }`}
      >
        <Link
          href="/"
          className={`flex items-center font-bold gap-2 transition-all duration-300 ${
            isScrolled ? "text-base" : "text-lg"
          }`}
          aria-label="Go to homepage"
        >
          <SparklesIcon className={`w-5 ${isScrolled ? "scale-90" : "scale-100"}`} />
          Pictora AI
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-white font-medium transition-all duration-300 hover:text-cyan-400 ${
                isScrolled ? "text-sm" : "text-base"
              }`}
              aria-label={`Navigate to ${item.name}`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className={`rounded-full hover:bg-cyan-500/10 transition ${
              isScrolled ? "scale-90 text-sm" : "scale-100 text-base"
            }`}
            aria-label="Log in to your account"
          >
            Login
          </Button>
          <Button
            className={`rounded-full bg-cyan-500 hover:bg-cyan-600 transition ${
              isScrolled ? "scale-90 text-sm" : "scale-100 text-base"
            }`}
            aria-label="Sign up for a new account"
          >
            Sign Up
          </Button>
          <button
            className={`md:hidden p-2 rounded-full hover:bg-white/10 transition ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 mt-3 backdrop-blur-2xl border border-white/20 rounded-2xl px-6 py-4 flex flex-col gap-4 text-center animate-in fade-in slide-in-from-top-2 ${
            isScrolled ? "text-sm" : "text-base"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white font-medium transition-all duration-300 hover:text-cyan-400"
              aria-label={`Navigate to ${item.name}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};