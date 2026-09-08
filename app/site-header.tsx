const whatsapp = `https://wa.me/2348165006404?text=${encodeURIComponent("Hello GB Interiors, I'd like to discuss a space.")}`;

type SiteHeaderProps = {
  page?: 'home' | 'gallery';
};

export default function SiteHeader({ page = 'home' }: SiteHeaderProps) {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: page === 'home' ? '#about' : '/#about' },
    { label: 'Services', href: page === 'home' ? '#services' : '/#services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: page === 'home' ? '#contact' : '/#contact' },
  ];

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="GB Interiors home">
        <span className="brand-mark" aria-hidden="true">✦</span>
        <span>GB INTERIORS</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.slice(1).map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}
      </nav>

      <a className="desktop-talk" href={whatsapp} target="_blank" rel="noreferrer">
        <span>Let&apos;s talk</span><span aria-hidden="true">↗</span>
      </a>

      <details className="mobile-menu">
        <summary aria-label="Open navigation menu">
          <span className="menu-icon" aria-hidden="true"><i /><i /></span>
        </summary>
        <div className="mobile-menu-panel">
          <nav aria-label="Mobile navigation">
            {links.map((link, index) => (
              <a href={link.href} key={link.label}><span>{String(index + 1).padStart(2, '0')}</span>{link.label}</a>
            ))}
          </nav>
          <a className="mobile-talk" href={whatsapp} target="_blank" rel="noreferrer">Start a project on WhatsApp <span>↗</span></a>
        </div>
      </details>
    </header>
  );
}

