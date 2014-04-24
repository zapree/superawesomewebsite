<?php
	$error = FALSE;
	if( !isset($_POST['comment']) || !isset($_POST['email']) || empty($_POST['comment']) || empty($_POST['email'])) {
		$error = TRUE;
	}

	if( $error == FALSE )
	{
		$DBH = new PDO("mysql:host=localhost;dbname=hw4", 'root', '');
		$blogID = $_POST['blogid'];
		$comment = $_POST['comment'];
		$email = $_POST['email'];
		$email = filter_var($email, FILTER_SANITIZE_EMAIL);
		$email = filter_var($email, FILTER_VALIDATE_EMAIL);
		$comment = filter_var($comment, FILTER_SANITIZE_STRING);
		$comment = htmlentities($comment);
		$stmt = $DBH->prepare("INSERT INTO blog_comment (blog_id, comment, post_date, email) VALUES (:blogID, :comment, NOW(), :email)");
		$stmt->bindValue(':blogID', $blogID, PDO::PARAM_INT);
		$stmt->bindValue(':comment', $comment, PDO::PARAM_STR);
		$stmt->bindValue(':email', $email, PDO::PARAM_STR);
		$stmt->execute();
		
		$addedID = $DBH->lastInsertId();
		if($addedID) { echo "[{ \"status\" : \"good\" }]";}
		else {
			echo "[{ \"status\" : \"bad\" }]";
		}
	}
	else {
		echo "[{ \"status\" : \"bad\" }]";		
	}
?>