"use client";

import { useState } from "react";
import Link from "next/link";
import { useSiteData } from "@/lib/site-context";
import { Menu, X, Phone, Home } from "lucide-react";

export default function Header() {
  const siteData = useSiteData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = siteData.navigation.length > 0
    ? siteData.navigation.map((nav) => ({
        name: nav.title,
        href: nav.slug.startsWith("/") ? nav.slug : `/${nav.slug}`,
      }))
    : [
        { name: "Home", href: "/" },
        { name: "Properties", href: "/properties" },
        { name: "Summer Sublets", href: "/summer-sublets" },
        { name: "Apply", href: "/apply" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
      ];

  const phone = siteData.contact.phone || "(216) 702-7666";
  const phoneHref = `tel:${phone.replace(/[^0-9+]/g, "")}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-blue-900 font-bold text-lg leading-tight block">
                Passport
              </span>
              <span className="text-blue-600 text-xs font-medium">
                Student Housing
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={phoneHref}
              className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {phone}
            </a>
            <Link
              href="/contact"
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule a Tour
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={phoneHref}
              className="flex items-center justify-center w-10 h-10 bg-blue-800 text-white rounded-lg"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-10 h-10 text-gray-700 bg-gray-100 rounded-lg"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-800 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Schedule a Tour
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
