<?php

header('Access-Control-Allow-Origin: *');

echo json_encode([
    "message" => "Hello world from the backend application"
], JSON_PRETTY_PRINT);