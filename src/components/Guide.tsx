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
            title: "Step 1: Add Client & Project",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Create a client, then add a project with your preferred billing method (hourly or fixed). Set your hourly rate or project fee and currency.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">New Client</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">New Project</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Hourly / Fixed</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Rate & Currency</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Step 2: Track Time Effortlessly",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Use the built-in timer for tasks or add manual time entries. Edit or delete logs anytime. View your daily, weekly, and monthly timesheets.
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ⏱️ One-click start/stop timer
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ➕ Add manual time entries
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✏️ Edit and delete logs
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            📅 Timesheets: day, week, month
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Start Timer</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Manual Entry</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Edit Logs</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">View Timesheet</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Step 3: Create & Send Invoices",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Generate invoices from time logs or add custom items. Export as PDF, send via email, and track status: Draft, Sent, Paid, or Overdue.
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            🧾 Auto-calc from time & rates
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            📤 Email to client
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            🖨️ Export PDF
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Track Paid / Overdue
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">New Invoice</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Add Items</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-lime-500 to-green-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Export PDF</span>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center md:h-44 lg:h-60">
                            <span className="text-white font-semibold text-sm">Mark Paid</span>
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
                        <span className="font-semibold">How it Works</span>
                    </HoverBorderGradient>
                </div>
                <div className="flex items-center justify-center">
                    <SparklesText>From Time to Invoice in Minutes</SparklesText>
                </div>
            </div>

            <div className="relative z-10 w-full overflow-clip">
                <Timeline data={data} />
            </div>
        </div>
    );
}
