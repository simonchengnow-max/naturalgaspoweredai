import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, ArrowRight, Mail, MapPin } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    slug: "100-week-wait-transformer-shortage",
    title: "The 100-Week Wait: How Transformer Shortages Are Stalling the Global Grid",
    subtitle: "The global supply chain for high-voltage transformers and switchgear faces 100+ week lead times. Learn why the bottleneck exists and what developers can do to navigate it.",
    date: "2026-02-23",
    tag: "Supply Chain",
  },
  {
    slug: "ai-data-center-turbine-shortage-strategy",
    title: "The New AI Currency: Why Gas Turbines Are Sold Out (And How to Secure Power Now)",
    subtitle: "AI data center demand has created a critical shortage of gas turbines with 3+ year lead times. Learn why GE and Baker Hughes are sold out, and uncover the remaining strategies to secure power infrastructure.",
    date: "2026-02-23",
    tag: "Market Intelligence",
  },
  {
    slug: "alberta-og-companies-losing-ai-competitive-advantage",
    title: "Alberta O&G Companies Are Losing 5+ Years of AI Competitive Advantage Waiting for Grid Power",
    subtitle: "Behind-the-Meter Natural Gas Generation Fixes This in 18 Months",
    date: "2026-02-20",
    tag: "Industry Analysis",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950">
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

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">Blog</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Insights and Analysis</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Industry perspectives on natural gas-powered AI infrastructure, energy markets, and the future of compute in Alberta.</p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">{post.tag}</Badge>
                    <span className="text-sm text-slate-400">{post.date}</span>
                  </div>
                  <CardTitle className="text-2xl text-white leading-tight">{post.title}</CardTitle>
                  <p className="text-lg text-slate-300 mt-2">{post.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <span className="text-cyan-400 flex items-center gap-2 font-medium">Read article <ArrowRight className="w-4 h-4" /></span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

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
              <p className="text-slate-400">Natural gas-powered electricity for AI data centers and compute infrastructure in Calgary, Alberta.</p>
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
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-cyan-400" /><a href="mailto:Simon@RealCapitolHill.com" className="hover:text-white transition-colors">Simon@RealCapitolHill.com</a></li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-400" /><span>Calgary, Alberta</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8">
            <p className="text-slate-500 text-sm text-center">&copy; {new Date().getFullYear()} Natgas Powered AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
