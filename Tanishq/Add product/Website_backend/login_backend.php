<?php
$pass = $_POST['pass'];
$email = $_POST['email'];
$conn = mysqli_connect('localhost', 'tanishq', 'tanishq', 'shopically');
$sql = "SELECT * FROM user_data WHERE email = '$email'";
$result = mysqli_query($conn, $sql);
$ans = mysqli_fetch_all($result, MYSQLI_ASSOC);
if (empty($ans)) {
    echo "No user found";
    exit();
}
$hashed_password = $ans[0]['pass'];
if (!empty($hashed_password)) {
    $re = password_verify($pass, $hashed_password);
    if ($re) {
        echo "USer found";
    } else {
        echo "FAIL";
        exit();
    }
}
