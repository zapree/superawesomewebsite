<?php $title = "A Super Awesome Thankyou!" ?>
<?php include('header.php'); ?>
		<h2>Thank You!</h2>
		<p>
			<strong>Thanks for buying our super awesome stuff</strong>
		</p>
		<p>Please come again.</p>
<?php 
	if (isset($_SESSION['cart'])) { 			
		 
		
		$DBH = new PDO("mysql:host=localhost;dbname=hw4", 'root', '');
		$stmt = $DBH->prepare("UPDATE `order` SET completed = 1 WHERE id = :orderID;");
		$stmt->bindValue(':orderID', $_SESSION["order_id"], PDO::PARAM_INT);
		$stmt->execute();
		
	}
	session_destroy();
	
?>
<?php include('footer.php'); ?>