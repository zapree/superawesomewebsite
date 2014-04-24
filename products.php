<?php 
	$title = "Super Awesome Products!";
	include('header.php');
	$stmt = $DBH->prepare("SELECT * FROM product");
	$stmt->execute();
	$products = $stmt -> fetchAll(PDO::FETCH_ASSOC);
?>
<h3>
	Come take a look at our super awesome products
</h3>
<div class="productHolder">
	<?php 
		foreach ($products as $product) {
			$prodID = str_replace(' ', '-',$product['id']);
			echo '<div class="products">';
			echo '<img src="' . $product['image'] . '" />';
			echo '<p class="productLink"><a href="product.php?product=' . $prodID .  '">' . $product['name'] . '</a></p></div>';
		}
	?>
</div>

<?php include('footer.php'); ?>
