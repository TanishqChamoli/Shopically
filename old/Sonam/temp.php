<!-- <?php
    //header("Location: login.php");
    $username = $_POST['username'];
    $pass = $_POST['pass'];
    $email = $_POST['email'];

    if ($_SERVER['REQUEST_METHOD'] == 'POST'){
        $password = password_hash('$pass', PASSWORD_DEFAULT);
        $conn = new mysqli('localhost','root','','shopically');   
        if ($conn->connect_error)
        {
            echo "connection failed".$conn->connect_error ;
        }
    
        else
        {
            echo "DATABASE connected successfully</br><br>";
        }
        // $re = password_verify($pass, $hashed_password);
        // $sql2 = "INSERT INTO login_table(pass,email,username)VALUES('$password','$email','$username')";
        $sql = "SELECT * FROM signup_table WHERE username='$username' AND email='$email'";
        // $sql = "SELECT * FROM signup_table WHERE username='$username' AND email='$email'";
        $result = $conn->query($sql);
        // print $result;
        // $sql2 = "SELECT pass FROM signup_table WHERE username='$username' AND email='$email'";
        // $pass2 = $conn->query($sql2);

        print $pass;
        print $password;
        if($pass == $password)
        {
            echo "hey";
        }
        // if(password_verify($pass,$password))
        // {
        //     echo "hey";
        // }
        // if($result->num_rows>0)
        // {
        //         echo "SUCCESSFULL LOGIN";.php
        
        // }
        // else{
        //     echo "Try again";
        //     //header("Location: login.php");
        // }
    }
?> -->