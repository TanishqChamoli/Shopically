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
        /*$recvText = $_POST['text'];
        $sql = "INSERT INTO react_php (id,texts) VALUES(1,?)";
        $pdo->prepare($sql)->execute([$recvText]);*/
        $sql = "SELECT `product_id`, `product_name`, `product_brand`, `product_price`,`product_image` FROM `product` WHERE location='pun'";
        $res=$pdo->prepare($sql);
        $res->execute();
        $ans=$res->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($ans);
    } catch (\PDOException $e) {
        throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }
?>