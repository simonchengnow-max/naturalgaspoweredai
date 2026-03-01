import { Badge } from "@/components/ui/badge"
import { Zap, ArrowLeft, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 sticky top-0 bg-slate-950/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Natgas Powered AI</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/#about" className="text-slate-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/#partnerships" className="text-slate-300 hover:text-white transition-colors">
                Partnerships
              </Link>
              <Link href="/#services" className="text-slate-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/infrastructure-index" className="text-slate-300 hover:text-white transition-colors">
                Infrastructure
              </Link>
              <Link href="/blog" className="text-white font-medium transition-colors">
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Hero Image */}
          <div className="mb-12 -mx-4 sm:mx-0">
            <img
              src="/blog/alberta-ai-energy-hero.jpg"
              alt="Split-screen showing Alberta natural gas powering AI data centers on the left versus grid connection delays on the right"
              className="w-full rounded-none sm:rounded-xl object-cover aspect-video"
            />
          </div>

          {/* Article header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                Industry Analysis
              </Badge>
              <span className="text-sm text-slate-400">February 20, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight text-balance">
              Alberta O&G Companies Are Losing 5+ Years of AI Competitive Advantage Waiting for Grid Power
            </h1>
            <p className="text-xl text-slate-300">
              Behind-the-Meter Natural Gas Generation Fixes This in 18 Months
            </p>
          </div>

          {/* Article body */}
          <div className="prose prose-invert prose-slate max-w-none space-y-8">
            <p className="text-lg text-cyan-400 font-medium">
              {"Here's the math no one is talking about."}
            </p>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">The Alberta AI Power Crisis in Plain Numbers</h2>
              <p className="text-slate-300 leading-relaxed">
                {"The AI data center boom in Alberta isn't slowing down — it's accelerating past what the grid can handle."}
              </p>
              <p className="text-slate-300 leading-relaxed">
                Right now, dozens of proposed data center projects are fighting over just 1.2 GW of available AESO capacity allocated in Phase I of their Large Load Integration Program. Total demand from data center projects in the interconnection queue? Over 20 GW. {"Alberta's entire peak grid load historically hovers around 12.4 to 12.7 GW."} That means massive volumes of projects are stranded — approved in principle, capitalized, ready to build, but with nowhere to plug in.
              </p>
              <p className="text-slate-300 leading-relaxed">
                {"If you're an Alberta oil and gas company watching this unfold, here's what that means for you: waiting for grid power to run AI is not a strategy. It's a five-year competitive handicap."}
              </p>
              <p className="text-slate-300 leading-relaxed">
                The companies that figure this out in 2026 will own the AI productivity advantage for the rest of this decade. The ones that wait will spend those same years submitting AESO interconnection applications and watching their queue position slip.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Why the Grid Queue Is a Dead End for O&G AI Adoption</h2>
              <p className="text-slate-300 leading-relaxed">
                {"Alberta's electricity grid was not built for the compute density that modern AI workloads demand. A single GPU cluster running continuous inference can draw as much power as a small town. And the AESO interconnection queue — already overwhelmed by hyperscaler demand — now has a multi-year wait for new transmission-connected large loads."}
              </p>
              <p className="text-slate-300 leading-relaxed">
                For oil and gas operators looking to deploy AI for:
              </p>
              <ul className="space-y-2 text-slate-300 list-disc list-inside">
                <li>Well log interpretation and formation analysis</li>
                <li>Production optimization and decline curve modeling</li>
                <li>Predictive maintenance on surface and downhole equipment</li>
                <li>Anomaly detection across SCADA and sensor networks</li>
                <li>Reservoir simulation and EOR planning</li>
              </ul>
              <p className="text-slate-300 leading-relaxed">
                {"...waiting years for grid capacity is simply not an option. Your competitors aren't waiting. And they don't have to — because the power they need is already coming out of the ground."}
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Behind-the-Meter Natural Gas Generation: The 18-Month Shortcut</h2>
              <p className="text-slate-300 leading-relaxed">
                {"Behind-the-meter (BTM) generation means producing electricity on-site, directly from natural gas, without needing AESO transmission access. It's the only solution that lets Alberta O&G companies go from zero to operational AI compute in under 18 months."}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {"Here's what a typical modular BTM deployment looks like:"}
              </p>

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
                    <tr className="border-b border-slate-700/50">
                      <td className="p-4">Site assessment and design</td>
                      <td className="p-4">Month 1 - 3</td>
                      <td className="p-4">Feasibility confirmed, gas supply secured</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="p-4">Permitting and procurement</td>
                      <td className="p-4">Month 3 - 6</td>
                      <td className="p-4">AER and municipal approvals, equipment ordered</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="p-4">Modular generation buildout</td>
                      <td className="p-4">Month 6 - 12</td>
                      <td className="p-4">1 - 10 MW generation installed and tested</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="p-4">GPU deployment and commissioning</td>
                      <td className="p-4">Month 12 - 16</td>
                      <td className="p-4">AI workloads running on dedicated power</td>
                    </tr>
                    <tr>
                      <td className="p-4">Full production</td>
                      <td className="p-4">Month 16 - 18</td>
                      <td className="p-4">Optimized, stable AI operations at scale</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-300 leading-relaxed">
                {"Compare that to the grid route: 3 - 5 years just to get an AESO interconnection approval — if you even get one."}
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">What This Means for Alberta O&G Companies Right Now</h2>
              <p className="text-slate-300 leading-relaxed">
                {"This isn't a speculative technology play. The GPU hardware is commercially available. The gas supply is already flowing. The permitting process for BTM generation is well-understood in Alberta."}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {"What's missing — and what Natgas Powered AI provides — is the integration layer:"}
              </p>
              <ul className="space-y-2 text-slate-300 list-disc list-inside">
                <li>Matching gas supply with the right generation technology</li>
                <li>Designing modular AI factories that scale from 1 MW to 10 MW</li>
                <li>Managing AER permitting, emissions compliance, and electrical safety</li>
                <li>Deploying GPU infrastructure optimized for O&G workloads</li>
                <li>Operating and maintaining the full power-to-compute stack</li>
              </ul>
              <p className="text-slate-300 leading-relaxed">
                {"We've built our entire business around closing the gap between gas at the wellhead and GPUs in the rack."}
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">The Bottom Line</h2>
              <p className="text-slate-300 leading-relaxed">
                Every quarter you spend waiting for grid power is a quarter your competitors are using to train models, optimize production, and reduce operating costs with AI. The math is straightforward:
              </p>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 my-6 space-y-3">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Grid interconnection timeline</span>
                  <span className="font-semibold text-white">3 - 5+ years</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Behind-the-meter BTM timeline</span>
                  <span className="font-semibold text-cyan-400">12 - 18 months</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Competitive advantage lost waiting</span>
                  <span className="font-semibold text-white">5+ years</span>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed">
                {"Alberta's natural gas is the most underutilized competitive asset in the AI infrastructure race. The companies that deploy it first — behind the meter, on their own terms — will set the pace for the rest of the decade."}
              </p>
            </section>

            {/* CTA */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center mt-12">
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to stop waiting for the grid?
              </h3>
              <p className="text-slate-300 mb-6">
                Contact us to learn how behind-the-meter natural gas generation can power your AI operations in 18 months or less.
              </p>
              <a href="mailto:Simon@RealCapitolHill.com">
                <Button
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  Simon@RealCapitolHill.com
                </Button>
              </a>
            </div>

            {/* Sources */}
            <section className="border-t border-slate-800 pt-8 mt-12">
              <h3 className="text-lg font-semibold text-white mb-4">Sources</h3>
              <ol className="space-y-3 text-sm text-slate-400 list-decimal list-inside">
                <li>AESO (Alberta Electric System Operator). Large Load Integration Phase I Update. (June 2025). The AESO implemented an interim large load connection limit of 1,200 MW to safely integrate data centers without compromising grid reliability.</li>
                <li>AESO Data Centre Update (October 2025). AESO reported receiving requests exceeding 20,000 MW (20 GW) of data center load on their connection project list.</li>
                <li>{"Alberta internal load (AIL) peaked at roughly 12,785 MW in recent historical tracking."}</li>
                <li>{"Legislative Assembly of Alberta. Utilities Statutes Amendment Act, 2025 (Bill 8). Received Royal Assent on December 11, 2025. This bill legally defines the \"Bring Your Own Power\" framework, prioritizing self-supplying data centers to protect grid reliability."}</li>
                <li>{"Legislative Assembly of Alberta. Financial Statutes Amendment Act (No. 2), 2025 (Bill 12). Received Royal Assent on December 11, 2025. It introduces a levy on data centers 75 MW or larger, but reduces the levy to 1% for facilities that utilize self-generation arrangements."}</li>
                <li>{"Alberta Utilities Commission (AUC). Rule 007: Applications for Power Plants. Following Bulletin 2022-04, the AUC implemented a streamlined 5-business-day checklist application for power plants equal to or greater than 1 MW and less than 10 MW."}</li>
                <li>{"TransAlta Corporation. Third Quarter 2025 Results (November 2025) and AESO Large Load Projects Dashboard. TransAlta executed a Demand Transmission Service contract for 230 MW at Keephills Phase I, while GLDC secured 970 MW, exhausting the 1,200 MW Phase 1 limit."}</li>
              </ol>
            </section>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Natgas Powered AI</span>
              </Link>
              <p className="text-slate-400">
                Natural gas-powered electricity for AI data centers and compute infrastructure in Calgary, Alberta.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/#services" className="hover:text-white transition-colors">Power Generation</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Data Center Power</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Energy Monitoring</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/infrastructure-index" className="hover:text-white transition-colors">Infrastructure</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:Simon@RealCapitolHill.com" className="hover:text-white transition-colors">
                    Simon@RealCapitolHill.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Calgary, Alberta</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8">
            <p className="text-slate-500 text-sm text-center">
              &copy; {new Date().getFullYear()} Natgas Powered AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
