'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { genPageMetadata } from '@/app/seo';

export const metadata = genPageMetadata({
  title: '404 - Command Not Found',
  description: 'Halaman yang Anda cari tidak dapat ditemukan di terminal ini.',
});

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-zinc-950">
      <div className="w-full max-w-2xl bg-zinc-950 rounded-2xl border-2 border-zinc-800 shadow-2xl overflow-hidden font-mono text-left">
        <div className="bg-zinc-900 px-4 py-2 flex items-center gap-2 border-b-2 border-zinc-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/60" />
            <div className="w-3 h-3 rounded-full bg-amber-500/60" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
          </div>
          <div className="mx-auto text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
            Error — 404 Not Found
          </div>
        </div>
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <p className="text-emerald-500 flex items-center gap-2">
              <span className="text-zinc-500">$</span> navigate --path /unknown-route
            </p>
            <p className="text-rose-500 font-bold">
              Error: 404 - Command not found in this universe.
            </p>
          </div>

          <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 space-y-3 text-sm">
            <p className="text-zinc-400 italic">// Tips untuk Anda:</p>
            <p className="text-zinc-300 text-left">
              Mungkin rute yang Anda tuju sedang dalam pengembangan atau memang tidak pernah ada.
              Gunakan perintah di bawah untuk kembali ke pangkalan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 text-center hover:scale-105 active:scale-95"
            >
              $ cd /home
            </Link>
            <button
              onClick={() => router.back()}
              className="px-6 py-3 border-2 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 font-bold rounded-xl transition-all duration-300 text-center"
            >
              $ exit --previous
            </button>
          </div>
        </div>
        <div className="bg-zinc-900/30 px-6 py-2 border-t-2 border-zinc-800 text-[10px] text-zinc-500 flex justify-between">
          <span>STATUS: DISCONNECTED</span>
          <span>BikinProject v1.0.0</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
