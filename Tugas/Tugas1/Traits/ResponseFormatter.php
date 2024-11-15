<?php
namespace Tugas1\Traits;

trait ResponseFormatter {
    public function formatResponse($message) {
        return json_encode(["description" => $message]);
    }
}
