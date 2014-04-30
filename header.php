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
        <script src="js/modernizr-2.6.2.min.js"></script>
		
		<!-- Date: 2014-01-29 -->
		<!-- AUTHORS Eugene Balaguer and Parker Mathewson -->
	</head>
	<script>
		function helper() {
			console.log("clicked");
		}
	</script>

	<body>
		<header>
			<div class="wrapper">
				<h1 class="rotate">
					<a class="banner" href="index.php"><img id="banner" alt="Super Awesome Banner" src="pictures/banner_SuperAwesomePicture.png" /></a>
				</h1>
				<nav>
	                <button class="nav-button" id="nav-button" onclick="helper();">Menu</button>
	                <div class="nav-wrapper" id="nav-wrapper">
	                	<li></li>
						<li>
							<a href="index.php"><span>Home</span></a>
						</li>
						<li>
							<a href="about.php"><span>About</span></a>
						</li>
						<li>
							<a href="blog.php"><span>Blog</span></a>
						</li>
						<li>
							<a href="cart.php"><span>Cart</span></a>
						</li>
                        <li>
							<a href="products.php"><span>Products</span></a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
		<script src="js/polyfills.js"></script>
		<script src="js/scripts.js"></script> 
	
		<script>
			rotateBanner(".rotate", "source.html");
		</script>