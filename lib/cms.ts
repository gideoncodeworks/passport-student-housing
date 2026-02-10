const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'https://dashboard.gideoncode.com'
const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN || ''

export interface CMSBrand {
  name: string
  domain: string
  logo: string | null
  primaryColor: string | null
  secondaryColor: string | null
  accentColor: string | null
  fontFamily: string | null
}

export interface CMSContact {
  email: string
  phone: string | null
  address: string | null
}

export interface CMSPage {
  id: string
  slug: string
  title: string
  content: string
  structuredData: Record<string, unknown> | null
  metaTitle: string | null
  metaDesc: string | null
  showInNav: boolean
  navOrder: number
  template: string
}

export interface CMSAnnouncement {
  id: string
  title: string
  message: string
  type: 'info' | 'warning' | 'alert' | 'success'
  backgroundColor: string | null
  textColor: string | null
  dismissible: boolean
  priority: number
}

export interface CMSNavItem {
  title: string
  slug: string
  order: number
}

export interface CMSSiteData {
  brand: CMSBrand
  contact: CMSContact
  socialMedia: Record<string, string>
  seo: {
    defaultMetaTitle: string | null
    defaultMetaDescription: string | null
    favicon: string | null
  }
  pages: CMSPage[]
  announcements: CMSAnnouncement[]
  navigation: CMSNavItem[]
}

// Fetch all site data from CMS
export async function getSiteData(): Promise<CMSSiteData | null> {
  try {
    const res = await fetch(`${CMS_URL}/api/public/${SITE_DOMAIN}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error('Error fetching CMS data:', error)
    return null
  }
}

// Fetch a single page by slug
export async function getPage(slug: string): Promise<CMSPage | null> {
  try {
    const res = await fetch(`${CMS_URL}/api/public/${SITE_DOMAIN}/pages/${slug}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

// Submit a form to the CMS
export async function submitForm(formData: {
  formType: string
  name?: string
  email?: string
  phone?: string
  message?: string
  data?: Record<string, unknown>
}): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch(`${CMS_URL}/api/public/${SITE_DOMAIN}/forms`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    if (!res.ok) {
      const error = await res.json()
      return { success: false, error: error.message || 'Submission failed' }
    }
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Network error' }
  }
}

// Fallback data for when CMS is unavailable
export const fallbackSiteData: CMSSiteData = {
  brand: {
    name: 'Passport Student Housing',
    domain: 'passportstudenthoming.com',
    logo: null,
    primaryColor: '#1e40af',
    secondaryColor: '#dc2626',
    accentColor: '#f59e0b',
    fontFamily: null,
  },
  contact: {
    email: 'info@passportstudenthoming.com',
    phone: '(216) 702-7666',
    address: 'Cleveland Heights, OH',
  },
  socialMedia: {
    youtube: 'https://youtube.com',
  },
  seo: {
    defaultMetaTitle: 'Passport Student Housing | Cleveland Heights & University Circle Rentals',
    defaultMetaDescription: 'Quality student and young professional housing near Case Western Reserve University, Cleveland Clinic, and University Circle. Affordable apartments and houses in Cleveland Heights.',
    favicon: null,
  },
  pages: [],
  announcements: [],
  navigation: [
    { title: 'Home', slug: '/', order: 0 },
    { title: 'Properties', slug: '/properties', order: 1 },
    { title: 'Summer Sublets', slug: '/summer-sublets', order: 2 },
    { title: 'About', slug: '/about', order: 3 },
    { title: 'Contact', slug: '/contact', order: 4 },
  ],
}
