"use client";

import Link from "next/link";
import { useSiteData } from "@/lib/site-context";
import { Phone, Mail, MapPin, Home, Youtube } from "lucide-react";

export default function Footer() {
  const siteData = useSiteData();

  const phone = siteData.contact.phone || "(216) 702-7666";
  const email = siteData.contact.email || "info@passportstudenthoming.com";
  const phoneHref = `tel:${phone.replace(/[^0-9+]/g, "")}`;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-white font-bold text-lg block">Passport</span>
                <span className="text-blue-400 text-xs font-medium">Student Housing</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Quality student and young professional housing serving University Circle and Cleveland Heights since 1990.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/properties" className="text-gray-400 hover:text-white transition-colors">
                  Available Properties
                </Link>
              </li>
              <li>
                <Link href="/summer-sublets" className="text-gray-400 hover:text-white transition-colors">
                  Summer Sublets
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Neighborhoods */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Neighborhoods</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/properties?neighborhood=university-circle" className="text-gray-400 hover:text-white transition-colors">
                  University Circle
                </Link>
              </li>
              <li>
                <Link href="/properties?neighborhood=cleveland-heights" className="text-gray-400 hover:text-white transition-colors">
                  Cleveland Heights
                </Link>
              </li>
              <li>
                <Link href="/properties?neighborhood=university-heights" className="text-gray-400 hover:text-white transition-colors">
                  University Heights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href={phoneHref} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  {phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  {email}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  Cleveland Heights, OH
                </span>
              </li>
              {siteData.socialMedia.youtube && (
                <li>
                  <a
                    href={siteData.socialMedia.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                    YouTube
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Passport Student Housing. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Near Case Western Reserve University, Cleveland Clinic, and University Circle
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
