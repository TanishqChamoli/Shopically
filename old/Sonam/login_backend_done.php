<?php
    $pass = $_POST['pass'];
    $email = $_POST['email'];
    $conn = new mysqli('localhost','root','','shopically');
    $sql = "SELECT * FROM user_data WHERE email='$email'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    // echo $row['pass']
    if(empty($row)){
        echo "No User Found !!";
        exit();
    }
    $hash = $row['pass'];
        if(password_verify($pass,$hash)){
            echo "User Found !!";
        }
        else{
            echo "OOPS !! You need to signup first";
        }


?>