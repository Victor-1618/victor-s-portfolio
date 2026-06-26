/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── Social links data ────────────────────────────────────────────────────────
const socials = [
  {
    id: "website",
    label: "Website",
    href: "https://victor-s-portfolio-ten.vercel.app/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/victor-olaiya-935a14159/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Victor-1618",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    id: "fiverr",
    label: "Fiverr",
    href: "https://www.fiverr.com/s/ljawvXA",
    icon: null,
  },
];


// ─── Social Icons Row ─────────────────────────────────────────────────────────
const SocialIcons = ({ size = 16 }: { size?: number }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    {socials.map((s) =>
      s.id === "fiverr" ? (
        // Fiverr renders as a text wordmark pill
        <a
          key={s.id}
          id="social-fiverr"
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fiverr"
          title="Fiverr"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0 10px",
            height: size + 16 + "px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(156,163,175,1)",
            fontSize: size - 1 + "px",
            fontWeight: 700,
            letterSpacing: "0.04em",
            textDecoration: "none",
            transition: "color 0.2s ease, border-color 0.2s ease, background 0.2s ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#1DBF73";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(29,191,115,0.45)";
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(29,191,115,0.08)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.color = "rgba(156,163,175,1)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
          }}
        >
          Fiverr
        </a>
      ) : (
        // All other socials: circular icon button
        <a
          key={s.id}
          id={`social-${s.id}`}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          title={s.label}
          style={{
            color: "rgba(156,163,175,1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: size + 16 + "px",
            height: size + 16 + "px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.1)",
            transition: "color 0.2s ease, border-color 0.2s ease, background 0.2s ease",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#00E5FF";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,229,255,0.4)";
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,229,255,0.08)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.color = "rgba(156,163,175,1)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
          }}
        >
          <span style={{ width: size, height: size, display: "flex" }}>{s.icon}</span>
        </a>
      )
    )}
  </div>
);

// ─── Navbar ────────────────────────────────────────────────────────────────────
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-16 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="text-2xl font-bold tracking-tighter font-sans">
        <a href="#home">Victor</a>
      </div>
      <div className="hidden md:flex items-center gap-12 text-xs font-medium tracking-widest text-gray-400 uppercase">
        <a href="#about" className="hover:text-accent transition-colors">About</a>
        <a href="#services" className="hover:text-accent transition-colors">Services</a>
        <a href="#works" className="hover:text-accent transition-colors">Works</a>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:block"><SocialIcons size={14} /></div>
        <div className="border border-white/20 px-6 py-3 text-xs font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-all cursor-pointer">
          olaiyavf@gmail.com
        </div>
      </div>
    </nav>
  );
};

// ─── Hero ──────────────────────────────────────────────────────────────────────
const HeroMain = () => (
  <div className="flex flex-col gap-6 max-w-xl">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter font-sans text-accent"
    >
      Victor is <br /> Right Here!
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md font-medium"
    >
      With a creative mind for code. I love to build digital products that solve complex problems with simple solutions.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex flex-wrap items-center gap-6 mt-2"
    >
      <button className="bg-accent text-black px-6 py-3 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all">
        Chat with me
      </button>
      <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:text-accent transition-all">
        <ArrowUpRight className="w-4 h-4" />
        Start a project
      </button>
    </motion.div>
  </div>
);

const Stats = () => (
  <div className="flex gap-12 mt-16">
    <div className="flex flex-col gap-1">
      <div className="text-3xl md:text-4xl font-bold font-sans">98%</div>
      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Satisfaction Rate</div>
    </div>
    <div className="flex flex-col gap-1">
      <div className="text-3xl md:text-4xl font-bold font-sans">100+</div>
      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Projects Delivered</div>
    </div>
  </div>
);

// ─── Services ──────────────────────────────────────────────────────────────────
const ServiceItem = ({ title, description }: { title: string; description: string }) => (
  <div className="flex flex-col gap-3 max-w-xs">
    <h3 className="text-accent font-bold uppercase tracking-widest text-[11px]">{title}</h3>
    <p className="text-gray-400 text-xs leading-relaxed font-medium">{description}</p>
  </div>
);

const Services = () => (
  <div className="flex flex-col gap-12">
    <ServiceItem title="Development" description="I offer full-stack development services that bring your digital concepts to life." />
    <ServiceItem title="UI/UX Design" description="I design the visual interface and user experience of apps, from mobile to desktop." />
    <ServiceItem title="Tech Strategy" description="I provide expert guidance on tech stacks, architecture, and product engineering." />
  </div>
);

// ─── Works data ────────────────────────────────────────────────────────────────
const works = [
  {
    id: "cuedra",
    name: "Cuedra",
    tag: "Mobile App · Design & Dev",
    color: "#7C3AED",
    description: "A sleek scheduling and booking platform built for modern service businesses.",
    gradient: "linear-gradient(135deg, rgba(124,58,237,0.35) 0%, rgba(0,0,0,0.85) 100%)",
  },
  {
    id: "homedra",
    name: "Homedra",
    tag: "Web Platform · Full-Stack",
    color: "#00E5FF",
    description: "A smart home services marketplace connecting homeowners with verified professionals.",
    gradient: "linear-gradient(135deg, rgba(0,229,255,0.2) 0%, rgba(0,0,0,0.85) 100%)",
  },
  {
    id: "cashedoutdollaz",
    name: "CashedOutDollaz",
    tag: "E-Commerce · Design & Dev",
    color: "#F59E0B",
    description: "A premium streetwear e-commerce store with a bold identity and seamless checkout.",
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.3) 0%, rgba(0,0,0,0.85) 100%)",
  },
  {
    id: "playbool",
    name: "Playbool",
    tag: "Sports App · UI/UX",
    color: "#10B981",
    description: "An interactive sports engagement app with live stats, picks, and community features.",
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.3) 0%, rgba(0,0,0,0.85) 100%)",
  },
];

// ─── Nav Arrow Buttons ─────────────────────────────────────────────────────────
const NavArrows = ({ onPrev, onNext, showLeft, showRight }: { onPrev: () => void; onNext: () => void; showLeft: boolean; showRight: boolean }) => (
  <>
    <button
      id="nav-prev"
      onClick={onPrev}
      aria-label="Previous section"
      style={{
        position: "fixed",
        left: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 100,
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.15)",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        color: "white",
        display: showLeft ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,229,255,0.15)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "#00E5FF";
        (e.currentTarget as HTMLButtonElement).style.color = "#00E5FF";
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-50%) scale(1.1)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)";
        (e.currentTarget as HTMLButtonElement).style.color = "white";
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-50%) scale(1)";
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>

    <button
      id="nav-next"
      onClick={onNext}
      aria-label="Next section"
      style={{
        position: "fixed",
        right: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 100,
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.15)",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        color: "white",
        display: showRight ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,229,255,0.15)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "#00E5FF";
        (e.currentTarget as HTMLButtonElement).style.color = "#00E5FF";
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-50%) scale(1.1)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)";
        (e.currentTarget as HTMLButtonElement).style.color = "white";
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-50%) scale(1)";
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  </>
);

// ─── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const index = Math.round(container.scrollLeft / window.innerWidth);
          setCurrentSection(index);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollBy = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -window.innerWidth : window.innerWidth,
      behavior: "smooth",
    });
  };

  const sectionCount = 4;

  return (
    <div className="h-screen w-screen bg-black text-white selection:bg-accent selection:text-black overflow-hidden font-sans">
      <Navbar />
      <NavArrows
        onPrev={() => scrollBy("left")}
        onNext={() => scrollBy("right")}
        showLeft={currentSection > 0}
        showRight={currentSection < sectionCount - 1}
      />

      <div ref={scrollRef} className="horizontal-scroll-container">
        {/* ── Home ── */}
        <section id="home" className="section-horizontal flex items-center justify-center">
          <main className="w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-[1fr_1fr_auto] gap-12 xl:gap-20 items-center relative">
            <div className="flex flex-col order-2 lg:order-1">
              <HeroMain />
              <Stats />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center items-center order-1 lg:order-2"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/40 transition-all duration-500" />
                <img
                  src="/victor.png"
                  alt="Victor Portrait"
                  className="relative w-64 h-auto md:w-80 lg:w-[450px] transition-all duration-700 drop-shadow-[0_0_30px_rgba(0,229,255,0.1)]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <aside className="lg:pt-0 order-3">
              <Services />
            </aside>
          </main>
        </section>

        {/* ── About ── */}
        <section id="about" className="section-horizontal flex items-center justify-center px-8 md:px-16 border-l border-white/5">
          <div className="max-w-4xl">
            <h2 className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-8">01. About Me</h2>
            <p className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-12">
              I bridge the gap between <span className="text-accent">design and engineering</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-400 text-lg leading-relaxed">
              <p>
                Based in the digital realm, I specialize in building highly interactive and performant web applications. My approach combines technical rigor with a deep appreciation for aesthetics.
              </p>
              <p>
                Whether it's architecting complex backends or crafting pixel-perfect frontends, I focus on creating experiences that feel intuitive and look exceptional.
              </p>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section id="services" className="section-horizontal flex items-center justify-center px-8 md:px-16 bg-white/5 border-l border-white/5">
          <div className="w-full">
            <h2 className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-16">02. Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { num: "01", title: "Full-stack Dev", desc: "Building robust, scalable applications from the ground up using modern technologies." },
                { num: "02", title: "UI/UX Design", desc: "Creating user-centric interfaces that are as functional as they are beautiful." },
                { num: "03", title: "Product Strategy", desc: "Helping startups and brands define their digital roadmap and technical architecture." },
              ].map((s) => (
                <div key={s.num} className="group p-8 border border-white/10 hover:border-accent/50 transition-all duration-500">
                  <div className="text-accent font-mono text-sm mb-6">{s.num}</div>
                  <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Works ── */}
        <section id="works" className="section-horizontal flex items-center justify-center px-8 md:px-16 border-l border-white/5">
          <div className="w-full">
            <h2 className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-12">03. Selected Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {works.map((work, i) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group relative overflow-hidden cursor-pointer"
                  style={{
                    minHeight: "175px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: work.gradient,
                    transition: "border-color 0.4s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = work.color + "60";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  {/* Glow orb */}
                  <div
                    className="absolute -top-8 -right-8 w-36 h-36 rounded-full blur-3xl pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                    style={{ background: work.color }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-7 flex flex-col h-full justify-between">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span
                          className="inline-block text-[9px] font-bold uppercase tracking-[0.25em] px-3 py-1 rounded-full mb-3 border"
                          style={{
                            color: work.color,
                            borderColor: work.color + "40",
                            background: work.color + "18",
                          }}
                        >
                          {work.tag}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-none">{work.name}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mt-2 max-w-[260px]">{work.description}</p>
                      </div>
                      {/* Arrow icon – appears on hover */}
                      <div
                        className="shrink-0 w-9 h-9 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300"
                        style={{ borderColor: work.color, color: work.color }}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom rule */}
                    <div className="flex items-center gap-2 mt-5">
                      <div className="h-px flex-1 bg-white/10" />
                      <span className="text-[9px] text-gray-600 uppercase tracking-widest font-medium">View Project</span>
                      <div className="h-px w-5" style={{ background: work.color + "50" }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 px-8 md:px-16 py-4 border-t border-white/5 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-between">
        <span className="text-gray-600 text-[10px] uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Victor. All rights reserved.
        </span>
        <SocialIcons size={14} />
      </footer>
    </div>
  );
}
