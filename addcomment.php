<?php include('header.php'); ?>
		<h3>Add Comment</h3>
		<form action="sale.php" method="post">
			<fieldset>
				<legend>Add comment to article</legend>
				<table>
					<tr>
						<td>Email <input name="email box" type="email" /></td>
						<tr>
							<td>Comment</td>
						</tr>
						<td>
						<textarea name="Comment Box" rows="6" cols="40">Add Comment Here!</textarea>
					</td>
					<tr>
						<td><input class="button" type="submit" value="Add Comment" /></td>
					</tr>
				</table>
			</fieldset>
		</form>
<?php include('footer.php'); ?>