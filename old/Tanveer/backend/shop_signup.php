<?php
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$gender = $_POST['gender'];
$phone = $_POST['phone'];
$shop_name = $_POST['shop_name'];
$shop_location = $_POST['shop_address'];
$city = $_POST['city'];
$state = $_POST['state'];
$shop_phone = $_POST['shop_phone'];
$mobile = $_POST['mobile'];
$shop_pincode = $_POST['shop_pincode'];
$name = $fname." ".$lname;
$email_id = $_POST['email'];
$conn = mysqli_connect('localhost', 'tanishq', 'tanishq', 'shopically');

$sql = "INSERT INTO shop(shop_name,shop_location,email_id,owner_name,city,state,pincode,telephone,mobile)
VALUES('$shop_name','$shop_location','$email_id','$name','$city','$state','$shop_pincode','$shop_phone','$mobile')";
if (mysqli_query($conn, $sql)) {
    echo "Succesfully added the shop";
} else {
    echo "connection error!!" . mysqli_error($conn);
}