# Animasi Sistem Peredaran Darah Manusia

Project React + Vite untuk IPAS kelas 5, khusus animasi, tanpa materi, kuis, atau login.

## Menjalankan

Pasang Node.js 22 atau lebih baru (beserta npm), kemudian:

```sh
cd sistem-peredaran-darah
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite di terminal. Untuk build:

```sh
npm run build
npm run preview
```

## Gambar referensi diperlukan

Gambar referensi 1254 × 1254 sudah tersedia di `public/reference.png` dan tampil otomatis.
Untuk mengganti gambar, simpan **gambar referensi yang sama, utuh** ke lokasi tersebut (PNG sungguhan).
Untuk JPG, ubah `DEFAULT_IMAGE` di `src/App.jsx` menjadi `reference.jpg`.
Alternatif: pilih PNG/JPG menggunakan tombol di halaman. Pilihan ini hanya bertahan
selama halaman terbuka; berkas tidak diunggah ke server.

Gunakan gambar persegi dengan komposisi persis seperti lampiran 1254 × 1254.
Resolusi berbeda boleh apabila proporsi dan komposisinya tetap sama. Jangan crop,
tambahkan margin, atau memakai gambar lain: validasi rasio saja tidak dapat
memastikan kecocokan komposisi.

## Kontrol

- Pilih peredaran kecil atau besar. Pergantian mode mengembalikan animasi ke awal.
- Mulai mengeluarkan partikel secara bertahap dengan jarak teratur.
- Jeda/Lanjutkan mempertahankan posisi; kecepatan dapat diubah tanpa reset.
- Ulangi mengembalikan partikel ke titik awal; jika sudah dimulai, animasi berjalan lagi.
- Partikel menghilang di serambi tujuan, lalu partikel baru masuk di bilik asal.
  Tidak ada lintasan buatan yang menyambungkan kedua ruang tersebut.
- Debug memperlihatkan garis ungu putus-putus serta label awal/akhir.

## Koordinat dan batas ketelitian

Gambar dan seluruh lintasan berada dalam SVG yang sama, `viewBox="0 0 1254 1254"`,
dengan aspect ratio tetap. `src/routes.js` menyimpan lintasan manual dalam urutan
aliran. Setiap segmen berakhir tepat pada awal segmen berikutnya. Posisi partikel
dihitung dengan `getTotalLength`, `getPointAtLength`, dan `requestAnimationFrame`.
Warna berubah bertahap pada segmen kapiler; jalur disorot saat berisi partikel.

Lintasan disusun dari tampilan lampiran percakapan. **Belum dikalibrasi ulang
di browser terhadap berkas asli**. Sambungan di dalam jantung dan kapiler yang
tertutup siluet tubuh adalah perkiraan, karena bagian tersebut tidak terlihat
utuh pada ilustrasi. Overlay saat ini menggambar sambungan perkiraan itu di atas
gambar; jangan menganggapnya hasil penelusuran pembuluh yang seluruhnya terlihat.
Periksa debug dengan gambar asli sebelum digunakan mengajar, terutama sambungan
aorta di jantung dan kapiler tubuh. Sesuaikan kurva `d` di `src/routes.js` bila perlu.

Dependency berhasil dipasang dengan Node.js 24 dan npm 11. `npm run build`
berhasil. Server pengembangan Vite berhasil dijalankan. Uji interaksi dan
kalibrasi visual di browser belum dilakukan.
