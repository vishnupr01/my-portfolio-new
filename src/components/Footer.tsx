export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-6 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-3">
        <span className="text-[10px] font-mono text-white/18 tracking-widest uppercase">
          Vishnu P R &copy; {new Date().getFullYear()}
        </span>
        <span className="text-[10px] font-mono text-white/12 tracking-wider">
          Palakkad, Kerala, India
        </span>
      </div>
    </footer>
  );
}
