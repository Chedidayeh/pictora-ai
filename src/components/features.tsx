import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { SparklesText } from "./magicui/sparkles-text";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Sparkles,
  Video,
  FolderOpen,
  User,
  CreditCard,
  Zap,
  Smartphone,
  Shield
} from "lucide-react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

const features = [
  {
    icon: Sparkles,
    title: "AI Image Generation",
    description: "Turn your imagination into visuals. Simply describe what you want in text, and our AI transforms it into high-quality images.",
  },
  {
    icon: Video,
    title: "AI Video Creation",
    description: "Bring your ideas to life with image-to-video or text-to-video tools. Perfect for social media clips, ads, and creative projects.",
  },
  {
    icon: FolderOpen,
    title: "Personal Library",
    description: "Every image or video you generate is saved to your personal dashboard. Download, re-use, or share your creations anytime.",
  },
  {
    icon: User,
    title: "User Profiles",
    description: "Track your usage, manage credits, and customize your account in one place.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description: "Choose between a pay-as-you-go credits system or a monthly subscription. Only pay for what you use.",
  },
  {
    icon: Zap,
    title: "Fast & Simple",
    description: "Minimal design, instant results. No complicated settings — just type, click, and create.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Generate and manage your creations from desktop, tablet, or mobile — anywhere, anytime.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "All generations are processed securely via trusted AI models. Your content and data stay safe.",
  }
];

export function Features() {
  return (
    <div className="mt-32 px-4 md:px-6 lg:px-8" id="features">
      <div className="space-y-4 text-center mb-16">
        <div className="flex items-center justify-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="flex items-center space-x-2"
          >
            <Sparkles className="h-4 w-4" />
            <span className="font-semibold">Features</span>
          </HoverBorderGradient>
        </div>
        <div className="flex items-center justify-center">
          <SparklesText>Your Creative Journey Starts Here</SparklesText>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Discover the powerful features that make Pictora AI the perfect creative companion for your digital content needs.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-gradient-to-br from-background to-muted/20"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>

            {/* Hover effect gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </Card>
        ))}
      </div>

      {/* Call to action */}
      <div className="text-center mt-16">
        <InteractiveHoverButton>Start Creating Today</InteractiveHoverButton>

        <p className="text-muted-foreground mt-4 text-sm">
          Join thousands of creators who trust Pictora AI for their content needs
        </p>
      </div>
    </div>
  );
}
