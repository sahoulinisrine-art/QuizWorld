<?php

require_once 'config.php';
require_once 'classes/Pays.php';
require_once 'classes/Quiz.php';

echo "<h1>Test API - Map or Trap</h1>";

// Test 1 : connexion BDD
echo "<h2>1. Connexion BDD</h2>";
echo "<p>Connecté à la base de données </p>";

// Test 2 : récupérer tous les pays
echo "<h2>2. Nombre de pays en BDD</h2>";
$pays = new Pays($pdo);
$all = $pays->getAll();
echo "<p>" . count($all) . " pays trouvés</p>";

// Test 3 : générer une question
echo "<h2>3. Exemple de question</h2>";
$quiz = new Quiz($pays);
$question = $quiz->generateQuestion();
echo "<pre>" . json_encode($question, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . "</pre>";

// Test 4 : générer un quiz complet
echo "<h2>4. Quiz complet (10 questions)</h2>";
$questions = $quiz->generateQuiz(10);
echo "<pre>" . json_encode($questions, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . "</pre>";

// <pre> pour afficher comme le windowS à la ligne car Mac breffff comme <br>