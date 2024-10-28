<?php
namespace Controller;

include "Controller.php";
include "Traits/ResponseFormatter.php";

use Traits\ResponseFormatter;

class ProductController extends Controller {
    use ResponseFormatter;

    public function __construct() {
        $this->controllerName = "Get All Product";
        $this->controllerMethod = "GET";
    }

    public function getAllProduct() {
        // Array Dummy Data
        $dummyData = [
            "Air Mineral",
            "Kebab",
            "Spaghetti",
            "Jus Jambu"
        ];

        $response = [
            "controller_attribute" => $this->getControllerAttribute(),
            "product" => $dummyData
        ];

        return $this->formatResponse(200, "Success", $response);
    }
}
?>
