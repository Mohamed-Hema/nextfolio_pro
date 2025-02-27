// Imports
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  return (
    <header className="top-0 z-50 bg-background/30 backdrop-blur-sm py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-bold text-2xl">NextFolio Pro</h1>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-8 text-card-foreground">
            <li className="text-primary font-medium">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">About</a>
            </li>
            <li>
              <a href="#pricing">Skills</a>
            </li>
            <li>
              <a href="#faqs">Testimonials</a>
            </li>
          </ul>

          {/* CTA and Theme Toggle */}
          <div className="flex items-center gap-4">
            <Button className="hidden md:block">Let's Talk</Button>

            {/* Mobile Menu */}
            <div className="flex md:hidden items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5 rotate-0 scale-100" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <a href="#home">Home</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#features">About</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#pricing">Projects</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#faqs">Blog</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
