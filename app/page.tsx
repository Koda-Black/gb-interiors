import SiteHeader from './site-header';
import BrandLockup from './brand-lockup';

const whatsappBase = 'https://wa.me/2348165006404';
const whatsapp = `${whatsappBase}?text=${encodeURIComponent("Hello GB Interiors, I'd like to discuss a space.")}`;

const projects = [
  { title: 'After Dark', type: 'Restaurant + Bar', place: 'Hospitality', image: '/restaurant-bar.webp', description: 'Layered amber light, curved seating and a bar designed to hold the room.' },
  { title: 'Quiet Luxury', type: 'Private Residence', place: 'Living', image: '/hero-interior.webp', description: 'A sculptural focal point set against calm stone, timber and soft texture.' },
  { title: 'Gathered Light', type: 'Kitchen + Dining', place: 'Residential', image: '/kitchen.webp', description: 'A generous stone island and warm oak joinery built for everyday rituals.' },
  { title: 'The Lagos Suite', type: 'Boutique Hotel', place: 'Hospitality', image: '/hotel-suite.webp', description: 'A restful suite composed in cocoa, sand and subtle local craft.' },
  { title: 'Grace in Form', type: 'Sanctuary', place: 'Worship', image: '/sanctuary.webp', description: 'Warm timber rhythms and balanced light create a welcoming place to gather.' },
  { title: 'Made for Decisions', type: 'Executive Office', place: 'Workplace', image: '/executive-office.webp', description: 'Confident curves, tactile surfaces and a boardroom with measured presence.' },
];

const services = [
  { n: '01', title: 'Interior design + space planning', copy: 'Concept direction, spatial layouts, material palettes, lighting and detailed specifications for a coherent whole.' },
  { n: '02', title: 'Residential interiors', copy: 'Homes, kitchens, living rooms and private spaces shaped around the way you actually live.' },
  { n: '03', title: 'Hospitality + leisure', copy: 'Memorable restaurants, bars, hotels and clubs designed to turn atmosphere into an experience.' },
  { n: '04', title: 'Workplace + commercial', copy: 'Business places, offices and customer-facing spaces that communicate clarity, confidence and care.' },
  { n: '05', title: 'Bespoke furniture + sourcing', copy: 'Breathtaking made-to-measure furniture, premium asset sourcing, art, accessories and finishing pieces.' },
  { n: '06', title: 'Renovation + project delivery', copy: 'Trusted coordination from drawings and procurement through site supervision, installation and final styling.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InteriorDesigner',
  name: 'GB Interiors',
  url: 'https://gb-interiors.tzarkprovince.chatgpt.site',
  telephone: '+2348165006404',
  description: 'Registered premium interior design business serving homes, hospitality, worship and commercial spaces across Nigeria.',
  areaServed: { '@type': 'Country', name: 'Nigeria' },
  address: [
    { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
    { '@type': 'PostalAddress', addressLocality: 'Benin City', addressRegion: 'Edo', addressCountry: 'NG' },
  ],
  contactPoint: { '@type': 'ContactPoint', telephone: '+2348165006404', contactType: 'customer support', availableLanguage: 'English' },
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader />

      <section className="hero" id="top">
        <div className="grid-surface" aria-hidden="true" />
        <h1>
          <span>Spaces,</span>
          <em>reimagined</em>
          <span>beautifully <b aria-hidden="true">✦</b></span>
        </h1>
        <p className="hero-copy">
          Premium interiors, made-to-measure furniture and meticulous execution for homes, hospitality and business spaces across Nigeria.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="/gallery#all-projects">Explore our work <span>↗</span></a>
          <a className="button button-ghost" href="#about">Discover GB</a>
        </div>
        <div className="hero-image-wrap">
          <div className="corner-cut" aria-hidden="true" />
          <img src="/hero-interior.webp" alt="Sculptural burnt-orange lounge chair in a serene contemporary interior" fetchPriority="high" />
        </div>
        <span className="hero-plus plus-one" aria-hidden="true">+</span>
        <span className="hero-plus plus-two" aria-hidden="true">+</span>
        <p className="hero-note">Registered interior design business · Lagos + Benin</p>
      </section>

      <section className="capability-ribbon" aria-label="GB Interiors project coverage">
        <span>Homes</span><i>✦</i><span>Restaurants</span><i>✦</i><span>Hotels</span><i>✦</i><span>Offices</span><i>✦</i><span>Worship</span><i>✦</i><span>Nationwide</span>
      </section>

      <section className="projects section-pad" id="gallery-preview">
        <div className="section-intro reveal">
          <p className="eyebrow">Selected environments</p>
          <h2>Every space,<br /><em>tailored uniquely</em><br />for you.</h2>
          <div className="intro-side">
            <p>From a single room to a complete destination, each project begins with listening and ends with details that feel inevitable.</p>
            <a className="circle-link" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Start a project on WhatsApp">↓</a>
          </div>
        </div>

        <div className="project-grid">
          {projects.slice(0, 3).map((project, index) => (
            <article className={`project-card reveal project-${index + 1}`} key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={`${project.type} interior — ${project.description}`} loading={index < 2 ? 'eager' : 'lazy'} />
                <span>{project.place}</span>
              </div>
              <div className="project-meta">
                <div><p>{project.type}</p><h3>{project.title}</h3></div>
                <a href={`${whatsappBase}?text=${encodeURIComponent(`Hello GB Interiors, I would like a design inspired by “${project.title}” (${project.type}) reimagined for my space.\n\n${project.description}\n\nReference image: https://gb-interiors.tzarkprovince.chatgpt.site${project.image}`)}`} target="_blank" rel="noreferrer" aria-label={`Enquire about ${project.title}`}>↗</a>
              </div>
              <p className="project-description">{project.description}</p>
            </article>
          ))}
        </div>
        <div className="gallery-cta-row reveal">
          <p>See the complete collection of residential, hospitality, worship and workplace environments.</p>
          <a className="button button-primary" href="/gallery">View the full gallery <span>↗</span></a>
        </div>
      </section>

      <section className="expertise section-pad" id="services">
        <div className="expertise-heading reveal">
          <p className="eyebrow">What we shape</p>
          <h2>Ideas become<br /><em>beautifully resolved</em><br />spaces.</h2>
        </div>
        <div className="expertise-layout">
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row reveal" key={service.n}>
                <span>{service.n}</span>
                <div><h3>{service.title}</h3><p>{service.copy}</p></div>
                <b aria-hidden="true">+</b>
              </article>
            ))}
          </div>
          <aside className="proof-card reveal">
            <p className="eyebrow">The GB standard</p>
            <h3>One team. Every considered detail.</h3>
            <p>We combine creative direction with disciplined project care, selecting premium assets and managing the journey from first sketch to the final cushion.</p>
            <div className="proof-grid">
              <div><strong>500+</strong><span>Clients served<br />with care</span></div>
              <div><strong>02</strong><span>Home offices<br />Lagos + Benin</span></div>
              <div><strong>NG</strong><span>Projects delivered<br />across Nigeria</span></div>
              <div><strong>01</strong><span>Dedicated team<br />start to finish</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="furniture-feature section-pad">
        <div className="feature-collage reveal" aria-hidden="true">
          <div className="feature-img feature-img-a"><img src="/restaurant-bar.webp" alt="" loading="lazy" /></div>
          <div className="feature-img feature-img-b"><img src="/hero-interior.webp" alt="" loading="lazy" /></div>
          <span>+</span>
          <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Discuss bespoke furniture on WhatsApp">→</a>
        </div>
        <div className="feature-copy reveal">
          <p className="eyebrow">Furniture + sourcing</p>
          <h2>Rooms made<br />remarkable by<br /><em>what lives in them.</em></h2>
          <p>We source exceptional pieces and create bespoke furniture when the right piece does not yet exist. Proportion, comfort, finish and longevity are considered together.</p>
          <a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Source or create with us <span>↗</span></a>
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="about-copy reveal">
          <p className="eyebrow">About GB Interiors</p>
          <h2>Vision,<br /><em>brought to life</em><br />with conviction.</h2>
          <p className="about-lede">GB Interiors is a registered interior design business committed to making ambitious spaces feel effortless, personal and enduring.</p>
          <p>Our practice is built on attentive listening, professional coordination and a sharp eye for quality. Whether we are rethinking a family kitchen, a busy restaurant, a hotel suite, a church sanctuary or an executive office, we hold the concept and the craft to the same high standard.</p>
        </div>
        <div className="about-visual reveal">
          <img src="/executive-office.webp" alt="Premium boardroom with custom curved timber walls and sculptural seating" loading="lazy" />
          <div className="about-badge"><strong>Registered</strong><span>Nigerian business</span></div>
        </div>
        <div className="values reveal">
          <div><span>01</span><h3>Intentional</h3><p>Every choice earns its place.</p></div>
          <div><span>02</span><h3>Professional</h3><p>Clear care from brief to handover.</p></div>
          <div><span>03</span><h3>Dedicated</h3><p>Your outcome stays at the centre.</p></div>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-top reveal">
          <p className="eyebrow">Begin a conversation</p>
          <h2>Are you ready to<br /><em>reimagine your space?</em></h2>
          <a className="round-cta" href={whatsapp} target="_blank" rel="noreferrer"><span>WhatsApp us</span><b>↗</b></a>
        </div>
        <div className="contact-details reveal">
          <div><p>Home offices</p><strong>Lagos<br />Benin City</strong></div>
          <div><p>Support + enquiries</p><a href="tel:+2348165006404">+234 816 500 6404</a></div>
          <div><p>Project reach</p><strong>Available across<br />Nigeria</strong></div>
          <div><p>Social</p><span>Instagram — soon</span><span>TikTok — soon</span></div>
        </div>
        <div className="giant-brand" aria-label="GB Interiors — Creating your dream home">
          <BrandLockup display />
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} GB Interiors</span>
        <span>Registered interior design business</span>
        <a href="#top">Back to top ↑</a>
      </footer>

      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with GB Interiors on WhatsApp">
        <span>WhatsApp</span>
        <span className="whatsapp-icon-wrap" aria-hidden="true">
          <svg className="whatsapp-icon" viewBox="0 0 32 32" focusable="false">
            <path d="M16.03 4.8a10.95 10.95 0 0 0-9.44 16.5L5.03 27l5.83-1.53a10.96 10.96 0 1 0 5.17-20.67Zm0 19.93c-1.6 0-3.17-.43-4.54-1.24l-.33-.2-3.46.91.92-3.37-.22-.35a8.97 8.97 0 1 1 7.63 4.25Zm3.08-7.27c-.26-.13-1.53-.75-1.77-.84-.24-.09-.42-.13-.6.13-.18.26-.69.84-.84 1.02-.16.18-.31.2-.57.07-.26-.13-1.1-.4-2.09-1.29-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.16.17-.26.26-.44.09-.18.04-.33-.02-.46-.07-.13-.6-1.44-.82-1.98-.22-.52-.44-.45-.6-.46h-.51c-.18 0-.46.07-.71.33-.24.26-.93.91-.93 2.22s.95 2.57 1.08 2.75c.13.18 1.87 2.86 4.53 4.01.63.27 1.13.44 1.51.56.64.2 1.21.17 1.67.1.51-.08 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.06-.11-.24-.18-.5-.31Z" />
          </svg>
        </span>
      </a>
    </main>
  );
}
