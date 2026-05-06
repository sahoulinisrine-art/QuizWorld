<?php
// api/config.php

$host = 'localhost';
$dbname = 'map_or_trap';
$user = 'root';
$password = 'root';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500); //pour verifier api ok
    echo json_encode(['error' => 'Connexion échouée : ' . $e->getMessage()]);
    exit;
}