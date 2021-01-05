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
        $loc = $_POST['loc'];
        $searchby = $_POST['sby'];
        $query = $_POST['q'];
        $sql = "SELECT `product_id`, `product_name`, `product_brand`, `product_price`,`product_image` FROM `product` WHERE location=?";
        $res=$pdo->prepare($sql);
        $res->execute([$loc]);
        $ans=$res->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($ans);

    } catch (\PDOException $e) {
        throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }
