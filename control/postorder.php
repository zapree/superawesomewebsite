<?php
	$DBH = new PDO("mysql:host=localhost;dbname=hw4", 'root', '');
	$name = $_POST['theName'];
/*	$address = $_POST['theAddress'];
	$city = $_POST['theCity'];
	$state = $_POST['theState'];
	$email = $_POST['theEmail'];
	$phone = $_POST['thePhone'];
	$shipping = $_POST['theShipping'];
	$stmt = $DBH->prepare("INSERT INTO order (name, address, city, state, email, phone, shipping) VALUES (:name, :address, :city, :state, :email, :phone, :shipping)");
*/	$stmt = $DBH->prepare("INSERT INTO order (name) VALUES (:name)");
	$stmt->bindValue(':name', $name, PDO::PARAM_INT);
/*	$stmt->bindValue(':address', $address, PDO::PARAM_STR);
	$stmt->bindValue(':city', $city, PDO::PARAM_STR);
	$stmt->bindValue(':state', $state, PDO::PARAM_STR);
	$stmt->bindValue(':email', $email, PDO::PARAM_STR);
	$stmt->bindValue(':phone', $phone, PDO::PARAM_STR);
	$stmt->bindValue(':shipping', $shipping, PDO::PARAM_STR);*/
	$stmt->execute();
	
/*	$addedID = $DBH->lastInsertId();
	if($addedID) { echo "[{ \"status\" : \"good\" }]";}
	else {
		echo "[{ \"status\" : \"bad\" }]";
	}*/
?>