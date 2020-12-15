<?php
// include "login.php";
session_start();
// $id = $_SESSION["id"];
// echo $_SESSION['id'];
$id = 2;
$conn = mysqli_connect('localhost', 'tanishq', 'tanishq', 'shopically');
$sql = "SELECT * FROM user WHERE user_id=$id";

$result = mysqli_query($conn, $sql);
if ($result) {
    // echo "Succesfully added the product";
    $ans = mysqli_fetch_all($result, MYSQLI_ASSOC);
    if($ans){
        $pids = $ans[0]['cart'];
        $sql1 = "SELECT * FROM products WHERE id IN ($pids)";
        $result1 = mysqli_query($conn, $sql1);
        if ($result1) {
            // echo "Succesfully added the product";
            $ans1 = mysqli_fetch_all($result1, MYSQLI_ASSOC);
            echo json_encode($ans1);
        }
    } else {
        echo "connection error!!" . mysqli_error($conn);
    }
} else {
    echo "connection error!!" . mysqli_error($conn);
}
