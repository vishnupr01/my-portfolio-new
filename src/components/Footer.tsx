export default function Footer() {
  return (
    <footer className="border-t border-line py-10 text-[13px] text-muted flex flex-col sm:flex-row sm:justify-between gap-2">
      <span>© {new Date().getFullYear()} Vishnu P R · Palakkad, Kerala, India</span>
      <span>Built with React, TypeScript &amp; Tailwind CSS</span>
    </footer>
  );
}
