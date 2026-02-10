import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, Home, Users, ArrowLeft, CheckCircle, Calendar } from "lucide-react";
import { properties, getPropertyById } from "@/lib/properties";

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    return { title: "Property Not Found" };
  }

  return {
    title: `${property.address} - Student Housing`,
    description: `${property.units.length} unit${property.units.length > 1 ? 's' : ''} available at ${property.address}, ${property.city}. ${property.features.slice(0, 3).join(', ')}.`,
  };
}

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Properties
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            {property.featured && (
              <span className="bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Featured
              </span>
            )}
            {property.summerSublet && (
              <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Summer Sublet Available
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{property.address}</h1>
          <p className="text-xl text-blue-200 mt-2">
            {property.city}, {property.state} {property.zip}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl h-80 flex items-center justify-center">
              <div className="text-center">
                <Home className="w-24 h-24 text-blue-400 mx-auto" />
                <p className="text-blue-500 mt-4">Property images coming soon</p>
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Details</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Location</h3>
                  <div className="flex items-center gap-2 text-gray-900">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    {property.neighborhood}
                  </div>
                  {property.distanceToCase && (
                    <p className="text-sm text-gray-600 mt-1 ml-7">
                      {property.distanceToCase} from CWRU
                    </p>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Property Type</h3>
                  <div className="flex items-center gap-2 text-gray-900">
                    <Home className="w-5 h-5 text-blue-600" />
                    {property.propertyType === 'single-family' ? 'Single Family Home' : 'Multi-Family Building'}
                  </div>
                </div>
              </div>
            </div>

            {/* Available Units */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Units</h2>
              <div className="space-y-4">
                {property.units.map((unit) => (
                  <div
                    key={unit.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {unit.bedrooms} Bedroom{unit.bedrooms !== 1 ? 's' : ''}
                          {unit.bathrooms && ` / ${unit.bathrooms} Bath${unit.bathrooms !== 1 ? 's' : ''}`}
                        </h3>
                        {unit.floor && (
                          <p className="text-gray-600">{unit.floor}</p>
                        )}
                      </div>
                      <div className="text-right">
                        {unit.rent && (
                          <div className="text-2xl font-bold text-blue-800">${unit.rent}/mo</div>
                        )}
                        <span className={`inline-flex items-center gap-1 text-sm ${unit.available ? 'text-green-600' : 'text-red-600'}`}>
                          <span className={`w-2 h-2 rounded-full ${unit.available ? 'bg-green-600' : 'bg-red-600'}`} />
                          {unit.available ? 'Available' : 'Not Available'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Amenities</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Schools */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nearby Schools & Institutions</h2>
              <div className="space-y-2">
                {property.nearbySchools.map((school) => (
                  <div key={school} className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    {school}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Interested in this property?</h2>
              <p className="text-gray-600 mb-6">
                Contact us to schedule a tour or learn more about availability.
              </p>

              <div className="space-y-4">
                <Link
                  href={`/apply?property=${property.id}`}
                  className="block w-full bg-green-600 text-white text-center py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Apply Now
                </Link>

                <Link
                  href="/contact"
                  className="block w-full bg-blue-800 text-white text-center py-4 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
                >
                  Schedule a Tour
                </Link>

                <a
                  href="tel:+12167027666"
                  className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-900 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (216) 702-7666
                </a>
              </div>

              {property.summerSublet && (
                <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-center gap-2 text-amber-800 font-semibold mb-2">
                    <Calendar className="w-5 h-5" />
                    Summer Sublet Available
                  </div>
                  <p className="text-sm text-amber-700">
                    This property is available for summer sublet from June 1 - August 15.
                  </p>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Facts</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center justify-between">
                    <span>Total Units</span>
                    <span className="font-medium text-gray-900">{property.units.length}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Neighborhood</span>
                    <span className="font-medium text-gray-900">{property.neighborhood}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Property Type</span>
                    <span className="font-medium text-gray-900">
                      {property.propertyType === 'single-family' ? 'Single Family' : 'Multi-Family'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
