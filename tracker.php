<?php
$file = 'button_clicks.txt';
if (!file_exists($file)) {
    $counts = ['accept' => 0, 'cancel' => 0];
} else {
    $counts = json_decode(file_get_contents($file), true);
}
if (isset($_GET['button'])) {
    $button = $_GET['button'];
    if (isset($counts[$button])) {
        $counts[$button]++;
    }
}
file_put_contents($file, json_encode($counts));
echo "Count updated";
?>
