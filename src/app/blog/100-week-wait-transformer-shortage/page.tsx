import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, ArrowLeft, Mail, MapPin, Clock, AlertTriangle, ShoppingCart, Wrench } from "lucide-react"
import Link from "next/link"

export default function TransformerShortageBlog() {
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
              <Link href="/#about" className="text-slate-300 hover:text-white transition-colors">About</Link>
              <Link href="/#partnerships" className="text-slate-300 hover:text-white transition-colors">Partnerships</Link>
              <Link href="/#services" className="text-slate-300 hover:text-white transition-colors">Services</Link>
              <Link href="/infrastructure-index" className="text-slate-300 hover:text-white transition-colors">Infrastructure</Link>
              <Link href="/blog" className="text-white font-medium transition-colors">Blog</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Hero Image */}
          <div className="mb-12 -mx-4 sm:mx-0">
            <img
              src="/blog/transformer-shortage-hero.jpg"
              alt="Technical blueprint drawing of a high-voltage power transformer showing labeled components including HV and LV bushings, oil conservator, high and low voltage windings, tap changer, radiators, and laminated steel core"
              className="w-full rounded-none sm:rounded-xl object-cover aspect-video"
            />
          </div>

          {/* Article header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">Supply Chain</Badge>
              <span className="text-sm text-slate-400">February 23, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              The 100-Week Wait: How Transformer Shortages Are Stalling the Global Grid
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              If you are planning a large-scale infrastructure, renewable energy, or data center project right now, there is an invisible wall you are about to hit: the power supply chain.
            </p>
          </div>

          {/* Lead paragraph */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Currently, the global supply chain for high-voltage transformers and heavy-duty switchgear is experiencing unprecedented bottlenecks, with lead times stretching to 100+ weeks. That is nearly two years of waiting for the critical heartbeat of any major electrical project.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-12">
              But how did we get to a point where procuring a transformer takes longer than physically building the facility it powers? And more importantly, what can developers and engineers do to navigate this crisis?
            </p>

            {/* The Perfect Storm */}
            <h2 className="text-2xl font-bold text-white mb-6">The Perfect Storm: Why the Delay?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Transformers and switchgear are not off-the-shelf commodities. High-voltage equipment requires highly specialized manufacturing, specific raw materials, and rigorous testing. The current 100-week backlog is the result of several colliding factors:
            </p>

            <div className="grid gap-6 mb-12">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-3">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    The Electrification Boom
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">
                    From EV charging networks and massive data centers (driven by the AI boom) to the electrification of industrial heating, global power demand is skyrocketing.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-3">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    Renewable Energy Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">
                    Transitioning to wind and solar requires massive grid modernization. Connecting distributed energy resources to the main grid requires thousands of new transformers and substations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    Aging Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">
                    In regions like North America, the existing grid is decades old. Utilities are scrambling to replace aging equipment before it fails, adding massive baseline demand to the backlog.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-cyan-400" />
                    Raw Material and Labor Constraints
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">
                    {"There is a global bottleneck in grain-oriented electrical steel (GOES)\u2014a critical component for transformer cores. Coupled with a shortage of specialized labor required to build and test these massive units, manufacturers simply cannot scale up production fast enough."}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Ripple Effect */}
            <h2 className="text-2xl font-bold text-white mb-6">The Ripple Effect on the Industry</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              A two-year lead time on critical electrical components radically alters project economics and timelines.
            </p>

            <div className="grid gap-6 mb-12">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-400" />
                    Project Delays
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">
                    Facilities that take 12 months to build are sitting idle waiting for power delivery.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                    Price Volatility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">
                    Scarcity drives up costs. The price of large power transformers has surged alongside the lead times, throwing initial project estimates out the window.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-3">
                    <Zap className="w-5 h-5 text-amber-400" />
                    Grid Vulnerability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">
                    Utilities are struggling to keep spare transformers in stock. If a major storm or failure takes out a substation, the lack of backup inventory poses a serious threat to grid reliability.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Strategies */}
            <h2 className="text-2xl font-bold text-white mb-6">Navigating the Bottleneck: Strategies for Developers</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              {"While you can\u2019t magically manufacture a high-voltage transformer, you can adapt your project management strategies to mitigate the damage:"}
            </p>

            <div className="grid gap-6 mb-12">
              <Card className="bg-slate-800/50 border-blue-500/30">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-3">
                    <ShoppingCart className="w-5 h-5 text-blue-400" />
                    1. Procure Before You Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">
                    The traditional model of completing facility design before ordering equipment is dead. Today, engineers must identify power requirements and place orders for transformers and switchgear at the very conception of the project.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-blue-500/30">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-3">
                    <Wrench className="w-5 h-5 text-blue-400" />
                    2. Standardize Your Specs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">
                    Custom engineering adds months to the timeline. Opting for standardized, off-the-shelf designs allows manufacturers to slot your order into production lines much faster.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-blue-500/30">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-3">
                    <Wrench className="w-5 h-5 text-blue-400" />
                    3. Explore Refurbishment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">
                    {"Don\u2019t limit yourself to new builds. The secondary market for refurbished, rewound, or reconditioned transformers is booming. Reputable rebuilders can often deliver a certified, like-new unit in a fraction of the time."}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-blue-500/30">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-3">
                    <ShoppingCart className="w-5 h-5 text-blue-400" />
                    4. Broaden Your Vendor Pool
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">
                    If tier-one, domestic suppliers are quoting 120 weeks, it is time to qualify alternative international manufacturers. While this requires rigorous vetting for quality and compliance, it can shave months off your timeline.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Line */}
            <h2 className="text-2xl font-bold text-white mb-6">The Bottom Line</h2>
            <div className="bg-slate-800/80 border border-cyan-500/30 rounded-xl p-6 mb-12">
              <p className="text-lg text-slate-200 leading-relaxed">
                {"The 100-week lead time for high-voltage transformers isn\u2019t a temporary blip; it is the new reality of a rapidly electrifying world. Surviving this bottleneck requires a fundamental shift in how projects are planned, budgeted, and executed. The developers who win over the next five years will be the ones who treat procurement as the very first step of project development, rather than an afterthought."}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-3">
              Need Power Infrastructure Now?
            </h3>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              {"Natgas Powered AI designs and deploys 1\u201310 MW modular natural gas power solutions in Alberta\u2014bypassing grid delays and transformer backlogs entirely."}
            </p>
            <a href="mailto:Simon@RealCapitolHill.com">
              <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white text-lg px-8 py-6">
                Simon@RealCapitolHill.com
              </Button>
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 mt-16">
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
                  <a href="mailto:Simon@RealCapitolHill.com" className="hover:text-white transition-colors">Simon@RealCapitolHill.com</a>
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
