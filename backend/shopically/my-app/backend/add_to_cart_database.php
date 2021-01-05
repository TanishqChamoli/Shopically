<?php
session_start();
$id = $_SESSION['id'];
// $p_id = $_GET['p_id'];
$p_id = "2";
$conn = mysqli_connect('localhost', 'admin_dbuser', 'wQAbMZSMlO', 'admin_shopically');
$sql = "SELECT * FROM user WHERE user_id=$id";

$result = mysqli_query($conn, $sql);
if ($result) {
	// echo "Succesfully added the product";
	$ans = mysqli_fetch_all($result, MYSQLI_ASSOC);
	if ($ans[0])
		print_r($ans[0]);
	$c = $ans[0]['cart'];
	$new = $c . "," . $p_id;
	print($new);
	$sql1 = "UPDATE user SET cart ='$new' WHERE user_id=$id";
	$result1 = mysqli_query($conn, $sql1);
	print($sql1);
	if ($result1) {
		echo "Succesfully added the product";
		// $ans1 = mysqli_fetch_all($result1, MYSQLI_ASSOC);
		// print_r($ans1);
	} else {
		echo "connection error!!" . mysqli_error($conn);
	}
} else {
	echo "connection error!!" . mysqli_error($conn);
}
