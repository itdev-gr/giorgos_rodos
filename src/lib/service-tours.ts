/** Shared tour-fetch helper for service pages with Supabase catalog. */
import { createReadClient } from './supabase';
import { tourCardAlt } from './tour-alt';

export interface ExperienceCardData {
  title: string;
  description: string;
  image: string;
  duration: string;
  guests: string;
  badge: string;
  price: string;
  href: string;
  imageAlt: string;
}

export function mapTourToExperience(t: any): ExperienceCardData {
  const duration = t.duration || '';
  const badge = t.badge_label || duration || '';
  return {
    title: t.title,
    description: t.description || '',
    image: t.image_url || t.images?.[0] || '/assets/img/gallery/yacht/crystal-water-1.jpg',
    duration,
    guests: t.guests || '',
    badge,
    price: t.price || '',
    href: `/tour-detail/${t.slug || t.id}`,
    imageAlt: tourCardAlt(t.title, t.badge_label),
  };
}

export async function fetchAllApprovedExperiences(): Promise<ExperienceCardData[]> {
  try {
    const supabase = createReadClient();
    if (!supabase) return [];
    const { data, error } = await supabase
      .from('tours')
      .select('*')
      .eq('status', 'approved')
      .neq('service_page', 'rhodes-charter')
      .order('is_global', { ascending: false })
      .order('created_at', { ascending: false });
    if (error) {
      console.error('[fetchAllApprovedExperiences]', error.message);
      return [];
    }
    return (data || []).map(mapTourToExperience);
  } catch (err) {
    console.error('[fetchAllApprovedExperiences]', err);
    return [];
  }
}

export async function fetchServiceTours(servicePage: string, mapExtra?: (t: any) => Record<string, unknown>) {
  try {
    const supabase = createReadClient();
    if (!supabase) return [];
    const { data } = await supabase
      .from('tours')
      .select('*')
      .or(`service_page.eq.${servicePage},is_global.eq.true`)
      .eq('status', 'approved')
      .order('is_global', { ascending: false })
      .order('created_at', { ascending: false });
    return (data || []).map((t: any) => ({
      title: t.title,
      description: t.description,
      image: t.image_url || t.images?.[0] || '/assets/img/gallery/yacht/crystal-water-1.jpg',
      duration: t.duration || '',
      guests: t.guests || '',
      badge: t.badge_label || '',
      price: t.price || '',
      href: `/tour-detail/${t.slug || t.id}`,
      imageAlt: tourCardAlt(t.title, t.badge_label),
      ...(mapExtra ? mapExtra(t) : {}),
    }));
  } catch {
    return [];
  }
}

export async function fetchCharterTours(mapDescription: (t: any) => string) {
  try {
    const supabase = createReadClient();
    if (!supabase) return [];
    const { data } = await supabase
      .from('tours')
      .select('*')
      .or('service_page.eq.rhodes-charter,service_page.eq.rodos-charter')
      .eq('status', 'approved')
      .order('created_at', { ascending: false });
    return (data || []).map((t: any) => ({
      title: t.title,
      description: mapDescription(t),
      image: t.image_url || t.images?.[0] || '/assets/img/gallery/yacht/crystal-water-1.jpg',
      duration: t.duration || '',
      guests: t.guests || '',
      type: t.badge_label || '',
      price: t.price || '',
      href: `/tour-detail/${t.slug || t.id}`,
      imageAlt: tourCardAlt(t.title, t.badge_label),
    }));
  } catch {
    return [];
  }
}
