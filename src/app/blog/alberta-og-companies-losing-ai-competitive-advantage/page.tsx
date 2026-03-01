import { Badge } from "@/components/ui/badge"
import { Zap, ArrowLeft, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 sticky top-0 bg-slate-950/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center"><Zap className="w-5 h-5 text-white" /></div>
              <span className="text-xl font-bold text-white">Natgas Powered AI</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/#about" className="text-slate-300 hover:text-white transition-colors">About</Link>
              <Link href="/#partnerships" className="text-slate-300 hover:text-white transition-colors">Partnerships</Link>
              <Link href="/#services" className="text-slate-300 hover:text-white transition-colors">Services</Link>
              <Link href="/infrastructure-index" className="text-slate-300 hover:text-white transition-colors">Infrastructure</Link>
              <Link href="/blog" className="text-white font-medium transition-colors">Blog</Link>
            </nav>
          </div>
        </div>
      </header>

      <article className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />Back to Blog
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">Industry Analysis</Badge>
              <span className="text-sm text-slate-400">February 20, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight text-balance">
              Alberta O&amp;G Companies Are Losing 5+ Years of AI Competitive Advantage Waiting for Grid Power
            </h1>
            <p className="text-xl text-slate-300">Behind-the-Meter Natural Gas Generation Fixes This in 18 Months</p>
          </div>

          <div className="prose prose-invert prose-slate max-w-none space-y-8">
            <p className="text-lg text-cyan-400 font-medium">Here is the math no one is talking about.</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">The Alberta AI Power Crisis in Plain Numbers</h2>
              <p className="text-slate-300 leading-relaxed">Right now, dozens of proposed data center projects are fighting over just 1.2 GW of available AESO capacity allocated in Phase I of their Large Load Integration Program. Total demand from data center projects in the interconnection queue? Over 20 GW. Alberta's entire peak grid load historically hovers around 12.4 to 12.7 GW. That means massive volumes of projects are stranded - approved in principle, capitalized, ready to build, but with nowhere to plug in.</p>
              <p className="text-slate-300 leading-relaxed">If you are an Alberta oil and gas company watching this unfold, here is what that means for you: waiting for grid power to run AI is not a strategy. It is a five-year competitive handicap.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Why the Grid Queue Is a Dead End for O&amp;G AI Adoption</h2>
              <p className="text-slate-300 leading-relaxed">For oil and gas operators looking to deploy AI for well log interpretation, production optimization, predictive maintenance, anomaly detection, and reservoir simulation - waiting years for grid capacity is simply not an option. Your competitors are not waiting.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Behind-the-Meter Natural Gas Generation: The 18-Month Shortcut</h2>
              <p className="text-slate-300 leading-relaxed">Behind-the-meter (BTM) generation means producing electricity on-site, directly from natural gas, without needing AESO transmission access. It is the only solution that lets Alberta O&amp;G companies go from zero to operational AI compute in under 18 months.</p>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left p-4 text-white font-semibold">Phase</th>
                      <th className="text-left p-4 text-white font-semibold">Timeline</th>
                      <th className="text-left p-4 text-white font-semibold">Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-700/50"><td className="p-4">Site assessment and design</td><td className="p-4">Month 1-3</td><td className="p-4">Feasibility confirmed, gas supply secured</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="p-4">Permitting and procurement</td><td className="p-4">Month 3-6</td><td className="p-4">AER and municipal approvals, equipment ordered</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="p-4">Modular generation buildout</td><td className="p-4">Month 6-12</td><td className="p-4">1-10 MW generation installed and tested</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="p-4">GPU deployment and commissioning</td><td className="p-4">Month 12-16</td><td className="p-4">AI workloads running on dedicated power</td></tr>
                    <tr><td className="p-4">Full production</td><td className="p-4">Month 16-18</td><td className="p-4">Optimized, stable AI operations at scale</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-300 leading-relaxed">Compare that to the grid route: 3-5 years just to get an AESO interconnection approval - if you even get one.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">The Bottom Line</h2>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 my-6 space-y-3">
                <div className="flex justify-between items-center text-slate-300"><span>Grid interconnection timeline</span><span className="font-semibold text-white">3-5+ years</span></div>
                <div className="flex justify-between items-center text-slate-300"><span>Behind-the-meter BTM timeline</span><span className="font-semibold text-cyan-400">12-18 months</span></div>
                <div className="flex justify-between items-center text-slate-300"><span>Competitive advantage lost waiting</span><span className="font-semibold text-white">5+ years</span></div>
              </div>
              <p className="text-slate-300 leading-relaxed">Alberta's natural gas is the most underutilized competitive asset in the AI infrastructure race. The companies that deploy it first - behind the meter, on their own terms - will set the pace for the rest of the decade.</p>
            </section>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center mt-12">
              <h3 className="text-xl font-bold text-white mb-3">Ready to stop waiting for the grid?</h3>
              <p className="text-slate-300 mb-6">Contact us to learn how behind-the-meter natural gas generation can power your AI operations in 18 months or less.</p>
              <a href="mailto:Simon@RealCapitolHill.com">
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">Simon@RealCapitolHill.com</Button>
              </a>
            </div>
          </div>
        </div>
      </article>

      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center"><Zap className="w-5 h-5 text-white" /></div>
              <span className="text-xl font-bold text-white">Natgas Powered AI</span>
            </div>
            <div className="flex gap-6 text-slate-400 text-sm">
              <a href="mailto:Simon@RealCapitolHill.com" className="flex items-center gap-2 hover:text-white"><Mail className="w-4 h-4" />Simon@RealCapitolHill.com</a>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />Calgary, Alberta</span>
            </div>
            <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Natgas Powered AI.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
