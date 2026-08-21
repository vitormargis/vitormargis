// Single source of truth for social profiles and contact info.
// Consumed by the layout social rail, the hello contact page, and the
// Person JSON-LD `sameAs`, so the sets can no longer diverge.
export const socialLinks = [
  { href: 'https://github.com/vitormargis', label: 'GITHUB' },
  { href: 'https://linkedin.com/in/vitormargis', label: 'LINKEDIN' },
  { href: 'https://twitter.com/vitormargis', label: 'TWITTER' },
  { href: 'https://youtube.com/@vitormargis', label: 'YOUTUBE' },
  { href: 'https://instagram.com/vitormargis', label: 'INSTAGRAM' },
  { href: 'https://adplist.org/mentors/vitor-margis', label: 'ADPLIST' },
];

// Email is a contact method, not a social profile — only the contact page uses it.
export const email = { href: 'mailto:vitor@margis.com.br', label: 'EMAIL' };

// Profile URLs for the Person JSON-LD `sameAs`.
export const sameAs = socialLinks.map(({ href }) => href);
