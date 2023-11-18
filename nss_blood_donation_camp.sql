-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 07, 2023 at 08:12 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nss blood donation camp`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` int(11) NOT NULL,
  `date` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `venue` varchar(45) NOT NULL,
  `ended` tinyint(1) NOT NULL DEFAULT 0,
  `organizer` varchar(45) NOT NULL,
  `volunteers_needed` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `date`, `name`, `venue`, `ended`, `organizer`, `volunteers_needed`) VALUES
(1, '26-01-2023', 'Polio Drive', 'Antophill', 0, 'BMC', 40),
(3, '2023-01-07', 'Blood Donation Camp', 'Byculla', 0, 'KEM Hospital', 10),
(4, '3-02-2023', 'Beach Cleanup', 'Mahim', 0, 'Beach Please', 40),
(6, '2023-01-24', 'Blood Donation Camp', 'Churchgate', 1, 'Tata Hospital', 35),
(7, '2022-12-30', 'Blood Donation Camp', 'Andheri', 1, 'KEM Hospital', 15),
(8, '13-02-2023', 'Crowd Controlling', 'Mahim', 0, 'Beach Please', 35),
(9, '16-02-2023', 'Blood Donation Camp', 'Ghatkopar', 1, 'Anviksha', 32),
(26, '2023-01-11', 'Blood Donation Camp', 'CSMT', 1, 'Anviksha', 25);

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `id` int(11) NOT NULL,
  `date` varchar(45) NOT NULL,
  `venue` varchar(45) NOT NULL,
  `organizer` varchar(45) NOT NULL,
  `ENDED` tinyint(1) NOT NULL DEFAULT 0,
  `totvols` int(11) NOT NULL,
  `totbd` int(11) NOT NULL,
  `totbnf` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`id`, `date`, `venue`, `organizer`, `ENDED`, `totvols`, `totbd`, `totbnf`) VALUES
(25, '2022-12-22', 'Dadar', 'Nair', 1, 30, 29, 87),
(26, '2023-01-11', 'CSMT', 'Anviksha', 1, 25, 2, 6),
(28, '2022-12-15', 'Mahim', 'KEM', 1, 30, 80, 240),
(29, '2022-12-18', 'Mahim', 'KEM', 1, 11, 10, 30);

-- --------------------------------------------------------

--
-- Table structure for table `upload_flyer`
--

CREATE TABLE `upload_flyer` (
  `id` varchar(5) NOT NULL,
  `CampName` varchar(45) NOT NULL,
  `myFlyer` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `upload_flyer`
--

INSERT INTO `upload_flyer` (`id`, `CampName`, `myFlyer`) VALUES
('0', 'none', 0x2f7374617469632f6d656469612f612e30613434303666333133376630663861356664322e6a7067),
('1', 'Dadar', 0x2f7374617469632f6d656469612f612e30613434303666333133376630663861356664322e6a7067),
('2', 'Byculla', 0x2f7374617469632f6d656469612f612e63623936343865346361653232383965323365372e6a7067),
('3', 'Dadar', 0x2f7374617469632f6d656469612f612e63623936343865346361653232383965323365372e6a7067);

-- --------------------------------------------------------

--
-- Table structure for table `volunteersregistered`
--

CREATE TABLE `volunteersregistered` (
  `id` int(30) NOT NULL,
  `name` text NOT NULL,
  `academicYear` text NOT NULL,
  `yearInNSS` varchar(50) NOT NULL,
  `department` text NOT NULL,
  `campRegisteredId` int(255) DEFAULT NULL,
  `rollNo` varchar(30) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `volunteersregistered`
--

INSERT INTO `volunteersregistered` (`id`, `name`, `academicYear`, `yearInNSS`, `department`, `campRegisteredId`, `rollNo`, `status`, `createdAt`) VALUES
(1, 'SABIR', 'TY', 'Second Year', 'BSC.IT', 5, '20302A0035', 1, '2023-02-05 00:57:57'),
(9, 'SHAIKH', 'TY', 'SECOND', 'BSC.IT', 3, '20302A0037', 1, '2023-02-05 16:16:03'),
(36, 'SHAIKH', 'TY', 'SECOND', 'BSC.IT', 3, '20302A0036', 0, '2023-02-05 16:22:28'),
(62, 'sabir', 'TY', 'Second Year', 'SAD', 3, '20302A0039', 0, '2023-02-05 16:36:06'),
(64, 'sabir', 'TY', 'Second Year', 'SAD', 3, '20302A0040', 0, '2023-02-05 16:37:28'),
(68, 'SABIR', 'TY', 'Second Year', 'BSC', 3, '20302A0030', 0, '2023-02-06 10:49:53'),
(71, 'SABIR', 'TY', 'Second Year', 'BSC.IT', 5, '20302A0048', 0, '2023-02-06 10:53:46'),
(73, 'SABIR', 'TY', 'Second Year', 'BSC.IT', 3, '20302A0089', 0, '2023-02-06 13:21:14');

-- --------------------------------------------------------

--
-- Table structure for table `volunteers_data`
--

CREATE TABLE `volunteers_data` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `department` varchar(45) NOT NULL,
  `acad_year` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `volunteers_data`
--

INSERT INTO `volunteers_data` (`id`, `first_name`, `last_name`, `roll_no`, `department`, `acad_year`) VALUES
(1, 'Gaurav', 'Jain', '20302A0019', 'BScIT', 'TY'),
(2, 'Tanish', 'Kolhe', '20302A0039', 'BMM', 'SY'),
(3, 'Ankit', 'Mushraf', '20302B0019', 'BAF', 'FY'),
(4, 'Gaurav', 'Jain', '20302A0019', 'BScIT', 'TY'),
(5, 'Girish', 'Mirashi', '20302D0039', 'BMM', 'TY'),
(6, 'Tanaya', 'Johar', '20302E0019', 'BAF', 'FY'),
(7, 'Gauri', 'Khatam', '20302A0009', 'BScIT', 'TY');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `upload_flyer`
--
ALTER TABLE `upload_flyer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `volunteersregistered`
--
ALTER TABLE `volunteersregistered`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `rollNo` (`rollNo`);

--
-- Indexes for table `volunteers_data`
--
ALTER TABLE `volunteers_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `volunteersregistered`
--
ALTER TABLE `volunteersregistered`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
