<?php
namespace Tugas1\Controller;

use Tugas1\Models\Perfume;

class PerfumeController {
    public function showPerfume() {
        $perfume = new Perfume("Rose Essence", "Luxury Scents", "Rose, Jasmine, Sandalwood", 150);
        return $perfume->getDescription();
    }
}
