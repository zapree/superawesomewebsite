-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 24, 2014 at 08:43 AM
-- Server version: 5.6.16
-- PHP Version: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hw4`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE IF NOT EXISTS `blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(64) NOT NULL,
  `blog` varchar(2056) NOT NULL,
  `post_date` date NOT NULL,
  `image` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `title`, `blog`, `post_date`, `image`) VALUES
(1, 'My love of Penguins has multiplied with the purchase of Them!', 'Recently I purchased the super awesome penguin set expecting just a set of normal penguins for the Price. Man was I blown away when those penguins were everything you said they''d be. One even had a genuine rocket launcher! I might have blown off a foot in the fun, but at least now I get to roleplay that I''m a pirate. Yaaaarrrr have to try these freakin penguins out.</p>\r\n\r\n<p>With full disclosure one of the penguins is kinda lame, in my batch his name was jimmy. Jimmy just didn''t have bobby''s flare. I mean part of it is that bobby was the rocket launcher shooter, and Jimmy was the one that only got to load it, so I don''t really blame him. Poor Jimmy, always getting the slapstick soot face from bobby getting it too close to him. Tragic really.</p>\r\n\r\n<p>Towards the end we graduated from small rocket launchers to a big truck launched one. anyways I''m bored of bullshitting so here''s some more lyrics- santaria-I don''t practice Santeria I ain''t got no crystal ball Well, I had a million dollars but I, I''d spend it all. If I could find that Heina, and that Sancho that she''s found. Well I''d pop a cap in Sancho I''d slap her down. What I really wanna know, mah baby, mmmm... What I really wanna say I can''t define. Well it''s love, that I need. Ohh...', '2014-04-17', 'pictures/missilelauncher.jpg'),
(2, 'This Super Awesome Shirt is the most comfortable thing ever!', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>\r\n\r\n<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\r\n\r\n<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>\r\n\r\n<p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tatio', '2014-04-17', 'pictures/Superawesometee.jpg'),
(3, 'This Super Island Yacht is like my own private kingdom!', 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\r\n\r\n<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>\r\n\r\n<p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\r\n\r\n<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p>\r\n\r\n<p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea se', '2014-04-17', 'pictures/goddamnislandyacht.jpg'),
(4, 'My new super awesome car has all them females crawlin''.', 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>\r\n\r\n<p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus', '2014-04-17', 'pictures/superawesomecar.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `blog_comment`
--

CREATE TABLE IF NOT EXISTS `blog_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `blog_id` int(11) NOT NULL,
  `comment` varchar(1024) NOT NULL,
  `post_date` date NOT NULL,
  `email` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=25 ;

--
-- Dumping data for table `blog_comment`
--

INSERT INTO `blog_comment` (`id`, `blog_id`, `comment`, `post_date`, `email`) VALUES
(1, 1, 'I love this product!', '2014-04-17', 'bob@email.arizona.edu'),
(4, 1, 'This product literally made peoples heads explode!', '2014-04-22', 'parkerm34@email.arizona.edu'),
(5, 3, 'THIS. ISLAND. YACHT.', '2014-04-22', 'parkerm34@hotmail.com'),
(24, 3, 'I love this, its like im a billionaire!', '2014-04-23', 'parkermathewson05@hotmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE IF NOT EXISTS `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `address` varchar(64) NOT NULL,
  `city` varchar(64) NOT NULL,
  `state` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `phone` varchar(64) NOT NULL,
  `shipping` varchar(64) NOT NULL,
  `order_time` datetime NOT NULL,
  `completed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `order_product`
--

CREATE TABLE IF NOT EXISTS `order_product` (
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `description` varchar(2056) NOT NULL,
  `image` varchar(64) NOT NULL,
  `price` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `image`, `price`) VALUES
(1, 'Super Awesome Yach Island', '<p>\r\n	Are you a mega rich investor with not enough \r\n	frivilous things to sink your money into?  Well buy yourself a yacht Island.\r\n	They are the pinnacle of everyone knowing you have a ton of gold to your name.\r\n	Buy one of these babies and you''re guaranteed to get a harem of girls, and you can fit\r\n	like 50 people on this thing.  Imagine 49 smokin hot naked girls at your beck and call, and hey,\r\n	it''s international waters.\r\n</p>	\r\n<p>\r\n	Since I don''t really have much more to say about this here are the lyrics to pink floyd''s\r\n	wish you were here. So, so you think you can tell Heaven from Hell, blue skies from pain.\r\n	Can you tell a green field from a cold steel rail?\r\n	A smile from a veil?\r\n	Do you think you can tell?\r\n</p>	\r\n<p>\r\n	Did they get you to trade your heroes for ghosts?\r\n	Hot ashes for trees?\r\n	Hot air for a cool breeze?\r\n	Cold comfort for change?\r\n	Did you exchange a walk on part in the war for a lead role in a cage?\r\n	\r\n	How I wish, how I wish you were here.\r\n	We''re just two lost souls swimming in a fish bowl, year after year,\r\n	Running over the same old ground.\r\n	What have we found?\r\n	The same old fears.\r\n	Wish you were here.\r\n</p>', 'pictures/goddamnislandyacht.jpg', 1000000000),
(2, 'Super Awesome Shirt', '<p>\r\n	Are you a mega rich investor with not enough \r\n	frivilous things to sink your money into?  Well buy yourself a yacht Island.\r\n	They are the pinnacle of everyone knowing you have a ton of gold to your name.\r\n	Buy one of these babies and you''re guaranteed to get a harem of girls, and you can fit\r\n	like 50 people on this thing.  Imagine 49 smokin hot naked girls at your beck and call, and hey,\r\n	it''s international waters.\r\n</p>	\r\n<p>\r\n	Since I don''t really have much more to say about this here are the lyrics to pink floyd''s\r\n	wish you were here. So, so you think you can tell Heaven from Hell, blue skies from pain.\r\n	Can you tell a green field from a cold steel rail?\r\n	A smile from a veil?\r\n	Do you think you can tell?\r\n</p>	\r\n<p>\r\n	Did they get you to trade your heroes for ghosts?\r\n	Hot ashes for trees?\r\n	Hot air for a cool breeze?\r\n	Cold comfort for change?\r\n	Did you exchange a walk on part in the war for a lead role in a cage?\r\n	\r\n	How I wish, how I wish you were here.\r\n	We''re just two lost souls swimming in a fish bowl, year after year,\r\n	Running over the same old ground.\r\n	What have we found?\r\n	The same old fears.\r\n	Wish you were here.\r\n</p>', 'pictures/superawesometee.jpg', 20),
(3, 'Super Awesome Car', '<p>\r\n	Are you a mega rich investor with not enough \r\n	frivilous things to sink your money into?  Well buy yourself a yacht Island.\r\n	They are the pinnacle of everyone knowing you have a ton of gold to your name.\r\n	Buy one of these babies and you''re guaranteed to get a harem of girls, and you can fit\r\n	like 50 people on this thing.  Imagine 49 smokin hot naked girls at your beck and call, and hey,\r\n	it''s international waters.\r\n</p>	\r\n<p>\r\n	Since I don''t really have much more to say about this here are the lyrics to pink floyd''s\r\n	wish you were here. So, so you think you can tell Heaven from Hell, blue skies from pain.\r\n	Can you tell a green field from a cold steel rail?\r\n	A smile from a veil?\r\n	Do you think you can tell?\r\n</p>	\r\n<p>\r\n	Did they get you to trade your heroes for ghosts?\r\n	Hot ashes for trees?\r\n	Hot air for a cool breeze?\r\n	Cold comfort for change?\r\n	Did you exchange a walk on part in the war for a lead role in a cage?\r\n	\r\n	How I wish, how I wish you were here.\r\n	We''re just two lost souls swimming in a fish bowl, year after year,\r\n	Running over the same old ground.\r\n	What have we found?\r\n	The same old fears.\r\n	Wish you were here.\r\n</p>', 'pictures/superawesomecar.jpg', 300000),
(4, 'Super Awesome Penguins', '<p>\r\n	Are you a mega rich investor with not enough \r\n	frivilous things to sink your money into?  Well buy yourself a yacht Island.\r\n	They are the pinnacle of everyone knowing you have a ton of gold to your name.\r\n	Buy one of these babies and you''re guaranteed to get a harem of girls, and you can fit\r\n	like 50 people on this thing.  Imagine 49 smokin hot naked girls at your beck and call, and hey,\r\n	it''s international waters.\r\n</p>	\r\n<p>\r\n	Since I don''t really have much more to say about this here are the lyrics to pink floyd''s\r\n	wish you were here. So, so you think you can tell Heaven from Hell, blue skies from pain.\r\n	Can you tell a green field from a cold steel rail?\r\n	A smile from a veil?\r\n	Do you think you can tell?\r\n</p>	\r\n<p>\r\n	Did they get you to trade your heroes for ghosts?\r\n	Hot ashes for trees?\r\n	Hot air for a cool breeze?\r\n	Cold comfort for change?\r\n	Did you exchange a walk on part in the war for a lead role in a cage?\r\n	\r\n	How I wish, how I wish you were here.\r\n	We''re just two lost souls swimming in a fish bowl, year after year,\r\n	Running over the same old ground.\r\n	What have we found?\r\n	The same old fears.\r\n	Wish you were here.\r\n</p>', 'pictures/superawesomepenguins.jpg', 400000);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
