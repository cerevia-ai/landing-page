// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/ai_doctor.png')" }}
    >
      {/* Overlay: Dark gradient to improve text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Transforming Cardiovascular and Neurological Care with AI
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-3xl">
          Cerevia Inc. develops AI-powered diagnostic tools to assess cardiovascular risk and detect cognitive decline, empowering clinicians and researchers with explainable insights.
        </p>
      </div>
    </section>
  );
}