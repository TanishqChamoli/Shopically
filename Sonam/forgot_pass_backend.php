<?php
    $password = $_POST['pass'];
    $cpass = $_POST['cpass'];
    // $fname = $_POST['fname'];
    $email = $_POST['email'];
    $p = password_hash('$password', PASSWORD_DEFAULT);
    $c = password_hash('$cpass', PASSWORD_DEFAULT);
    // if (empty($password) || empty($cpass) || empty($email)) {
    //     echo "you need to fill out the whole form!";
    //     exit();
    // }   
    $conn = new mysqli('localhost','root','','shopically');    
    if ($conn->connect_error)
    {
        echo "connection failed".$conn->connect_error ;
    }
    else if($password == $cpass){
        $sql = "UPDATE user_data SET pass='$p' WHERE email='$email'";
        // echo "hello";
        if($conn->query($sql)==TRUE)
        {
            echo "CHANGED THE PASSWORD !!";
        } 
        else{
            echo "TRY again";
        }
    }
    else{
        echo "Check your password again !!";
    }
        // echo "hey";
?>
