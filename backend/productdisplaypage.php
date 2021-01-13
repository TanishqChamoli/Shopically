<?php
require_once("dbconnection.php");
try {
    $sid = $_POST['id'];

    $sql = "SELECT `id`, `product_id`, `shop_id`, `product_name`, `brand`, `category`, `price`, `tag`, `colour`, `size`, `material`, `product_image`, `product_description`, `upload_date` FROM `products` WHERE `id`=?;";
    $res = $pdo->prepare($sql);
    $res->execute([$sid]);
    $ans = $res->fetchAll(PDO::FETCH_OBJ);

    echo json_encode($ans);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
?>
