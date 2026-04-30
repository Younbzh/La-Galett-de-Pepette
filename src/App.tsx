import React from 'react';
import { Phone, MapPin, Clock, Star, Heart, Check, Leaf, ChevronRight, UtensilsCrossed } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

const A = '#f2c932';   // accent jaune doré
const D = '#0f0f0d';   // dark
const D2 = '#1a1917';  // dark-2
const C = '#f5ede0';   // cream text
const B = '#3d2e1e';   // body text
const S = '#f0e6cf';   // sand

const valueIcons = {
  leaf:  Leaf,
  star:  Star,
  heart: Heart,
  check: Check,
};

function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/foodtruck-audrey.jpeg')" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(10,10,8,.88) 0%, rgba(15,12,8,.72) 55%, rgba(10,10,8,.92) 100%)' }}
        />

        {/* Grain texture subtil */}
        <div className="absolute inset-0 opacity-[.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative z-10 flex flex-col items-center text-center px-4 space-y-7 pt-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{ background: A, color: D }}>
            Food Truck · Pays de Vitré · Ille-et-Vilaine
          </div>

          {/* Titre */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight drop-shadow-2xl">
            La Galett'<br />
            <span style={{ color: A }}>de Pépette</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl font-semibold max-w-lg" style={{ color: C }}>
            Crêpes & Galettes <strong style={{ color: A }}>faites maison</strong><br />
            aux produits locaux du pays de Vitré
          </p>

          {/* CTA */}
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-3 px-8 py-4 rounded-full font-black text-lg transition-all duration-300 hover:scale-105 shadow-2xl mt-2"
            style={{ background: A, color: D }}
          >
            <Phone className="w-5 h-5" />
            {siteConfig.contact.phone}
          </a>

          <div className="pt-6 animate-bounce" style={{ color: A }}>
            <ChevronRight className="w-6 h-6 rotate-90" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 72" fill="none" className="w-full">
            <path d="M0,36 Q360,0 720,36 T1440,36 L1440,72 L0,72 Z" fill="#faf8f2" />
          </svg>
        </div>
      </header>

      {/* ── ACCROCHE BANDE ───────────────────────────────────── */}
      <section className="py-9 text-center" style={{ background: D }}>
        <p className="text-sm sm:text-base font-bold uppercase tracking-widest" style={{ color: A }}>
          100 % maison · Ingrédients locaux · Carte de saison
        </p>
      </section>

      {/* ── HISTOIRE D'AUDREY ────────────────────────────────── */}
      <section className="py-20" style={{ background: '#faf8f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Photo */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: S }}>
                <img
                  src="/audrey-gerante.avif"
                  alt="Audrey Renou, gérante de La Galett' de Pépette"
                  className="w-full h-80 lg:h-[520px] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-44 h-44 rounded-full blur-3xl opacity-30"
                style={{ background: A }} />
            </div>

            {/* Texte */}
            <div className="space-y-6">
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: A }}>L'histoire</p>
              <h2 className="text-4xl sm:text-5xl font-black leading-tight" style={{ color: D }}>
                De l'aide-soignante<br />à la crêpière
              </h2>
              {siteConfig.founder.story.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed" style={{ color: B }}>{para}</p>
              ))}
              <blockquote className="pl-5 py-1 text-xl italic font-semibold"
                style={{ borderLeft: `4px solid ${A}`, color: B }}>
                «&nbsp;{siteConfig.founder.quote}&nbsp;»
              </blockquote>
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  'Maître crêpier · Rennes',
                  'Produits locaux',
                  'Reconversion 2024',
                ].map((tag, i) => (
                  <span key={i} className="px-4 py-2 rounded-full text-sm font-bold"
                    style={{ background: S, color: B }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALEURS ──────────────────────────────────────────── */}
      <section className="py-16" style={{ background: D2 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: A }}>Nos engagements</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Ce qui fait la différence</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.values.map((value, idx) => {
              const Icon = valueIcons[value.icon as keyof typeof valueIcons];
              return (
                <div key={idx} className="rounded-2xl p-7 text-center space-y-4"
                  style={{ background: 'rgba(255,255,255,.04)', border: `1px solid rgba(242,201,50,.2)` }}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl"
                    style={{ background: 'rgba(242,201,50,.15)' }}>
                    <Icon className="w-7 h-7" style={{ color: A }} />
                  </div>
                  <h3 className="font-black text-lg text-white">{value.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#9a8a72' }}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CARTE ────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: '#faf8f2' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: A }}>La carte</p>
            <h2 className="text-4xl sm:text-5xl font-black" style={{ color: D }}>Galettes & Crêpes</h2>
            <p className="mt-4 text-base" style={{ color: '#7a6a56' }}>{siteConfig.menu.note}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Galettes */}
            <div className="rounded-3xl p-8 shadow-lg border-2" style={{ background: '#fff', borderColor: S }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🌾</span>
                <h3 className="text-2xl font-black" style={{ color: D }}>Galettes</h3>
                <span className="ml-auto text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full"
                  style={{ background: S, color: B }}>Blé noir</span>
              </div>
              <ul className="space-y-4">
                {siteConfig.menu.galettes.map((item, i) => (
                  <li key={i} className="flex flex-col border-b pb-4 last:border-0 last:pb-0"
                    style={{ borderColor: '#f0e6cf' }}>
                    <span className="font-black text-base" style={{ color: D }}>{item.name}</span>
                    <span className="text-sm mt-0.5" style={{ color: '#7a6a56' }}>{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Crêpes */}
            <div className="rounded-3xl p-8 shadow-lg border-2" style={{ background: '#fff', borderColor: S }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🥞</span>
                <h3 className="text-2xl font-black" style={{ color: D }}>Crêpes</h3>
                <span className="ml-auto text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full"
                  style={{ background: S, color: B }}>Froment</span>
              </div>
              <ul className="space-y-4">
                {siteConfig.menu.crepes.map((item, i) => (
                  <li key={i} className="flex flex-col border-b pb-4 last:border-0 last:pb-0"
                    style={{ borderColor: '#f0e6cf' }}>
                    <span className="font-black text-base" style={{ color: D }}>{item.name}</span>
                    <span className="text-sm mt-0.5" style={{ color: '#7a6a56' }}>{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Note saisonnière */}
          <div className="mt-8 text-center">
            <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold"
              style={{ background: S, color: B }}>
              <UtensilsCrossed className="w-4 h-4" style={{ color: A }} />
              Tarifs et carte complets disponibles sur place ou par téléphone
            </span>
          </div>
        </div>
      </section>

      {/* ── NOS PRODUCTEURS ──────────────────────────────────── */}
      <section className="py-16" style={{ background: D }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: A }}>Terroir local</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Nos producteurs</h2>
            <p className="mt-3 text-base" style={{ color: '#9a8a72' }}>
              Audrey cherche au maximum du local et de saison — voici ceux qui font la différence dans l'assiette.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {siteConfig.sourcing.map((s, i) => (
              <div key={i} className="rounded-2xl p-6 text-center space-y-3"
                style={{ background: 'rgba(255,255,255,.05)', border: `1px solid rgba(242,201,50,.2)` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl"
                  style={{ background: 'rgba(242,201,50,.15)' }}>
                  <Leaf className="w-6 h-6" style={{ color: A }} />
                </div>
                <p className="font-black text-white text-base">{s.product}</p>
                <p className="text-sm font-semibold" style={{ color: A }}>{s.origin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANNING ─────────────────────────────────────────── */}
      <section className="py-20" style={{ background: '#faf8f2' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: A }}>Où nous trouver</p>
            <h2 className="text-4xl sm:text-5xl font-black" style={{ color: D }}>Planning de la semaine</h2>
          </div>

          <div className="space-y-3">
            {siteConfig.schedule.map((slot, idx) => (
              <div key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-5 rounded-2xl border-2 transition-all hover:shadow-md"
                style={{ background: '#fff', borderColor: S }}>
                <div className="flex items-center gap-4">
                  <span className="w-28 text-sm font-black uppercase" style={{ color: A }}>{slot.day}</span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: B }}>
                    <Clock className="w-4 h-4" style={{ color: A }} />
                    {slot.time}
                  </span>
                </div>
                <div className="flex flex-col sm:items-end gap-0.5">
                  <span className="flex items-center gap-1.5 text-sm font-black" style={{ color: D }}>
                    <MapPin className="w-4 h-4" style={{ color: A }} />
                    {slot.location}
                  </span>
                  <span className="text-xs font-medium pl-5 sm:pl-0" style={{ color: '#7a6a56' }}>{slot.detail}</span>
                </div>
              </div>
            ))}

            {/* Lundi recherché */}
            <div className="flex items-center justify-between gap-2 px-6 py-5 rounded-2xl border-2 border-dashed"
              style={{ borderColor: 'rgba(242,201,50,.4)', background: 'rgba(242,201,50,.05)' }}>
              <div className="flex items-center gap-4">
                <span className="w-28 text-sm font-black uppercase" style={{ color: '#9a8a72' }}>Lundi</span>
                <span className="text-sm font-semibold" style={{ color: '#9a8a72' }}>Emplacement recherché</span>
              </div>
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="text-xs font-black px-4 py-2 rounded-full transition hover:scale-105"
                style={{ background: 'rgba(242,201,50,.15)', color: A }}>
                Proposer un lieu →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MASCOTTE ─────────────────────────────────────────── */}
      <section className="py-16" style={{ background: D2 }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: A }}>La mascotte</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                La petite Bretonne<br />du camion noir
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: C }}>
                {siteConfig.mascotte.description}
              </p>
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-black text-base transition-all duration-300 hover:scale-105 shadow-xl"
                style={{ background: A, color: D }}>
                <Phone className="w-5 h-5" />
                Trouver le camion
              </a>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: 'rgba(242,201,50,.35)' }}>
                <img
                  src="/foodtruck-audrey.jpeg"
                  alt="Le food truck La Galett' de Pépette"
                  className="w-full h-72 lg:h-96 object-cover"
                />
              </div>
              <div className="absolute -top-5 -right-5 w-36 h-36 rounded-full blur-3xl opacity-25"
                style={{ background: A }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section className="py-20" style={{ background: '#faf8f2' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: A }}>Contact</p>
            <h2 className="text-4xl sm:text-5xl font-black" style={{ color: D }}>
              Une question ?<br />Appelez Pépette !
            </h2>
          </div>
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-105 shadow-2xl"
            style={{ background: D, color: A }}
          >
            <Phone className="w-6 h-6" />
            {siteConfig.contact.phone}
          </a>
          <p className="text-sm" style={{ color: '#7a6a56' }}>
            Disponible pour les événements professionnels et privés.
          </p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="py-10" style={{ background: '#080807' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-black text-xl" style={{ color: A }}>{siteConfig.name}</p>
              <p className="text-sm" style={{ color: '#6b5e4e' }}>{siteConfig.tagline}</p>
            </div>
            <div className="text-center" style={{ color: '#6b5e4e' }}>
              <p className="text-sm">&copy; {new Date().getFullYear()} La Galett' de Pépette · Audrey Renou</p>
              <p className="text-xs mt-1">
                Site créé par{' '}
                <a href="https://mlle-cindy.fr" target="_blank" rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors duration-200 underline"
                  style={{ color: A }}>
                  MlleCindy
                </a>
              </p>
            </div>
            <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{ background: 'rgba(242,201,50,.15)', color: A }}>
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Poppins', sans-serif; }

        @keyframes bounce {
          0%, 100% { transform: translateY(0) rotate(90deg); }
          50%       { transform: translateY(8px) rotate(90deg); }
        }
        .animate-bounce { animation: bounce 1.6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

export default App;
