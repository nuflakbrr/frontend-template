## Astro Template (Tailwind CSS v4, Prettier)

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/nuflakbrr/bikinproject/blob/main/assets/BikinProject.jpg?raw=true">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/nuflakbrr/bikinproject/blob/main/assets/BikinProject.jpg?raw=true">
    <img alt="Banner BikinProject" src="https://github.com/nuflakbrr/bikinproject/blob/main/assets/BikinProject.jpg?raw=true">
  </picture>
</p>

<p align="center">
  <a href="https://badge.fury.io/js/bikinproject.svg">
    <img src="https://badge.fury.io/js/bikinproject.svg" alt="NPM Verion">
  </a>
  <a href="https://www.npmjs.com/package/bikinproject">
    <img src="https://img.shields.io/npm/dt/bikinproject" alt="NPM Downloads">
  </a>
  <a href="https://www.npmjs.com/package/bikinproject">
    <img src="https://img.shields.io/npm/l/bikinproject" alt="NPM License">
  </a>
</p>

Ini adalah proyek [Astro](https://astro.build/) di-bootstrap dengan [`create-astro`](https://github.com/withastro/astro/tree/main/packages/create-astro), di-generate menggunakan [**BikinProject**](https://nuflakbrr.github.io/bikinproject).

## Teknologi Yang Digunakan

- [Astro](https://astro.build/)
- [React](https://react.dev/)
- [TailwindCSS v4](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Prettier](https://prettier.io/)

## Fitur

Fitur yang terdapat pada templat proyek ini adalah:

- **Proyek Arsitektur**: Pemisahan komponen yang jelas menggunakan pola `Common` dan `Mixins`.
- **Modern Stack**: Menggunakan versi terbaru dari Astro, React, dan integrasi Tailwind v4.
- **Performa Vite**: Pengalaman pengembangan yang sangat cepat didukung oleh Vite.
- **Custom Hooks**: Kumpulan hooks React yang berguna seperti `useDebounce`, `usePagination`, dan `useSort`.
- **Tema Gelap/Terang**: Dukungan dark mode manual tersimpan pada `localStorage` terintegrasi class Tailwind.
- **SEO & Sitemap Otomatis**: Generator sitemap & SEO dinamis menggunakan script kustom.

### Proyek Arsitektur

Terdapat beberapa poin penting terkait bagaimana menjalankan proyek arsitektur yang benar. Untuk studi kasus kali ini, Saya telah membuatkan sebuah templat proyek kosong yang sudah Saya kustomisasi yang sekiranya sudah mengimplementasi bagaimana cara mengatur proyek arsitektur yang baik agar terlihat rapi.

```
/
├── public/                 # Aset statis (favicon, robots.txt)
├── scripts/                # Script utilitas (generate-seo.ts)
├── src/
│   ├── assets/             # Gambar & file statis di-compile Vite
│   ├── components/         # Komponen Astro/React
│   │   ├── Common/         # Komponen atomik/kecil
│   │   ├── Containers/     # Komponen section khusus halaman
│   │   └── Mixins/         # Komponen kompleks (Navbar, Footer)
│   ├── data/               # Data statis & Metadata (SEO)
│   ├── interfaces/         # TypeScript Interfaces
│   ├── layouts/            # Layout utama aplikasi
│   ├── lib/                # Utilitas & Library helper
│   ├── pages/              # Astro File-based Routing
│   ├── providers/          # Head Providers (ThemeProvider)
│   └── styles/             # Global CSS & Tailwind Entry
├── astro.config.mjs        # Konfigurasi Astro & Integrasi
├── package.json            # Dependensi & Scripts
├── tsconfig.json           # Konfigurasi TypeScript
└── README.md
```

#### Komponen UI

- **Folder Common**: Berisi komponen-komponen atomik seperti tombol, icon, atau elemen UI dasar lainnya yang dapat digunakan kembali.
- **Folder Mixins**: Berisi komponen-komponen yang lebih besar dan kompleks yang merupakan gabungan dari beberapa komponen `Common`, seperti Navbar atau Footer.
- **Folder Containers**: Memisahkan logika section besar dan unik yang mengisolasi halaman dari komponen berulang.

### Custom React Hooks

Terdapat beberapa hooks yang sudah disediakan untuk mempercepat pengembangan aplikasi reaktif Anda:

- `useDebounce`: Untuk menangani input yang memerlukan penundaan aksi.
- `usePagination`: Untuk menangani navigasi halaman melalui manipulasi state.
- `useSort`: Untuk menangani logika pengurutan data.

## Mulai Sekarang

Template ini tersedia di **BikinProject**! Cara bagaimana untuk menggunakan template ini, ikuti langkah-langkah sederhana berikut:

1. **Instal BikinProject**: Mulailah dengan menjalankan perintah berikut di terminal Anda.

```bash
npx bikinproject@latest
```

2. **Tentukan Direktori Proyek**: Masukkan direktori tempat Anda ingin membuat proyek.

```bash
┌   create-bikinproject-app
│
◇  Where should we create your project?
└  ./your-project # Masukkan nama proyek Anda, seperti my-project atau .
```

3. **Pilih Proyek Starter**: Pilih proyek permulaan yang sesuai dengan kebutuhan Anda.

```bash
┌   create-bikinproject-app
│
◇  Where should we create your project?
│  ./your-project
│
◇  Pick a project type within "./your-project"
│  ● Astro Template (Tailwind v4 + TypeScript)
│  ○ Next.js App Router (Tailwind + TypeScript)
│  ○ dll.
└  # Pilih jenis proyek dengan menggunakan tombol panah
```

4. **Instal Dependensi**: Pilih untuk menginstal dependensi secara otomatis.

```bash
┌   create-bikinproject-app
│
◇  Install dependencies? (pnpm is recommended)
│  ● Yes / ○ No
└  # Pilih Ya atau Tidak
```

5. **Tunggu BikinProject Membuat Proyek**: Tunggu BikinProject membuat proyek untuk Anda.

> [!NOTE]
> Jika Anda memilih untuk memasang dependensi, BikinProject akan memasang dependensi yang diperlukan untuk Anda. Harap tunggu hingga penginstalan selesai.

```bash
┌   create-bikinproject-app
│
◇  ⏳ Creating project...
│
◇  🎉 Project Created!
│
◇  Next steps. ───────────────╮
│                             │
│  cd ./your-project          │
│  pnpm install               │
│  pnpm run dev               │
│                             │
├─────────────────────────────╯
```

6. **Jalankan Server**: Buka [http://localhost:4321](http://localhost:4321) pada browser Anda. Server lokal dev Astro merender aplikasi secara instan.

## Author

Naufal Akbar Nugroho  
[@nuflakbrr](https://github.com/nuflakbrr)
