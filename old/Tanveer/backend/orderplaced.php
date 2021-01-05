<?php
    require_once("dbconnection.php");
    session_start();
    $cartItems=explode(",",$_POST["productsInCart"]);
    $user_id=$_POST["uid"];

    $sql = "SELECT `user_name`, `address`, `mobile` FROM `user` WHERE `user_id`=?";
    $res = $pdo->prepare($sql);
    $res->execute([$user_id]);
    $user_details = $res->fetch(PDO::FETCH_ASSOC);
try{
    $addOrdersql = "INSERT INTO `orders`(`product_id`, `user_id`, `name`, `address`, `phone`, `delivered`, `order_date`) VALUES (?,?,?,?,?,?,?)";
    $res = $pdo->prepare($addOrdersql);
    foreach($cartItems as $x)
        $res->execute([$x, $user_id, $user_details["user_name"], $user_details["address"], $user_details["mobile"], "no", date("Y-m-d")]);
}
catch(\PDOException $e){
    echo "FAIL";
}
?>