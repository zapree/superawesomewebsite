<?php
$SERVER = "http://www.justingiboney.com/cs337/classchat/control/addtochat.php";	
$PORT = 80;

$options = array(
    	'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($_POST),
    ),
);
$context = stream_context_create($options);
$result = file_get_contents($SERVER, false, $context);

echo $result;
?>