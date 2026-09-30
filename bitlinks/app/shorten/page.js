"use client";

import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!url || !shortUrl) {
      alert("Please enter both the original URL and short URL.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
          shorturl: shortUrl,
        }),
      });

      const text = await res.text();

      if (!text) {
        throw new Error(
          `API returned an empty response (HTTP ${res.status})`
        );
      }

      const result = JSON.parse(text);

      if (!res.ok || !result.success) {
        alert(result.message || "Something went wrong");
        return;
      }

      const host =
        process.env.NEXT_PUBLIC_NEXT_HOST || window.location.origin;

      setGenerated(`${host}/${shortUrl}`);

      setUrl("");
      setShortUrl("");

      alert(result.message);
    } catch (error) {
      console.error("Generate error:", error);
      alert("Something went wrong while generating the URL.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#07070a] text-white px-6 py-10 overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-250px] left-[-200px] w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[150px]" />

        <div className="absolute top-[300px] right-[-250px] w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[150px]" />

        <div className="absolute bottom-[-300px] left-[30%] w-[500px] h-[500px] rounded-full bg-fuchsia-600/10 blur-[140px]" />
      </div>

      {/* Navbar */}
      <nav className="max-w-6xl mx-auto flex items-center justify-between mb-16">

        <Link
          href="/"
          className="text-2xl font-black tracking-tight"
        >
          <span className="text-white">Short</span>
          <span className="text-purple-400">ly</span>
        </Link>

        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-white transition"
        >
          ← Back to home
        </Link>

      </nav>

      {/* Main */}
      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">

          {/* Left content */}
          <div className="hidden lg:block">

            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-300">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              URL Shortener
            </div>

            <h1 className="mt-7 text-5xl xl:text-6xl font-black leading-tight">
              Turn long URLs into
              <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                simple links
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-400 max-w-xl">
              Create a custom short URL that's easy to share,
              easy to remember, and ready to use.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-400/10 flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <p className="font-semibold">
                    Custom short URLs
                  </p>

                  <p className="text-sm text-gray-500">
                    Choose your own short link
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/10 flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <p className="font-semibold">
                    No complicated setup
                  </p>

                  <p className="text-sm text-gray-500">
                    Enter your URL and generate
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 border border-fuchsia-400/10 flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <p className="font-semibold">
                    Ready in seconds
                  </p>

                  <p className="text-sm text-gray-500">
                    Your link is generated instantly
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Form */}
          <div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-8 shadow-2xl shadow-black/40">

              {/* Header */}
              <div className="mb-7">

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-xl shadow-lg shadow-purple-600/20">
                  🔗
                </div>

                <h2 className="mt-5 text-2xl font-bold">
                  Create your short URL
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Paste a long URL and choose a custom name for
                  your short link.
                </p>

              </div>

              {/* Original URL */}
              <div className="mb-5">

                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Original URL
                </label>

                <div className="relative">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    ↗
                  </span>

                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/10 bg-black/20 text-white placeholder-gray-600 outline-none transition focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/10"
                    placeholder="https://example.com/your-long-url"
                  />

                </div>

              </div>

              {/* Custom URL */}
              <div className="mb-6">

                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Custom short URL
                </label>

                <div className="flex rounded-xl border border-white/10 bg-black/20 overflow-hidden focus-within:border-purple-500/60 focus-within:ring-4 focus-within:ring-purple-500/10 transition">

                  <span className="flex items-center px-3 text-sm text-gray-500 border-r border-white/10 whitespace-nowrap">
                    {typeof window !== "undefined"
                      ? window.location.host
                      : "yourdomain.com"}
                    /
                  </span>

                  <input
                    type="text"
                    value={shortUrl}
                    onChange={(e) => setShortUrl(e.target.value)}
                    className="w-full min-w-0 px-3 py-3.5 bg-transparent text-white placeholder-gray-600 outline-none"
                    placeholder="my-link"
                  />

                </div>

              </div>

              {/* Generate */}
              <button
                onClick={generate}
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3.5 font-bold shadow-xl shadow-purple-600/20 hover:from-purple-500 hover:to-indigo-500 hover:scale-[1.01] active:scale-[0.99] transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? "Generating..." : "Generate Short URL →"}
              </button>

              {/* Generated */}
              {generated && (
                <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/[0.06] p-4">

                  <div className="flex items-center justify-between mb-2">

                    <p className="text-xs uppercase tracking-wider font-bold text-green-400">
                      Your link is ready
                    </p>

                    <span className="text-green-400">
                      ✓
                    </span>

                  </div>

                  <Link
                    target="_blank"
                    href={generated}
                    className="block text-sm text-white break-all hover:text-purple-300 transition"
                  >
                    {generated}
                  </Link>

                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(generated)
                    }
                    className="mt-4 w-full rounded-lg border border-white/10 bg-white/[0.05] py-2 text-sm font-semibold text-gray-300 hover:bg-white/[0.1] hover:text-white transition"
                  >
                    Copy link
                  </button>

                </div>
              )}

            </div>

            <p className="text-center text-xs text-gray-600 mt-6">
              Your short link will redirect visitors to your original URL.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Shorten;
