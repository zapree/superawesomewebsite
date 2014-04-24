<?php
	$DBH = new PDO("mysql:hsot=localhost;dbname=hw4", 'root', '');
	$artTitle = $_GET['article'];
	$cleanTitle = filter_var($artTitle, FILTER_SANITIZE_STRING);
	$cleanTitle = htmlentities($cleanTitle);
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
<script>
	var blog_id = <?php echo $article['id']; ?>;
</script>

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
	<?php 
		$stmt = $DBH->prepare("SELECT * FROM blog_comment WHERE blog_id = :id");
		$stmt->bindValue(':id', $article['id'], PDO::PARAM_STR);
		$stmt->execute();
		$comments = $stmt->fetchAll(PDO::FETCH_ASSOC);
		
		foreach($comments as $comment) {
			$user = split("@", $comment['email']);
			echo '<div class="comment"><div class="commentUser">' . $user[0];
			echo '</div><div class="commentDate">' . $comment['post_date'];
			echo '</div><div class="commentPost">' . $comment['comment'] . '</div></div>';
		}
	?>	
</div>

<form id="commentForm">
	<fieldset>
		<legend>Add Comment to Article</legend>
		<label for="email">Email</label>
		<input name="email" type="email" id="email" /><br />
		<label for="comment">Comment</label><br />
		<textarea id="commentPost" name="comment" rows="6" cols="40"></textarea><br />
		<input type="submit" class="button" value="Add Comment" onclick="return addCommentForm();"/>
	</fieldset>
</form>

<?php include('footer.php'); ?>