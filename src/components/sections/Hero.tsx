import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Manage Tasks with Ease
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              TaskMaster helps you organize, track, and complete your tasks efficiently. Boost your productivity today.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#">Learn more</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
