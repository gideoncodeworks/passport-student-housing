import Link from "next/link";
import { MapPin, Phone, Home, Users, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { getFeaturedProperties, getSummerSubletProperties, properties, getTotalBedrooms, getSummerSubletBedrooms } from "@/lib/properties";

export default function HomePage() {
  const featuredProperties = getFeaturedProperties();
  const summerSublets = getSummerSubletProperties();
  const totalBedrooms = getTotalBedrooms();
  const summerBedrooms = getSummerSubletBedrooms();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-700/50 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Home className="w-4 h-4" />
              Serving CWRU Students Since 1990
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Quality Student Housing Near University Circle
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Find your perfect home near Case Western Reserve University, Cleveland Clinic, and University Circle.
              We offer comfortable, affordable apartments for students and young professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/properties"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Available Properties
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-600"
              >
                <Phone className="w-5 h-5" />
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400">{properties.length}</div>
              <div className="text-gray-400 text-sm mt-1">Properties</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400">{totalBedrooms}+</div>
              <div className="text-gray-400 text-sm mt-1">Bedrooms Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400">35+</div>
              <div className="text-gray-400 text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400">3</div>
              <div className="text-gray-400 text-sm mt-1">Neighborhoods</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our most popular rentals, all within easy reach of Case Western Reserve University and Cleveland Clinic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.slice(0, 6).map((property) => (
              <Link
                key={property.id}
                href={`/properties/${property.id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Home className="w-16 h-16 text-blue-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                    {property.address}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {property.city}, {property.state} {property.zip}
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {property.units.length} {property.units.length === 1 ? 'Unit' : 'Units'}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {property.neighborhood}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {property.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
            >
              View All Properties
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neighborhoods We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our properties are located in the most desirable areas near University Circle,
              offering easy access to campus, hospitals, and cultural attractions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/properties?neighborhood=university-circle"
              className="group bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-8 text-white hover:shadow-xl transition-all"
            >
              <MapPin className="w-10 h-10 mb-4 text-blue-300" />
              <h3 className="text-2xl font-bold mb-2">University Circle</h3>
              <p className="text-blue-200 mb-4">
                Walking distance to CWRU and Cleveland Clinic. Perfect for students and medical professionals.
              </p>
              <span className="inline-flex items-center gap-1 text-blue-300 group-hover:text-white transition-colors">
                View Properties <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/properties?neighborhood=cleveland-heights"
              className="group bg-gradient-to-br from-green-700 to-green-800 rounded-xl p-8 text-white hover:shadow-xl transition-all"
            >
              <MapPin className="w-10 h-10 mb-4 text-green-300" />
              <h3 className="text-2xl font-bold mb-2">Cleveland Heights</h3>
              <p className="text-green-200 mb-4">
                Charming neighborhood with tree-lined streets, local shops, and easy transit access.
              </p>
              <span className="inline-flex items-center gap-1 text-green-300 group-hover:text-white transition-colors">
                View Properties <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/properties?neighborhood=university-heights"
              className="group bg-gradient-to-br from-purple-700 to-purple-800 rounded-xl p-8 text-white hover:shadow-xl transition-all"
            >
              <MapPin className="w-10 h-10 mb-4 text-purple-300" />
              <h3 className="text-2xl font-bold mb-2">University Heights</h3>
              <p className="text-purple-200 mb-4">
                Quiet residential area near John Carroll University with excellent schools and parks.
              </p>
              <span className="inline-flex items-center gap-1 text-purple-300 group-hover:text-white transition-colors">
                View Properties <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Summer Sublets */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calendar className="w-4 h-4" />
                June 1 - August 15
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Summer Sublets Available
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Perfect for summer interns, researchers, and students! Our single-family homes near
                University Circle offer {summerBedrooms} bedrooms across {summerSublets.length} properties,
                all within walking distance of CWRU and Cleveland Clinic.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Walking distance to CWRU (0.3 miles)
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Large common areas for studying
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Off-street parking included
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Flexible 10-week lease terms
                </li>
              </ul>
              <Link
                href="/summer-sublets"
                className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                View Summer Sublets
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {summerSublets.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  <h3 className="font-semibold text-gray-900">{property.address}</h3>
                  <p className="text-sm text-gray-500 mt-1">{property.neighborhood}</p>
                  <div className="mt-3 text-2xl font-bold text-blue-800">
                    {property.units[0].bedrooms} BR
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Passport Student Housing?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              For over 35 years, we've been helping students and young professionals
              find their home away from home in Cleveland.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Properties</h3>
              <p className="text-gray-600">
                Well-maintained homes with modern amenities and regular updates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prime Locations</h3>
              <p className="text-gray-600">
                Close to campus, hospitals, and public transit for easy commuting.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Responsive Service</h3>
              <p className="text-gray-600">
                Quick maintenance response and dedicated support for all tenants.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Leasing</h3>
              <p className="text-gray-600">
                Academic year leases and summer sublet options available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your New Home?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Contact us today to schedule a tour or learn more about our available properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Schedule a Tour
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+12167027666"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-600"
            >
              <Phone className="w-5 h-5" />
              (216) 702-7666
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
