import React, { useState, useEffect } from 'react';
import { Play, Mic, PenTool, ArrowRight, Menu, X, Video, Headphones, Palette, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    id: 1,
    quote: "ROMG took our music video to the next level. The production quality and attention to detail were unmatched. They truly understood our vision.",
    author: "Marcus T.",
    role: "Independent Artist"
  },
  {
    id: 2,
    quote: "The audio engineering team at ROMG is incredible. My tracks have never sounded so clear and punchy. Highly recommend their mixing and mastering services.",
    author: "Sarah J.",
    role: "Producer"
  },
  {
    id: 3,
    quote: "We needed a complete rebrand, and ROMG delivered beyond our expectations. The graphic design work was fresh, modern, and perfectly aligned with our brand identity.",
    author: "David L.",
    role: "Creative Director"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-[var(--color-accent)] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b-thin py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
              <span className="font-display font-bold text-[#0A0A0A] text-xl leading-none">R</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight">ROMG</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium items-center">
            <a href="#services" className="hover:text-accent transition-colors duration-200">Services</a>
            <a href="#work" className="hover:text-accent transition-colors duration-200">Our Work</a>
            <a href="#studio" className="hover:text-accent transition-colors duration-200">The Studio</a>
            <a href="https://forms.gle/aebU2yoRQqXRUdkP9" target="_blank" rel="noopener noreferrer" className="nav-pill inline-block">
              Let's Work
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-center items-center gap-8">
          <a href="#services" className="font-display text-3xl font-bold hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#work" className="font-display text-3xl font-bold hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Our Work</a>
          <a href="#studio" className="font-display text-3xl font-bold hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>The Studio</a>
          <a href="https://forms.gle/aebU2yoRQqXRUdkP9" target="_blank" rel="noopener noreferrer" className="nav-pill mt-4 inline-block text-center" onClick={() => setIsMenuOpen(false)}>
            Let's Work
          </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2500&auto=format&fit=crop" 
            alt="Recording Studio Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="inline-block bg-[#171717] border-thin rounded-full px-4 py-1.5 mb-8">
            <p className="text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Now booking studio sessions for 2026
            </p>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
            Bring your vision <br />
            <span className="text-accent">to life.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted mb-10 leading-relaxed">
            We are a creative production studio specializing in video, audio recording, and graphic design for recording artists, creators, and businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://forms.gle/aebU2yoRQqXRUdkP9" target="_blank" rel="noopener noreferrer" className="nav-pill text-center flex justify-center items-center gap-2">
              Book the Studio <ArrowRight size={18} />
            </a>
            <a href="#work" className="nav-pill-outline text-center flex justify-center items-center">
              View Our Work
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">What we do.</h2>
          <p className="max-w-2xl text-muted text-lg">
            From the recording booth to the final cut, we provide end-to-end creative services to make you stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Service 1 */}
          <div className="bg-[#171717] border-thin rounded-2xl p-8 hover:border-accent transition-colors duration-300">
            <div className="w-14 h-14 bg-[#262626] rounded-xl flex items-center justify-center mb-8 text-accent">
              <Video size={28} />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Video Production</h3>
            <p className="text-muted leading-relaxed mb-6">
              Music videos, promotional content, and corporate visuals shot and edited to capture your unique energy.
            </p>
            <ul className="space-y-3 text-sm font-medium text-gray-300">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Music Videos</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Brand Promos</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Live Performances</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-[#171717] border-thin rounded-2xl p-8 hover:border-accent transition-colors duration-300">
            <div className="w-14 h-14 bg-[#262626] rounded-xl flex items-center justify-center mb-8 text-accent">
              <Headphones size={28} />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Audio & Recording</h3>
            <p className="text-muted leading-relaxed mb-6">
              Professional studio recording, mixing, and mastering for artists, bands, and podcasters.
            </p>
            <ul className="space-y-3 text-sm font-medium text-gray-300">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Studio Recording</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Mixing & Mastering</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Podcast Production</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-[#171717] border-thin rounded-2xl p-8 hover:border-accent transition-colors duration-300">
            <div className="w-14 h-14 bg-[#262626] rounded-xl flex items-center justify-center mb-8 text-accent">
              <Palette size={28} />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Graphic Design</h3>
            <p className="text-muted leading-relaxed mb-6">
              Album art, brand identity, and visual assets that make your project look as good as it sounds.
            </p>
            <ul className="space-y-3 text-sm font-medium text-gray-300">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Cover Art</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Logo & Branding</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Social Media Assets</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 md:py-32 bg-[#121212] border-t-thin border-b-thin">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Recent Projects</h2>
              <p className="text-muted text-lg">Check out what we've been working on.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group">
              <div className="aspect-video mb-5 rounded-xl overflow-hidden border border-white/10 bg-black">
                <iframe 
                  className="block w-full h-full"
                  src="https://www.youtube.com/embed/WnSTm8pUGVk?si=SLeKzJx-W-XeIHVq" 
                  title="Cesar Olvera Boxing Documentary" 
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-1 group-hover:text-accent transition-colors">Cesar Olvera Boxing Documentary</h3>
                  <p className="text-muted text-sm">Video Production</p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group">
              <div className="aspect-video mb-5 rounded-xl overflow-hidden border border-white/10 bg-black">
                <iframe 
                  className="block w-full h-full"
                  style={{ border: 0, borderRadius: 0 }} 
                  src="https://open.spotify.com/embed/playlist/35Dld8Tw6SxQWdhUgi0nre?utm_source=generator&theme=0" 
                  allowFullScreen={false} 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                ></iframe>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-1 group-hover:text-accent transition-colors">Mixed by Real One Media</h3>
                  <p className="text-muted text-sm">Audio Mixing/Recording</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">What people say.</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">Don't just take our word for it. Hear from the artists and brands we've worked with.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-[#171717] border border-white/10 flex items-center justify-center text-white hover:text-accent hover:border-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10">
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-[#171717] border border-white/10 flex items-center justify-center text-white hover:text-accent hover:border-accent transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="bg-[#171717] border-thin rounded-3xl p-8 md:p-16 relative overflow-hidden min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-8 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xl md:text-3xl font-display font-medium leading-relaxed mb-8">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentTestimonial].author}</h4>
                  <p className="text-accent text-sm font-medium">{testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === currentTestimonial ? 'bg-accent' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="studio" className="py-24 md:py-32 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Ready to create?
        </h2>
        <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
          Whether you need a full music video, a studio session, or a fresh logo, our team is ready to help you level up.
        </p>
        <a href="https://forms.gle/aebU2yoRQqXRUdkP9" target="_blank" rel="noopener noreferrer" className="nav-pill text-lg px-8 py-4 inline-block mb-16">
          Contact Us Today
        </a>

        {/* Map */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative">
          <Map
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN || ""}
            initialViewState={{
              longitude: -120.4825482,
              latitude: 37.3025895,
              zoom: 15
            }}
            mapStyle="mapbox://styles/mapbox/dark-v11"
          >
            <Marker longitude={-120.4825482} latitude={37.3025895} color="#00CFFF" />
          </Map>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121212] border-t-thin pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                  <span className="font-display font-bold text-[#0A0A0A] text-xl leading-none">R</span>
                </div>
                <span className="font-display font-bold text-xl tracking-tight">ROMG</span>
              </div>
              <p className="text-muted max-w-sm leading-relaxed text-sm">
                Your go-to creative studio for video production, audio engineering, and graphic design. Built for artists and brands.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-3 text-muted text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Video Production</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Studio Recording</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Mixing & Mastering</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Graphic Design</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t-thin pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
            <p>© 2026 ROMG. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
