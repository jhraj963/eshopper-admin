-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2024 at 08:07 PM
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
-- Database: `eshopper`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cat_name` varchar(255) NOT NULL,
  `cat_des` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `cat_name`, `cat_des`, `status`, `created_by`, `updated_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Mens', 'Mens Items', 1, 2, NULL, NULL, '2023-11-27 00:02:45', '2023-12-03 00:31:07'),
(2, 'Womens', 'Womens Items', 1, 2, NULL, NULL, '2023-11-27 00:06:38', '2023-12-03 00:31:29'),
(3, 'Sportswear', 'Sports Item', 1, 2, NULL, NULL, '2023-11-27 00:09:18', '2023-12-03 00:31:44'),
(5, 'Kids', 'Kids Collection', 0, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(20) UNSIGNED NOT NULL,
  `employ_id` bigint(20) UNSIGNED DEFAULT NULL,
  `role_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name_en` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact_no_en` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `language` varchar(255) NOT NULL DEFAULT 'en',
  `full_access` tinyint(1) NOT NULL DEFAULT 0 COMMENT '1=yes, 0=no',
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1 = active, 2 = inactive',
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `employ_id`, `role_id`, `name_en`, `email`, `contact_no_en`, `password`, `language`, `full_access`, `status`, `created_by`, `updated_by`, `remember_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(2, 6, 1, 'Asadullah Al Galib', 'galib@gmail.com', '018375755799', '$2y$12$JrYgams5nXcHmqlnk7aUTOnC2rtZ1aABHLbt7ElC2ghErwzkv2kZ2', 'en', 1, 1, NULL, 2, NULL, '2023-11-22 18:42:44', '2023-11-26 17:05:47', NULL),
(4, 9, 3, 'Kamal Uddin', 'k@gmail.com', '12569', '$2y$12$SlQqXma10cbi6q3TvviR5OuPXl/K0QSZTxrtvbN6ygGErLMvYJaQe', 'en', 0, 1, 2, NULL, NULL, '2023-11-27 16:39:13', '2023-11-28 16:31:35', NULL),
(5, 10, 2, 'Joshim Uddin', 'j@gmail.com', '25865', '$2y$12$8NwZWWrJlpXYmk5TvmBwvupiY1IJaH1wE.bW4jlOMWZLVYCC.GJMq', 'en', 0, 1, 2, 2, NULL, '2023-11-27 16:45:02', '2023-11-28 16:40:52', NULL),
(6, 11, 2, 'Farabi', 'f@gmail.com', '01458795687', '$2y$12$7T0vRQVY0XM8UBwxZySNV.i5JFdTeVfHdKMvk8SpKR2bykq.lmJje', 'en', 0, 1, 2, 2, NULL, '2023-11-27 16:47:33', '2023-11-29 15:32:08', NULL),
(7, 12, 2, 'Farin', 'h@gmail.com', '1444444', '$2y$12$0gngcPLvjSZ/bvuKk6duhONwwW0lRATmIzfqdBpmnBfL9q573MiKG', 'en', 0, 1, 2, 2, NULL, '2023-12-02 17:14:43', '2023-12-02 18:26:55', NULL),
(8, NULL, NULL, 'kamal uddin', 'kamal@yahoo.com', '015', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'en', 0, 1, NULL, NULL, '172628591155055c3b2f0e0fa62adbb7e50c9b6bbfa97', NULL, NULL, NULL),
(9, NULL, NULL, 'Raja', 'jhraj963@gmail.com', '015', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'en', 0, 1, NULL, NULL, '1726329295164ce1f23714608399674aa88381f1651bf', NULL, NULL, NULL),
(10, NULL, NULL, 'Julfiqur', 'abc@yahoo.com', '015', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'en', 0, 1, NULL, NULL, '17263382005857f63a73e68aed17c555fa1b2fb41f811', NULL, NULL, NULL),
(11, NULL, NULL, 'Julfiqur', 'christinadhall5@gmail.com', '015', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'en', 0, 1, NULL, NULL, '1726342604643342a3a5eb97f689100fde248a3ecd36a', NULL, NULL, NULL),
(18, NULL, NULL, 'Mamun', 'mamun@yahoo.com', '01556', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'en', 0, 1, NULL, NULL, '1726415447706202761bfd5850f63321bdf5af896e631', NULL, NULL, NULL),
(19, NULL, NULL, 'Imtiaz', 'imtiaz@gmail.com', '01556', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'en', 0, 1, NULL, NULL, '17265167537944d7252d02a4c40677bf4e57792d4d096', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
