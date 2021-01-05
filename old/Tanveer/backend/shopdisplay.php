<?php
// echo "<script>document.write(localStorage.getItem('pid'));</script>";
// $id = $_GET['s_id'];

// echo "<script>document.write(localStorage.getItem('pid'));</script>";
$conn = mysqli_connect('localhost', 'tanishq', 'tanishq', 'shopically');
$sql = "SELECT * FROM shop_data WHERE s_id=$id";

$result = mysqli_query($conn,$sql);


if ($result) {
    // echo "Succesfully added the product";
    $ans = mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode($ans);
} else {
    echo "connection error!!" . mysqli_error($conn);
}
