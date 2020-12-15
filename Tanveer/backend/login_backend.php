<?php
session_start();
require_once("dbconnection.php");
$pass = $_POST['pass'];
$email = $_POST['email'];
$sql = "SELECT * FROM user WHERE email = ?";
$res = $pdo->prepare($sql);
$res->execute([$email]);
$ans = $res->fetchAll(PDO::FETCH_ASSOC);
if (empty($ans)) {
    echo "$email";
    exit();
}
$hashed_password = $ans[0]['password'];
if (!empty($hashed_password)) {
    $re = password_verify($pass, $hashed_password);
    if ($re) {
        $_SESSION['uid'] = $ans[0]['user_id'];
        echo $ans[0]['user_id'];
    } else {
        echo "FAIL";
        exit();
    }
}
//Checks
?> 