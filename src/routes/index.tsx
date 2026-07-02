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
            <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-indigo-200 dark:shadow-none">
              Get Started
            </a>
            <a href="#solutions" className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-all">
              Our Solutions
            </a>
          </div>
        </section>

        {/* Feature/Value Prop Section */}
        <section id="about" className="bg-gray-50 dark:bg-gray-900/50 py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-6 text-2xl">
                🚀
              </div>
              <h3 className="text-xl font-bold">Growth Intelligence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our AI-powered platform tracks real-time growth milestones, from funding rounds to product launches.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-6 text-2xl">
                🛡️
              </div>
              <h3 className="text-xl font-bold">Verified Authority</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Establish instant credibility with premium media placements and verified expert status in your industry.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-6 text-2xl">
                📈
              </div>
              <h3 className="text-xl font-bold">Scalable Visibility</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Convert authority into ROI. We help you leverage your enhanced reputation to drive leads and revenue.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-24 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Trust-as-a-Service</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 border dark:border-gray-800 rounded-2xl hover:border-indigo-500 transition-colors">
              <h4 className="text-lg font-bold mb-2">Media Exposure</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Strategic placements in high-authority news outlets to validate your brand.</p>
            </div>
            <div className="p-8 border dark:border-gray-800 rounded-2xl hover:border-indigo-500 transition-colors">
              <h4 className="text-lg font-bold mb-2">Authority Scoring</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Understand your current market credibility and discover gaps to fill.</p>
            </div>
            <div className="p-8 border dark:border-gray-800 rounded-2xl hover:border-indigo-500 transition-colors">
              <h4 className="text-lg font-bold mb-2">PR Readiness</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Expert assessment to ensure your business is ready for the spotlight.</p>
            </div>
            <div className="p-8 border dark:border-gray-800 rounded-2xl hover:border-indigo-500 transition-colors">
              <h4 className="text-lg font-bold mb-2">Founder Branding</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Building personal authority for leaders to strengthen corporate trust.</p>
            </div>
          </div>
        </section>

        {/* Contact/CTA */}
        <section id="contact" className="py-24 px-6 bg-indigo-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to scale your authority?</h2>
          <p className="text-indigo-100 mb-10 max-w-xl mx-auto">
            Contact our intelligence team today for a custom authority assessment.
          </p>
          <button className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors">
            Contact Intelligence Team
          </button>
        </section>
      </main>

      <footer className="px-6 py-12 border-t dark:border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-gray-800 dark:hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-gray-800 dark:hover:text-white">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
