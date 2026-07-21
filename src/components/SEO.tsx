import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

/**
 * SEO component — sets document.title and meta tags via useEffect.
 * Works with any React app without needing react-helmet.
 */
export default function SEO({ title, description, image, url }: SEOProps) {
  const fullTitle = `${title} | Gabby's Gadget`;
  const desc = description || "Buy, sell & swap the latest gadgets in Nigeria. iPhones, Samsung, Laptops, Gaming and more at Gabby's Gadget.";
  const ogImage = image || 'https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&q=80&w=1200';
  const pageUrl = url || window.location.href;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    const setMeta = (name: string, content: string, prop = false) => {
      const selector = prop
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        if (prop) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Standard meta
    setMeta('description', desc);

    // Open Graph
    setMeta('og:title',       fullTitle,  true);
    setMeta('og:description', desc,       true);
    setMeta('og:image',       ogImage,    true);
    setMeta('og:url',         pageUrl,    true);
    setMeta('og:type',        'website',  true);

    // Twitter card
    setMeta('twitter:card',        'summary_large_image');
    setMeta('twitter:title',       fullTitle);
    setMeta('twitter:description', desc);
    setMeta('twitter:image',       ogImage);

    return () => {
      document.title = "Gabby's Gadget — Smart Modern Gadgets";
    };
  }, [fullTitle, desc, ogImage, pageUrl]);

  return null;
}
