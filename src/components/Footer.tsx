export default function Footer() {
  return (
    <footer className="py-6 bg-black border-t border-white/10 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Vishnu P R — Built with React, Tailwind & Framer Motion
    </footer>
  );
}