<?php
$fname = $_POST['fname'];
$pass = $_POST['pass'];
$cpass = $_POST['cpass'];
$email = $_POST['email'];
$mobile = $_POST['contact'];
$gender = $_POST['gender'];
$lname = $_POST['lname'];
$address = $_POST['address'];
$user_name  = $fname." ".$lname;
$pincode = $_POST['pincode'];
$joining_date = date("Y-m-d");
$conn = mysqli_connect('localhost', 'root', '', 'shopically');
$hash = password_hash($cpass, PASSWORD_DEFAULT);
$sql = "INSERT INTO user(user_name,address,pincode,email,password,mobile,gender,joining_date) 
VALUES('$user_name','$address','$pincode','$email','$hash','$mobile','$gender','$joining_date')";
if (mysqli_query($conn, $sql)) {
    echo "Succesfully created an account";
} else {
    echo "connection error!!" . mysqli_error($conn);
}