-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2024 at 09:47 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-laravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `add_products`
--

CREATE TABLE `add_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `productname` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(6,2) DEFAULT NULL,
  `quantity` decimal(6,2) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `add_products`
--

INSERT INTO `add_products` (`id`, `productname`, `description`, `price`, `quantity`, `category`, `photo`, `created_at`, `updated_at`) VALUES
(6, 'Jeans', 'gsg', 2000.00, 1.00, 'MENS', '17290152262775.jpg', '2024-10-14 12:07:15', '2024-10-14 12:07:15'),
(7, 'Jeans', 'Abc', 2000.00, 1.00, 'MENS', '17290153444814.png', '2024-10-14 12:25:15', '2024-10-14 13:05:54'),
(8, 'Jeans', 'gsg', 2000.00, 1.00, 'MENS', '17289328573786.png', '2024-10-14 13:07:37', '2024-10-14 13:07:37'),
(9, 'Jeans', 'gsg', 8000.00, 1.00, 'MENS', '17289330094886.png', '2024-10-14 13:10:09', '2024-10-14 13:10:09'),
(10, 'Jeans', 'gsg', 7000.00, 1.00, 'MENS', '17289332997182.png', '2024-10-14 13:14:59', '2024-10-14 13:14:59'),
(11, 'Jeans', 'gsg', 2000.00, 1.00, 'MENS', '17289366028251.jpg', '2024-10-14 14:10:02', '2024-10-14 14:10:02'),
(14, 'Jeans', 'Mens Collection', 2000.00, 1.00, 'MENS', '17290128386026.png', '2024-10-15 11:05:14', '2024-10-15 11:05:14'),
(15, 'Jeans', 'Sports Collections', 5000.00, 1.00, 'MENS', '17290128315022.png', '2024-10-15 11:08:36', '2024-10-15 11:08:36'),
(18, 'Jeans', 'Sports Collections', 2000.00, 1.00, 'MENS', '17290153934761.png', '2024-10-15 12:03:13', '2024-10-15 12:03:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `add_products`
--
ALTER TABLE `add_products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `add_products`
--
ALTER TABLE `add_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
