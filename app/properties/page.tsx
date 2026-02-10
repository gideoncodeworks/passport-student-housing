"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MapPin, Home, Users, Filter, X } from "lucide-react";
import { properties, Property } from "@/lib/properties";

export default function PropertiesPage() {
  const searchParams = useSearchParams();
  const initialNeighborhood = searchParams.get("neighborhood") || "";

  const [neighborhoodFilter, setNeighborhoodFilter] = useState(initialNeighborhood);
  const [bedroomFilter, setBedroomFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const neighborhoods = useMemo(() => {
    return [...new Set(properties.map(p => p.neighborhood))].sort();
  }, []);

  const bedroomOptions = useMemo(() => {
    const allBedrooms = properties.flatMap(p => p.units.map(u => u.bedrooms));
    return [...new Set(allBedrooms)].sort((a, b) => a - b);
  }, []);

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      if (neighborhoodFilter) {
        const normalizedFilter = neighborhoodFilter.toLowerCase().replace(/-/g, " ");
        if (property.neighborhood.toLowerCase() !== normalizedFilter) {
          return false;
        }
      }
      if (bedroomFilter) {
        const beds = parseInt(bedroomFilter);
        if (!property.units.some(u => u.bedrooms === beds)) {
          return false;
        }
      }
      return true;
    });
  }, [neighborhoodFilter, bedroomFilter]);

  const clearFilters = () => {
    setNeighborhoodFilter("");
    setBedroomFilter("");
  };

  const hasActiveFilters = neighborhoodFilter || bedroomFilter;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Available Properties</h1>
          <p className="text-xl text-blue-200">
            Browse our selection of {properties.length} properties across Cleveland Heights, University Circle, and University Heights.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-semibold text-gray-900">Filters</span>
            </div>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700"
              >
                <X className="w-4 h-4" />
                Clear all
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Neighborhood
              </label>
              <select
                value={neighborhoodFilter}
                onChange={(e) => setNeighborhoodFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Neighborhoods</option>
                {neighborhoods.map(n => (
                  <option key={n} value={n.toLowerCase().replace(/ /g, "-")}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bedrooms
              </label>
              <select
                value={bedroomFilter}
                onChange={(e) => setBedroomFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Any</option>
                {bedroomOptions.map(b => (
                  <option key={b} value={b}>{b} Bedroom{b !== 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredProperties.length}</span> {filteredProperties.length === 1 ? 'property' : 'properties'}
          </p>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <Link
                key={property.id}
                href={`/properties/${property.id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
                  <Home className="w-16 h-16 text-blue-400" />
                  {property.featured && (
                    <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                  {property.summerSublet && (
                    <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Summer Sublet
                    </span>
                  )}
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
                  <div className="mt-4">
                    <div className="text-sm text-gray-500 mb-2">Available units:</div>
                    <div className="flex flex-wrap gap-2">
                      {property.units.map((unit) => (
                        <span
                          key={unit.id}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {unit.bedrooms} BR {unit.floor && `(${unit.floor})`}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {property.features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                    {property.features.length > 2 && (
                      <span className="text-gray-500 text-xs py-1">
                        +{property.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Home className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
            <button
              onClick={clearFilters}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
