<?php
$file = '/4dwcb863-b9f9-43gf-b199-b749127m3298/count.txt';
if (!file_exists($file)) {
    file_put_contents($file, 0);
}
$count = (int)file_get_contents($file);
$count++;
file_put_contents($file, $count);
echo "Count updated: $count";
?>
