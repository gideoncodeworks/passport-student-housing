import Link from "next/link";
import { MapPin, Phone, Home, Users, Calendar, CheckCircle, ArrowRight, Award } from "lucide-react";
import { properties, getTotalBedrooms } from "@/lib/properties";

export const metadata = {
  title: "About Us - Passport Student Housing",
  description: "Learn about Passport Student Housing - serving CWRU students and young professionals in Cleveland Heights since 1990.",
};

export default function AboutPage() {
  const totalBedrooms = getTotalBedrooms();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Passport Student Housing
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            For over 35 years, we've been helping students and young professionals
            find quality housing near Cleveland's University Circle.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-blue-600" />
            <span className="text-blue-600 font-semibold">Since 1990</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>
              Passport Student Housing was founded with a simple mission: to provide quality,
              affordable housing for students and young professionals in the Cleveland area.
              What started as a small operation has grown into a trusted name in student housing
              near Case Western Reserve University, Cleveland Clinic, and the vibrant University Circle neighborhood.
            </p>
            <p>
              Over the past three decades, we've housed thousands of students, medical residents,
              researchers, and young professionals. Our properties are carefully selected for their
              proximity to campus, quality of construction, and the comfort they provide to our residents.
            </p>
            <p>
              We understand that finding the right place to live is about more than just four walls
              and a roof. It's about finding a community, a safe place to study and grow, and a home
              away from home. That's why we take pride in maintaining our properties to the highest
              standards and being responsive to our tenants' needs.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-800">35+</div>
              <div className="text-gray-600 mt-2">Years in Business</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-800">{properties.length}</div>
              <div className="text-gray-600 mt-2">Properties</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-800">{totalBedrooms}+</div>
              <div className="text-gray-600 mt-2">Bedrooms</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-800">1000s</div>
              <div className="text-gray-600 mt-2">Happy Tenants</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Properties</h3>
              <p className="text-gray-600">
                Well-maintained homes and apartments with modern amenities.
                We regularly update our properties to ensure comfort and safety.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prime Locations</h3>
              <p className="text-gray-600">
                All our properties are strategically located near CWRU, Cleveland Clinic,
                and public transportation for easy commuting.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsive Management</h3>
              <p className="text-gray-600">
                Our team is always available to address maintenance requests
                and ensure a smooth living experience for all tenants.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Leasing</h3>
              <p className="text-gray-600">
                We offer academic year leases, summer sublets, and other
                flexible options to meet your needs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Variety of Options</h3>
              <p className="text-gray-600">
                From single bedrooms to large houses for groups,
                we have options for individuals and roommate groups alike.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                With 35+ years in the Cleveland Heights area, we know the
                neighborhoods and can help you find the perfect fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Neighborhoods We Serve
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">University Circle</h3>
              <p className="text-gray-600 mb-4">
                The cultural heart of Cleveland, home to CWRU, Cleveland Clinic,
                Cleveland Museum of Art, and Severance Hall.
              </p>
              <Link href="/properties?neighborhood=university-circle" className="text-blue-600 hover:text-blue-800 font-medium">
                View properties →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cleveland Heights</h3>
              <p className="text-gray-600 mb-4">
                A charming inner-ring suburb with tree-lined streets,
                local shops on Coventry, and easy access to campus.
              </p>
              <Link href="/properties?neighborhood=cleveland-heights" className="text-blue-600 hover:text-blue-800 font-medium">
                View properties →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">University Heights</h3>
              <p className="text-gray-600 mb-4">
                A quiet residential community near John Carroll University
                with excellent schools and family-friendly parks.
              </p>
              <Link href="/properties?neighborhood=university-heights" className="text-blue-600 hover:text-blue-800 font-medium">
                View properties →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your New Home?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Browse our available properties or contact us to schedule a tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/properties"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Properties
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-600"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
