<?php $title = "Product Title from DB"//some DB call ?>
<?php include('header.php'); 

if (isset($_GET['product'])) {
	$productName = $_GET['product'];

}


$cleanProduct = filter_var($productName, FILTER_SANITIZE_STRING);
$cleanProduct = htmlentities($cleanProduct);

$DBH = new PDO("mysql:host=localhost;dbname=hw4", 'root', '');
$stmt = $DBH->prepare("SELECT * FROM product WHERE id = $cleanProduct");
$stmt->bindValue(':atitle', $cleanProduct, PDO::PARAM_STR);
$stmt->execute(); 
$product_html = $stmt -> fetch();
?>



<h3>
	You Heard Right, <?php echo $product_html['name'] ?>
</h3>
<div class="yacht_and_cart">
	<img id="product_yacht" alt ="<?php echo $product_html['name'] ?>" src="<?php echo $product_html['image'] ?>"/>
	<form id="addtocart" action="cart.php" method="get">
		<fieldset>
			<legend id="money">Add to Cart</legend>
			<script>
				var money = <?php echo $product_html['price'] ?>;
				money = money.toString().replace( /(\d)(?=(\d{3})+$)/g, "$1,");
				console.log($(this).parent());
				$("<h3>$"+money+".00</h3>").insertAfter($("#money"));
			</script>
			
			<input type="text" name="productquantity" value="1" id="productquantity"/>
			<input type="submit"/>
		</fieldset>
	</form>
</div>
<?php 

echo $product_html['description'];

include('footer.php'); ?>
