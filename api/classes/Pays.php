<?php

class Pays {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function getAll() {
        $stmt = $this->pdo->query("SELECT * FROM db_pays");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Récupérer un pays au hasard avec Rand quand il ORDER pour mélanger
    public function getRandom() {
        $stmt = $this->pdo->query("SELECT * FROM db_pays ORDER BY RAND() LIMIT 1");
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Récupérer X pays au hasard (pour les fausses réponses)
    public function getRandomExcept($excludeId, $limit = 3) {
        $stmt = $this->pdo->prepare("SELECT * FROM db_pays WHERE id != ? ORDER BY RAND() LIMIT ?");
        $stmt->execute([$excludeId, $limit]); //  ? -> getRandomExcept(5, 3) id!= 5 et LIMIT 3
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}