import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "My site" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: () => <div>Page not found</div>,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="sticky top-0 z-[100] bg-amber-400 text-black py-2.5 px-4 text-center text-sm font-black shadow-lg border-b border-amber-500">
          <div className="flex items-center justify-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
            <span>URGENT: Is your brand authority leaking?</span>
            <a href="/assessment" className="bg-black text-white px-3 py-1 rounded ml-1 hover:bg-gray-800 transition-all text-[10px] sm:text-xs tracking-tighter uppercase">
              Get a 30-second audit &rarr;
            </a>
          </div>
        </div>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
