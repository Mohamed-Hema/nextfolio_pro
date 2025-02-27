import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero
          name="Alexander Hayes"
          role="Luxury Event Planner"
          description="Designing extraordinary experiences with elegance and precision. Specializing in high-end weddings, corporate events, and bespoke celebrations."
        />
      </div>
    </main>
  );
}
