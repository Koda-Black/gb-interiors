import type { Metadata } from 'next';
import SiteHeader from '../site-header';

const whatsapp = `https://wa.me/2348165006404?text=${encodeURIComponent("Hello GB Interiors, I'd like to discuss a project I saw in your gallery.")}`;

const projects = [
  { title: 'After Dark', type: 'Restaurant + Bar', place: 'Hospitality', image: '/restaurant-bar.webp', description: 'Layered amber light, curved terracotta seating and a glowing bar give this destination its intimate rhythm.' },
  { title: 'Quiet Luxury', type: 'Private Residence', place: 'Living', image: '/hero-interior.webp', description: 'A sculptural focal point set against calm stone, warm brass and finely fluted surfaces.' },
  { title: 'Gathered Light', type: 'Kitchen + Dining', place: 'Residential', image: '/kitchen.webp', description: 'A generous stone island and warm oak joinery designed around everyday rituals and effortless hosting.' },
  { title: 'The Lagos Suite', type: 'Boutique Hotel', place: 'Hospitality', image: '/hotel-suite.webp', description: 'A restful guest experience composed in cocoa, sand, woven craft and a restrained sunset accent.' },
  { title: 'Grace in Form', type: 'Sanctuary', place: 'Worship', image: '/sanctuary.webp', description: 'Timber rhythms, balanced light and a clear central axis create a welcoming place to gather.' },
  { title: 'Made for Decisions', type: 'Executive Office', place: 'Workplace', image: '/executive-office.webp', description: 'Confident curves, tactile materials and a boardroom with quiet, measured presence.' },
];

export const metadata: Metadata = {
  title: 'Project Gallery',
  description: 'Explore residential, hospitality, workplace and worship interior design environments by GB Interiors in Nigeria.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'GB Interiors Project Gallery',
    description: 'Premium interiors for homes, hospitality, work and worship across Nigeria.',
    url: '/gallery',
    images: ['/og.png'],
  },
};

export default function GalleryPage() {
  return (
    <main className="gallery-page">
      <SiteHeader page="gallery" />

      <section className="gallery-hero">
        <p className="eyebrow">The project gallery · 01—06</p>
        <h1>A living archive<br />of <em>remarkable spaces.</em></h1>
        <div><p>Explore environments imagined for living, working, gathering, dining and resting—each shaped by its own story and purpose.</p><a className="circle-link" href="#all-projects" aria-label="View all gallery projects">↓</a></div>
      </section>

      <section className="gallery-list" id="all-projects" aria-label="GB Interiors project collection">
        {projects.map((project, index) => (
          <article className="gallery-project reveal" key={project.title}>
            <div className="gallery-project-image"><img src={project.image} alt={`${project.type} interior — ${project.description}`} loading={index < 2 ? 'eager' : 'lazy'} /><span>{String(index + 1).padStart(2, '0')} · {project.place}</span></div>
            <div className="gallery-project-copy"><div><p>{project.type}</p><h2>{project.title}</h2></div><p>{project.description}</p><a href={`https://wa.me/2348165006404?text=${encodeURIComponent(`Hello GB Interiors, I would like a design inspired by “${project.title}” (${project.type}) reimagined for my space.\n\n${project.description}\n\nReference image: https://gb-interiors.tzarkprovince.chatgpt.site${project.image}`)}`} target="_blank" rel="noreferrer" aria-label={`Discuss a project like ${project.title}`}>Redesign this for my space <span>↗</span></a></div>
          </article>
        ))}
      </section>

      <section className="gallery-end">
        <p className="eyebrow">Your space belongs here</p>
        <h2>Let&apos;s create what<br /><em>comes next.</em></h2>
        <a className="round-cta" href={whatsapp} target="_blank" rel="noreferrer"><span>WhatsApp us</span><b>↗</b></a>
      </section>

      <footer><span>© {new Date().getFullYear()} GB Interiors</span><span>Registered interior design business</span><a href="/">Return home ↑</a></footer>
    </main>
  );
}

