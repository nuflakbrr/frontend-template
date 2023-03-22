# Proyek Arsitektur

Terdapat beberapa poin penting terkait bagaimana menjalankan proyek arsitektur yang benar. Untuk studi kasus kali ini, Saya telah membuatkan sebuah templat proyek kosong yang sudah Saya kustomisasi yang sekiranya sudah mengimplementasi bagaimana cara mengatur proyek arsitektur yang baik agar terlihat rapi.

## Common

Folder `Common` terletak pada `/src/components/`. Lalu didalamnya berisikan apa saja? Folder `Common` Berisikan komponen-komponen sering digunakan, seperti: navbar, footer, dll.

## Containers

Folder `Containers` terletak pada `/src/components/`. Lalu didalamnya berisikan apa saja? Folder `Containers` Berisikan kombinasi folder `Common` dan halaman itu sendiri yang membentuk 1 halaman. 1 halaman 1 folder `Containers` agar tetap rapi.

Jika pada 1 container memiliki beberapa section, maka Anda harus memisahkan dan menaruhnya di dalam folder `components` namun masih tetap dalam 1 folder `Containers`. Seperti: `/src/components/Containers/Home/components`.
