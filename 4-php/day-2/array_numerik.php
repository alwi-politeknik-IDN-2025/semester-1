<?php
$buah = ["Pisang", 'Mangga', "Jeruk"];

echo $buah[0]; // Pisang
echo "<br>";
echo $buah[2]; // Jeruk
echo "<br>";

foreach ($buah as $b) {
    echo "Buah: $b <br>";
}

?>