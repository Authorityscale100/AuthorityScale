import { createFileRoute, redirect } from "@tanstack/react-router";

// Preserve old/shared links while sending visitors to the honest assessment CTA.
export const Route = createFileRoute("/assessment")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "assessment" });
  },
  component: () => null,
});
