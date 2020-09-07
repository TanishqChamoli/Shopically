<?php
    $password = $_POST['pass'];
    $cpass = $_POST['cpass'];
    $user = $_POST['user'];
    $p = password_hash('$password', PASSWORD_DEFAULT);
    $c = password_hash('$cpass', PASSWORD_DEFAULT);
    if (empty($password) || empty($cpass) || empty($user)) {
        echo "you need to fill out the whole form!";
        exit();
    }   
    $conn = new mysqli('localhost','root','','shopically');    
    if ($conn->connect_error)
    {
        echo "connection failed".$conn->connect_error ;
    }
    else if($password == $cpass){
        $sql = "UPDATE signup_table SET pass='$p' WHERE username='$user'";
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
<!DOCTYPE html>
<html>
<head>
<body>
<a href="login.php">BACK TO LOGIN AGAIN</a>
</body>
</head>
</html>