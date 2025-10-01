import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { SparklesText } from "./magicui/sparkles-text";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Sparkles,
  Timer,
  FolderOpen,
  User,
  CreditCard,
  FileText,
  BarChart3,
  LogIn,
  Shield
} from "lucide-react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

const features = [
  {
    icon: Timer,
    title: "Time Tracking",
    description: "Start/stop timers, add manual entries, and edit logs with ease.",
  },
  {
    icon: FolderOpen,
    title: "Clients & Projects",
    description: "Organize work by client and project. Support hourly or fixed rates.",
  },
  {
    icon: FileText,
    title: "Invoicing",
    description: "Generate invoices from time logs, add items, export PDF, send via email.",
  },
  {
    icon: BarChart3,
    title: "Dashboard & Reports",
    description: "See hours, income, and outstanding invoices with powerful filters.",
  },
  {
    icon: User,
    title: "Profile & Rates",
    description: "Set currency, hourly rate, and company details for branded invoices.",
  },
  {
    icon: CreditCard,
    title: "Payments & Status",
    description: "Track Draft, Sent, Paid, and Overdue invoices at a glance.",
  },
  {
    icon: LogIn,
    title: "Email & Google Login",
    description: "NextAuth support for email and Google OAuth.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your data is protected with best practices and privacy in mind.",
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
          <SparklesText>Everything You Need to Run Your Freelance Business</SparklesText>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Discover the powerful features that make Trackify the perfect creative companion for your digital content needs.
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
        <InteractiveHoverButton>Start Tracking Today</InteractiveHoverButton>

        <p className="text-muted-foreground mt-4 text-sm">
          Join thousands of freelancers who trust Trackify to get paid faster
        </p>
      </div>
    </div>
  );
}
