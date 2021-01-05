<?php
$pass = $_POST['pass'];
$email = $_POST['email'];
$conn = mysqli_connect('localhost', 'tanishq', 'tanishq', 'shopically');
$sql = "SELECT * FROM user WHERE email = '$email'";
$result = mysqli_query($conn, $sql);
$ans = mysqli_fetch_all($result, MYSQLI_ASSOC);
if (empty($ans)) {
    echo "$email";
    exit();
}
$hashed_password = $ans[0]['password'];
if (!empty($hashed_password)) {
    $re = password_verify($pass, $hashed_password);
    if ($re) {
        session_start();
        $_SESSION['id'] = $ans[0]['user_id'];
        echo $_SESSION['id'];
        // redirect wala
        // cart page
    } else {
        echo "FAIL";
        exit();
    }
}
