## Nextjs Typescript Template (Include Tailwindcss, Customize ESLint Rules)

Ini adalah proyek [Next.js](https://nextjs.org/) di-bootstrap dengan [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Proyek Arsitektur

Terdapat beberapa poin penting terkait bagaimana menjalankan proyek arsitektur yang benar. Untuk studi kasus kali ini, Saya telah membuatkan sebuah templat proyek kosong yang sudah Saya kustomisasi yang sekiranya sudah mengimplementasi bagaimana cara mengatur proyek arsitektur yang baik agar terlihat rapi.

```
/
├── public/
├── src/
│   └── components/
│   │   └── Common/
│   │   └── Containers/
│   │   │   └── Home/
│   │   │       └── components/
│   │   │       └── Home.tsx
│   │   └── Mixins/
│   │   └── README.md
│   └── pages/
│   │   └── api/
│   │   └── _app.tsx
│   │   └── index.tsx
│   └── styles/
│       └── globals.css
│       └── Home.module.css
└── .eslintrc.json
└── .gitignore.json
└── next-env.d.ts
└── next.config.js
└── package-lock.json
└── package.json
└── postcss.config.js
└── README.md
└── tailwind.config.js
└── tsconfig.json
```

### Folder Common

Folder `Common` terletak pada `/src/components/`. Lalu didalamnya berisikan apa saja? Folder `Common` Berisikan komponen-komponen kecil, seperti: tombol, dropdown, dll.

### Folder Mixins

Folder `Mixins` terletak pada `/src/components/`. Lalu didalamnya berisikan apa saja? Folder `Mixins` Berisikan komponen-komponen yang merupakan gabungan dari komponen-komponen kecil dari folder `Common`. Seperti: navbar (yang berisi beberapa hal umum seperti tombol, dropdown, dll).

### Folder Containers

Folder `Containers` terletak pada `/src/components/`. Lalu didalamnya berisikan apa saja? Folder `Containers` Berisikan kombinasi folder `Mixins` dan `Common` yang membentuk 1 halaman. 1 halaman 1 folder `Containers` agar tetap rapi.

Jika pada 1 container memiliki beberapa section, maka Anda harus memisahkan dan menaruhnya di dalam folder `components` namun masih tetap dalam 1 folder `Containers`. Seperti: `/src/components/Containers/Home/components`.

## Mulai Sekarang

Pertama, buat sebuah folder kosong dan buka folder tersebut ke terminal lalu eksekusi perintah berikut:

```bash
npx degit https://github.com/nuflakbrr/next-template.git .
```

atau jika Anda ingin menggunakan versi `Javascipt`, eksekusi perintah berikut:

```bash
npx degit nuflakbrr/next-template#javascript-version .
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

[Rute API](https://nextjs.org/docs/api-routes/introduction) dapat diakses di [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Titik akhir ini dapat diedit di `/src/pages/api/hello.ts`.

Folder `/src/pages/api` dipetakan ke `/api/*`. File dalam direktori ini diperlakukan sebagai [Rute API](https://nextjs.org/docs/api-routes/introduction) bukannya Bereaksi halaman.

## Pelajari Lebih

Untuk mempelajari lebih lanjut tentang Next.js, lihat referensi berikut:

- [Dokumentasi Next.js](https://nextjs.org/docs) - pelajari tentang fitur dan API Next.js.
- [Pelajari Next.js](https://nextjs.org/learn) - tutorial Next.js yang interaktif.

Anda dapat memeriksa [GitHub Repositori Next.js](https://github.com/vercel/next.js/) - umpan balik dan kontribusi Anda dipersilakan!

## Publikasi di Vercel

Jalur paling mudah untuk publikasi aplikasi Next.js Anda menggunakan [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dari pencipta Next.js.

Lihat [dokumentasi publikasi Next.js kami](https://nextjs.org/docs/deployment) untuk lebih lengkap.
