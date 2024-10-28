<?php
namespace Controller;

class Controller {
    protected $controllerName;
    protected $controllerMethod;

    // Metode untuk mengambil semua atribut
    public function getControllerAttribute() {
        return [
            "ControllerName" => $this->controllerName,
            "Method" => $this->controllerMethod
        ];
    }
}
?>
