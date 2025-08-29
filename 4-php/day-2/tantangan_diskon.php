<?php
$belanja = [
    "Indomie" => 30000,
    "Telur" => 25000,
    "Kopi" => 40000,
    "Gula" => 20000
];

$total = 0;
foreach ($belanja as $barang => $harga) {
    echo "$barang: Rp" . number_format($harga, 0, ',', '.') . "<br>";
    $total += $harga;
}

echo "<hr>";
echo "Total belanja: Rp" . number_format($total, 0,",", ".") ."<br>";

if ($total > 100000) {
    $diskon = $total * 0.10;
    $total -= $diskon;
    echo "Diskon 10%: Rp" . number_format($diskon, 0, ',', '.') . "<br>";
}

echo "<strong>Total bayar: Rp" . number_format($total, 0,",", ".") . "</strong>";

?>