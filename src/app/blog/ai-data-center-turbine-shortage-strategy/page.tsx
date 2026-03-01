import { Badge } from "@/components/ui/badge"
import { Zap, ArrowLeft, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TurbineShortagePost() {
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
              src="/blog/turbine-shortage-hero.jpg"
              alt="Comparison of industrial gas turbine technologies showing GE Vernova (sold out), Baker Hughes NovaLT (2027 deliveries), Siemens Aeroderivative SGT (fastest deployment), and Caterpillar G3520/G3616 (1-10MW modular system)"
              className="w-full rounded-none sm:rounded-xl object-cover"
            />
          </div>

          {/* Article header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                Market Intelligence
              </Badge>
              <span className="text-sm text-slate-400">February 23, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight text-balance">
              The New AI Currency: Why Gas Turbines Are Sold Out (And How to Secure Power Now)
            </h1>
            <p className="text-xl text-slate-300">
              AI data center demand has created a critical shortage of gas turbines with 3+ year lead times. Learn why GE and Baker Hughes are sold out, and uncover the remaining strategies to secure power infrastructure.
            </p>
          </div>

          {/* Article body */}
          <div className="prose prose-invert prose-slate max-w-none space-y-8">
            <p className="text-lg text-cyan-400 font-medium">
              Forget crypto. Forget NVIDIA H100 allocations. In the race to build out AI infrastructure, the new global currency is rotating metal.
            </p>

            <p className="text-slate-300 leading-relaxed">
              {"If you are planning an AI data center today, your biggest bottleneck isn't land, fiber, or even GPUs. It's power generation. Specifically, the gas turbines required to run gigawatt-scale compute loads independent of strained utility grids."}
            </p>
            <p className="text-slate-300 leading-relaxed">
              The market reality is stark: turbine manufacturing capacity is completely tapped out. The window to secure hardware for deployments before 2028 is closing rapidly. Here is a breakdown of the current power crisis and the only remaining strategies for developers and enterprises to secure their energy future.
            </p>

            {/* Section: The 97 GW Hardware Gap */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">The 97 GW Hardware Gap</h2>
              <p className="text-slate-300 leading-relaxed">
                The numbers defining the current AI energy landscape are terrifying for anyone trying to enter the market late.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Currently, there are roughly 97 GW of planned gas AI data centers in the US pipeline. Yet, almost two-thirds of these projects still do not have a turbine manufacturer locked down.
              </p>
              <p className="text-slate-300 leading-relaxed">
                This massive imbalance between demand and manufacturing supply has pushed turbine lead times out to 3+ years.
              </p>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 my-6 space-y-3">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Planned gas AI data centers (US)</span>
                  <span className="font-semibold text-white">97 GW</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Projects without turbine supply locked</span>
                  <span className="font-semibold text-red-400">~65%</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Current turbine lead times</span>
                  <span className="font-semibold text-white">3+ years</span>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed">
                {"In this environment, traditional development strategies are dead. You cannot wait for a customer contract before securing power equipment. The new playbook is \"hardware first.\" Whoever grabs turbine and genset supply deals right now holds all the leverage. Secure the hardware today, and you can name your price on customer contracts tomorrow."}
              </p>
              <p className="text-slate-300 leading-relaxed">
                But that strategy only works if you can actually find the hardware.
              </p>
            </section>

            {/* Section: The Turbine Landscape */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">The Turbine Landscape: Who is Actually Available?</h2>
              <p className="text-slate-300 leading-relaxed">
                The market has consolidated around four key players delivering the turbines that matter for data center applications. However, the availability among these four varies drastically.
              </p>
              <p className="text-slate-300 leading-relaxed">
                If you are just starting your procurement process now, here is the hard truth about the landscape.
              </p>
            </section>

            {/* Sold Out Giants */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">{"The \"Sold Out\" Giants: GE Vernova & Baker Hughes"}</h2>
              <p className="text-slate-300 leading-relaxed">
                If you are hoping for massive, utility-scale deployments in the next 36 months, you are likely too late. The heaviest hitters in the industry are effectively booked solid.
              </p>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 my-6 space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">GE Vernova (7HA / 9HA)</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    These are the monsters of the industry, perfect for 100MW+ deployments. Everyone wants them for massive hyperscale campuses. The reality? Good luck getting allocation. They are sold out for the foreseeable future.
                  </p>
                  <Badge className="mt-2 bg-red-500/10 text-red-400 border-red-500/20">Sold Out</Badge>
                </div>
                <div className="border-t border-slate-700 pt-6">
                  <h4 className="text-white font-semibold mb-2">Baker Hughes (NovaLT / Frame-5)</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    These turbines hit the sweet spot for many data center designs (20-100MW) and have been winning deals left and right. But that success means their order book is full. They are incredibly difficult to pin down, with earliest deliveries pushing into 2027 and beyond.
                  </p>
                  <Badge className="mt-2 bg-yellow-500/10 text-yellow-400 border-yellow-500/20">2027+ Delivery</Badge>
                </div>
              </div>
            </section>

            {/* Where the Opportunity Lives */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Where the Opportunity Actually Lives: Speed and Agility</h2>
              <p className="text-slate-300 leading-relaxed">
                With GE and Baker Hughes effectively off the table for near-term projects, smart developers and enterprises are pivoting to solutions that offer speed or specialized use cases.
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <Badge className="mb-3 bg-blue-500/10 text-blue-400 border-blue-500/20">Speed Play</Badge>
                  <h4 className="text-white font-semibold text-lg mb-2">1. Siemens (Aeroderivative SGT)</h4>
                  <p className="text-slate-300 leading-relaxed">
                    If your mandate is to get megawatts live faster than anyone else, Siemens is your edge. Their aeroderivative SGT units operate in the 10-50MW range. While demand is high, their production model allows for faster deployment than the massive frame turbines. If speed to market is your primary KPI, this is where you look.
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-sm text-slate-400">
                    <span>Capacity: <span className="text-white font-medium">10-50 MW</span></span>
                    <span>Advantage: <span className="text-cyan-400 font-medium">Fastest deployment</span></span>
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6">
                  <Badge className="mb-3 bg-cyan-500/10 text-cyan-400 border-cyan-500/20">Enterprise Lane</Badge>
                  <h4 className="text-white font-semibold text-lg mb-2">2. Caterpillar (G3520 / G3616)</h4>
                  <p className="text-slate-300 leading-relaxed">
                    {"This is the most overlooked opportunity in the current market. While hyperscalers fight over 100MW turbines, there is immense value in being \"small and scrappy.\""}
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-3">
                    {"Caterpillar's G3520 and G3616 gensets (1-20MW range) are the perfect solution for the emerging \"on-prem AI enterprise\" story. Not every AI workload needs a 500MW campus. For enterprises building dedicated, on-premises AI compute infrastructure that needs reliable, independent power, Caterpillar is your lane."}
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-sm text-slate-400">
                    <span>Capacity: <span className="text-white font-medium">1-20 MW</span></span>
                    <span>Advantage: <span className="text-cyan-400 font-medium">Available now, modular</span></span>
                  </div>
                </div>
              </div>
            </section>

            {/* The Window is Closing */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">The Window is Closing</h2>
              <p className="text-slate-300 leading-relaxed">
                {"The \"hardware first\" strategy is the only way to guarantee project viability in the AI era. The major manufacturers are sold out. The secondary options are filling up fast."}
              </p>
              <p className="text-lg text-cyan-400 font-medium">
                If you are thinking about securing power infrastructure, the time to act was yesterday. The time to lock a contract is now.
              </p>
            </section>

            {/* CTA */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center mt-12">
              <h3 className="text-xl font-bold text-white mb-3">
                Need help securing power for your AI infrastructure?
              </h3>
              <p className="text-slate-300 mb-6">
                Natgas Powered AI designs and deploys 1-10 MW modular natural gas AI factories in Alberta. We can help you bypass the turbine shortage and get power online fast.
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
