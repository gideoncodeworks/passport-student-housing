export interface Property {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  neighborhood: string;
  propertyType: 'single-family' | 'multi-family';
  units: Unit[];
  features: string[];
  nearbySchools: string[];
  distanceToCase?: string;
  images: string[];
  featured?: boolean;
  summerSublet?: boolean;
}

export interface Unit {
  id: string;
  bedrooms: number;
  bathrooms?: number;
  floor?: string;
  rent?: number;
  available: boolean;
  availableDate?: string;
}

export const properties: Property[] = [
  {
    id: 'lee-road-2419',
    address: '2419 Lee Road',
    city: 'Cleveland Heights',
    state: 'OH',
    zip: '44118',
    neighborhood: 'Cleveland Heights',
    propertyType: 'multi-family',
    units: [
      { id: 'lee-2419-1', bedrooms: 2, floor: '1st Floor', available: true },
      { id: 'lee-2419-2', bedrooms: 2, floor: '2nd Floor', available: true },
      { id: 'lee-2419-3', bedrooms: 1, floor: '3rd Floor', available: true },
    ],
    features: ['Hardwood Floors', 'Updated Kitchen', 'On-Site Laundry', 'Off-Street Parking'],
    nearbySchools: ['Case Western Reserve University', 'Cleveland Institute of Art'],
    images: [],
    featured: true,
  },
  {
    id: 'mayfield-road-2584',
    address: '2584 Mayfield Road',
    city: 'Cleveland Heights',
    state: 'OH',
    zip: '44118',
    neighborhood: 'Cleveland Heights',
    propertyType: 'multi-family',
    units: [
      { id: 'mayfield-2584-1', bedrooms: 2, floor: '1st Floor', available: true },
      { id: 'mayfield-2584-2', bedrooms: 2, floor: '2nd Floor', available: true },
      { id: 'mayfield-2584-3', bedrooms: 1, floor: '3rd Floor', available: true },
    ],
    features: ['Hardwood Floors', 'Updated Kitchen', 'On-Site Laundry'],
    nearbySchools: ['Case Western Reserve University'],
    images: [],
  },
  {
    id: 'stillman-road-2109',
    address: '2109 Stillman Road',
    city: 'Cleveland Heights',
    state: 'OH',
    zip: '44118',
    neighborhood: 'Cleveland Heights',
    propertyType: 'multi-family',
    units: [
      { id: 'stillman-2109-1', bedrooms: 2, floor: '1st Floor', available: true },
      { id: 'stillman-2109-2', bedrooms: 2, floor: '2nd Floor', available: true },
      { id: 'stillman-2109-3', bedrooms: 1, floor: '3rd Floor', available: true },
    ],
    features: ['Hardwood Floors', 'Updated Kitchen', 'On-Site Laundry'],
    nearbySchools: ['Case Western Reserve University'],
    images: [],
  },
  {
    id: 'rexwood-road-2189',
    address: '2189 Rexwood Road',
    city: 'Cleveland Heights',
    state: 'OH',
    zip: '44118',
    neighborhood: 'Cleveland Heights',
    propertyType: 'multi-family',
    units: [
      { id: 'rexwood-2189-1', bedrooms: 2, floor: '1st Floor', available: true },
      { id: 'rexwood-2189-2', bedrooms: 2, floor: '2nd Floor', available: true },
      { id: 'rexwood-2189-3', bedrooms: 1, floor: '3rd Floor', available: true },
    ],
    features: ['Hardwood Floors', 'Updated Kitchen', 'On-Site Laundry'],
    nearbySchools: ['Case Western Reserve University'],
    images: [],
  },
  {
    id: 'e-108th-1520',
    address: '1520 E. 108th Street',
    city: 'Cleveland',
    state: 'OH',
    zip: '44106',
    neighborhood: 'University Circle',
    propertyType: 'single-family',
    units: [
      { id: 'e108-1520-1', bedrooms: 7, available: true },
    ],
    features: ['Large Common Areas', 'Multiple Bathrooms', 'Walking Distance to CWRU', 'Off-Street Parking'],
    nearbySchools: ['Case Western Reserve University', 'Cleveland Clinic'],
    distanceToCase: '0.3 miles',
    images: [],
    featured: true,
    summerSublet: true,
  },
  {
    id: 'e-107th-1522',
    address: '1522 E. 107th Street',
    city: 'Cleveland',
    state: 'OH',
    zip: '44106',
    neighborhood: 'University Circle',
    propertyType: 'single-family',
    units: [
      { id: 'e107-1522-1', bedrooms: 7, available: true },
    ],
    features: ['Large Common Areas', 'Multiple Bathrooms', 'Walking Distance to CWRU', 'Off-Street Parking'],
    nearbySchools: ['Case Western Reserve University', 'Cleveland Clinic'],
    distanceToCase: '0.3 miles',
    images: [],
    summerSublet: true,
  },
  {
    id: 'e-106th-1512',
    address: '1512 E. 106th Street',
    city: 'Cleveland',
    state: 'OH',
    zip: '44106',
    neighborhood: 'University Circle',
    propertyType: 'single-family',
    units: [
      { id: 'e106-1512-1', bedrooms: 8, available: true },
    ],
    features: ['Large Common Areas', 'Multiple Bathrooms', 'Walking Distance to CWRU', 'Off-Street Parking'],
    nearbySchools: ['Case Western Reserve University', 'Cleveland Clinic'],
    distanceToCase: '0.3 miles',
    images: [],
    summerSublet: true,
  },
  {
    id: 'bellfield-road-2332',
    address: '2332 Bellfield Road',
    city: 'Cleveland Heights',
    state: 'OH',
    zip: '44106',
    neighborhood: 'Cleveland Heights',
    propertyType: 'multi-family',
    units: [
      { id: 'bellfield-2332-1', bedrooms: 4, floor: 'Side A', available: true },
      { id: 'bellfield-2332-2', bedrooms: 4, floor: 'Side B', available: true },
    ],
    features: ['Spacious Units', 'Updated Kitchen', 'Off-Street Parking'],
    nearbySchools: ['Case Western Reserve University'],
    images: [],
    featured: true,
  },
  {
    id: 'ashurst-road-2403',
    address: '2403 Ashurst Road',
    city: 'University Heights',
    state: 'OH',
    zip: '44118',
    neighborhood: 'University Heights',
    propertyType: 'multi-family',
    units: [
      { id: 'ashurst-2403-1', bedrooms: 2, floor: 'Unit 1', available: true },
      { id: 'ashurst-2403-2', bedrooms: 2, floor: 'Unit 2', available: true },
    ],
    features: ['Quiet Neighborhood', 'Updated Kitchen', 'Off-Street Parking'],
    nearbySchools: ['Case Western Reserve University', 'John Carroll University'],
    images: [],
  },
  {
    id: 'scarborough-3237',
    address: '3237-39 E. Scarborough Road',
    city: 'Cleveland Heights',
    state: 'OH',
    zip: '44118',
    neighborhood: 'Cleveland Heights',
    propertyType: 'multi-family',
    units: [
      { id: 'scarborough-3237-1', bedrooms: 4, floor: 'Unit 1', available: true },
      { id: 'scarborough-3237-2', bedrooms: 4, floor: 'Unit 2', available: true },
    ],
    features: ['Large Units', 'Updated Kitchen', 'Off-Street Parking'],
    nearbySchools: ['Case Western Reserve University'],
    images: [],
  },
  {
    id: 'grandview-2256',
    address: '2256-58 Grandview Avenue',
    city: 'Cleveland Heights',
    state: 'OH',
    zip: '44106',
    neighborhood: 'Cleveland Heights',
    propertyType: 'multi-family',
    units: [
      { id: 'grandview-2256-1', bedrooms: 5, floor: 'Unit 1', available: true },
      { id: 'grandview-2256-2', bedrooms: 5, floor: 'Unit 2', available: true },
    ],
    features: ['Extra Large Units', 'Updated Kitchen', 'Off-Street Parking', 'Great for Groups'],
    nearbySchools: ['Case Western Reserve University'],
    images: [],
    featured: true,
  },
  {
    id: 'bellfield-road-2298',
    address: '2298 Bellfield Road',
    city: 'Cleveland Heights',
    state: 'OH',
    zip: '44106',
    neighborhood: 'Cleveland Heights',
    propertyType: 'multi-family',
    units: [
      { id: 'bellfield-2298-1', bedrooms: 2, floor: 'Unit 1', available: true },
      { id: 'bellfield-2298-2', bedrooms: 2, floor: 'Unit 2', available: true },
      { id: 'bellfield-2298-3', bedrooms: 2, floor: 'Unit 3', available: true },
      { id: 'bellfield-2298-4', bedrooms: 2, floor: 'Unit 4', available: true },
    ],
    features: ['Multiple Units Available', 'Updated Kitchen', 'On-Site Laundry'],
    nearbySchools: ['Case Western Reserve University'],
    images: [],
  },
  {
    id: 'e-120th-1907',
    address: '1907 E. 120th Street',
    city: 'Cleveland',
    state: 'OH',
    zip: '44106',
    neighborhood: 'University Circle',
    propertyType: 'multi-family',
    units: [
      { id: 'e120-1907-1', bedrooms: 1, floor: 'Unit 1', available: true },
      { id: 'e120-1907-2', bedrooms: 1, floor: 'Unit 2', available: true },
      { id: 'e120-1907-3', bedrooms: 2, floor: 'Unit 3', available: true },
      { id: 'e120-1907-4', bedrooms: 2, floor: 'Unit 4', available: true },
    ],
    features: ['Near University Circle', 'Updated Kitchen', 'On-Site Laundry'],
    nearbySchools: ['Case Western Reserve University', 'Cleveland Institute of Art'],
    images: [],
  },
  {
    id: 'fairview-court-12306',
    address: '12306 Fairview Court',
    city: 'Cleveland',
    state: 'OH',
    zip: '44106',
    neighborhood: 'Cleveland',
    propertyType: 'multi-family',
    units: [
      { id: 'fairview-12306-1', bedrooms: 2, floor: 'Unit 1', available: true },
      { id: 'fairview-12306-2', bedrooms: 4, floor: 'Unit 2', available: true },
    ],
    features: ['Quiet Street', 'Updated Kitchen', 'Off-Street Parking'],
    nearbySchools: ['Case Western Reserve University'],
    images: [],
  },
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find(p => p.id === id);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter(p => p.featured);
}

export function getSummerSubletProperties(): Property[] {
  return properties.filter(p => p.summerSublet);
}

export function getPropertiesByNeighborhood(neighborhood: string): Property[] {
  return properties.filter(p => p.neighborhood === neighborhood);
}

export function getPropertiesByBedrooms(bedrooms: number): Property[] {
  return properties.filter(p => p.units.some(u => u.bedrooms === bedrooms));
}

export function getTotalBedrooms(): number {
  return properties.reduce((total, p) => {
    return total + p.units.reduce((unitTotal, u) => unitTotal + u.bedrooms, 0);
  }, 0);
}

export function getSummerSubletBedrooms(): number {
  return getSummerSubletProperties().reduce((total, p) => {
    return total + p.units.reduce((unitTotal, u) => unitTotal + u.bedrooms, 0);
  }, 0);
}
