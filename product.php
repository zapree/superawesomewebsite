<?php $title = "Product Title from DB"//some DB call ?>
<?php include('header.php'); 

$productName = $_GET['product'];
$DBH = new PDO("mysql:host=localhost;dbname=hw4", 'root', '');
$stmt = $DBH->prepare("SELECT description FROM product WHERE id = $productName");
$stmt->execute(); 
$product_html = $stmt -> fetch();
echo $product_html[0];

include('footer.php'); ?>
