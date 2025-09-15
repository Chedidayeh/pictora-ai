"use client"
import React, { useState } from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { SparklesText } from "./magicui/sparkles-text";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
    Sparkles,
    Gift,
    Star,
    Crown,
    Building,
    Check,
    Zap,
    Monitor,
    Shield
} from "lucide-react";

const pricingPlans = [
    {
        name: "Free Tier",
        monthlyPrice: "$0",
        annualPrice: "$0",
        period: "forever",
        credits: "10 free credits",
        description: "Perfect for trying out Pictora AI",
        icon: Gift,
        badge: "Best for beginners",
        features: [
            "10 free credits on signup",
            "Standard resolution images",
            "Basic video generation",
            "Personal library access",
            "Community support"
        ],
        buttonText: "Get Started Free",
        popular: false,
        gradient: "from-gray-500 to-gray-600"
    },
    {
        name: "Starter Plan",
        monthlyPrice: "$9",
        annualPrice: "$7",
        period: "month",
        credits: "100 credits",
        description: "Ideal for hobbyists and small projects",
        icon: Star,
        badge: "Most Popular",
        features: [
            "100 credits per month",
            "Standard resolution",
            "Image & video generation",
            "Personal library",
            "Email support",
            "Cancel anytime"
        ],
        buttonText: "Choose Starter",
        popular: true,
        gradient: "from-blue-500 to-blue-600"
    },
    {
        name: "Pro Plan",
        monthlyPrice: "$29",
        annualPrice: "$23",
        period: "month",
        credits: "500 credits",
        description: "For professionals and content creators",
        icon: Crown,
        badge: "Best Value",
        features: [
            "500 credits per month",
            "High resolution images",
            "Priority generation",
            "Advanced video tools",
            "Priority support",
            "Commercial use rights"
        ],
        buttonText: "Go Pro",
        popular: false,
        gradient: "from-purple-500 to-purple-600"
    },
    {
        name: "Business Plan",
        monthlyPrice: "$99",
        annualPrice: "$79",
        period: "month",
        credits: "2,500 credits",
        description: "For teams and enterprises",
        icon: Building,
        badge: "Enterprise",
        features: [
            "2,500 credits per month",
            "Ultra HD resolution",
            "Commercial license",
            "API access",
            "Team collaboration",
            "Dedicated support",
            "Custom integrations"
        ],
        buttonText: "Contact Sales",
        popular: false,
        gradient: "from-emerald-500 to-emerald-600"
    }
];

export function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <div className="mt-32 px-4 md:px-6 lg:px-8 relative" id="pricing">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
            
            <div className="relative z-10 space-y-4 text-center py-8">
                <div className="flex items-center justify-center">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="flex items-center space-x-2"
                    >
                        <Sparkles className="h-4 w-4" />
                        <span className="font-semibold">Pricing</span>
                    </HoverBorderGradient>
                </div>
                <div className="flex items-center justify-center">
                    <SparklesText>Simple, Transparent Pricing</SparklesText>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Choose the perfect plan for your creative needs. Start free and upgrade as you grow.
                </p>
            </div>

            {/* Pricing Toggle */}
            <div className="relative z-10 flex flex-col items-center justify-center mb-12">
                {/* Savings indicator */}
                    <div className="mb-3 inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                        Save 20% on Annual
                    </div>

                <div className="relative inline-flex items-center p-1 bg-muted/50 rounded-full border">
                    {/* Active background */}
                    <div
                        className={`absolute top-1 bottom-1 w-[calc(50%-5px)] bg-white dark:bg-gray-800 rounded-full shadow-sm transition-all duration-200 ease-out ${isAnnual ? 'translate-x-[calc(100%+4px)]' : 'translate-x-0'
                            }`}
                    />

                    <button
                        onClick={() => setIsAnnual(false)}
                        className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 ${!isAnnual
                                ? 'text-gray-900 dark:text-gray-100'
                                : 'text-gray-500 dark:text-gray-400'
                            }`}
                    >
                        Monthly
                    </button>

                    <button
                        onClick={() => setIsAnnual(true)}
                        className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 ${isAnnual
                                ? 'text-gray-900 dark:text-gray-100'
                                : 'text-gray-500 dark:text-gray-400'
                            }`}
                    >
                        Annual
                    </button>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {pricingPlans.map((plan, index) => (
                    <Card
                        key={index}
                        className={`group relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${plan.popular
                                ? 'border-primary shadow-lg scale-105 bg-gradient-to-br from-primary/5 to-primary/10'
                                : 'border-border hover:border-primary/20 hover:shadow-lg bg-gradient-to-br from-background to-muted/20'
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute left-1/2 transform -translate-x-1/2">
                                <Badge className="bg-primary text-primary-foreground px-4 py-1">
                                    {plan.badge}
                                </Badge>
                            </div>
                        )}

                        <CardHeader className="text-center pb-6 pt-8">
                            <div className="flex items-center justify-center mb-4">
                                <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${plan.gradient} text-white`}>
                                    <plan.icon className="h-6 w-6" />
                                </div>
                            </div>

                            <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                            <CardDescription className="mb-4">{plan.description}</CardDescription>

                            <div className="space-y-2">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-4xl font-bold">
                                        {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                                    </span>
                                    <span className="text-muted-foreground">/{plan.period}</span>
                                </div>
                                <div className="text-sm font-medium text-primary">
                                    {plan.credits}
                                </div>
                                {isAnnual && plan.monthlyPrice !== plan.annualPrice && (
                                    <div className="text-xs text-muted-foreground">
                                        Billed annually • Save ${parseInt(plan.monthlyPrice.slice(1)) - parseInt(plan.annualPrice.slice(1))}/month
                                    </div>
                                )}
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            <ul className="space-y-3">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-3 text-sm">
                                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full ${plan.popular
                                        ? 'bg-primary hover:bg-primary/90'
                                        : 'bg-secondary hover:bg-secondary/80'
                                    }`}
                                variant={plan.popular ? "default" : "secondary"}
                            >
                                {plan.buttonText}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Additional Info */}
            <div className="relative z-10 mt-16 pb-16 text-center space-y-8">

                <div className="text-center">
                    <p className="text-muted-foreground mb-4">
                        Need a custom plan? Contact our sales team for enterprise solutions.
                    </p>
                    <Button variant="outline" className="mr-4">
                        Contact Sales
                    </Button>
                    <Button variant="ghost">
                        View Credits Pricing
                    </Button>
                </div>
            </div>
        </div>
    );
}
