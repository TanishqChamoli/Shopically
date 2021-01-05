<?php
    require_once("dbconnection.php");
    session_start();
    $cartItems=$_POST["cartItems"];
    $sql = "SELECT id, product_name, category, price, product_image FROM products WHERE find_in_set(id,?);";
    $res = $pdo->prepare($sql);
    $res->execute([$cartItems]);
    $ans = $res->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($ans);
?>