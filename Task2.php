<?php
function price($start, $soil, $age) {
  $map = [
    "Barely used" => 1.1,
    "Seen a few high kicks" => 1.25,
    "Blood stained" => 1.3,
    "Heavily soiled" => 1.5
  ];
  if (!is_numeric($start) || !is_numeric($age) || !array_key_exists($soil, $map)) {
    return "Chuck is bottomless!";
  }
  return sprintf("$%.2f", round($start * pow($map[$soil], $age), 2));
}
?>