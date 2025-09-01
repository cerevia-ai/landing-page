// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-white border-t w-full text-center mt-20">
      <p className="text-gray-600">
        © {new Date().getFullYear()} Cerevia Inc. All rights reserved.
      </p>
      <p className="mt-2 text-sm text-gray-500">
        Contact us: <a href="mailto:info@cerevia.ai" className="underline">info@cerevia.ai</a>
      </p>
    </footer>
  );
}
