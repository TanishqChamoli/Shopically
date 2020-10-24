<?php
$host = '127.0.0.1';
$db   = 'shopically';
$user = 'root';
$pass = '';

$dsn = "mysql:host=$host;dbname=$db";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
try {
    $myData = array();
    $myData['products'] = [];
    $myData['shop_info'] = [];
    $pdo = new PDO($dsn, $user, $pass, $options);
    $sid = $_POST['id'];
    
    $sql = "SELECT id, product_name, category, price, product_image FROM products WHERE shop_id= ?;";
    $res = $pdo->prepare($sql);
    $res->execute([$sid]);
    $ans = $res->fetchAll(PDO::FETCH_OBJ);
    $myData["products"] = $ans;

    $sql = "SELECT `shop_name`, `shop_location`, `shop_image`, `email_id`, `owner_name`, `telephone`, `mobile` FROM `shop` WHERE `id`= ?;";
    $res = $pdo->prepare($sql);
    $res->execute([$sid]);
    $ans = $res->fetchAll(PDO::FETCH_OBJ);
    $myData["shop_info"] = $ans;
    
    echo json_encode($myData);
    
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
