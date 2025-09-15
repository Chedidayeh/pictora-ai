"use client"
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { SparklesText } from "./magicui/sparkles-text";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
    Sparkles, 
    Star,
    Quote,
    Users,
    Zap,
    Heart,
    ThumbsUp,
    Shield,
    Lightbulb,
    Image
} from "lucide-react";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Content Creator",
        avatar: "SC",
        rating: 5,
        text: "Pictora AI has completely transformed my content creation workflow. I can generate stunning visuals in minutes that used to take hours. The quality is incredible!",
        highlight: "Transformed my workflow"
    },
    {
        name: "Marcus Rodriguez",
        role: "Marketing Director",
        avatar: "MR",
        rating: 5,
        text: "The AI video generation feature is a game-changer for our social media campaigns. We've seen a 300% increase in engagement since using Pictora AI.",
        highlight: "300% engagement increase"
    },
    {
        name: "Emily Watson",
        role: "Freelance Designer",
        avatar: "EW",
        rating: 5,
        text: "As a designer, I'm blown away by the creativity and quality of images Pictora AI produces. It's like having a creative partner that never sleeps.",
        highlight: "Creative partner"
    },
    {
        name: "David Kim",
        role: "Startup Founder",
        avatar: "DK",
        rating: 5,
        text: "The pricing is incredibly fair for what you get. We've saved thousands on stock photos and design work. The ROI is phenomenal.",
        highlight: "Phenomenal ROI"
    },
    {
        name: "Lisa Thompson",
        role: "E-commerce Owner",
        avatar: "LT",
        rating: 5,
        text: "Generating product mockups and lifestyle images has never been easier. Our conversion rates have improved significantly since we started using Pictora AI.",
        highlight: "Improved conversions"
    },
    {
        name: "Alex Johnson",
        role: "Agency Owner",
        avatar: "AJ",
        rating: 5,
        text: "The API integration is seamless, and the team support is outstanding. Pictora AI has become an essential tool in our client work.",
        highlight: "Essential tool"
    }
];

const stats = [
    {
        icon: Users,
        value: "50K+",
        label: "Happy Users",
        iconColor: "text-blue-500"
    },
    {
        icon: Image,
        value: "1M+",
        label: "Images Generated",
        iconColor: "text-purple-500"
    },
    {
        icon: Zap,
        value: "99.9%",
        label: "Uptime",
        iconColor: "text-green-500"
    },
    {
        icon: ThumbsUp,
        value: "4.9/5",
        label: "User Rating",
        iconColor: "text-orange-500"
    }
];

export function Testimonials() {
    return (
        <div className="mt-32 px-4 md:px-6 lg:px-8 mb-10" id="testimonials">
            <div className="space-y-4 text-center mb-16">
                <div className="flex items-center justify-center">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="flex items-center space-x-2"
                    >
                        <Sparkles className="h-4 w-4" />
                        <span className="font-semibold">Testimonials</span>
                    </HoverBorderGradient>
                </div>
                <div className="flex items-center justify-center">
                    <SparklesText>Loved by Creators Worldwide</SparklesText>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Join thousands of satisfied users who trust Pictora AI for their creative needs.
                </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10">
                            <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
                        </div>
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <Card 
                        key={index} 
                        className="group relative overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-background to-muted/20"
                    >
                        <CardContent className="p-6">
                            {/* Quote Icon */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Quote className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    {/* Stars */}
                                    <div className="flex items-center gap-1 mb-3">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    
                                    {/* Highlight Badge */}
                                    <Badge variant="secondary" className="text-xs mb-3">
                                        {testimonial.highlight}
                                    </Badge>
                                </div>
                            </div>

                            {/* Testimonial Text */}
                            <blockquote className="text-sm leading-relaxed text-muted-foreground mb-6">
                                "{testimonial.text}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-white font-semibold text-sm">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-sm">{testimonial.name}</div>
                                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </div>
                        </CardContent>
                        
                        {/* Hover effect gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </Card>
                ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 border">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">Trusted by creators from 50+ countries</span>
                </div>
            
            </div>
        </div>
    );
}
