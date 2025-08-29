<?php
$globalVar = 10;

function tesScope() {
    $localVar = 5;
    // globalVar tidak bisa langsung diakses
    global $globalVar;
    echo "Local: $localVar <br>";
    echo "Global (diakses via global): $globalVar <br>";
}

tesScope();

?>