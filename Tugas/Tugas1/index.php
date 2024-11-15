<?php
header('Content-Type: application/json');
require_once __DIR__ . '/Traits/ResponseFormatter.php';
require_once __DIR__ . '/Models/Perfume.php';
require_once __DIR__ . '/Controller/PerfumeController.php';

use Tugas1\Controller\PerfumeController;

$controller = new PerfumeController();
echo $controller->showPerfume();
