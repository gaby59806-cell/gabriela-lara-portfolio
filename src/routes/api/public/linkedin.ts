import { createFileRoute } from "@tanstack/react-router";

const linkedinUrl = "https://www.linkedin.com/in/gabriela-lara-garavi-22793340b/";

export const Route = createFileRoute("/api/public/linkedin")({
  server: {
    handlers: {
      GET: async () =>
        Response.redirect(linkedinUrl, 302),
    },
  },
});