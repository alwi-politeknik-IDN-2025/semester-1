<?php

$angka1 = 25;
$angka2 = 7;
$operasi = 'tambah';

if ($operasi === 'tambah') {
    $hasil = $angka1 + $angka2;
    echo "Hasil: $angka1 + $angka2 = $hasil";
} else if ($operasi === 'kurang') {
    $hasil = $angka1 - $angka2;
    echo "Hasil: $angka1 - $angka2 = $hasil";
} else {
    echo "Operasi tidak dikenal. Gunakan 'tambah' atau 'kurang'";
}