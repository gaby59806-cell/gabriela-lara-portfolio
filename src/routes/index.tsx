import type { MouseEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Github, Mail, Linkedin, Code2, Palette, Sparkles, Layout, Heart, ArrowUpRight, Menu, X } from "lucide-react";
import heroImage from "@/assets/gabriela-hero.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "intereses", label: "Intereses" },
  { id: "habilidades", label: "Habilidades" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

const intereses = [
  { icon: Code2, title: "Desarrollo frontend", desc: "Construir interfaces vivas y accesibles." },
  { icon: Heart, title: "Experiencia de usuario", desc: "Diseñar flujos que se sientan naturales." },
  { icon: Layout, title: "Diseño web", desc: "Composición, ritmo visual y jerarquía." },
  { icon: Palette, title: "Diseño de interfaces", desc: "Sistemas visuales coherentes y limpios." },
  { icon: Sparkles, title: "Creatividad digital", desc: "Explorar el cruce entre arte y código." },
];

const habilidades = [
  { name: "Java", level: "Intermedio" },
  { name: "LibreSprite", level: "Intermedio" },
  { name: "Diseño digital básico", level: "Practicando" },
  { name: "Desarrollo frontend", level: "En aprendizaje" },
  { name: "Diseño de interfaces", level: "En aprendizaje" },
];

const proyectos = [
  {
    title: "Software de venta de ropas",
    tag: "Proyecto universitario",
    desc: "Sistema para la gestión de venta de ropas. Permitió aplicar conocimientos de programación, organización de información y resolver necesidades comerciales con herramientas tecnológicas.",
  },
  {
    title: "Surviving the Darkness",
    tag: "Proyecto creativo",
    desc: "Propuesta interactiva donde apliqué habilidades de diseño, lógica, creatividad digital y trabajo en equipo dentro del contexto académico.",
  },
];

function Portfolio() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  const openInNewTab = (event: MouseEvent<HTMLAnchorElement>, url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");

    if (newWindow) {
      newWindow.opener = null;
      event.preventDefault();
    }
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("inicio")} className="flex items-center gap-2 group">
            <span className="h-9 w-9 rounded-full gradient-primary grid place-items-center text-primary-foreground font-display font-semibold shadow-soft">G</span>
            <span className="font-display text-lg font-semibold tracking-tight">Gabriela Lara</span>
          </button>
          <nav className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`px-3 py-2 text-sm rounded-full transition-all ${
                  active === s.id
                    ? "bg-primary-soft text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border/50 bg-background/95">
            <div className="px-6 py-3 flex flex-col">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`text-left py-2 text-sm ${active === s.id ? "text-primary font-medium" : "text-muted-foreground"}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-60" aria-hidden />
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-pink-soft blur-3xl opacity-50" aria-hidden />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-soft blur-3xl opacity-50" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/80 backdrop-blur border border-border text-xs font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Portafolio · 2026
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-display font-semibold leading-[1.05]">
              Gabriela <br />
              <span className="gradient-text italic">Paola Lara</span> Garaví
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Estudiante de Ingeniería de Software interesada en el diseño web, la creatividad digital y el desarrollo de interfaces atractivas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("proyectos")}
                className="px-6 py-3 rounded-full gradient-primary text-primary-foreground text-sm font-medium shadow-soft hover:opacity-90 transition inline-flex items-center gap-2"
              >
                Ver proyectos <ArrowUpRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTo("contacto")}
                className="px-6 py-3 rounded-full bg-card border border-border text-sm font-medium hover:bg-primary-soft/40 transition"
              >
                Contáctame
              </button>
            </div>
          </div>
          <div className="relative mx-auto">
            <div className="absolute -inset-6 gradient-primary rounded-[2.5rem] blur-2xl opacity-30" aria-hidden />
            <div className="relative rounded-[2rem] overflow-hidden border-4 border-card shadow-soft bg-pink-soft/40 w-72 h-80 md:w-80 md:h-96">
              <img
                src={heroImage}
                alt="Ilustración de Gabriela Lara"
                width={896}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl px-4 py-3 shadow-card border border-border">
              <p className="text-xs text-muted-foreground">Universidad de Guayaquil</p>
              <p className="text-sm font-medium">Ing. de Software · 3er sem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <Section id="sobre-mi" eyebrow="01 — Sobre mí" title="Creatividad y código, en equilibrio.">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Soy <span className="text-foreground font-medium">Gabriela Paola Lara Garaví</span>, estudiante de tercer semestre de Ingeniería de Software en la Universidad de Guayaquil. Me interesa el desarrollo frontend, la experiencia de usuario y el diseño de interfaces digitales.
            </p>
            <p>
              Me gusta combinar la creatividad con la tecnología para crear soluciones visuales, funcionales y fáciles de usar. Actualmente estoy fortaleciendo mis conocimientos en programación, diseño digital y desarrollo de proyectos universitarios relacionados con software.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {[
              { k: "3°", v: "Semestre" },
              { k: "5+", v: "Áreas de interés" },
              { k: "2", v: "Proyectos" },
              { k: "∞", v: "Curiosidad" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl bg-card border border-border p-5 shadow-card">
                <div className="font-display text-3xl gradient-text">{s.k}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Intereses */}
      <Section id="intereses" eyebrow="02 — Áreas de interés" title="Lo que me mueve.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {intereses.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-3xl bg-card border border-border p-6 shadow-card hover:-translate-y-1 hover:shadow-soft transition">
              <div className="h-12 w-12 rounded-2xl gradient-primary grid place-items-center text-primary-foreground mb-5 group-hover:rotate-6 transition">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Habilidades */}
      <Section id="habilidades" eyebrow="03 — Habilidades técnicas" title="Mi caja de herramientas.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {habilidades.map((h) => (
            <div key={h.name} className="rounded-2xl bg-card border border-border p-5 shadow-card flex items-center justify-between">
              <div>
                <p className="font-medium">{h.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{h.level}</p>
              </div>
              <span className="h-10 w-10 rounded-xl bg-primary-soft/50 grid place-items-center text-primary">
                <Sparkles className="h-4 w-4" />
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Proyectos */}
      <Section id="proyectos" eyebrow="04 — Proyectos" title="Cosas que he construido.">
        <div className="grid md:grid-cols-2 gap-6">
          {proyectos.map((p, i) => (
            <article key={p.title} className="group relative rounded-3xl bg-card border border-border overflow-hidden shadow-card hover:shadow-soft transition">
              <div className={`h-40 ${i === 0 ? "bg-gradient-to-br from-pink-soft to-primary-soft" : "bg-gradient-to-br from-blue-soft to-primary-soft"} relative`}>
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-6xl text-card/80 font-bold">0{i + 1}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-primary font-medium">{p.tag}</span>
                <h3 className="mt-2 font-display text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Contacto */}
      <Section id="contacto" eyebrow="05 — Contacto" title="Hablemos.">
        <div className="rounded-3xl gradient-hero p-8 md:p-14 border border-border shadow-soft">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold">¿Tienes una idea o quieres colaborar?</h3>
              <p className="mt-4 text-muted-foreground">Estoy abierta a oportunidades académicas, proyectos creativos y aprender en equipo.</p>
            </div>
            <div className="space-y-3">
              <a href="mailto:gabriela.larag@ug.edu.ec" className="flex items-center justify-between gap-4 rounded-2xl bg-card border border-border p-5 hover:-translate-y-0.5 transition shadow-card">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-xl gradient-primary grid place-items-center text-primary-foreground">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">Correo</p>
                    <p className="text-sm font-medium">gabriela.larag@ug.edu.ec</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </a>
              <a href="https://github.com/gaby59806-cell" target="_blank" rel="noopener noreferrer" onClick={(event) => openInNewTab(event, "https://github.com/gaby59806-cell")} className="flex items-center justify-between gap-4 rounded-2xl bg-card border border-border p-5 hover:-translate-y-0.5 transition shadow-card">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-xl gradient-primary grid place-items-center text-primary-foreground">
                    <Github className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">GitHub</p>
                    <p className="text-sm font-medium">@gaby59806-cell</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </a>
              <a href="/api/public/linkedin" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 rounded-2xl bg-card border border-border p-5 hover:-translate-y-0.5 transition shadow-card">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-xl gradient-primary grid place-items-center text-primary-foreground">
                    <Linkedin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">LinkedIn</p>
                    <p className="text-sm font-medium">gabriela-lara-garavi</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-sm text-muted-foreground border-t border-border/50">
        © {new Date().getFullYear()} Gabriela Paola Lara Garaví · Hecho con cariño y código.
      </footer>
    </div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">{eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
