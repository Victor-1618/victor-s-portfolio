/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

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
      <div className="border border-white/20 px-6 py-3 text-xs font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-all cursor-pointer">
        olaiyavf@gmail.com
      </div>
    </nav>
  );
};

const HeroMain = () => {
  return (
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
};

const Stats = () => {
  return (
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
};

const ServiceItem = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="flex flex-col gap-3 max-w-xs">
      <h3 className="text-accent font-bold uppercase tracking-widest text-[11px]">{title}</h3>
      <p className="text-gray-400 text-xs leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex flex-col gap-12">
      <ServiceItem
        title="Development"
        description="I offer full-stack development services that bring your digital concepts to life."
      />
      <ServiceItem
        title="UI/UX Design"
        description="I design the visual interface and user experience of apps, from mobile to desktop."
      />
      <ServiceItem
        title="Tech Strategy"
        description="I provide expert guidance on tech stacks, architecture, and product engineering."
      />
    </div>
  );
};

export default function App() {
  return (
    <div className="h-screen w-screen bg-black text-white selection:bg-accent selection:text-black overflow-hidden font-sans">
      <Navbar />

      <div className="horizontal-scroll-container">
        {/* Hero / Home Section */}
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
                <div className="absolute -inset-1 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/40 transition-all duration-500"></div>
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

        {/* About Section */}
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

        {/* Services Section */}
        <section id="services" className="section-horizontal flex items-center justify-center px-8 md:px-16 bg-white/5 border-l border-white/5">
          <div className="w-full">
            <h2 className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-16">02. Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { num: "01", title: "Full-stack Dev", desc: "Building robust, scalable applications from the ground up using modern technologies." },
                { num: "02", title: "UI/UX Design", desc: "Creating user-centric interfaces that are as functional as they are beautiful." },
                { num: "03", title: "Product Strategy", desc: "Helping startups and brands define their digital roadmap and technical architecture." }
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

        {/* Works Section */}
        <section id="works" className="section-horizontal flex items-center justify-center px-8 md:px-16 border-l border-white/5">
          <div className="w-full">
            <h2 className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-16">03. Selected Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group relative aspect-video bg-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                    <span className="text-black font-bold uppercase tracking-widest bg-accent px-6 py-3">View Project</span>
                  </div>
                  <div className="absolute bottom-8 left-8 z-20">
                    <h3 className="text-2xl font-bold">Project {i}</h3>
                    <p className="text-accent text-sm font-medium">Design & Development</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer - Fixed at bottom */}
      <footer className="fixed bottom-0 left-0 right-0 px-8 md:px-16 py-6 border-t border-white/5 text-center text-gray-500 text-[10px] uppercase tracking-widest bg-black/50 backdrop-blur-sm z-40">
        &copy; {new Date().getFullYear()} Victor. All rights reserved.
      </footer>
    </div>
  );
}
