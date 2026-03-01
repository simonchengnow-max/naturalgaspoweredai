import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Natural Gas Powered AI</h1>
      <p className="text-slate-400 mb-8">Alberta energy infrastructure for AI compute</p>
      <Link
        href="/infrastructure-index"
        className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        View Infrastructure Index
      </Link>
    </main>
  );
}
