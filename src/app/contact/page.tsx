import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Clock, Zap, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950">
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
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
              <Link href="/#about" className="text-slate-300 hover:text-white transition-colors">About</Link>
              <Link href="/infrastructure-index" className="text-slate-300 hover:text-white transition-colors">Infrastructure</Link>
              <Link href="/contact" className="text-cyan-400 font-medium">Contact</Link>
            </nav>
            <a href="mailto:Simon@RealCapitolHill.com">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">Email Us</Button>
            </a>
          </div>
        </div>
      </header>

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Contact Us</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">Ready to power your AI infrastructure with reliable natural gas electricity? Reach out to discuss your requirements.</p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-white"><Mail className="w-6 h-6 text-cyan-400 mr-3" />Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:Simon@RealCapitolHill.com" className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors">Simon@RealCapitolHill.com</a>
                  <p className="text-slate-400 mt-2">For inquiries and consultations</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-white"><MapPin className="w-6 h-6 text-cyan-400 mr-3" />Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-white">Calgary, Alberta</p>
                  <p className="text-slate-400 mt-2">Serving AI companies across North America</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-white"><Clock className="w-6 h-6 text-cyan-400 mr-3" />Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-white">Within 24 Hours</p>
                  <p className="text-slate-400 mt-2">We respond to all inquiries promptly</p>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
                <CardDescription className="text-slate-400">Tell us about your AI infrastructure needs and we will be in touch.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-slate-300 mb-2">First Name</label><Input placeholder="John" className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500" /></div>
                  <div><label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label><Input placeholder="Doe" className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500" /></div>
                </div>
                <div><label className="block text-sm font-medium text-slate-300 mb-2">Company</label><Input placeholder="Your Company" className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500" /></div>
                <div><label className="block text-sm font-medium text-slate-300 mb-2">Email</label><Input type="email" placeholder="john@company.com" className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500" /></div>
                <div><label className="block text-sm font-medium text-slate-300 mb-2">Power Requirements (kW)</label><Input placeholder="e.g., 500 kW for GPU cluster" className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500" /></div>
                <div><label className="block text-sm font-medium text-slate-300 mb-2">Message</label><Textarea placeholder="Tell us about your AI infrastructure needs..." rows={4} className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500" /></div>
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white text-lg py-3">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center"><Zap className="w-5 h-5 text-white" /></div>
              <span className="text-xl font-bold text-white">Natgas Powered AI</span>
            </div>
            <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Natgas Powered AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
