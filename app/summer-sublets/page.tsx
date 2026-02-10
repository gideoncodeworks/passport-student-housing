import Link from "next/link";
import { MapPin, Phone, Home, Calendar, CheckCircle, ArrowRight, Sun } from "lucide-react";
import { getSummerSubletProperties, getSummerSubletBedrooms } from "@/lib/properties";

export const metadata = {
  title: "Summer Sublets - Passport Student Housing",
  description: "Summer sublet housing near CWRU and Cleveland Clinic. Available June 1 - August 15. Perfect for summer interns and researchers.",
};

export default function SummerSubletsPage() {
  const summerSublets = getSummerSubletProperties();
  const totalBedrooms = getSummerSubletBedrooms();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Sun className="w-8 h-8" />
            <span className="text-amber-100 font-medium">June 1 - August 15</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Summer Sublets
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mb-8">
            Perfect for summer interns, researchers, and visiting students!
            We have {totalBedrooms} bedrooms available across {summerSublets.length} properties,
            all within walking distance of Case Western Reserve University and Cleveland Clinic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#properties"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              View Summer Properties
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+12167027666"
              className="inline-flex items-center justify-center gap-2 bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-colors border border-amber-500"
            >
              <Phone className="w-5 h-5" />
              (216) 702-7666
            </a>
          </div>
        </div>
      </section>

      {/* Why Summer Sublet */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our Summer Sublets?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Walking Distance</h3>
              <p className="text-gray-600">
                Just 0.3 miles from CWRU campus and Cleveland Clinic
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Spacious Homes</h3>
              <p className="text-gray-600">
                Large single-family homes with common areas for studying
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Terms</h3>
              <p className="text-gray-600">
                10-week summer lease aligns with internship programs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">All-Inclusive</h3>
              <p className="text-gray-600">
                Furnished options and off-street parking included
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summer Properties */}
      <section id="properties" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Available Summer Properties
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {summerSublets.map((property) => (
              <Link
                key={property.id}
                href={`/properties/${property.id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center relative">
                  <Home className="w-16 h-16 text-amber-400" />
                  <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Summer Sublet
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                    {property.address}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {property.city}, {property.state} {property.zip}
                  </p>

                  <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Bedrooms</span>
                      <span className="text-2xl font-bold text-amber-700">
                        {property.units[0].bedrooms}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {property.distanceToCase || property.neighborhood}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {property.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Summer Sublet Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lease Terms</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>June 1 - August 15 (10 weeks)</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Flexible move-in/move-out dates available</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Short-term lease options</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Individual bedroom leases</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ideal For</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Summer interns at Cleveland Clinic</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>CWRU summer research students</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Visiting scholars and professors</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Medical residents and fellows</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Reserve Your Summer Housing Today
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Summer sublets fill up quickly! Contact us now to secure your spot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+12167027666"
              className="inline-flex items-center justify-center gap-2 bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-colors border border-amber-500"
            >
              <Phone className="w-5 h-5" />
              (216) 702-7666
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
