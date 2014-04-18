<?php
	$DBH = new PDO("mysql:hsot=localhost;dbname=hw4", 'root', '');
	$artTitle = $_GET['article'];//some DB pull
	$title = str_replace('-', ' ',$artTitle);
	$stmt = $DBH->prepare("SELECT * FROM blog WHERE title = :title");
	$stmt->bindValue(':title', $title, PDO::PARAM_STR);
	$stmt->execute();
	$article = null;
	$articles = $stmt -> fetchAll(PDO::FETCH_ASSOC);
	foreach($articles as $articlex) {
		$title = $articlex['title'];
		$article = $articlex;
	}
	
	include('header.php');
?>	
<h3>
	<?php echo $title ?>
</h3>
<div>
	<img class="articleImage" src=<?php echo $article['image'];?> />

	<p>
		<?php echo $article['blog'] ?>
	</p>

</div>
<div id="blog-comments">
	<h3>Comments</h3>
</div>
<form action="" method="post">
	<fieldset>
		<legend>Add comment to article</legend>
		<table>
			<tr>
				<td>Email <input id="commentEmail" name="email box" type="email" /></td>
				<tr>
					<td>Comment</td>
				</tr>
				<td>
				<textarea id="commentPost" name="Comment Box" rows="6" cols="40">Add Comment Here!</textarea>
			</td>
			<tr>
				<td><button type="submit" class="button" onclick="addComment(); return false;">Add Comment</button></td>
			</tr>
		</table>
	</fieldset>
</form>
<?php include('footer.php'); ?>