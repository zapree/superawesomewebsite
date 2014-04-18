<?php 
	$title = "Blog of Awesome";
	include('header.php');

	$stmt = $DBH->prepare("SELECT * FROM blog");
	$stmt->execute();
	$articles = $stmt -> fetchAll(PDO::FETCH_ASSOC);
?>	
<table id="blog_table">
	<?php 

		foreach ($articles as $article) {
			$artTitle = str_replace(' ', '-',$article['title']);
			echo '<tr><td>';
			echo '<img class="blogImage" src="' . $article['image'] . '" />';
			echo '</td><td><h3>' . $article['title'];
			echo '</h3><p>' . $article['post_date'] . '</p>';
			echo '<p><a href="article.php?article=' . $artTitle .  '">Click here to read more</a></p></td></tr>';
		}
	?>
</table>

<?php include('footer.php'); ?>
