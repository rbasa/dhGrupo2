-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 08-09-2022 a las 01:13:59
-- Versión del servidor: 5.7.34
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `java_cafe`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `product_category_id` int(11) DEFAULT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `product_category_id`, `image`) VALUES
(1, 'Café Colombia', 'Su sabor es potente y permanente en boca. Café intenso. Tonos de fruta tropical,  cuerpo y acidez media.', '700.00', 1, 'images/colombia.png'),
(2, 'Café Nicaragua', 'Su sabor es potente y permanente en boca. Café intenso. Tonos de fruta tropical,  cuerpo y acidez media.', '70.00', 1, 'images/nicaragua.png'),
(3, 'Café Kenya', 'Su sabor es potente y permanente en boca. Café intenso. Tonos de fruta tropical,  cuerpo y acidez media.', '702.00', 1, 'images/kenya.png'),
(4, 'Café Brasil', 'Su sabor es potente y permanente en boca. Café intenso. Tonos de fruta tropical,  cuerpo y acidez media.', '777.00', 1, 'images/brasil.png'),
(5, 'Remera negra', 'talle único ', '900.00', 2, 'images/remera_negra.png'),
(6, 'Remera blanca', 'talle único - algodon', '900.00', 2, 'images/shirt_logo.png'),
(7, 'Termo blanco', 'vaso térmico-capacidad 500cc-acero inoxidable', '1500.00', 2, 'images/termo_blanco_logo.png'),
(8, 'Termo naranja', 'vaso térmico-capacidad 500cc-acero inoxidable', '1500.00', 2, 'images/termo_naranja_logo.png'),
(9, 'Termo negro', 'vaso térmico-capacidad 500cc-acero inoxidable', '1500.00', 2, 'images/termo_negro_2_logo.png'),
(10, 'Termo metal', 'vaso térmico-capacidad 500cc-acero inoxidable', '1500.00', 4, 'images/termo_negro_logo.png'),
(11, 'Llavero JavaCafé', 'Todas tus llaves en un solo lugar', '602.00', 2, 'images/kenya.png'),
(12, 'Cafetera JavaCafé', 'Cafetera automática para que disfrutes tu café ni bien te', '4900.00', 3, 'images/brasil.png'),
(13, 'Cafetera espresso', '2L de capacidad,  metalica potencia de 850W', '12500.00', 3, 'images/brasil.png'),
(14, 'Cafetera para capsulas ', 'tiene filtro permanente,  potencia de 1500W,  incluye bandeja recolectora', '22000.00', 3, 'images/brasil.png'),
(15, 'Vaso termico de la marca', 'Vaso de 500ml', '2000.00', 2, 'images/brasil.png'),
(16, 'buzo de la marca ', 'Disponibles en talles  L XL', '4900.00', 4, 'images/brasil.png'),
(17, 'Gorra de la marca', 'Talle unico ', '500.00', 4, 'images/colombia.png'),
(19, 'Calcomania', 'Logo de la marca', '150.00', 2, 'images/brasil.png'),
(20, 'espumador de cafe', 'espumador', '750.00', 2, 'images/brasil.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_categories`
--

CREATE TABLE `product_categories` (
  `id` int(11) NOT NULL,
  `product_category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `product_categories`
--

INSERT INTO `product_categories` (`id`, `product_category`) VALUES
(1, 'Café'),
(2, 'Accesorios'),
(3, 'Cafetera'),
(4, 'Indumentaria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(60) NOT NULL,
  `user_category_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `user_category_id`) VALUES
(1, 'rodrigo', 'asd@asd.com', '$2a$10$NLIPWpoOrpj7Zu2CJPLGx.dXka4q4pxgKlMjGHVDaL4EkVS40NUYO', '2'),
(2, 'rodri', 'qwe@qwe.com', '$2a$10$8dx2aY0RgheGir7Xx5Q.o.zXTfPkSX39u.pBKqi7v8mwq.CFJ9RRS', '2'),
(3, 'rodrigo', 'momom@sad.com', '$2a$10$pH9nLsPYO77tDcai0JQjiuL0AHvS/Gig0RgmoE6GlJZLVHwY7PD.O', '2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_categories`
--

CREATE TABLE `user_categories` (
  `id` int(11) NOT NULL,
  `user_category` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `user_categories`
--

INSERT INTO `user_categories` (`id`, `user_category`) VALUES
(1, 'admin'),
(2, 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user_categories`
--
ALTER TABLE `user_categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;