<?php
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $gender = $_POST['gender'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $shop_name = $_POST['shop_name'];
    $shop_address = $_POST['shop_address'];
    $shop_phone = $_POST['shop_phone'];
    $shop_type = $_POST['shop_type'];
    $shop_pincode = $_POST['shop_pincode'];

    $conn = new mysqli('localhost','root','','shopically');

    $sql = "INSERT INTO shop_data(fname,lname,gender,phone,email,shop_name,shop_address,shop_phone,shop_type,shop_pincode)VALUES('$fname','$lname','$gender','$phone','$email','$shop_name','$shop_address','$shop_phone','$shop_type','$shop_pincode')";
    // print_r ($sql);
    if($conn->query($sql)==TRUE){
        echo "REGISTERED !!";
    }
    else{
        echo "TRY AGAIN !!".$conn->error;
    }

?>