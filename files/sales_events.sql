-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 06, 2024 at 09:38 PM
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
-- Table structure for table `sales_events`
--

CREATE TABLE `sales_events` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `eventname` varchar(255) DEFAULT NULL,
  `startdate` datetime DEFAULT NULL,
  `enddate` datetime DEFAULT NULL,
  `discount` decimal(5,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sales_events`
--

INSERT INTO `sales_events` (`id`, `eventname`, `startdate`, `enddate`, `discount`, `created_at`, `updated_at`) VALUES
(4, 'Thanks Giving Day', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 20.00, '2024-10-06 12:11:06', '2024-10-06 12:11:06'),
(5, 'Easter Sunday', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 20.00, '2024-10-06 12:25:35', '2024-10-06 12:25:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sales_events`
--
ALTER TABLE `sales_events`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sales_events`
--
ALTER TABLE `sales_events`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
