import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const stats = [
    { icon: TrendingUp, value: "15+", label: "Ventures Incubated" },
    { icon: DollarSign, value: "₹50L+", label: "Funding Raised" },
    { icon: Users, value: "200+", label: "Active Members" },
  ];

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-2/5 to-accent/5 -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary">VIT Bhopal's Premier Startup Hub</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-primary via-chart-2 to-accent bg-clip-text text-transparent">
                  Ideas
                </span>{" "}
                Into Reality
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Join VIT Bhopal's thriving entrepreneurship community. Get mentored, funded, and
                connected with India's brightest innovators.
              </p>
            </div>

            {/* Social Proof Stats */}
            <div className="flex flex-wrap gap-6 py-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-xl text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                Pitch Your Idea Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Get Mentored Today
              </Button>
            </div>

            {/* Quick note */}
            <p className="text-sm text-muted-foreground">
              🚀 Applications for Winter Cohort 2025 are now open
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-2xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758876022213-fbf6e54ad52e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwaW5ub3ZhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM5NzUzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="E-Cell VIT Bhopal Innovation Hub"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-chart-4 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                  <div className="font-semibold text-xl">78%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
