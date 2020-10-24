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
    $pdo = new PDO($dsn, $user, $pass, $options);
    $sid = $_POST['id'];

    $sql = "SELECT `id`, `product_id`, `shop_id`, `product_name`, `brand`, `category`, `price`, `tag`, `colour`, `size`, `material`, `product_image`, `product_description`, `upload_date` FROM `products` WHERE `id`=?;";
    $res = $pdo->prepare($sql);
    $res->execute([$sid]);
    $ans = $res->fetchAll(PDO::FETCH_OBJ);

    echo json_encode($ans);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
