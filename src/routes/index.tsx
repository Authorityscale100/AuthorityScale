import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { readFile } from "node:fs/promises";

const getBusinessName = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const cfg = JSON.parse(await readFile("site.json", "utf8")) as {
      businessName?: string;
    };
    return cfg.businessName?.trim() ?? "AuthorityScale";
  } catch {
    return "AuthorityScale";
  }
});

export const Route = createFileRoute("/")({
  loader: () => getBusinessName(),
  component: Home,
});

function Home() {
  const businessName = Route.useLoaderData();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-800">
        <div className="text-xl font-bold tracking-tight">{businessName}</div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#solutions" className="hover:text-indigo-600 transition-colors">Solutions</a>
          <a href="/assessment" className="hover:text-indigo-600 transition-colors font-bold text-indigo-600">Free Assessment</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-6 py-20 md:py-32 flex flex-col items-center text-center max-w-5xl mx-auto">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 mb-6">
            Business Authority Intelligence
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Build Trust. <span className="text-indigo-600">Scale Authority.</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed">
            We identify high-growth companies at key milestones and provide the strategic media exposure and credibility needed to dominate your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/assessment" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-indigo-200 dark:shadow-none text-center">
              Free Authority Assessment
            </a>
            <a href="#solutions" className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-all text-center">
              Our Solutions
            </a>
          </div>
        </section>

        {/* Feature/Value Prop Section */}
        <section id="about" className="bg-gray-50 dark:bg-gray-900/50 py-24 px-6 border-y dark:border-gray-800">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-6 text-2xl shadow-lg shadow-indigo-200 dark:shadow-none">
                🚀
              </div>
              <h3 className="text-xl font-bold">Growth Intelligence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our AI-powered platform tracks real-time growth milestones, from funding rounds to product launches, ensuring you never miss a visibility window.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-6 text-2xl shadow-lg shadow-indigo-200 dark:shadow-none">
                🛡️
              </div>
              <h3 className="text-xl font-bold">Verified Authority</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Establish instant credibility with premium media placements and verified expert status that forces your competition to play catch-up.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-6 text-2xl shadow-lg shadow-indigo-200 dark:shadow-none">
                📈
              </div>
              <h3 className="text-xl font-bold">Scalable Visibility</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Convert authority into measurable ROI. We help you leverage your enhanced reputation to drive high-intent leads and sustainable revenue.
              </p>
            </div>
          </div>
        </section>

        {/* Robust Solutions Section */}
        <section id="solutions" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trust-as-a-Service</h2>
            <p className="text-xl text-indigo-600 font-semibold uppercase tracking-widest italic">
              Authority is the primary currency of growth.
            </p>
            <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
              We provide the infrastructure required to build, maintain, and scale your brand's credibility in a crowded digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {/* Media Exposure */}
            <div className="p-8 border dark:border-gray-800 rounded-3xl hover:border-indigo-500 transition-all group hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <svg className="w-8 h-8 text-indigo-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2v4a2 2 0 002 2h4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h0M7 12h8M7 16h8" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Media Exposure</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                Command the narrative with strategic placements in top-tier news outlets. We don't just get you "seen"—we get you validated by the world's most trusted platforms.
              </p>
              <a href="#contact" className="text-indigo-600 font-bold text-sm hover:underline">Secure Placement &rarr;</a>
            </div>

            {/* Authority Intelligence */}
            <div className="p-8 border dark:border-gray-800 rounded-3xl hover:border-indigo-500 transition-all group hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <svg className="w-8 h-8 text-indigo-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Authority Intelligence</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                Our AI engine identifies the exact trust gap between you and your market leaders. Get real-time audits of your brand's authority score across all digital touchpoints.
              </p>
              <a href="/assessment" className="text-indigo-600 font-bold text-sm hover:underline">Run AI Audit &rarr;</a>
            </div>

            {/* PR Readiness */}
            <div className="p-8 border dark:border-gray-800 rounded-3xl hover:border-indigo-500 transition-all group hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <svg className="w-8 h-8 text-indigo-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">PR Readiness</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                Before you scale, ensure you can withstand the spotlight. Our experts assess your brand architecture to guarantee maximum ROI from every media mention.
              </p>
              <a href="#contact" className="text-indigo-600 font-bold text-sm hover:underline">Check Readiness &rarr;</a>
            </div>

            {/* Founder Branding */}
            <div className="p-8 border dark:border-gray-800 rounded-3xl hover:border-indigo-500 transition-all group hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <svg className="w-8 h-8 text-indigo-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Founder Branding</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                Transform individual expertise into corporate leverage. We build founder personas that radiate trust, making your company the only logical choice in your category.
              </p>
              <a href="#contact" className="text-indigo-600 font-bold text-sm hover:underline">Build Authority &rarr;</a>
            </div>
          </div>

          {/* Why Trust AuthorityScale? Subsection */}
          <div className="bg-gray-900 text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-6">Why Trust AuthorityScale?</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  In an era of AI-generated noise, true authority is your only defense. We don't just offer services; we offer a proprietary intelligence platform that benchmarks your growth against the highest industry standards.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 flex-shrink-0 mt-1 flex items-center justify-center text-[10px]">✓</div>
                    <p><span className="font-bold text-white">Milestone Tracking:</span> We scan the global business landscape to identify your most potent PR opportunities before they happen.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 flex-shrink-0 mt-1 flex items-center justify-center text-[10px]">✓</div>
                    <p><span className="font-bold text-white">Trust Benchmarking:</span> Compare your brand's digital authority score against competitors in real-time.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 flex-shrink-0 mt-1 flex items-center justify-center text-[10px]">✓</div>
                    <p><span className="font-bold text-white">Performance-Led Visibility:</span> Every placement is selected based on its ability to drive authority and conversion.</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block border border-gray-800 rounded-3xl p-8 bg-gray-950/50 backdrop-blur-sm shadow-2xl">
                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-gray-800 pb-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Authority Score</p>
                      <p className="text-3xl font-bold text-indigo-400">88.4</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-green-500 font-bold">+12% vs LY</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Market Trust Sentiment</p>
                    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-indigo-500 h-full w-[88%]"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
                      <p className="text-[10px] text-gray-500 uppercase font-bold">Media Mentions</p>
                      <p className="text-xl font-bold">142</p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
                      <p className="text-[10px] text-gray-500 uppercase font-bold">Verified Status</p>
                      <p className="text-xl font-bold text-green-400">Active</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Decorations */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-900/40 rounded-full blur-[100px]"></div>
          </div>
        </section>

        {/* Contact/CTA */}
        <section id="contact" className="py-24 px-6 bg-indigo-600 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to scale your authority?</h2>
          <p className="text-indigo-100 mb-10 max-w-xl mx-auto text-lg">
            Join the elite circle of companies that prioritize trust as their primary growth engine.
          </p>
          <button className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-900/20 active:scale-95">
            Contact Intelligence Team
          </button>
        </section>
      </main>

      <footer className="px-6 py-12 border-t dark:border-gray-800 text-center text-gray-500 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold text-gray-900 dark:text-white">{businessName}</div>
          <div className="flex gap-12">
            <div className="text-left space-y-2">
              <p className="font-bold text-gray-900 dark:text-white mb-4">Platform</p>
              <a href="#about" className="block hover:text-indigo-600">About</a>
              <a href="#solutions" className="block hover:text-indigo-600">Solutions</a>
              <a href="/assessment" className="block hover:text-indigo-600">Assessment</a>
            </div>
            <div className="text-left space-y-2">
              <p className="font-bold text-gray-900 dark:text-white mb-4">Legal</p>
              <a href="#" className="block hover:text-indigo-600">Privacy</a>
              <a href="#" className="block hover:text-indigo-600">Terms</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t dark:border-gray-800">
          <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved. Confidential Intelligence Data.</p>
        </div>
      </footer>
    </div>
  );
}
