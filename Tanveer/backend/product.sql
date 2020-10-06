-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 06, 2020 at 03:44 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopically`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `price` int(10) NOT NULL,
  `tag` varchar(200) NOT NULL,
  `colour` varchar(20) NOT NULL,
  `size` int(10) NOT NULL,
  `material` varchar(20) NOT NULL,
  `product_image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_id`, `product_name`, `category`, `price`, `tag`, `colour`, `size`, `material`, `product_image`) VALUES
(1, 1, 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', ''),
(2, 2, 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', ''),
(3, 3, 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', ''),
(4, 4, 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', ''),
(5, 5, 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', ''),
(6, 1, 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', ''),
(7, 6, 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', ''),
(8, 7, 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', ''),
(9, 8, 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', ''),
(10, 9, 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', ''),
(11, 10, 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', ''),
(12, 1, 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', ''),
(13, 2, 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', ''),
(14, 4, 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', ''),
(15, 4, 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', ''),
(16, 2, 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', ''),
(17, 2, 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', ''),
(18, 1, 'levis', 'jeans', 1000, 'slim fit,high rise', 'grey', 9, 'leather', ''),
(19, 1, 'adidas', 'shorts', 1000, 'white,sneaker,golden', 'black', 9, 'leather', ''),
(20, 1, 'adidas', 'tshirt', 1000, 'white,sneaker,golden', 'blue', 9, 'cotton', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

