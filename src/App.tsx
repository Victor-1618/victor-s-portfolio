/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiFramer,
  SiVercel,
  SiHuggingface,
  SiLangchain,
} from "react-icons/si";
import { FaBrain, FaChartLine } from "react-icons/fa";

// ─── Typewriter effect ────────────────────────────────────────────────────────
const useTypewriter = (phrases: string[], typeSpeed = 75, deleteSpeed = 40, pause = 1800) => {
  const [display, setDisplay] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && display === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display === "") {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    } else {
      timeout = setTimeout(
        () => setDisplay((prev) => (deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1))),
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [display, deleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pause]);

  return display;
};

const TypeWriter = ({ phrases, className = "" }: { phrases: string[]; className?: string }) => {
  const text = useTypewriter(phrases);
  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{text}</span>
      <span aria-hidden="true" className="type-cursor ml-1 text-white/70 font-light">|</span>
    </span>
  );
};

// ─── Social links data ────────────────────────────────────────────────────────
const socials = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/victor-olaiya-935a14159/",
    color: "#0A66C2",
    borderColor: "rgba(10, 102, 194, 0.4)",
    bgHover: "rgba(10, 102, 194, 0.2)",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Victor-1618",
    color: "#FFFFFF",
    borderColor: "rgba(255, 255, 255, 0.3)",
    bgHover: "rgba(255, 255, 255, 0.15)",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    id: "fiverr",
    label: "Fiverr",
    href: "https://www.fiverr.com/s/ljawvXA",
    color: "#1DBF73",
    borderColor: "rgba(29, 191, 115, 0.4)",
    bgHover: "rgba(29, 191, 115, 0.2)",
    icon: null,
  },
];


// ─── Social Icons Row ─────────────────────────────────────────────────────────
const SocialIcons = ({ size = 18 }: { size?: number }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    {socials.map((s) => (
      <a
        key={s.id}
        id={`social-${s.id}`}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        title={s.label}
        style={{
          color: s.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: size + 14 + "px",
          height: size + 14 + "px",
          borderRadius: "50%",
          border: "none",
          background: "transparent",
          transition: "all 0.25s ease",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = s.bgHover;
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.15)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
        }}
      >
        <span style={{ width: size, height: size, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {s.id === "fiverr" ? (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKTIiOwryrgCwR-tSlhi67187uXnV8ER2V-BHfbH-9cg&s=10"
              alt="Fiverr"
              style={{
                width: size - 2,
                height: size - 2,
                objectFit: "contain",
                borderRadius: "50%",
              }}
            />
          ) : (
            s.icon
          )}
        </span>
      </a>
    ))}
  </div>
);

// ─── Email & copy-to-clipboard ─────────────────────────────────────────────────
const EMAIL = "olaiyavf@gmail.com";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      onClick={copy}
      aria-label={copied ? "Email copied" : "Copy email address"}
      title={copied ? "Copied!" : "Copy email address"}
      className="flex items-center justify-center px-3 md:px-4 self-stretch border-l border-white/20 text-gray-300 hover:bg-white hover:text-black transition-colors cursor-pointer"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
};

// ─── Navbar ────────────────────────────────────────────────────────────────────
const Navbar = ({ onNavigate, currentSection }: { onNavigate: (index: number) => void; currentSection: number }) => {
  const go = (index: number) => (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onNavigate(index);
  };

  const navLinks = [
    { name: "About", index: 1, href: "#about" },
    { name: "Skills", index: 2, href: "#skills" },
    { name: "Services", index: 3, href: "#services" },
    { name: "Works", index: 4, href: "#works" },
    { name: "Resume", index: 5, href: "#resume-section" },
    { name: "Contact", index: 6, href: "#contact" },
  ];

  const isHero = currentSection === 0;

  return (
    <nav
      className={`no-print fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-5 md:px-16 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-500 ease-in-out ${
        isHero ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="text-2xl font-bold tracking-tighter font-sans">
        <a href="#home" onClick={go(0)}>Victor</a>
      </div>
      <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest text-gray-400 uppercase">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={go(link.index)}
            className={`transition-colors hover:text-accent ${currentSection === link.index ? "text-accent font-bold" : ""}`}
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:block"><SocialIcons size={18} /></div>
        <div className="flex items-center border border-white/20 hover:border-white/40 transition-colors">
          <a href={`mailto:${EMAIL}`} className="px-4 md:px-6 py-3 text-xs font-medium tracking-widest normal-case hover:bg-white hover:text-black transition-all cursor-pointer">
            <span className="hidden sm:inline">{EMAIL}</span>
            <span className="sm:hidden">Email</span>
          </a>
          <CopyEmailButton />
        </div>
      </div>
    </nav>
  );
};

// ─── Hero ──────────────────────────────────────────────────────────────────────
const HeroMain = ({ onChat }: { onChat: () => void }) => (
  <div className="flex flex-col gap-6 max-w-xl">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter font-sans text-accent"
    >
      Victor is <br />
      <TypeWriter phrases={["Right Here!", "a Developer.", "a Full-Stack Engineer.", "a Builder."]} />
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
      <button onClick={onChat} className="bg-accent text-black px-6 py-3 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all">
        Chat with me
      </button>
      <button onClick={onChat} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:text-accent transition-all">
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
    <h3
      className="font-bold uppercase tracking-widest text-[11px]"
      style={{
        color: "#C084FC",
        textShadow: "0 0 12px rgba(192, 132, 252, 0.5)",
      }}
    >
      {title}
    </h3>
    <p className="text-gray-400 text-xs leading-relaxed font-medium">{description}</p>
  </div>
);

const Services = () => (
  <div className="flex flex-col gap-12">
    <ServiceItem title="Development" description="I offer full-stack development services that bring your digital concepts to life." />
    <ServiceItem title="Design to Code" description="I turn Figma designs into pixel-perfect, responsive websites and apps." />
    <ServiceItem title="Tech Strategy" description="I provide expert guidance on tech stacks, architecture, and product engineering." />
  </div>
);

// ─── Works data ────────────────────────────────────────────────────────────────
const works = [
  {
    id: "cuedra",
    name: "Cuedra",
    tag: "Mobile App · Full-Stack",
    color: "#7C3AED",
    description: "A sleek scheduling and booking platform built for modern service businesses.",
    gradient: "linear-gradient(135deg, rgba(124,58,237,0.35) 0%, rgba(0,0,0,0.85) 100%)",
  },
  {
    id: "homedra",
    name: "Homedra",
    tag: "Web Platform · Full-Stack",
    color: "#7DD3FC",
    description: "A smart home services marketplace connecting homeowners with verified professionals.",
    gradient: "linear-gradient(135deg, rgba(125,211,252,0.2) 0%, rgba(0,0,0,0.85) 100%)",
  },
  {
    id: "cashedoutdollaz",
    name: "CashedOutDollaz",
    tag: "E-Commerce · Full-Stack",
    color: "#F59E0B",
    description: "A premium streetwear e-commerce store with a bold identity and seamless checkout.",
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.3) 0%, rgba(0,0,0,0.85) 100%)",
  },
  {
    id: "playbool",
    name: "Playbool",
    tag: "Sports App · Frontend",
    color: "#10B981",
    description: "An interactive sports engagement app with live stats, picks, and community features.",
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.3) 0%, rgba(0,0,0,0.85) 100%)",
  },
];

// ─── Skills data ───────────────────────────────────────────────────────────────
const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 95, icon: SiReact },
      { name: "TypeScript", level: 90, icon: SiTypescript },
      { name: "Tailwind CSS", level: 92, icon: SiTailwindcss },
      { name: "HTML & CSS", level: 95, icon: SiHtml5 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90, icon: SiNodedotjs },
      { name: "NestJS", level: 85, icon: SiNestjs },
      { name: "Express", level: 88, icon: SiExpress },
      { name: "PostgreSQL", level: 85, icon: SiPostgresql },
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "AI Integration", level: 88, icon: SiHuggingface },
      { name: "LLM", level: 86, icon: FaBrain },
      { name: "Prediction Models", level: 84, icon: FaChartLine },
      { name: "LangChain", level: 80, icon: SiLangchain },
    ],
  },
  {
    category: "Tools & Cloud",
    items: [
      { name: "Figma", level: 90, icon: SiFigma },
      { name: "Git & GitHub", level: 92, icon: SiGit },
      { name: "Framer Motion", level: 85, icon: SiFramer },
      { name: "Vercel", level: 90, icon: SiVercel },
    ],
  },
];

// ─── Skills section ────────────────────────────────────────────────────────────
const SkillsSection = () => (
  <div className="w-full max-w-6xl">
    <h2 className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-6">02. Technical Skills</h2>
    <p className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-12">
      The tools I use to <span className="text-accent">build &amp; ship</span>.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((group) => (
        <div
          key={group.category}
          className="group p-8 border border-zinc-800 bg-zinc-900/40 hover:border-accent/50 hover:bg-zinc-900/80 transition-all duration-500 rounded-xl"
        >
          <h3 className="text-lg font-bold mb-7 tracking-tight flex items-center gap-3">
            <span className="h-px w-6 bg-accent/60" />
            {group.category}
          </h3>
          <div className="flex flex-col gap-5">
            {group.items.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-2.5 text-sm text-gray-300 font-medium">
                    <item.icon className="w-4 h-4 text-accent" aria-hidden="true" />
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">{item.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                    className="h-full rounded-full bg-accent"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── GitHub Contributions Widget ──────────────────────────────────────────────
const GitHubContributions = () => (
  <div className="w-full mt-8 p-6 md:p-8 border border-zinc-800 bg-zinc-900/50 backdrop-blur-md rounded-2xl flex flex-col gap-6 shadow-2xl relative overflow-hidden group">
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/20 transition-all duration-700" />

    <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent shadow-sm">
          <SiGit className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold tracking-tight text-white flex items-center gap-2.5">
            GitHub Activity &amp; Open Source
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
              Active
            </span>
          </h3>
          <p className="text-xs text-gray-400 font-mono mt-0.5">github.com/Victor-1618</p>
        </div>
      </div>
      <a
        href="https://github.com/Victor-1618"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-zinc-800/80 border border-zinc-700/60 text-accent hover:bg-zinc-800 hover:border-accent/40 transition-all"
      >
        View Profile <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </div>

    {/* Scrollable Graph Container */}
    <div className="w-full overflow-x-auto pb-1 relative z-10">
      <div className="min-w-[650px] p-5 bg-black/80 border border-zinc-800/80 rounded-xl flex items-center justify-center shadow-inner">
        <img
          src="https://ghchart.rshah.org/7DD3FC/Victor-1618"
          alt="Victor's GitHub Contribution Heatmap"
          className="w-full h-auto filter brightness-110 contrast-125"
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

// ─── Resume data ───────────────────────────────────────────────────────────────
const resume = {
  title: "Full-Stack & SaaS Developer",
  summary:
    "Full-stack & SaaS developer building fast, scalable websites, web apps, and AI-powered workflows. I turn Figma designs into pixel-perfect, production-ready apps — and I integrate AI into manual processes to automate them end-to-end.",
  experience: [
    {
      role: "Full Stack & SaaS Developer (Freelance)",
      company: "Lagos, Nigeria",
      period: "2021 — Present",
      points: [
        "Built scalable SaaS platforms, admin dashboards, and business automation systems for international clients using React, Next.js, Node.js, NestJS, and Supabase.",
        "Created AI-integrated solutions — LLM-powered tools, automated pipelines, and analytics dashboards — that replace manual workflows.",
        "Integrated payments (PayPal, crypto gateways, fintech APIs), auth systems, and REST APIs.",
        "Optimized performance with caching, pagination, and modern state management.",
      ],
    },
    {
      role: "Web3 Full Stack Developer (Freelance / Contract)",
      company: "Remote",
      period: "2022 — Present",
      points: [
        "Developed and deployed Solidity smart contracts — token presales, ERC-20 systems, and staking utilities on Binance Smart Chain.",
        "Built Web3 dashboards, token launch platforms, and blockchain transaction analytics using Dexscreener and wallet connections.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Studio & Client Work",
      period: "2019 — 2021",
      points: [
        "Turned Figma designs into responsive, pixel-perfect websites and mobile apps.",
        "Partnered with founders to define product strategy and technical roadmaps.",
      ],
    },
  ],
  education: [
    { degree: "B.Sc. Computer Science", school: "Federal University of Oye Ekiti, Nigeria", period: "2020 — 2024" },
  ],
};

// ─── Resume section ────────────────────────────────────────────────────────────
const ResumeSection = () => (
  <section
    id="resume-section"
    className="section-vertical flex items-center justify-center px-8 md:px-16 bg-zinc-950/70 border-t border-zinc-800/80 pt-24 pb-12"
  >
    <div className="w-full max-w-5xl mx-auto my-auto py-10">
      <div className="no-print flex items-center justify-between mb-8">
        <h2 className="text-accent text-xs font-bold uppercase tracking-[0.3em]">05. Resume</h2>
        <button
          onClick={() => window.print()}
          className="bg-accent text-black px-6 py-3 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all"
        >
          Download PDF
        </button>
      </div>

      <div className="flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-2 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none">Victor Olaiya</h1>
          <p className="text-accent text-lg font-semibold">{resume.title}</p>
          <p className="text-gray-400 text-sm flex flex-wrap items-center gap-2">
            <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors">{EMAIL}</a>
            <span>·</span>
            <a href="https://github.com/Victor-1618" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">github.com/Victor-1618</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/victor-olaiya-935a14159/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">linkedin.com/in/victor-olaiya-935a14159/</a>
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-3xl mt-2">{resume.summary}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Experience */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <h3 className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Experience</h3>
            {resume.experience.map((job) => (
              <div key={job.role} className="border-l-2 border-accent/40 pl-6 flex flex-col gap-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-xl font-bold tracking-tight">{job.role}</h4>
                  <span className="text-xs text-gray-500 font-mono">{job.period}</span>
                </div>
                <p className="text-accent text-sm font-semibold">{job.company}</p>
                <ul className="flex flex-col gap-2 text-gray-400 text-sm leading-relaxed list-disc list-inside">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Skills */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-4">Education</h3>
              {resume.education.map((edu) => (
                <div key={edu.degree} className="flex flex-col gap-1">
                  <h4 className="text-lg font-bold tracking-tight">{edu.degree}</h4>
                  <p className="text-gray-400 text-sm">{edu.school}</p>
                  <p className="text-gray-500 text-xs font-mono">{edu.period}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.flatMap((g) => g.items.slice(0, 2)).map((s) => (
                  <span key={s.name} className="text-xs text-gray-300 border border-white/10 px-3 py-1.5 rounded-full">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Nav Arrow Buttons ─────────────────────────────────────────────────────────
const NavArrows = ({
  onPrev,
  onNext,
  showUp,
  showDown,
}: {
  onPrev: () => void;
  onNext: () => void;
  showUp: boolean;
  showDown: boolean;
}) => (
  <div className="no-print fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
    <button
      id="nav-prev"
      onClick={onPrev}
      aria-label="Previous section"
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.15)",
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(12px)",
        color: "white",
        display: showUp ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(125,211,252,0.15)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "#7DD3FC";
        (e.currentTarget as HTMLButtonElement).style.color = "#7DD3FC";
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.5)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)";
        (e.currentTarget as HTMLButtonElement).style.color = "white";
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>

    <button
      id="nav-next"
      onClick={onNext}
      aria-label="Next section"
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.15)",
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(12px)",
        color: "white",
        display: showDown ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(125,211,252,0.15)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "#7DD3FC";
        (e.currentTarget as HTMLButtonElement).style.color = "#7DD3FC";
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.5)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)";
        (e.currentTarget as HTMLButtonElement).style.color = "white";
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  </div>
);

// ─── Contact ───────────────────────────────────────────────────────────────────
const CALENDLY_URL = "https://calendly.com/olaiyavf/30min";

const projectTypes = [
  "Web App Development",
  "Mobile App Development",
  "Design to Code",
  "E-Commerce",
  "Tech Strategy / Consulting",
  "Something else",
];

const inputClass =
  "w-full bg-zinc-900/70 border border-zinc-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent/60 focus:bg-zinc-900 transition-colors rounded-lg";

const Contact = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  useEffect(() => {
    const host = widgetRef.current;
    if (!host) return;
    const w = window as unknown as {
      Calendly?: { initInlineWidget?: (opts: Record<string, unknown>) => void };
    };
    const init = () => {
      if (host.childElementCount > 0) return;
      if (typeof w.Calendly?.initInlineWidget !== "function") return;
      w.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: host,
        inlineStyles: true,
      });
    };
    init();
    const t = setInterval(init, 500);
    return () => clearInterval(t);
  }, []);

  const set =
    (key: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (form.name.trim()) params.set("name", form.name.trim());
    if (form.email.trim()) params.set("email", form.email.trim());
    if (form.projectType) params.set("a1", form.projectType);
    const qs = params.toString();
    window.open(qs ? `${CALENDLY_URL}?${qs}` : CALENDLY_URL, "_blank", "noopener");
  };

  return (
    <section id="contact" className="section-vertical flex items-center justify-center px-8 md:px-16 border-t border-white/5 pt-24 pb-12">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-6">06. Book a Call</h2>
            <p className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              Let's build something <span className="text-accent">great together</span>.
            </p>
            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              Grab a free 30-minute slot on my calendar. Tell me a bit about your project and I'll come prepared.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Name</label>
                <input id="contact-name" type="text" value={form.name} onChange={set("name")} placeholder="Your name" className={inputClass} required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Email</label>
                <input id="contact-email" type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" className={inputClass} required />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-type" className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Project Type</label>
              <select id="contact-type" value={form.projectType} onChange={set("projectType")} className={inputClass} required>
                <option value="" className="bg-black">Select a project type</option>
                {projectTypes.map((t) => (
                  <option key={t} value={t} className="bg-black">{t}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Message (optional)</label>
              <textarea id="contact-message" rows={3} value={form.message} onChange={set("message")} placeholder="Tell me about your project…" className={`${inputClass} resize-none`} />
            </div>

            <button type="submit" className="self-start bg-accent text-black px-6 py-3 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all">
              Pick a time
            </button>
          </form>
        </div>

        <div className="w-full lg:pl-4">
          <div
            ref={widgetRef}
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: "320px", height: "min(700px, 72vh)" }}
          />
        </div>
      </div>
    </section>
  );
};

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
          const index = Math.round(container.scrollTop / window.innerHeight);
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

  const scrollByDir = (dir: "up" | "down") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      top: dir === "up" ? -window.innerHeight : window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollToSection = (index: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  const sectionCount = 7;

  return (
    <div className="h-screen w-screen bg-black text-white selection:bg-accent selection:text-black overflow-hidden font-sans">
      <Navbar onNavigate={scrollToSection} currentSection={currentSection} />
      <NavArrows
        onPrev={() => scrollByDir("up")}
        onNext={() => scrollByDir("down")}
        showUp={currentSection > 0}
        showDown={currentSection < sectionCount - 1}
      />

      <div ref={scrollRef} className="vertical-scroll-container">
        {/* ── Home ── */}
        <section id="home" className="section-vertical bg-grid flex items-center justify-center pt-24 pb-12">
          <main className="w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-12 xl:gap-20 items-center relative">
            <div className="flex flex-col order-2 lg:order-1">
              <HeroMain onChat={() => scrollToSection(6)} />
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
                  className="relative w-64 h-auto md:w-80 lg:w-[450px] transition-all duration-700 drop-shadow-[0_0_30px_rgba(125,211,252,0.1)]"
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
        <section id="about" className="section-vertical bg-grid flex items-center justify-center px-8 md:px-16 border-t border-zinc-800/80 pt-24 pb-12">
          <div className="max-w-4xl w-full">
            <h2 className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-4">01. About Me</h2>
            <p className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              I build websites &amp; apps, and <span className="text-accent">integrate AI</span> into manual workflows.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400 text-base md:text-lg leading-relaxed">
              <p>
                My core focus is creating fast, scalable websites and web applications end-to-end — from polished frontends to robust backends and APIs.
              </p>
              <p>
                Beyond that, I specialize in AI integrations and workflow automation — replacing repetitive manual processes with LLM-powered tools, automated pipelines, and smart dashboards.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="text-xs font-mono px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-accent font-medium">
                ⚡ Full-Stack &amp; SaaS
              </span>
              <span className="text-xs font-mono px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-purple-300 font-medium">
                🤖 AI Workflows &amp; Automation
              </span>
              <span className="text-xs font-mono px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-emerald-300 font-medium">
                🎨 Figma to Code Precision
              </span>
            </div>

            <GitHubContributions />
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="section-vertical bg-grid flex items-center justify-center px-8 md:px-16 bg-zinc-950/70 border-t border-zinc-800/80 pt-24 pb-12">
          <SkillsSection />
        </section>

        {/* ── Services ── */}
        <section id="services" className="section-vertical bg-grid flex items-center justify-center px-8 md:px-16 bg-zinc-950/70 border-t border-zinc-800/80 pt-24 pb-12">
          <div className="w-full max-w-6xl">
            <h2 className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-16">03. Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { num: "01", title: "Full-stack Dev", desc: "Building robust, scalable applications from the ground up using modern technologies." },
                { num: "02", title: "Design to Code", desc: "Turning Figma designs into pixel-perfect, responsive websites and apps." },
                { num: "03", title: "Product Strategy", desc: "Helping startups and brands define their digital roadmap and technical architecture." },
              ].map((s) => (
                <div key={s.num} className="group p-8 border border-zinc-800 bg-zinc-900/40 hover:border-accent/50 hover:bg-zinc-900/80 transition-all duration-500 rounded-xl">
                  <div className="text-accent font-mono text-sm mb-6">{s.num}</div>
                  <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Works ── */}
        <section id="works" className="section-vertical bg-grid flex items-center justify-center px-8 md:px-16 border-t border-white/5 pt-24 pb-12">
          <div className="w-full max-w-6xl">
            <h2 className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-12">04. Selected Works</h2>
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

        {/* ── Resume ── */}
        <ResumeSection />

        {/* ── Contact ── */}
        <Contact />
      </div>

      {/* Footer */}
      <footer className="no-print fixed bottom-0 left-0 right-0 px-4 md:px-16 py-4 border-t border-white/5 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center md:justify-between">
        <span className="text-gray-600 text-[10px] uppercase tracking-widest text-center">
          &copy; {new Date().getFullYear()} Victor. All rights reserved.
        </span>
        <div className="hidden md:block"><SocialIcons size={18} /></div>
      </footer>
    </div>
  );
}
