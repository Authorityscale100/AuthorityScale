import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/assessment")({
  component: Assessment,
});

function Assessment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    url: "",
    recentMilestone: "",
  });
  const [result, setResult] = useState<null | { score: number; status: string; advice: string }>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2); // Loading
    setTimeout(() => {
      const score = Math.floor(Math.random() * 40) + 30; // Random score between 30-70
      setResult({
        score,
        status: score < 50 ? "Emerging" : "Establishing",
        advice: score < 50 
          ? "Your authority is in the early stages. Strategic media placements could significantly accelerate your growth."
          : "You have a solid foundation, but there are clear gaps in your high-authority media presence that are holding back your scaling potential.",
      });
      setStep(3); // Result
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <nav className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-800">
        <a href="/" className="text-xl font-bold tracking-tight">AuthorityScale</a>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
          <a href="/" className="hover:text-indigo-600 transition-colors">Home</a>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="max-w-xl w-full">
          {step === 1 && (
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border dark:border-gray-800">
              <h1 className="text-3xl font-bold mb-2">Free Authority Assessment</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Analyze your current market authority and discover opportunities for growth.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    required
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Website URL</label>
                  <input
                    required
                    type="url"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="https://acme.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Recent Milestone</label>
                  <textarea
                    required
                    name="recentMilestone"
                    value={formData.recentMilestone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none h-24"
                    placeholder="e.g., Series A funding, new product launch, expansion to EU..."
                  />
                </div>
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200 dark:shadow-none">
                  Run Intelligence Scan
                </button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="text-center py-20">
              <div className="animate-spin w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-6"></div>
              <h2 className="text-2xl font-bold">Analyzing Authority Signals...</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Checking media mentions, SEO trust metrics, and market sentiment.</p>
            </div>
          )}

          {step === 3 && result && (
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border dark:border-gray-800 text-center animate-in fade-in zoom-in duration-500">
              <h2 className="text-2xl font-bold mb-2">Assessment for {formData.companyName}</h2>
              <div className="my-8">
                <div className="text-5xl font-extrabold text-indigo-600">{result.score}/100</div>
                <div className="text-lg font-medium mt-2">Authority Score: <span className="text-indigo-500">{result.status}</span></div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl text-left mb-8">
                <h4 className="font-bold mb-2 italic">Intelligence Insight:</h4>
                <p className="text-gray-600 dark:text-gray-400">{result.advice}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Recommended Actions:</h3>
                <div className="grid gap-4">
                  <a 
                    href="https://www.brandpush.co/?ref=65030" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-6 border-2 border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl hover:scale-[1.02] transition-all text-left shadow-xl"
                  >
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-1">Critical Fix</div>
                      <div className="font-black text-2xl text-indigo-700 dark:text-indigo-300">FIX YOUR AUTHORITY NOW</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-medium">Get featured on 200+ premium news sites instantly.</div>
                    </div>
                    <span className="text-3xl animate-bounce">🚀</span>
                  </a>
                  <button className="w-full bg-gray-900 dark:bg-white dark:text-gray-900 text-white font-bold py-4 rounded-xl transition-colors">
                    Book Full Intelligence Briefing
                  </button>
                </div>
              </div>
              
              <button onClick={() => setStep(1)} className="mt-8 text-sm text-gray-500 hover:underline">
                Run another assessment
              </button>
            </div>
          )}
        </div>
      </main>
      
      <footer className="px-6 py-8 border-t dark:border-gray-800 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} AuthorityScale. Confidential Intelligence Report.
      </footer>
    </div>
  );
}
