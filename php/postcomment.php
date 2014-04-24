$DBH = new PDO("mysql:host=localhost;dbname=hw4", 'root', '');
$blogID = $_POST['blogid'];
$comment = $_POST['comment'];
$email = $_POST['email'];
$stmt = $DBH->prepare("INSERT INTO blog_comment (id, blog_id, comment, post_date, email) VALUES (:blogID, :comment, NOW(), :email)");
$stmt->bindValue(':blogID', $blogID, PDO::PARAM_INT);
$stmt->bindValue(':comment', $comment, PDO::PARAM_STR);
$stmt->bindValue(':email', $email, PDO::PARAM_STR);
$stmt->execute();

$addedID = $DBH->lastInsertId();
if($addedID) { echo 'comment added<br />';}
[{ "status" : "good" }]