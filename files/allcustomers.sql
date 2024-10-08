-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2024 at 09:26 PM
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
-- Table structure for table `allcustomers`
--

CREATE TABLE `allcustomers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `registration_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `allcustomers`
--

INSERT INTO `allcustomers` (`id`, `name`, `email`, `phone`, `registration_date`, `created_at`, `updated_at`) VALUES
(1, 'Mamun', 'mamun77@gmail.com', '7957895', '2023-11-15', '2024-10-08 12:50:20', '2024-10-08 12:57:37'),
(18, 'Julfiqur', 'jhraj963@gmail.com', '6895890', '2024-10-17', '2024-10-08 13:18:53', '2024-10-08 13:18:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allcustomers`
--
ALTER TABLE `allcustomers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `allcustomers_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allcustomers`
--
ALTER TABLE `allcustomers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
