import Link from "next/link";
import { MountainIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="ml-2 text-2xl font-bold">TaskMaster</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
          Features
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
          Pricing
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
          About
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
          Contact
        </Link>
      </nav>
    </header>
  );
}
