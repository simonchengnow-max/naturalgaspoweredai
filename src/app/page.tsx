import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Server,
  ShieldCheck,
  BarChart3,
  Cpu,
  ArrowRight,
  Mail,
  MapPin,
  Flame,
  Boxes,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 sticky top-0 bg-slate-950/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Natgas Powered AI</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              <a href="#partnerships" className="text-slate-300 hover:text-white transition-colors">Partnerships</a>
              <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
              <Link href="/infrastructure-index" className="text-slate-300 hover:text-white transition-colors">Infrastructure</Link>
              <a href="/blog" className="text-slate-300 hover:text-white transition-colors">Blog</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">Calgary, Alberta</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
              Natural Gas-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}AI Infrastructure
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              We convert Alberta's abundant natural gas into reliable, cost-effective electricity purpose-built to power
              high-performance AI data centers and compute workloads.
            </p>
            <a href="#services">
              <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white text-lg px-8 py-6">
                Our Services
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/20">About Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
                Purpose-Built Power for the AI Era
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Based in Calgary, Alberta, Natgas Powered AI operates at the intersection of energy and artificial intelligence.
                We leverage Western Canada's natural gas resources to deliver dedicated, high-density power to AI data centers
                and compute facilities.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Our infrastructure is engineered from the ground up to meet the unique demands of GPU-intensive workloads,
                offering enterprises a reliable and cost-efficient alternative to traditional grid power.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6 text-center">
                  <p className="text-4xl font-bold text-cyan-400 mb-2">99.9%</p>
                  <p className="text-slate-300">Uptime Guarantee</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6 text-center">
                  <p className="text-4xl font-bold text-cyan-400 mb-2">50MW+</p>
                  <p className="text-slate-300">Generation Capacity</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6 text-center">
                  <p className="text-4xl font-bold text-cyan-400 mb-2">30%</p>
                  <p className="text-slate-300">Cost Reduction</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6 text-center">
                  <p className="text-4xl font-bold text-cyan-400 mb-2">24/7</p>
                  <p className="text-slate-300">Operations Support</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnerships" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">What We Do</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Bridging Energy Producers and AI Developers
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We help natural gas producers partner with AI infrastructure developers to unlock new revenue streams and deliver reliable, behind-the-meter power for compute-intensive operations.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Flame className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-xl text-white">For Gas Producers</CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  Monetize stranded or underutilized natural gas assets by supplying dedicated power to high-demand AI facilities. We handle the infrastructure buildout, offtake agreements, and technical integration so you can focus on production.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-xl text-white">For AI Developers</CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  Access dedicated, low-cost power without competing for grid capacity. We connect you directly to natural gas generation assets in Alberta, delivering the energy density and reliability your GPU clusters demand.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <ArrowRight className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-xl text-white">The Partnership Model</CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  We structure long-term partnerships that align incentives between energy suppliers and compute operators. From site selection and permitting to power delivery and ongoing operations, we manage the full lifecycle.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              End-to-End Energy Solutions for AI
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From power generation to facility integration, we deliver the energy infrastructure AI operations require.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Flame className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-xl text-white">Power Generation</CardTitle>
                <CardDescription className="text-slate-300">
                  On-site natural gas turbines and generators engineered for continuous, high-output electricity delivery.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-xl text-white">Data Center Power</CardTitle>
                <CardDescription className="text-slate-300">
                  High-density power distribution optimized for GPU clusters, training rigs, and inference infrastructure.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-xl text-white">N+1 Redundancy</CardTitle>
                <CardDescription className="text-slate-300">
                  Fully redundant power systems with automatic failover to ensure zero disruption to critical AI workloads.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-xl text-white">Energy Monitoring</CardTitle>
                <CardDescription className="text-slate-300">
                  Real-time analytics and reporting on power consumption, efficiency metrics, and operational performance.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Boxes className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-xl text-white">Modular AI Factory Design</CardTitle>
                <CardDescription className="text-slate-300">
                  Custom design and deployment of 1 to 10 megawatt (MW) modular natural gas AI factories across Alberta.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/20">Infrastructure</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Built for High-Performance Compute
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our facilities are designed to support the most demanding AI training and inference workloads.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">GPU-Optimized Power Delivery</h3>
              </div>
              <p className="text-slate-300">Clean, stable power engineered for sensitive GPU hardware with advanced voltage regulation and power conditioning.</p>
            </div>
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Enterprise-Grade Security</h3>
              </div>
              <p className="text-slate-300">Physical and digital security protocols designed to protect mission-critical AI infrastructure around the clock.</p>
            </div>
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Scalable Architecture</h3>
              </div>
              <p className="text-slate-300">Modular power systems that scale with your compute needs, from initial deployment to full production capacity.</p>
            </div>
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Flame className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Alberta Natural Gas Supply</h3>
              </div>
              <p className="text-slate-300">Direct access to Alberta's abundant natural gas reserves ensures long-term price stability and supply security.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/infrastructure-index">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-6 text-lg">
                View Alberta Infrastructure Index
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
            Ready to Power Your AI Operations?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss how Natgas Powered AI can deliver reliable, cost-effective energy
            for your data center and compute infrastructure.
          </p>
          <a href="mailto:Simon@RealCapitolHill.com">
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white text-lg px-8 py-6">
              Simon@RealCapitolHill.com
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Natgas Powered AI</span>
              </Link>
              <p className="text-slate-400">Natural gas-powered electricity for AI data centers and compute infrastructure in Calgary, Alberta.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><Link href="/infrastructure-index" className="hover:text-white transition-colors">Infrastructure</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href="mailto:Simon@RealCapitolHill.com" className="hover:text-white transition-colors">Simon@RealCapitolHill.com</a></li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>Calgary, Alberta, Canada</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Natgas Powered AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
