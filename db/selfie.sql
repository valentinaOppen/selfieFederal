-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 07-05-2019 a las 17:33:21
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
  `sitio` varchar(55) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id_pais` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `id_state` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `id_sitio` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `pais` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `provincia` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `ciudad` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `persona` longtext COLLATE utf8_spanish2_ci,
  `address` longtext COLLATE utf8_spanish2_ci,
  `visible` int(1) NOT NULL DEFAULT '0',
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `selfies`
--

INSERT INTO `selfies` (`id`, `lat`, `lng`, `sitio`, `id_pais`, `id_state`, `id_sitio`, `pais`, `provincia`, `ciudad`, `persona`, `address`, `visible`, `fecha`) VALUES
(32, -34.591079889211, -58.481154667403, 'comuna 15, caba, argentina', 'ChIJZ8b99fXKvJURqA_wKpl3Lz0', 'chiju39fbt3kvjurf8d35_z0yoe', 'ChIJJ2FHGQi2vJURwDLt3Or-hBA', 'argentina', 'buenos aires', 'comuna 15', '{\"nombre\":\"sin nombre\",\"img\":\".\\/images\\/1557240833.409711.jpg\"}', '{\"id_address_sitio\":\"ChIJJ2FHGQi2vJURwDLt3Or-hBA\",\"sitio\":\"comuna 15, caba, argentina\",\"address_state_2\":\"comuna 15\",\"address_state_1\":\"buenos aires\",\"id_address_1\":\"chiju39fbt3kvjurf8d35_z0yoe\",\"address_country\":\"argentina\",\"id_address_country\":\"ChIJZ8b99fXKvJURqA_wKpl3Lz0\"}', 0, '2019-05-07 00:00:00'),
(33, -34.626401350732, -58.539519535567, 'tres de febrero, buenos aires, argentina', 'ChIJZ8b99fXKvJURqA_wKpl3Lz0', 'chij2yfswbe87zurrkhw3pwj00o', 'ChIJTdjr1MS7vJUR0hJ8j7luADc', 'argentina', 'buenos aires', 'tres de febrero', '{\"nombre\":\"sin nombre\",\"img\":\".\\/images\\/1557240933.584640.jpg\"}', '{\"id_address_sitio\":\"ChIJTdjr1MS7vJUR0hJ8j7luADc\",\"sitio\":\"tres de febrero, buenos aires, argentina\",\"address_state_2\":\"tres de febrero\",\"address_state_1\":\"buenos aires\",\"id_address_1\":\"chij2yfswbe87zurrkhw3pwj00o\",\"address_country\":\"argentina\",\"id_address_country\":\"ChIJZ8b99fXKvJURqA_wKpl3Lz0\"}', 0, '2019-05-07 00:00:00'),
(34, -34.662737108463, -58.358777523422, 'avellaneda, buenos aires, argentina', 'ChIJZ8b99fXKvJURqA_wKpl3Lz0', 'chij2yfswbe87zurrkhw3pwj00o', 'ChIJ14EM2bzMvJURkaCAfSuL7F4', 'argentina', 'buenos aires', 'avellaneda', '{\"nombre\":\"sin nombre\",\"img\":\".\\/images\\/1557241008.261628.jpg\"}', '{\"id_address_sitio\":\"ChIJ14EM2bzMvJURkaCAfSuL7F4\",\"sitio\":\"avellaneda, buenos aires, argentina\",\"address_state_2\":\"avellaneda\",\"address_state_1\":\"buenos aires\",\"id_address_1\":\"chij2yfswbe87zurrkhw3pwj00o\",\"address_country\":\"argentina\",\"id_address_country\":\"ChIJZ8b99fXKvJURqA_wKpl3Lz0\"}', 0, '2019-05-07 00:00:00'),
(35, -34.817021919543, -58.447564008919, 'esteban echeverría, buenos aires, argentina', 'ChIJZ8b99fXKvJURqA_wKpl3Lz0', 'chij2yfswbe87zurrkhw3pwj00o', 'ChIJ3Qji2j3OvJURVvBpTjYF-pM', 'argentina', 'buenos aires', 'esteban echeverría', '{\"nombre\":\"sin nombre\",\"img\":\".\\/images\\/1557242648.116309.jpg\"}', '{\"id_address_sitio\":\"ChIJ3Qji2j3OvJURVvBpTjYF-pM\",\"sitio\":\"esteban echeverr\\u00eda, buenos aires, argentina\",\"address_state_2\":\"esteban echeverr\\u00eda\",\"address_state_1\":\"buenos aires\",\"id_address_1\":\"chij2yfswbe87zurrkhw3pwj00o\",\"address_country\":\"argentina\",\"id_address_country\":\"ChIJZ8b99fXKvJURqA_wKpl3Lz0\"}', 0, '2019-05-07 00:00:00'),
(36, -24.233335838033, -65.274264657563, 'dr manuel belgrano, jujuy, argentina', 'ChIJZ8b99fXKvJURqA_wKpl3Lz0', 'chijhwbc5_ahbjqreu7omlkrxoe', 'ChIJIz0mMLgTG5QRymHR3coJccI', 'argentina', 'jujuy', 'doctor manuel belgrano', '{\"nombre\":\"sin nombre\",\"img\":\".\\/images\\/1557242741.360280.jpg\"}', '{\"id_address_sitio\":\"ChIJIz0mMLgTG5QRymHR3coJccI\",\"sitio\":\"dr manuel belgrano, jujuy, argentina\",\"address_state_2\":\"doctor manuel belgrano\",\"address_state_1\":\"jujuy\",\"id_address_1\":\"chijhwbc5_ahbjqreu7omlkrxoe\",\"address_country\":\"argentina\",\"id_address_country\":\"ChIJZ8b99fXKvJURqA_wKpl3Lz0\"}', 0, '2019-05-07 00:00:00');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '	', AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
