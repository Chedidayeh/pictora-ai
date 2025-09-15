"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Sparkles } from "lucide-react";
import { SparklesText } from "./magicui/sparkles-text";

export function Guide() {
    const data = [
        {
            title: "Step 1: Choose Your AI Model",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Select from powerful AI models including ByteDance's text-to-image, image-to-video, and other cutting-edge creative AI tools. No technical setup required.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Text-to-Image</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Image-to-Video</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Style Transfer</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Image Upscale</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Step 2: Simple Interface",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Our clean, intuitive interface eliminates the complexity of raw APIs and coding. Just input your creative vision and let our AI do the heavy lifting.
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✨ Drag & drop file uploads
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            🎨 Natural language prompts
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ⚡ One-click processing
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            🎯 Real-time preview
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Upload Area</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Prompt Input</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Settings Panel</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Generate Button</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Step 3: Creative Output",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Get professional-quality results instantly. Download, share, or iterate on your creations with advanced editing tools.
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            🖼️ High-resolution downloads
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            📱 Multiple format support
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            🔄 Iterative refinement
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            💾 Cloud storage integration
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Generated Art</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Video Output</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-lime-500 to-green-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Style Variants</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Download Options</span>
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="relative" id="guide">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
            
            <div className="relative z-10 space-y-2 py-12">
                <div className="flex items-center justify-center">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className=" flex items-center space-x-2"
                    >
                                                <Sparkles className="h-4 w-4" />
                        <span className="font-semibold">Guide</span>
                    </HoverBorderGradient>
                </div>
                <div className="flex items-center justify-center">
                    <SparklesText>It works like Magic</SparklesText>
                </div>
            </div>

            <div className="relative z-10 w-full overflow-clip">
                <Timeline data={data} />
            </div>
        </div>
    );
}
