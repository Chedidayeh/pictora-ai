"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { SparklesText } from "./magicui/sparkles-text";
import { Card, CardContent } from "./ui/card";
import { 
    Sparkles, 
    ArrowRight,
    Zap,
    Star,
    Users,
    Shield,
    Check
} from "lucide-react";

const benefits = [
    "Start with 10 free credits",
    "No credit card required",
    "Cancel anytime",
    "24/7 customer support"
];

export default function CallToAction() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      
      <div className="relative mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="flex items-center space-x-2"
            >
              <Sparkles className="h-4 w-4" />
              <span className="font-semibold">Ready to Create?</span>
            </HoverBorderGradient>
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <SparklesText>Transform Your Ideas into Reality</SparklesText>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            Join thousands of creators who are already using Pictora AI to bring their visions to life. 
            Start creating stunning visuals in minutes, not hours.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-600" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="group relative overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-background to-muted/20">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-primary/80">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Start Free Today</h3>
              <p className="text-muted-foreground mb-6">
                Get 10 free credits and start creating amazing visuals right away. 
                No strings attached, no credit card required.
              </p>
              <Button size="lg" className="w-full group-hover:scale-105 transition-transform duration-200">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-background to-muted/20">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-purple-600">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">See It In Action</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a personalized demo and see how Pictora AI can transform 
                your creative workflow.
              </p>
              <Button size="lg" variant="outline" className="w-full group-hover:scale-105 transition-transform duration-200">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Trust indicators */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Secure & Reliable</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">50K+ Users</span>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground">
            Trusted by creators, marketers, and businesses worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
