<?php
//header("Location: login.php"); 
$fname = $_POST['fname'];
$pass = $_POST['pass'];
$cpass = $_POST['cpass'];
$email = $_POST['email'];
$contact = $_POST['contact'];
$gender = $_POST['gender'];
$lname = $_POST['lname'];
// echo $contact;
$conn = mysqli_connect('localhost', 'root', '', 'shopically');
$hash = password_hash($cpass, PASSWORD_DEFAULT);
$sql = "INSERT INTO user_data(fname,lname,email,pass,contact,gender) VALUES('$fname','$lname','$email','$hash','$contact','$gender')";
if (mysqli_query($conn, $sql)) {
    echo "Succesfully created an account";
    echo $pass;
} else {
    echo "connection error!!" . mysqli_error($conn);
}
