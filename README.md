## React.js TypeScript Template (Tailwind CSS, ESLint, Prettier)

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/nuflakbrr/bikinproject/blob/main/assets/BikinProject.jpg?raw=true">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/nuflakbrr/bikinproject/blob/main/assets/BikinProject.jpg?raw=true">
    <img alt="Banner TTN" src="https://github.com/nuflakbrr/bikinproject/blob/main/assets/BikinProject.jpg?raw=true">
  </picture>
</p>

<p align="center">
  <a href="https://badge.fury.io/js/bikinproject.svg">
    <img src="https://badge.fury.io/js/bikinproject.svg" alt="NPM Version">
  </a>
  <a href="https://www.npmjs.com/package/bikinproject">
    <img src="https://img.shields.io/npm/dt/bikinproject" alt="NPM Downloads">
  </a>
  <a href="https://www.npmjs.com/package/bikinproject">
    <img src="https://img.shields.io/npm/l/bikinproject" alt="NPM License">
  </a>
</p>

Ini adalah proyek [React.js](https://react.dev/) yang di-bootstrap menggunakan [**BikinProject**](https://nuflakbrr.github.io/bikinproject).

## Teknologi Yang Digunakan

- [React 19](https://react.dev/)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [ESLint & Prettier](https://eslint.org/)
- [Vite](https://vitejs.dev/)

## Fitur

Fitur yang terdapat pada templat proyek ini adalah:

- **Proyek Arsitektur**: Pemisahan komponen yang jelas menggunakan pola `Common` dan `Mixins`.
- **Modern Stack**: Menggunakan versi terbaru dari React 19 dan TanStack.
- **File-based Routing**: Menggunakan TanStack Router untuk manajemen rute yang type-safe.
- **Automated SEO**: Script otomatis untuk menghasilkan metadata SEO (`scripts/generate-seo.ts`).
- **Custom Hooks**: Kumpulan hooks yang berguna seperti `useAxios`, `useDebounce`, dan `useSort`.
- **Tema Gelap/Terang**: Dukungan tema secara bawaan dengan `ThemeProvider`.

### Proyek Arsitektur

Terdapat beberapa poin penting terkait bagaimana menjalankan proyek arsitektur yang benar. Untuk studi kasus kali ini, Saya telah membuatkan sebuah templat proyek kosong yang sudah Saya kustomisasi yang sekiranya sudah mengimplementasi bagaimana cara mengatur proyek arsitektur yang baik agar terlihat rapi.

```
/
├── public/              # Aset statis (gambar, font, dll)
├── scripts/             # Script utilitas (SEO generation)
├── src/
│   ├── components/      # Komponen UI
│   │   ├── Common/      # Komponen atomik/kecil
│   │   └── Mixins/      # Komponen kompleks (gabungan Common)
│   ├── data/            # Data statis & Metadata
│   ├── hooks/           # Custom React Hooks (TS)
│   ├── interfaces/      # Interface TypeScript
│   ├── lib/             # Utilitas & Library helper
│   ├── providers/       # Wrapper providers untuk layout
│   └── routes/          # TanStack Router (Halaman & Layout)
│       ├── (auth)/      # Rute grup untuk autentikasi
│       ├── (root)/      # Rute grup untuk halaman utama
│       └── __root.tsx   # Layout utama aplikasi
├── eslint.config.js     # Konfigurasi ESLint
├── package.json         # Dependensi & Scripts
├── tailwind.config.js   # Konfigurasi Tailwind CSS
├── vite.config.ts       # Konfigurasi Vite
└── README.md
```

#### Komponen UI

- **Folder Common**: Berisi komponen-komponen atomik seperti tombol, icon, atau elemen UI dasar lainnya yang dapat digunakan kembali.
- **Folder Mixins**: Berisi komponen-komponen yang lebih besar dan kompleks yang merupakan gabungan dari beberapa komponen `Common`, seperti Navbar atau Footer.

### Custom React Hooks

Terdapat beberapa hooks yang sudah disediakan untuk mempercepat pengembangan:

- `useAxios`: Untuk menangani request API dengan Axios secara terintegrasi.
- `useClipboard`: Untuk menangani fitur salin ke papan klip.
- `useDebounce`: Untuk menangani input yang memerlukan penundaan aksi.
- `useHasMounted`: Untuk mendeteksi apakah komponen sudah dimount (client-side).
- `useMobileResponsive`: Untuk mendeteksi tampilan mobile.
- `useScreenSize`: Untuk memantau ukuran layar.
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
│  ● React.js (Tailwind + TypeScript)
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

6. **Konfigurasi Environment**: Salin file `.env.example` menjadi `.env`.

```bash
cp .env.example .env
```

7. **Jalankan Server**: Buka [http://localhost:5173](http://localhost:5173) pada browser Anda.

```bash
pnpm dev
```

## Author

Naufal Akbar Nugroho  
[@nuflakbrr](https://github.com/nuflakbrr)
