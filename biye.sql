-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2020 at 10:04 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `biye`
--

-- --------------------------------------------------------

--
-- Table structure for table `guang`
--

CREATE TABLE `guang` (
  `name` varchar(20) DEFAULT NULL,
  `xing` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `nameid` varchar(20) DEFAULT NULL,
  `pass` varchar(20) DEFAULT NULL,
  `lei` varchar(20) DEFAULT NULL,
  `id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `guang`
--

INSERT INTO `guang` (`name`, `xing`, `phone`, `nameid`, `pass`, `lei`, `id`) VALUES
('张三', '男', '15767407131', 'admin', '123', '1', 1);

-- --------------------------------------------------------

--
-- Table structure for table `mai`
--

CREATE TABLE `mai` (
  `id` int(20) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `dan` varchar(20) DEFAULT NULL,
  `shu` varchar(20) DEFAULT NULL,
  `jin` varchar(20) DEFAULT NULL,
  `time` varchar(20) DEFAULT NULL,
  `lei` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `pu`
--

CREATE TABLE `pu` (
  `name` varchar(20) DEFAULT NULL,
  `xing` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `jin` varchar(20) DEFAULT NULL,
  `time` varchar(20) DEFAULT NULL,
  `id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `yuan`
--

CREATE TABLE `yuan` (
  `name` varchar(20) DEFAULT NULL,
  `xing` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `nameid` varchar(20) DEFAULT NULL,
  `pass` varchar(20) DEFAULT NULL,
  `lei` varchar(20) DEFAULT NULL,
  `id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `zhong`
--

CREATE TABLE `zhong` (
  `name` varchar(20) DEFAULT NULL,
  `xing` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `jin` varchar(20) DEFAULT NULL,
  `time` varchar(20) DEFAULT NULL,
  `id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `zong`
--

CREATE TABLE `zong` (
  `id` int(20) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `dan` varchar(20) DEFAULT NULL,
  `ku` varchar(20) DEFAULT NULL,
  `chu` varchar(20) DEFAULT NULL,
  `tui` varchar(20) DEFAULT NULL,
  `jin` varchar(20) DEFAULT NULL,
  `time` varchar(20) DEFAULT NULL,
  `lei` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `guang`
--
ALTER TABLE `guang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mai`
--
ALTER TABLE `mai`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pu`
--
ALTER TABLE `pu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `yuan`
--
ALTER TABLE `yuan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `zhong`
--
ALTER TABLE `zhong`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `zong`
--
ALTER TABLE `zong`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `guang`
--
ALTER TABLE `guang`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `mai`
--
ALTER TABLE `mai`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `pu`
--
ALTER TABLE `pu`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `yuan`
--
ALTER TABLE `yuan`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `zhong`
--
ALTER TABLE `zhong`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `zong`
--
ALTER TABLE `zong`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
