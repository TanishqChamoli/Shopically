-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2020 at 08:25 AM
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
  `shop_id` int(11) NOT NULL,
  `product_id` int(10) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `price` int(10) NOT NULL,
  `tag` varchar(200) NOT NULL,
  `colour` varchar(20) NOT NULL,
  `size` int(10) NOT NULL,
  `material` varchar(20) NOT NULL,
  `product_image` varchar(50) NOT NULL,
  `product_description` varchar(200) NOT NULL,
  `upload_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `shop_id`, `product_id`, `product_name`, `brand`, `category`, `price`, `tag`, `colour`, `size`, `material`, `product_image`, `product_description`, `upload_date`) VALUES
(1, 0, 1, '', 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'red', 9, 'leather', '', '', '0000-00-00 00:00:00'),
(2, 0, 2, '', 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'green', 9, 'leather', '', '', '0000-00-00 00:00:00'),
(3, 0, 3, '', 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', '', '', '0000-00-00 00:00:00'),
(4, 0, 4, '', 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', '', '', '0000-00-00 00:00:00'),
(5, 0, 5, '', 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', '', '', '0000-00-00 00:00:00'),
(6, 0, 1, '', 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', '', '', '0000-00-00 00:00:00'),
(7, 0, 6, '', 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', '', '', '0000-00-00 00:00:00'),
(8, 0, 7, '', 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', '', '', '0000-00-00 00:00:00'),
(9, 0, 8, '', 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', '', '', '0000-00-00 00:00:00'),
(10, 0, 9, '', 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', '', '', '0000-00-00 00:00:00'),
(11, 0, 10, '', 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', '', '', '0000-00-00 00:00:00'),
(12, 0, 1, '', 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', '', '', '0000-00-00 00:00:00'),
(13, 0, 2, '', 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'green', 9, 'leather', '', '', '0000-00-00 00:00:00'),
(14, 0, 4, '', 'nike', 'shoe', 1000, 'white,sneaker,golden', 'red', 9, 'leather', '', '', '0000-00-00 00:00:00'),
(15, 0, 4, '', 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', '', '', '0000-00-00 00:00:00'),
(16, 0, 2, '', 'adidas', 'shoe', 1000, 'white,sneaker,golden', 'white', 9, 'leather', '', '', '0000-00-00 00:00:00'),
(17, 0, 2, '', 'levis', 'shirt', 1000, 'white,sneaker,golden', 'red', 9, 'cotton', '', '', '0000-00-00 00:00:00'),
(18, 0, 1, '', 'levis', 'jeans', 1000, 'slim fit,high rise', 'grey', 9, 'cotton', '', '', '0000-00-00 00:00:00'),
(19, 0, 1, '', 'adidas', 'shorts', 1000, 'white,sneaker,golden', 'black', 9, 'leather', '', '', '0000-00-00 00:00:00'),
(20, 0, 1, '', 'adidas', 'tshirt', 1000, 'white,sneaker,golden', 'blue', 9, 'cotton', '', '', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `shop`
--

CREATE TABLE `shop` (
  `id` int(10) NOT NULL,
  `shop_name` varchar(20) NOT NULL,
  `shop_location` varchar(10) NOT NULL,
  `email_id` varchar(50) NOT NULL,
  `owner_name` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `pincode` int(11) NOT NULL,
  `telephone` varchar(20) NOT NULL,
  `mobile` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shop`
--

INSERT INTO `shop` (`id`, `shop_name`, `shop_location`, `email_id`, `owner_name`, `city`, `state`, `pincode`, `telephone`, `mobile`) VALUES
(1, 'shop1', 'moh', '', '', '', '', 0, '', ''),
(2, 'shop2', 'chd', '', '', '', '', 0, '', ''),
(3, 'shop3', 'moh', '', '', '', '', 0, '', ''),
(4, 'shop4', 'pun', '', '', '', '', 0, '', ''),
(5, 'shop5', 'moh', '', '', '', '', 0, '', ''),
(6, 'shop6', 'moh', '', '', '', '', 0, '', ''),
(7, 'shop7', 'pun', '', '', '', '', 0, '', ''),
(8, 'shop8', 'chd', '', '', '', '', 0, '', ''),
(9, 'shop9', 'chd', '', '', '', '', 0, '', ''),
(10, 'shop10', 'moh', '', '', '', '', 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `address` varchar(200) NOT NULL,
  `pincode` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `gender` enum('male','female') NOT NULL,
  `cart` int(11) DEFAULT NULL,
  `joining_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `shop`
--
ALTER TABLE `shop`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
