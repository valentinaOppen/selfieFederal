-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 04-05-2019 a las 00:51:04
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.1.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `selfie`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `selfies`
--

CREATE TABLE `selfies` (
  `id` int(11) NOT NULL COMMENT '	',
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  `id_address` int(11) DEFAULT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `pais` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `provincia` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `ciudad` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `persona` longtext COLLATE utf8_spanish2_ci,
  `address` longtext COLLATE utf8_spanish2_ci,
  `visible` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `selfies`
--

INSERT INTO `selfies` (`id`, `lat`, `lng`, `id_address`, `nombre`, `pais`, `provincia`, `ciudad`, `persona`, `address`, `visible`) VALUES
(1, -35.64753698828256, -60.699382261416986, 1, 'Votante de Massa', 'Argentina', 'Buenos Aires', 'Dudignac', '{\"persona\":\"img: https://www.w3schools.com/w3css/img_avatar3.png\",\"nombre\":\"Jon Doe\"}\r\n', '{ \"address_country\": \"Argentina\", \"address_level_1\": \"undefined, Avenida 9 de Julio\", \"address_level_2\": \"Dudignac\", \"address_state\": \"Buenos Aires\" }', 0),
(2, -35.68753698828256, -60.79938226141699, NULL, 'Otro Votante', 'Argentina', 'Buenos Aires', 'Dudignac', '\r\n{\"persona\":\"img: https://www.w3schools.com/w3css/img_avatar3.png\",\"nombre\":\"Jon Doe\"}', '{ \"address_country\": \"Argentina\", \"address_level_1\": \"undefined, Avenida 9 de Julio\", \"address_level_2\": \"Dudignac\", \"address_state\": \"Buenos Aires\" }', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `selfies`
--
ALTER TABLE `selfies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `selfies`
--
ALTER TABLE `selfies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '	', AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
