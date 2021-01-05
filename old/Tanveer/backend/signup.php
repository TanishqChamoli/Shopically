<?php
    require_once("dbconnection.php");
    $fname = $_POST['fname'];
    $pass = $_POST['pass'];
    $cpass = $_POST['cpass'];
    //Chech for password confirm in html not here
    $email = $_POST['email'];
    $mobile = $_POST['contact'];
    $gender = $_POST['gender'];
    $lname = $_POST['lname'];
    $address = $_POST['address'];
    $user_name  = $fname." ".$lname;
    $pincode = $_POST['pincode'];
    $joining_date = date("Y-m-d");
    //Check for same user by email
    $hash = password_hash($cpass, PASSWORD_DEFAULT);
    $sql = "INSERT INTO `user`(`user_name`, `address`, `pincode`, `email`, `password`, `mobile`, `gender`, `joining_date`) VALUES(?,?,?,?,?,?,?,?)";
    $res = $pdo->prepare($sql);
    $res->execute([$user_name, $address, $pincode, $email, $hash, $mobile, $gender, $joining_date]);
?>