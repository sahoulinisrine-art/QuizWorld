<?php
// fichier que React appel pour récupérer questions.

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once 'config.php';
require_once 'classes/Pays.php';
require_once 'classes/Quiz.php';

$pays = new Pays($pdo);
$quiz = new Quiz($pays);
$questions = $quiz->generateQuiz(10);

echo json_encode($questions, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);