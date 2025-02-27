import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroProps {
  name: string;
  role: string;
  description: string;
}

const Hero: FC<HeroProps> = ({ name, role, description }) => {
  return (
    <section className="py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Hi, I'm {name}
          </h1>
          <p className="text-lg text-muted-foreground font-medium">{role}</p>
          <p className="text-muted-foreground max-w-md">{description}</p>
          <div className="flex gap-4 pt-4">
            <Button className="bg-foreground hover:bg-foreground/90 text-background">
              Hire Me
            </Button>
            <Button
              variant="outline"
              className="border-foreground/20 hover:bg-foreground/10"
            >
              Download CV
            </Button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative w-full max-w-md mx-auto">
          <div className="relative aspect-[4/5]">
            <div className="absolute -inset-6">
              <div
                className="absolute inset-0 rounded-[2rem] animate-card-1
          bg-gray-200/50 dark:bg-gray-700/20"
                style={{ animationDelay: "-2s" }}
              />
              <div
                className="absolute inset-0 rounded-[2rem] animate-card-2
          bg-gray-300/50 dark:bg-gray-600/30"
                style={{ animationDelay: "-1s" }}
              />
            </div>
            {/* Profile Image */}
            <Image
              src="/hero-image.jpg"
              alt="Profile picture"
              fill
              priority
              className="object-cover rounded-[2rem]"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
