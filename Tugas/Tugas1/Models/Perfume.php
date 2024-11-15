<?php
namespace Tugas1\Models;

use Tugas1\Traits\ResponseFormatter;

abstract class Product {
    protected $name;
    protected $brand;

    abstract public function getDescription();
}

class Perfume extends Product {
    use ResponseFormatter;

    private $scentNotes;
    private $price;

    public function __construct($name, $brand, $scentNotes, $price) {
        $this->name = $name;
        $this->brand = $brand;
        $this->scentNotes = $scentNotes;
        $this->price = $price;
    }

    public function getDescription() {
        return $this->formatResponse("This perfume, $this->name by $this->brand, has scent notes of $this->scentNotes and costs $$this->price.");
    }
}
