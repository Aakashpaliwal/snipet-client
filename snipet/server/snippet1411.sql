-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 14, 2018 at 09:46 AM
-- Server version: 5.1.53
-- PHP Version: 5.3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `snippet`
--

-- --------------------------------------------------------

--
-- Table structure for table `calc`
--

CREATE TABLE IF NOT EXISTS `calc` (
  `calc_id` int(11) NOT NULL AUTO_INCREMENT,
  `calc_name` varchar(10) NOT NULL,
  `calc_value` int(11) NOT NULL,
  PRIMARY KEY (`calc_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `calc`
--


-- --------------------------------------------------------

--
-- Table structure for table `table1`
--

CREATE TABLE IF NOT EXISTS `table1` (
  `table1_id` int(11) NOT NULL AUTO_INCREMENT,
  `a1` varchar(100) NOT NULL,
  `a2` varchar(100) DEFAULT NULL,
  `a3` varchar(100) DEFAULT NULL,
  `a4` varchar(100) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`table1_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `table1`
--

INSERT INTO `table1` (`table1_id`, `a1`, `a2`, `a3`, `a4`, `status`) VALUES
(1, 'ss', 'bb', NULL, NULL, 0),
(2, 'test', 'test', 'test', NULL, 0),
(3, 'test9', NULL, 'test9', NULL, 1),
(4, 'test', 'test', 'test', NULL, 0);
