import { CheckCircle, BarChart, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<CheckCircle className="w-12 h-12 text-primary" />}
            title="Task Management"
            description="Create, organize, and track your tasks with ease"
          />
          <FeatureCard
            icon={<BarChart className="w-12 h-12 text-primary" />}
            title="Progress Tracking"
            description="Visualize your productivity with intuitive charts"
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-primary" />}
            title="Collaboration"
            description="Share tasks and projects with your team"
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12 text-primary" />}
            title="Integrations"
            description="Connect with your favorite tools and apps"
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
