import React, { useState, useEffect, useRef } from 'react';
import { Play, Mic, PenTool, ArrowRight, Menu, X, Video, Headphones, Palette, ChevronLeft, ChevronRight, Star, MapPin, Navigation } from 'lucide-react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import GeminiChat from './components/GeminiChat';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 1;
      });
    }, 15);
    return () => clearInterval(interval);
  }, [onComplete, hasStarted]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Immersive Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27dc36990695c1d63897970d6447996958d0a08&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-[#0A0A0A]/20"></div>
      </div>

      {/* Massive Stacked Text */}
      <div className="relative z-10 w-full px-6 flex flex-col items-center">
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[15vw] md:text-[12vw] tracking-tighter leading-[0.85] uppercase"
            >
              REAL
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[15vw] md:text-[12vw] tracking-tighter leading-[0.85] uppercase"
            >
              ONE
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[15vw] md:text-[12vw] tracking-tighter leading-[0.85] uppercase"
            >
              MEDIA
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[15vw] md:text-[12vw] tracking-tighter leading-[0.85] uppercase text-accent"
            >
              GROUP
            </motion.h1>
          </div>
        </motion.div>
      </div>

      {/* Interaction Layer */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 w-full flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!hasStarted ? (
            <motion.button
              key="start-button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setHasStarted(true)}
              className="group relative px-10 py-4 overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-accent hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 font-display font-bold tracking-[0.2em] uppercase text-xs text-white group-hover:text-accent transition-colors">
                Initialize Experience
              </span>
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          ) : (
            <motion.div
              key="progress-info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">Initializing</span>
              <span className="font-mono text-[10px] font-bold text-accent">{progress}%</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Full-width Bottom Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
        <motion.div 
          className="h-full bg-accent shadow-[0_0_15px_rgba(0,207,255,0.5)]"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

const testimonials = [
  {
    id: 5,
    quote: "ROMG is the truth. They have polished my projects and, sonically, are masters at their craft. Real Ones Only!!!!",
    author: "Aztek",
    role: "Recording Artist"
  },
  {
    id: 4,
    quote: "ROMG has mixed a majority of our big projects for us and has got us sounding right every time and is very open to feedback and personal notes.",
    author: "SlowBurnCrew",
    role: "Artist Duo"
  },
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

const heroImage = "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2500&auto=format&fit=crop";

const MarqueeCarousel = () => {
  const images = [
    "https://drive.google.com/uc?id=1B2-Lr3pkM2FK4N4o1yv5CLNF_SYgcyDR",
    "https://drive.google.com/uc?id=12x7GByz3ADqP2Mrb7Lhca00jeYUaldDn",
    "https://drive.google.com/uc?id=1I0Rp3sQgwME_M0uxNGGtxfcNUmL2q2Lb",
    "https://drive.google.com/uc?id=12p1ltn7Pw-jLiPgJb0PfMyVmdSzgon6G",
    "https://drive.google.com/uc?id=1_3qwhrgl-UGCTxRCPts4A8joNgpCw0Ag",
    "https://drive.google.com/uc?id=1tGV2nsu4glHPaAsgs2SHwga9E5d1BY_u",
    "https://drive.google.com/uc?id=1OI0rD3oVmDpaqz0OkKc1WnfzeumvON3D",
    "https://drive.google.com/uc?id=1BzpzSV2UTNrGJ4SnF-bZEcNE6Gj6IM5L",
    "https://drive.google.com/uc?id=1Dz9oF9g2D0cFICYahwIbvl8O-hyFxjku",
    "https://drive.google.com/uc?id=1106hu4CXPcqcoYEUDCqobsTs1VTrl9bG",
    "https://drive.google.com/uc?id=1ZjAk6qk3RvtmEnzuwhcre-nYigu1Xsit",
    "https://drive.google.com/uc?id=1bW4Q9Z4AHb4sV58diPQN-cd6qAstEr6i",
    "https://drive.google.com/uc?id=1kgrAUP0ij-nXfh7I4T9m919TTDkwKCpZ",
    "https://drive.google.com/uc?id=11W6YEJh4VaX2ETB_aDg2CZkDcilrmnpQ",
    "https://drive.google.com/uc?id=1X_OE5be-Xznh5Xd5CWmJOxV32kli1gIW",
    "https://drive.google.com/uc?id=1CYxUYgpbG9Xo3UhkNm-18E5JBH5aLVcy",
    "https://drive.google.com/uc?id=1zBoZBoSy-0DQOX1cD8nXMeXwgBEfB2N1"
  ];

  return (
    <div className="relative overflow-hidden py-10 mb-16 select-none">
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: [0, -2400] }}
        transition={{ 
          duration: 60, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...images, ...images, ...images].map((src, idx) => (
          <div 
            key={idx} 
            className="w-64 h-40 flex-shrink-0 rounded-xl overflow-hidden border border-white/5 bg-[#171717] transition-all duration-500 hover:border-accent/50 group"
          >
            <img 
              src={src} 
              alt={`Project Thumbnail ${idx}`} 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
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

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-[var(--color-accent)] selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b-thin py-4' : 'bg-transparent py-6'}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                <span className="font-display font-bold text-[#0A0A0A] text-xl leading-none">R</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">ROMG</span>
            </div>
            
            <div className="hidden md:flex gap-8 text-sm font-medium items-center">
              <a href="#services" className="hover:text-accent transition-colors duration-300">Services</a>
              <a href="#work" className="hover:text-accent transition-colors duration-300">Our Work</a>
              <a href="#studio" className="hover:text-accent transition-colors duration-300">The Studio</a>
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-center items-center gap-8"
            >
              <a href="#services" className="font-display text-3xl font-bold hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#work" className="font-display text-3xl font-bold hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Our Work</a>
              <a href="#studio" className="font-display text-3xl font-bold hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>The Studio</a>
              <a href="https://forms.gle/aebU2yoRQqXRUdkP9" target="_blank" rel="noopener noreferrer" className="nav-pill mt-4 inline-block text-center" onClick={() => setIsMenuOpen(false)}>
                Let's Work
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <header ref={heroRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
          {/* Background Visuals */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 w-full h-full opacity-50">
              <img 
                src={heroImage} 
                alt="Creative Studio Background" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/40 to-[#0A0A0A]"></div>
            
            {/* Background Blobs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
          </div>

        <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={!isLoading ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block bg-[#171717] border-thin rounded-full px-4 py-1.5 mb-8"
          >
            <p className="text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Now booking studio sessions for 2026
            </p>
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={!isLoading ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 leading-[1.1]"
            >
              Bring your vision <br />
              <span className="text-accent inline-block">
                to life.
              </span>
            </motion.h1>
          </div>
          
          <div className="overflow-hidden">
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={!isLoading ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl text-lg md:text-xl text-muted mb-10 leading-relaxed"
            >
              We are a creative production studio specializing in video, audio, and digital design for artists, businesses, and our local community.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={!isLoading ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="https://forms.gle/aebU2yoRQqXRUdkP9" target="_blank" rel="noopener noreferrer" className="nav-pill text-center flex justify-center items-center gap-2">
              Book the Studio <ArrowRight size={18} />
            </a>
            <a href="#work" className="nav-pill-outline text-center flex justify-center items-center">
              View Our Work
            </a>
          </motion.div>
        </motion.div>
        </header>

        {/* Services Section */}
        <motion.section 
          id="services" 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full"
        >
          <div className="mb-16 md:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-5xl mb-4"
            >
              What we do.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl text-muted text-lg"
            >
              From the recording booth to the final cut, we provide end-to-end creative services for artists, families, and businesses.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#171717] border-thin rounded-2xl p-8 hover:border-accent transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-[#262626] rounded-xl flex items-center justify-center mb-8 text-accent">
                <Video size={28} />
              </div>
              <h3 className="font-display text-2xl mb-3">Video & Film</h3>
              <p className="text-muted leading-relaxed mb-6">
                Professional cinematography and editing for music videos, weddings, quinceneras, and highlight reels.
              </p>
              <ul className="space-y-3 text-sm font-medium text-gray-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Music Videos</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Weddings & Quinceneras</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Sports Highlight Reels</li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#171717] border-thin rounded-2xl p-8 hover:border-accent transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-[#262626] rounded-xl flex items-center justify-center mb-8 text-accent">
                <Headphones size={28} />
              </div>
              <h3 className="font-display text-2xl mb-3">Audio & Recording</h3>
              <p className="text-muted leading-relaxed mb-6">
                Professional studio recording, mixing, and mastering for artists, bands, and podcasters.
              </p>
              <ul className="space-y-3 text-sm font-medium text-gray-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Studio Recording</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Mixing & Mastering</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Podcast Production</li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#171717] border-thin rounded-2xl p-8 hover:border-accent transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-[#262626] rounded-xl flex items-center justify-center mb-8 text-accent">
                <Palette size={28} />
              </div>
              <h3 className="font-display text-2xl mb-3">Design & Digital</h3>
              <p className="text-muted leading-relaxed mb-6">
                Album art, branding, website design, and personal blogs that make your project look as good as it sounds.
              </p>
              <ul className="space-y-3 text-sm font-medium text-gray-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Logo & Branding</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Website Design</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Personal Blogs</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

      {/* Work Section */}
      <motion.section 
        id="work" 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 md:py-32 bg-[#121212] border-t-thin border-b-thin"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-4xl md:text-5xl mb-4">Recent Projects</h2>
              <p className="text-muted text-lg">Check out what we've been working on.</p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="aspect-video mb-5 rounded-xl overflow-hidden border border-white/10 bg-black transition-transform duration-500 group-hover:scale-[1.02]">
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
                  <h3 className="font-display text-2xl mb-1 group-hover:text-accent transition-colors">Cesar Olvera Boxing Documentary</h3>
                  <p className="text-muted text-sm">Video Production</p>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="aspect-video mb-5 rounded-xl overflow-hidden border border-white/10 bg-black transition-transform duration-500 group-hover:scale-[1.02]">
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
                  <h3 className="font-display text-2xl mb-1 group-hover:text-accent transition-colors">Mixed by Real One Media</h3>
                  <p className="text-muted text-sm">Audio Mixing/Recording</p>
                </div>
              </div>
            </motion.div>
          </div>

          <MarqueeCarousel />
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full overflow-hidden"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-5xl mb-4"
          >
            What people say.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Don't just take our word for it. Hear from the artists and brands we've worked with.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-[#171717] border border-white/10 flex items-center justify-center text-white hover:text-accent hover:border-accent transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10">
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-[#171717] border border-white/10 flex items-center justify-center text-white hover:text-accent hover:border-accent transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="bg-[#171717] border-thin rounded-3xl p-8 md:p-16 relative overflow-hidden min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentTestimonial ? 'bg-accent w-6' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        id="studio" 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 md:py-32 px-6 md:px-12 text-center max-w-4xl mx-auto"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-6xl mb-6"
        >
          Ready to create?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-muted mb-10 max-w-2xl mx-auto"
        >
          Whether you need a full music video, a studio session, or a fresh logo, our team is ready to help you level up.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="https://forms.gle/aebU2yoRQqXRUdkP9" target="_blank" rel="noopener noreferrer" className="nav-pill text-lg px-8 py-4 inline-block mb-16">
            Contact Us Today
          </a>
        </motion.div>

        {/* Map & Directions */}
        <div className="w-full max-w-5xl mx-auto mb-16">
          <div className="bg-[#171717] border-thin rounded-2xl overflow-hidden shadow-2xl relative group">
            <div className="h-[450px] w-full">
              <Map
                mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN || ""}
                initialViewState={{
                  longitude: -120.482012,
                  latitude: 37.301552,
                  zoom: 17
                }}
                mapStyle="mapbox://styles/mapbox/dark-v11"
              >
                <Marker longitude={-120.482012} latitude={37.301552} color="#00CFFF" />
              </Map>
            </div>
            
            {/* Address Overlay */}
            <div className="absolute top-6 left-6 right-6 md:right-auto md:w-80 bg-[#0A0A0A]/90 backdrop-blur-md border-thin p-6 rounded-xl z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    1812 Canal St. Suite 4<br />
                    Merced, CA 95340
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">Get Directions</p>
                <a 
                  href="https://maps.apple.com/?daddr=1812+Canal+St+Suite+4,+Merced,+CA+95340" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 rounded-lg transition-all group/btn"
                >
                  <span className="text-sm font-medium">iPhone (Apple Maps)</span>
                  <Navigation size={16} className="text-accent group-hover/btn:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=1812+Canal+St+Suite+4,+Merced,+CA+95340" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 rounded-lg transition-all group/btn"
                >
                  <span className="text-sm font-medium">Android (Google Maps)</span>
                  <Navigation size={16} className="text-accent group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

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
                Your go-to creative studio for video production, audio engineering, and digital design. Built for artists, families, and brands.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-3 text-muted text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Video & Film</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Studio Recording</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Web & Graphic Design</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Community Projects</a></li>
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
      <GeminiChat />
      </motion.div>
    </div>
  );
}
