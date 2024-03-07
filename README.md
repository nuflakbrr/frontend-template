## Nextjs Typescript Template (Include Tailwindcss, Customize ESLint Rules)

Ini adalah proyek [Next.js](https://nextjs.org/) di-bootstrap dengan [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Teknologi Yang Digunakan

- [Next.js (Typescript)](https://nextjs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/getting-started/introduction/)
- [Axios](https://axios-http.com/docs/intro/)
- [SWR](https://swr.vercel.app/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction/)

## Fitur

Fitur yang terdapat pada templat proyek ini adalah:

- SEO dasar.
- Proyek Arsitektur.
- Authentikasi.
- State Management.
- Kustomisasi `React Hooks`.
- Beberapa fungsi kustom yang sering [Saya](https://github.com/nuflakbrr) pakai.
- Implementasi `Types` dan `Interface`.

### SEO Dasar

Anda dapat mengkustomisasi `SEO Dasar` pada templat ini dengan memodifikasi dokumen `/src/data/siteMetadata.ts`. Anda juga bisa melihat bagaimana Saya membuat `SEO Dasar` pada templat ini melalui dokumen `/src/components/SEO.tsx`.

### Proyek Arsitektur

Terdapat beberapa poin penting terkait bagaimana menjalankan proyek arsitektur yang benar. Untuk studi kasus kali ini, Saya telah membuatkan sebuah templat proyek kosong yang sudah Saya kustomisasi yang sekiranya sudah mengimplementasi bagaimana cara mengatur proyek arsitektur yang baik agar terlihat rapi.

```
/
├── public/
├── src/
│   └── app/
│   │   └── about/
│   │   └── api/
│   │   │   └── auth/
│   │   │       └── [...nextauth].ts
│   │   └── auth/
│   │   └── contact/
│   │   └── favicon.ico
│   │   └── globals.css
│   │   └── layout.tsx
│   │   └── page.tsx
│   └── components/
│   │   └── Common/
│   │   └── Containers/
│   │   │   └── About/
│   │   │   └── Auth/
│   │   │   └── Contact/
│   │   │   └── Home/
│   │   └── Mixins/
│   │   │   └── Navbar/
│   │   │   └── Footer.tsx
│   │   └── README.md
│   └── data/
│   └── hooks/
│   └── layouts/
│   └── lib/
│   └── store/
│   └── utils/
│       └── interfaces/
│       │   └── auth.ts
│       │   └── todolist.ts
│       └── types/
│           └── auth.ts
│           └── todolist.ts
└── .env.example
└── .eslintrc.json
└── .gitignore
└── next-env.d.ts
└── next.config.mjs
└── package-lock.json
└── package.json
└── postcss.config.js
└── README.md
└── tailwind.config.ts
└── tsconfig.json
```

#### Folder Common

Folder `Common` terletak pada `/src/components/`. Lalu didalamnya berisikan apa saja? Folder `Common` Berisikan komponen-komponen kecil, seperti: tombol, dropdown, dll.

#### Folder Mixins

Folder `Mixins` terletak pada `/src/components/`. Lalu didalamnya berisikan apa saja? Folder `Mixins` Berisikan komponen-komponen yang merupakan gabungan dari komponen-komponen kecil dari folder `Common`. Seperti: navbar (yang berisi beberapa hal umum seperti tombol, dropdown, dll).

#### Folder Containers

Folder `Containers` terletak pada `/src/components/`. Lalu didalamnya berisikan apa saja? Folder `Containers` Berisikan kombinasi folder `Common` dan halaman itu sendiri yang membentuk 1 halaman. 1 halaman 1 folder `Containers` agar tetap rapi.

Jika pada 1 container memiliki beberapa section, maka Anda harus memisahkan dan menaruhnya di dalam folder `components` namun masih tetap dalam 1 folder `Containers`. Seperti: `/src/components/Containers/Home/components`.

### Authentikasi

Pada templat proyek ini sudah menggunakan authentikasi menggunakan [NextAuth](https://next-auth.js.org/getting-started/introduction/). Sudah terdapat sebuah contoh authentikasi menggunakan `GitHub`, jika user sudah melakukan authentikasi maka user tidak bisa mengakses halaman `login` dan `register` kembali. Anda juga dapat memproteksi halaman `root` atau `/` Anda dengan menghapus komentar pada file `/src/app/page.ts`.

### State Management

Pada templat proyek ini sudah menggunakan implementasi `State Management` menggunakan [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction). Agar penggunaan tetap optimal, pada saat Anda ingin membuat `state` baru, perlu di ingat bahwa Anda harus meng-definisikan `Interface` dan `Type` terlebih dahulu pada folder `/src/utils`. Kemudian Anda dapat meng-definisikan apa saja yang Anda butuhkan untuk `state` tersebut pada folder `/src/store`.

### Kustomisasi React Hooks

Anda dapat menggunakan, serta menambahkan kustom `React Hooks` Anda sendiri pada folder `/src/hooks` yang telah disediakan. terdapat sebuah contoh kustomisasi `React Hooks` untuk `Data Fetching` menggunakan [SWR](https://swr.vercel.app) dan [Axios](https://axios-http.com/docs/intro).

## Mulai Sekarang

Pertama, buka terminal lalu eksekusi perintah berikut:

```bash
npx degit nuflakbrr/next-template#master <nama_proyek>
```

atau, jika Anda ingin menggunakan versi `Typescript & Payload CMS`, eksekusi perintah berikut:

```bash
npx degit nuflakbrr/next-template#typescript-payloadcms-version <nama_proyek>
```

atau jika Anda ingin menggunakan versi `Javascipt`, eksekusi perintah berikut:

```bash
npx degit nuflakbrr/next-template#javascript-version <nama_proyek>
```

Kedua, install `depedencies` didalam proyek yang sudah Anda klona:

```bash
npm install
# or
yarn install
```

Ketiga, jalankan server pengembangan:

```bash
npm run dev
# or
yarn dev
```

Keempat, buka [http://localhost:3000](http://localhost:3000) pada browser Anda dan lihat hasilnya.

Anda dapat mulai mengedit halaman dengan memodifikasi `/src/components/Containers/Home/Home.tsx`. Halaman diperbarui secara otomatis saat Anda mengedit file.

## Rute API

[Rute API](https://nextjs.org/docs/api-routes/introduction) dapat diakses di [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Titik akhir ini dapat diedit di `/src/app/api/hello.ts`.

Folder `/src/app/api` dipetakan ke `/api/*`. File dalam direktori ini diperlakukan sebagai [Rute API](https://nextjs.org/docs/api-routes/introduction) bukannya Bereaksi halaman.

## Pelajari Lebih

Untuk mempelajari lebih lanjut tentang Next.js, lihat referensi berikut:

- [Dokumentasi Next.js](https://nextjs.org/docs) - pelajari tentang fitur dan API Next.js.
- [Pelajari Next.js](https://nextjs.org/learn) - tutorial Next.js yang interaktif.

Anda dapat memeriksa [GitHub Repositori Next.js](https://github.com/vercel/next.js/) - umpan balik dan kontribusi Anda dipersilakan!

## Publikasi di Vercel

Jalur paling mudah untuk publikasi aplikasi Next.js Anda menggunakan [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dari pencipta Next.js.

Lihat [dokumentasi publikasi Next.js kami](https://nextjs.org/docs/deployment) untuk lebih lengkap.

## Author Templat Ini

Nama kontributor dan info kontak,

Naufal Akbar Nugroho  
[@nuflakbrr](https://github.com/nuflakbrr)
[@kbrnugroho](https://instagram.com/kbrnugroho)
