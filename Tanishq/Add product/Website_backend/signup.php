<!DOCTYPE html>
<html>
<head>
<body>
<form action="signup_backend.php" method="post">
    <input type="text" name="user" placeholder="Username"></br></br>
    <input type="password" name="pass" placeholder="Password"></br></br>
    <input type="password" name="cpass" placeholder="Confirm Password"></br></br>
    <input type="email" name="email" placeholder="E-mail"></br></br>
    <input type="tel" name="phone" placeholder="Phone no."></br></br>
    Gender : 
    Male<input type="radio" name="gender" value="Male">
    Female<input type="radio" name="gender" value="Female"></br></br>
    <input type="submit" name="submit">
    <a href="login.php">Go Back to login</a>
</form>
</body>
</head>
</html>