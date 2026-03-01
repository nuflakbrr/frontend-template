## Next.js Template (Tailwind CSS, ESLint, Prettier)

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/nuflakbrr/bikinproject/blob/main/assets/BikinProject.jpg?raw=true">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/nuflakbrr/bikinproject/blob/main/assets/BikinProject.jpg?raw=true">
    <img alt="Banner TTN" src="https://github.com/nuflakbrr/bikinproject/blob/main/assets/BikinProject.jpg?raw=true">
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

Ini adalah proyek [Next.js](https://nextjs.org/) di-bootstrap dengan [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), di-generate menggunakan [**BikinProject**](https://nuflakbrr.github.io/bikinproject).

## Teknologi Yang Digunakan

- [Next.js (App Router)](https://nextjs.org/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [ESLint & Prettier](https://eslint.org/)

## Fitur

Fitur yang terdapat pada templat proyek ini adalah:

- **Proyek Arsitektur**: Pemisahan komponen yang jelas menggunakan pola `Common` dan `Mixins`.
- **Modern Stack**: Menggunakan versi terbaru dari Next.js dan React.
- **Turbopack Build**: Pengalaman pengembangan yang sangat cepat.
- **Custom Hooks**: Kumpulan hooks yang berguna seperti `useDebounce`, `usePagination`, dan `useSort`.
- **Tema Gelap/Terang**: Dukungan `next-themes` secara bawaan.

### Proyek Arsitektur

Terdapat beberapa poin penting terkait bagaimana menjalankan proyek arsitektur yang benar. Untuk studi kasus kali ini, Saya telah membuatkan sebuah templat proyek kosong yang sudah Saya kustomisasi yang sekiranya sudah mengimplementasi bagaimana cara mengatur proyek arsitektur yang baik agar terlihat rapi.

```
/
├── public/              # Aset statis (gambar, font, dll)
├── src/
│   ├── app/             # Next.js App Router (Halaman & API)
│   │   ├── api/         # Endpoint API (route.js)
│   │   ├── (auth)/      # Rute grup untuk autentikasi
│   │   ├── (root)/      # Rute grup untuk halaman utama
│   │   └── layout.jsx   # Layout utama aplikasi
│   ├── components/      # Komponen UI
│   │   ├── Common/      # Komponen atomik/kecil
│   │   └── Mixins/      # Komponen kompleks (gabungan Common)
│   ├── context/         # React Context Providers
│   ├── data/            # Data statis & Metadata
│   ├── hooks/           # Custom React Hooks (JS)
│   ├── lib/             # Utilitas & Library helper
│   └── providers/       # Wrapper providers untuk layout
├── eslint.config.mjs    # Konfigurasi ESLint terbaru
├── jsconfig.json        # Konfigurasi JavaScript path aliases
├── next.config.js       # Konfigurasi Next.js
├── package.json         # Dependensi & Scripts
├── tailwind.config.js   # Konfigurasi Tailwind CSS
└── README.md
```

#### Komponen UI

- **Folder Common**: Berisi komponen-komponen atomik seperti tombol, icon, atau elemen UI dasar lainnya yang dapat digunakan kembali.
- **Folder Mixins**: Berisi komponen-komponen yang lebih besar dan kompleks yang merupakan gabungan dari beberapa komponen `Common`, seperti Navbar atau Footer.

### Custom React Hooks

Terdapat beberapa hooks yang sudah disediakan untuk mempercepat pengembangan:

- `useDebounce`: Untuk menangani input yang memerlukan penundaan aksi.
- `usePagination`: Untuk menangani navigasi halaman melalui query params.
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
│  ● Next.js App Router (Tailwind + JavaScript)
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
│  pnpm dev                   │
│                             │
├─────────────────────────────╯
```

6. **Konfigurasi Environment**: Salin file `.env.example` menjadi `.env`.

```bash
cp .env.example .env
```

7. **Jalankan Server**: Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

## API Route

API Route dapat diakses melalui `http://localhost:3000/api`. Endpoint ini dikelola di dalam `src/app/api/route.js`.

## Author

Naufal Akbar Nugroho  
[@nuflakbrr](https://github.com/nuflakbrr)
