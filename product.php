<?php $title = "Product Title from DB"//some DB call ?>
<?php include('header.php'); 

if (isset($_GET['product'])) {
	$productName = $_GET['product'];

}


$cleanProduct = filter_var($productName, FILTER_SANITIZE_STRING);
$cleanProduct = htmlentities($cleanProduct);

$DBH = new PDO("mysql:host=localhost;dbname=hw4", 'root', '');
$stmt = $DBH->prepare("SELECT description FROM product WHERE id = $cleanProduct");
$stmt->bindValue(':atitle', $cleanProduct, PDO::PARAM_STR);
$stmt->execute(); 
$product_html = $stmt -> fetch();
echo $product_html[0];

include('footer.php'); ?>
