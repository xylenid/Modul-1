<?php
$n = 5; // Tinggi segitiga
for ($i = $n; $i >= 1; $i--) {
    for ($j = 1; $j <= $n - $i; $j++) {
        echo " ";
    }
    for ($k = 1; $k <= (2 * $i) - 1; $k++) {
        echo "*";
    }
    echo "\n";
}
?>
