"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "../ui/BrandLogo";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Ganpati 2026", href: "/ganpati-2026" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop TopNavBar Shared Component */}
      <header className="fixed top-0 left-0 w-full z-50 justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-surface/70 backdrop-blur-xl border-b border-secondary/20 hidden md:flex transition-all duration-300">
        <Link href="/" className="flex items-center gap-4 group">
          <BrandLogo variant="navbar" className="group-hover:scale-105 transition-transform duration-300" />
          {pathname !== "/" && (
            <span className="font-display-lg text-headline-lg font-bold text-primary tracking-tight hidden lg:block">
              VIPIN PUNJABI DHOL
            </span>
          )}
        </Link>
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-label-caps text-label-caps uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1 active:scale-95 duration-200"
                    : "text-on-surface hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <a
            className="font-cta text-cta text-primary hover:text-primary/80 transition-colors flex items-center gap-2 group hidden xl:flex uppercase"
            href="https://wa.me/917206110529"
          >
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
              chat
            </span>
            WhatsApp
          </a>
          <Link
            className="font-cta text-cta bg-primary-container text-on-primary-container px-6 py-3 border border-primary-container hover:bg-transparent hover:text-primary-container transition-all duration-300 relative overflow-hidden group uppercase tracking-[0.1em]"
            href="/contact"
          >
            <span className="relative z-10">Book Now</span>
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
          </Link>
        </div>
      </header>
      
      {/* Mobile Top Bar (Simplified) */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile py-4 bg-surface/90 backdrop-blur-xl border-b border-secondary/20 md:hidden">
        <Link href="/" className="flex items-center gap-2">
          <BrandLogo variant="navbar" />
          {pathname !== "/" && (
            <span className="font-display-lg-mobile text-headline-lg-mobile font-bold text-primary tracking-tight">
              VIPIN PUNJABI DHOL
            </span>
          )}
        </Link>
      </header>
    </>
  );
}
