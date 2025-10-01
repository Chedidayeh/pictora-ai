"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { FlipWords } from "./ui/flip-words";

export function Hero() {
  const words = ["time", "clients", "projects", "invoices", "cash flow"];
  return (
    <div
      className="min-h-screen w-full rounded-md flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-48 pb-20">

        <div className="z-10 flex items-center justify-center mb-3">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Freelancer Time Tracking & Invoicing</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-6">
          Track Time. Bill Faster. Get Paid.
        </h1>
        <div className="flex justify-center items-center mb-8">
          <div className="text-lg mx-auto font-normal text-neutral-500">
            Manage
            <FlipWords words={words} />
            — all in one place.
          </div>
        </div>
        
        <div className="flex justify-center text-center gap-2 mb-12">
          <InteractiveHoverButton>Start Tracking</InteractiveHoverButton>
          <InteractiveHoverButton>See Demo</InteractiveHoverButton>
        </div>

        {/* Screenshot Section */}
        <div className="relative max-w-5xl mx-auto mt-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm">
            {/* Browser mockup header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-neutral-800/50 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-neutral-700/50 rounded px-3 py-1 text-xs text-neutral-300">
                  app.trackify.dev
                </div>
              </div>
            </div>
            
            {/* Screenshot placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <span className="text-2xl">⏱️</span>
                </div>
                <p className="text-neutral-400 text-sm">Time Tracker & Invoices</p>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
        </div>

      </div>
      <Spotlight />

    </div>
  );
}
