<?php

class Quiz {
    private $pays;

    public function __construct($pays) {
        $this->pays = $pays;
    }

    public function generateQuestion() {
        $types = ['capital', 'population', 'flag', 'continent', 'neighbors'];
        $type = $types[array_rand($types)];

        $correct = $this->pays->getRandom();
        $wrong = $this->pays->getRandomExcept($correct['id'], 3);

        // La question
        if ($type == 'capital') {
            $question = "What is the capital of " . $correct['nom'] . "?";
            $correctAnswer = $correct['capitale'];
            $wrongAnswers = [$wrong[0]['capitale'], $wrong[1]['capitale'], $wrong[2]['capitale']];

        } else if ($type == 'population') {
            $question = "Which country has approximately " . number_format($correct['population']) . " inhabitants?";
            $correctAnswer = $correct['nom'];
            $wrongAnswers = [$wrong[0]['nom'], $wrong[1]['nom'], $wrong[2]['nom']];

        } else if ($type == 'flag') {
            $question = "Which country does this flag belong to?";
            $correctAnswer = $correct['nom'];
            $wrongAnswers = [$wrong[0]['nom'], $wrong[1]['nom'], $wrong[2]['nom']];

        } else if ($type == 'continent') {
            $question = "On which continent is " . $correct['nom'] . " located?";
            $correctAnswer = $correct['continent'];
            $allContinents = ['Europe', 'Afrique', 'Asie', 'Amérique du Nord', 'Amérique du Sud', 'Océanie'];
            $wrongAnswers = [];
            foreach ($allContinents as $c) {
                if ($c !== $correct['continent']) {
                    $wrongAnswers[] = $c;
                }
            }
            shuffle($wrongAnswers); // mélange tableau aléatoirement
            $wrongAnswers = [$wrongAnswers[0], $wrongAnswers[1], $wrongAnswers[2]];

        } else {
            $question = "Which of these countries borders " . $correct['nom'] . "?";
            $neighbors = explode(', ', $correct['pays_limitrophes']); // découpe une string en tableau
            $correctAnswer = $neighbors[array_rand($neighbors)]; //  renvoie une clé aléatoire du tableau
            $wrongAnswers = [$wrong[0]['nom'], $wrong[1]['nom'], $wrong[2]['nom']];
        }

        // On met les 4 réponses ensemble et on mélange
        $answers = [$correctAnswer, $wrongAnswers[0], $wrongAnswers[1], $wrongAnswers[2]];
        shuffle($answers);

        return [
            'question' => $question,
            'type' => $type,
            'flag' => $correct['drapeau'],
            'answers' => $answers,
            'correct' => $correctAnswer
        ];
    }

    public function generateQuiz($nb = 10) {
        $questions = [];
        for ($i = 0; $i < $nb; $i++) {
            $questions[] = $this->generateQuestion();
        }
        return $questions;
    }
}