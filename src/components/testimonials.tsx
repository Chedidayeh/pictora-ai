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
    Wallet,
    ThumbsUp,
    Shield,
    Timer,
    FileText
} from "lucide-react";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Freelance Designer",
        avatar: "SC",
        rating: 5,
        text: "Trackify made time tracking painless and invoicing professional. I cut admin time by 70% and get paid faster.",
        highlight: "70% less admin"
    },
    {
        name: "Marcus Rodriguez",
        role: "Web Developer",
        avatar: "MR",
        rating: 5,
        text: "The built-in timer and project rates keep everything accurate. My invoices went from messy to automated.",
        highlight: "Accurate billing"
    },
    {
        name: "Emily Watson",
        role: "Copywriter",
        avatar: "EW",
        rating: 5,
        text: "I love the clean timesheets and branded invoices. Clients pay on time because everything is crystal clear.",
        highlight: "On-time payments"
    },
    {
        name: "David Kim",
        role: "Agency Owner",
        avatar: "DK",
        rating: 5,
        text: "Team features and API access sealed the deal. We standardized invoicing across our clients in a week.",
        highlight: "Standardized invoicing"
    },
    {
        name: "Lisa Thompson",
        role: "Photographer",
        avatar: "LT",
        rating: 5,
        text: "Tracking shoots by client and project keeps me organized. Exporting PDF invoices is a breeze.",
        highlight: "Organized & fast"
    },
    {
        name: "Alex Johnson",
        role: "Consultant",
        avatar: "AJ",
        rating: 5,
        text: "Recurring invoices and reminders helped me reduce late payments drastically.",
        highlight: "Fewer late payments"
    }
];

const stats = [
    {
        icon: Users,
        value: "20K+",
        label: "Freelancers",
        iconColor: "text-blue-500"
    },
    {
        icon: Timer,
        value: "10M+",
        label: "Hours Tracked",
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
                    <SparklesText>Loved by Freelancers Worldwide</SparklesText>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Join thousands of freelancers who trust Trackify to track time and get paid.
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
                    <span className="text-sm font-medium">Trusted by freelancers in 50+ countries</span>
                </div>
            
            </div>
        </div>
    );
}
