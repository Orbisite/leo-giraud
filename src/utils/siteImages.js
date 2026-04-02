import { API_IMG_BASE } from '../config/remoteData'

export function resolveMediaUrl(base, value) {
  if (!value || typeof value !== 'string') {
    return undefined
  }
  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value
  }
  if (base && typeof base === 'string') {
    const b = base.replace(/\/$/, '')
    const p = value.replace(/^\//, '')
    return `${b}/${p}`
  }
  return value
}

export function extractContentImages(content) {
  const img = content?.images
  if (!img || typeof img !== 'object') {
    return null
  }
  const r = (v) => resolveMediaUrl(API_IMG_BASE, v)
  return {
    logo: r(img.logoSrc ?? img.logo),
    hero: r(img.hero),
    about: r(img.about),
    favicon: r(img.favicon),
    ogImage: r(img.ogImage),
    gallery: Array.isArray(img.gallery) ? img.gallery.map((u) => r(u)).filter(Boolean) : undefined,
  }
}
