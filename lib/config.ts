export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'boilerhaus',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://boilerhaus.com',
  description: 'boilerhaus - Personal brand and Web3 hub',
  links: {
    twitter: 'https://twitter.com/boilerrat',
    github: 'https://github.com/boilerrat',
    substack: 'https://boiler.substack.com',
  },
  nav: [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' },
  ],
}
