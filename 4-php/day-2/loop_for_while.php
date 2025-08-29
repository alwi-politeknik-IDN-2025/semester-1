<?php
// logging dengan for
for ($i = 1; $i <= 5; $i++) {
    echo "Perulangan ke $i <br>";
}

echo "<hr>";

// looping dengan while
$j = 1;
while ($j <= 3) {
    echo "Ini while ke-$j <br>";
    $j++;
}

echo "<hr>";

// foreach array
$buah = ["Pisang", "Mangga", "Jeruk"];
foreach ($buah as $item) {
    echo "Saya suka $item <br>";
}

?>