import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white overflow-hidden">

      {/* Background glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-250px] left-[-200px] w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute top-[200px] right-[-250px] w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[140px]" />
        <div className="absolute bottom-[-300px] left-[30%] w-[500px] h-[500px] rounded-full bg-fuchsia-600/10 blur-[140px]" />
      </div>

      {/* Navbar */}

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-300 mb-7">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Simple. Fast. Privacy focused.
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              Short links.
              <br />

              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                Big possibilities.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
              Create clean, memorable short URLs in seconds.
              No unnecessary tracking, no complicated dashboard,
              and no account required.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/shorten"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-7 py-4 font-bold shadow-2xl shadow-purple-600/20 hover:scale-[1.02] transition"
              >
                Shorten a URL

                <span className="group-hover:translate-x-1 transition">
                  →
                </span>
              </Link>

              <Link
                href="/github"
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 font-semibold text-gray-200 hover:bg-white/[0.08] transition"
              >
                View GitHub
                <span>↗</span>
              </Link>

            </div>

            {/* Small stats */}
            <div className="mt-12 flex flex-wrap gap-8">

              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm text-gray-500 mt-1">
                  Simple
                </p>
              </div>

              <div className="w-px bg-white/10" />

              <div>
                <p className="text-2xl font-bold">Fast</p>
                <p className="text-sm text-gray-500 mt-1">
                  Redirects
                </p>
              </div>

              <div className="w-px bg-white/10" />

              <div>
                <p className="text-2xl font-bold">Free</p>
                <p className="text-sm text-gray-500 mt-1">
                  To use
                </p>
              </div>

            </div>
          </div>

          {/* Right */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-purple-600/20 blur-[100px]" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 shadow-2xl">

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#111116]">

                {/* Fake browser header */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />

                  <div className="ml-4 flex-1 h-8 rounded-lg bg-white/[0.05] border border-white/5" />
                </div>

                <div className="p-7 md:p-10">

                  <div className="mb-8">
                    <p className="text-sm text-gray-500 mb-2">
                      Your original URL
                    </p>

                    <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-gray-400 text-sm overflow-hidden">
                      https://example.com/my-super-long-url
                    </div>
                  </div>

                  <div className="flex justify-center py-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-400">
                      ↓
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm text-gray-500 mb-2">
                      Your short URL
                    </p>

                    <div className="flex gap-3 rounded-xl border border-purple-500/30 bg-purple-500/[0.06] px-4 py-4">

                      <span className="text-purple-300 text-sm flex-1">
                        yourdomain.com/faizan
                      </span>

                      <span className="text-purple-400 text-sm font-semibold">
                        Copy
                      </span>

                    </div>
                  </div>

                  <div className="mt-8 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center font-bold">
                    Generate Short URL
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/5 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold tracking-[0.2em] text-purple-400 uppercase">
              Why use it?
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Everything you need.
              <br />
              Nothing you don't.
            </h2>

            <p className="mt-5 text-gray-400">
              A straightforward URL shortener built for people
              who just want to create short links quickly.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">

            {/* Card */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.06] hover:border-purple-400/20 transition">

              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-400/10 flex items-center justify-center text-2xl">
                ⚡
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Lightning Fast
              </h3>

              <p className="mt-3 text-gray-400 leading-7">
                Generate short URLs quickly and redirect your
                visitors without unnecessary complexity.
              </p>

            </div>

            {/* Card */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.06] hover:border-purple-400/20 transition">

              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-400/10 flex items-center justify-center text-2xl">
                🔒
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Privacy Focused
              </h3>

              <p className="mt-3 text-gray-400 leading-7">
                No unnecessary signup flow or complicated personal
                information requirements just to shorten a URL.
              </p>

            </div>

            {/* Card */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.06] hover:border-purple-400/20 transition">

              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-400/10 flex items-center justify-center text-2xl">
                ✨
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Easy to Remember
              </h3>

              <p className="mt-3 text-gray-400 leading-7">
                Choose your own custom short URL so your links
                are easier to share and remember.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24">

        <div className="relative overflow-hidden rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-600/20 via-indigo-600/10 to-transparent p-10 md:p-16 text-center">

          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-purple-600/20 blur-[100px]" />

          <div className="relative">

            <h2 className="text-3xl md:text-5xl font-black">
              Ready to shorten your first URL?
            </h2>

            <p className="mt-5 text-gray-400 max-w-xl mx-auto">
              Create a clean, memorable link in just a few seconds.
            </p>

            <Link
              href="/shorten"
              className="inline-flex mt-8 rounded-xl bg-white text-black px-8 py-4 font-bold hover:bg-purple-100 transition"
            >
              Create Short URL →
            </Link>

          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Shortly. Built by Faizan Saqib.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/shorten" className="hover:text-white transition">
              Shorten
            </Link>

            <Link href="/github" className="hover:text-white transition">
              GitHub
            </Link>
          </div>

        </div>
      </footer>

    </main>
  );
}
