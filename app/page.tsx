// app/page.tsx
import Hero from "../components/Hero";
import Products from "../components/Products";
import Papers from "../components/Papers";
import Features from "../components/Features";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Hero />
      <Products />
      <Papers />
      <Features />
    </main>
  );
}
