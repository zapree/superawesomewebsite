<?php
	$DBH = new PDO("mysql:host=localhost;dbname=hw4", 'root', '');
?>

<html>
	<head>
		<meta charset="utf-8" />
		<title><?php echo $title; ?></title>
		<meta name="author" content="Eugene Balaguer, Parker Mathewson" />
		<meta name="description" content="Our super awesome csc337 project" />
		<link href="css/superawesomestyle.css" rel="stylesheet" type="text/css">
		<script src="js/jquery-2.1.0.min.js"></script>
		<script src="js/main_script.js"></script>
		
		<!-- Date: 2014-01-29 -->
		<!-- AUTHORS Eugene Balaguer and Parker Mathewson -->
	</head>

	<body>
		<header>
			<div>
			<h1 class="rotate">
				<a class="banner" href="index.php"><img id="banner" alt="Super Awesome Banner" src="pictures/banner_SuperAwesomePicture.png" /></a>
			</h1>
			<nav>
				<ul class="nav">
					<li>
						<a href="products.php">Products</a>
						<ul>
							<li class="productdrop"><a href="product.php?product=1">Super Awesome Yacht Island</a></li>
							<li class="productdrop"><a href="product.php?product=2">Super Awesome Shirt</a></li>
							<li class="productdrop"><a href="product.php?product=3">Super Awesome Penguins</a></li>
							<li class="productdrop"><a href="product.php?product=4">Super Awesome Car</a></li>
						</ul>
					</li>
		
					<li>
						<a href="blog.php">Blog</a>
					</li>
					<li>
						<a href="about.php">About</a>
					</li>
					<li>
						<a href="cart.php">Cart</a>
					</li>
				</ul>
			</nav>
			</div>
		</header>
	
		<script>
			rotateBanner(".rotate", "source.html");
		</script>