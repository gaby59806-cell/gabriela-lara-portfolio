import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const linkedinUrl = "https://www.linkedin.com/in/gabriela-lara-garavi-22793340b/";

export const Route = createFileRoute("/linkedin")({
  component: LinkedInRedirectPage,
});

function LinkedInRedirectPage() {
  useEffect(() => {
    window.location.replace(linkedinUrl);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground grid place-items-center px-6">
      <div className="max-w-md text-center space-y-4">
        <h1 className="font-display text-3xl font-semibold">Abriendo LinkedIn…</h1>
        <p className="text-muted-foreground">
          Si no se abre automáticamente, usa el botón de abajo.
        </p>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full gradient-primary text-primary-foreground text-sm font-medium shadow-soft hover:opacity-90 transition"
        >
          Abrir perfil
        </a>
      </div>
    </main>
  );
}