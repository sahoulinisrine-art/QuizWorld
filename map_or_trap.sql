-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : sam. 09 mai 2026 à 18:05
-- Version du serveur : 8.0.40
-- Version de PHP : 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `map_or_trap`
--

-- --------------------------------------------------------

--
-- Structure de la table `db_pays`
--

CREATE TABLE `db_pays` (
  `id` int NOT NULL,
  `nom` varchar(100) NOT NULL,
  `capitale` varchar(100) NOT NULL,
  `population` bigint NOT NULL,
  `drapeau` varchar(255) NOT NULL,
  `continent` varchar(50) NOT NULL,
  `pays_limitrophes` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `db_pays`
--

INSERT INTO `db_pays` (`id`, `nom`, `capitale`, `population`, `drapeau`, `continent`, `pays_limitrophes`) VALUES
(1, 'France', 'Paris', 67750000, 'fr', 'Europe', 'Germany, Belgium, Spain, Italy, Switzerland, Luxembourg'),
(2, 'Germany', 'Berlin', 83200000, 'de', 'Europe', 'France, Belgique, Pays-Bas, Pologne, Autriche, Suisse'),
(3, 'Spain', 'Madrid', 47420000, 'es', 'Europe', 'France, Portugal, Andorre, Maroc'),
(4, 'Italy', 'Rome', 58870000, 'it', 'Europe', 'France, Suisse, Autriche, Slovénie'),
(5, 'Belgium', 'Brussels', 11590000, 'be', 'Europe', 'France, Allemagne, Pays-Bas, Luxembourg'),
(6, 'Morocco', 'Rabat', 37080000, 'ma', 'Africa', 'Algérie, Mauritanie, Espagne'),
(7, 'Egypt', 'Cairo', 104260000, 'eg', 'Africa', 'Libye, Soudan, Israël, Palestine'),
(8, 'Nigeria', 'Abuja', 218540000, 'ng', 'Africa', 'Benin, Cameroon, Chad, Niger'),
(9, 'South Africa', 'Pretoria', 60040000, 'za', 'Africa', 'Namibie, Botswana, Zimbabwe, Mozambique, Eswatini, Lesotho'),
(10, 'Kenya', 'Nairobi', 55100000, 'ke', 'Africa', 'Tanzania, Uganda, Somalia, Ethiopia, South Sudan'),
(11, 'Japan', 'Tokyo', 125700000, 'jp', 'Asia', 'Aucun (île)'),
(12, 'China', 'Beijing', 1412000000, 'cn', 'Asia', 'Russie, Inde, Mongolie, Vietnam, Corée du Nord, Kazakhstan'),
(13, 'India', 'New Delhi', 1408000000, 'in', 'Asia', 'Chine, Pakistan, Bangladesh, Népal, Sri Lanka, Myanmar'),
(14, 'South Korea', 'Seoul', 51740000, 'kr', 'Asia', 'Corée du Nord'),
(15, 'Thailand', 'Bangkok', 71800000, 'th', 'Asia', 'Myanmar, Laos, Cambodge, Malaisie'),
(16, 'United States', 'Washington D.C.', 331900000, 'us', 'North America', 'Canada, Mexique'),
(17, 'Canada', 'Ottawa', 38930000, 'ca', 'North America', 'United States'),
(18, 'Mexico', 'Mexico City', 128900000, 'mx', 'North America', 'États-Unis, Guatemala, Belize'),
(19, 'Cuba', 'Havana', 11260000, 'cu', 'North America', 'None (island)'),
(20, 'Costa Rica', 'San José', 5180000, 'cr', 'North America', 'Nicaragua, Panama'),
(21, 'Brazil', 'Brasília', 214300000, 'br', 'South America', 'Argentine, Uruguay, Paraguay, Colombie, Venezuela, Pérou'),
(22, 'Argentina', 'Buenos Aires', 46040000, 'ar', 'South America', 'Chili, Brésil, Uruguay, Paraguay, Bolivie'),
(23, 'Colombia', 'Bogotá', 51870000, 'co', 'South America', 'Venezuela, Brésil, Pérou, Équateur, Panama'),
(24, 'Peru', 'Lima', 33720000, 'pe', 'South America', 'Équateur, Colombie, Brésil, Bolivie, Chili'),
(25, 'Chile', 'Santiago', 19490000, 'cl', 'South America', 'Argentine, Pérou, Bolivie'),
(26, 'Australia', 'Canberra', 26140000, 'au', 'Oceania', 'Aucun (île-continent)'),
(27, 'New Zealand', 'Wellington', 5120000, 'nz', 'Oceania', 'Aucun (île)'),
(28, 'Fiji', 'Suva', 929000, 'fj', 'Oceania', 'Aucun (île)'),
(29, 'Papua New Guinea', 'Port Moresby', 10140000, 'pg', 'Oceania', 'Indonésie'),
(30, 'Samoa', 'Apia', 222000, 'ws', 'Oceania', 'None (island)');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `db_pays`
--
ALTER TABLE `db_pays`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `db_pays`
--
ALTER TABLE `db_pays`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
