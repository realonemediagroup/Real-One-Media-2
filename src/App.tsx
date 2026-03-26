import React, { useState, useEffect } from 'react';
import { Play, Mic, PenTool, ArrowRight, Menu, X, ChevronRight } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-[var(--color-accent)] selection:text-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b-thin py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-display text-2xl md:text-3xl tracking-wide leading-none">REAL ONE</span>
            <span className="small-caps text-gold mt-1">Media Group</span>
          </div>
          
          <div className="hidden md:flex gap-12 small-caps items-center">
            <a href="#expertise" className="hover:text-gold transition-colors duration-300">Expertise</a>
            <a href="#portfolio" className="hover:text-gold transition-colors duration-300">Portfolio</a>
            <a href="#atelier" className="hover:text-gold transition-colors duration-300">Atelier</a>
            <button className="nav-pill small-caps">
              Commission Us
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-center items-center gap-8">
          <a href="#expertise" className="font-display text-4xl hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Expertise</a>
          <a href="#portfolio" className="font-display text-4xl hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
          <a href="#atelier" className="font-display text-4xl hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Atelier</a>
          <button className="nav-pill small-caps mt-8">
            Commission Us
          </button>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2500&auto=format&fit=crop" 
            alt="Studio Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <p className="small-caps text-gold mb-6 md:mb-8 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-gold"></span>
            Bespoke Production
          </p>
          <h1 className="font-display text-5xl md:text-8xl lg:text-[110px] leading-[0.9] font-light tracking-tight mb-8">
            Curating visual <br />
            <span className="italic text-gold">excellence.</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl font-light leading-relaxed text-muted mb-12">
            An exclusive media atelier specializing in high-end video, pristine audio engineering, and refined brand identities for the world's most discerning clients.
          </p>
          <button className="flex items-center gap-4 group">
            <span className="small-caps group-hover:text-gold transition-colors">Explore our universe</span>
            <div className="w-10 h-10 rounded-full border-thin flex items-center justify-center group-hover:border-gold transition-colors">
              <ArrowRight size={16} className="group-hover:text-gold transition-colors" strokeWidth={1} />
            </div>
          </button>
        </div>
      </header>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <p className="small-caps text-gold mb-4">Our Disciplines</p>
            <h2 className="font-display text-4xl md:text-6xl font-light">Mastery in motion.</h2>
          </div>
          <p className="max-w-md text-muted font-light leading-relaxed">
            We blend technical precision with artistic intuition to craft narratives that resonate on a profound level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Service 1 */}
          <div className="group">
            <div className="border-b-thin pb-8 mb-8">
              <span className="font-display text-5xl text-gold opacity-50 group-hover:opacity-100 transition-opacity">01</span>
            </div>
            <h3 className="font-display text-3xl mb-4">Cinematography</h3>
            <p className="text-muted font-light leading-relaxed mb-8">
              Commercials, documentaries, and brand films shot with cinematic rigor and unparalleled attention to detail.
            </p>
            <ul className="space-y-4 small-caps text-[10px] text-muted">
              <li className="flex items-center gap-3"><ChevronRight size={14} className="text-gold" /> Art Direction</li>
              <li className="flex items-center gap-3"><ChevronRight size={14} className="text-gold" /> Film Production</li>
              <li className="flex items-center gap-3"><ChevronRight size={14} className="text-gold" /> Color Grading</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="group">
            <div className="border-b-thin pb-8 mb-8">
              <span className="font-display text-5xl text-gold opacity-50 group-hover:opacity-100 transition-opacity">02</span>
            </div>
            <h3 className="font-display text-3xl mb-4">Sonic Architecture</h3>
            <p className="text-muted font-light leading-relaxed mb-8">
              Immersive soundscapes, pristine mixing, and bespoke scoring that elevate the emotional resonance of your brand.
            </p>
            <ul className="space-y-4 small-caps text-[10px] text-muted">
              <li className="flex items-center gap-3"><ChevronRight size={14} className="text-gold" /> Sound Design</li>
              <li className="flex items-center gap-3"><ChevronRight size={14} className="text-gold" /> Spatial Audio</li>
              <li className="flex items-center gap-3"><ChevronRight size={14} className="text-gold" /> Original Composition</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="group">
            <div className="border-b-thin pb-8 mb-8">
              <span className="font-display text-5xl text-gold opacity-50 group-hover:opacity-100 transition-opacity">03</span>
            </div>
            <h3 className="font-display text-3xl mb-4">Visual Identity</h3>
            <p className="text-muted font-light leading-relaxed mb-8">
              Sophisticated branding, typography, and design systems crafted for luxury and prestige markets.
            </p>
            <ul className="space-y-4 small-caps text-[10px] text-muted">
              <li className="flex items-center gap-3"><ChevronRight size={14} className="text-gold" /> Brand Strategy</li>
              <li className="flex items-center gap-3"><ChevronRight size={14} className="text-gold" /> Typography</li>
              <li className="flex items-center gap-3"><ChevronRight size={14} className="text-gold" /> Editorial Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 md:py-40 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <p className="small-caps text-gold mb-4">Selected Archives</p>
            <h2 className="font-display text-4xl md:text-6xl font-light">A legacy of elegance.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="img-hover-zoom aspect-[4/5] mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=2488&auto=format&fit=crop" 
                  alt="Fashion Editorial" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-3xl mb-2 group-hover:text-gold transition-colors">Maison Noir</h3>
                  <p className="small-caps text-muted">Fashion Film & Identity</p>
                </div>
                <span className="font-display italic text-xl text-muted">2025</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer md:mt-32">
              <div className="img-hover-zoom aspect-[4/5] mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2832&auto=format&fit=crop" 
                  alt="Architectural Visualization" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-3xl mb-2 group-hover:text-gold transition-colors">Aura Residences</h3>
                  <p className="small-caps text-muted">Cinematography & Sound</p>
                </div>
                <span className="font-display italic text-xl text-muted">2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-48 px-6 md:px-12 text-center border-t-thin border-b-thin relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]"></div>
        <div className="relative z-10">
          <p className="small-caps text-gold mb-8">Initiate a Dialogue</p>
          <h2 className="font-display text-5xl md:text-8xl font-light mb-12">
            Let us craft your <br className="hidden md:block" />
            <span className="italic">masterpiece.</span>
          </h2>
          <button className="nav-pill small-caps text-sm px-10 py-4 hover:border-gold hover:bg-gold hover:text-black">
            Request a Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          <div className="md:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-display text-3xl tracking-wide leading-none">REAL ONE</span>
              <span className="small-caps text-gold mt-1">Media Group</span>
            </div>
            <p className="text-muted font-light max-w-sm leading-relaxed">
              A premier production house dedicated to the art of visual and auditory storytelling for luxury brands globally.
            </p>
          </div>
          
          <div>
            <h4 className="small-caps text-gold mb-6">Atelier</h4>
            <ul className="space-y-4 text-muted font-light">
              <li><a href="#" className="hover:text-white transition-colors">Los Angeles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New York</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Paris</a></li>
            </ul>
          </div>

          <div>
            <h4 className="small-caps text-gold mb-6">Connect</h4>
            <ul className="space-y-4 text-muted font-light">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vimeo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-thin pt-8 flex flex-col md:flex-row justify-between items-center gap-4 small-caps text-[10px] text-muted">
          <p>© 2026 REAL ONE MEDIA GROUP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
