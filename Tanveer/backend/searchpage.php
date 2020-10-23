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

        $tag="%".$query."%";

        if(!isset($_POST['brands']) && !isset($_POST['colours'])) {
            $sql = "SELECT p.id, p.product_name, p.category, p.price, p.product_image FROM products p join shop s on s.id=p.id WHERE s.shop_location=? AND p.tag LIKE ?;";
            $res = $pdo->prepare($sql);
            $res->execute([$loc, $tag]);
        }
        else if(isset($_POST['brands']) && $_POST['brands']!="" && isset($_POST['colours']) && $_POST['colours'] != "") {
            $brands = $_POST['brands'];
            $brand=explode(",",$brands);
            $brands= implode(",", $brand);
            $colours = $_POST['colours'];
            $colour=explode(",",$colours);
            $colours= implode(",", $colour);
            $sql = "SELECT p.id, p.product_name, p.category, p.price, p.product_image FROM products p join shop s on s.id=p.id WHERE s.shop_location=? AND p.tag LIKE ? AND find_in_set(p.colour,?) AND find_in_set(p.brand,?);";
            $res = $pdo->prepare($sql);
            $res->execute([$loc, $tag, $colours, $brands]);
        }
        else if(isset($_POST['colours']) && $_POST['colours'] != "") {
            $colours = $_POST['colours'];
            $colour=explode(",",$colours);
            $colours= implode(",", $colour);
            $sql = "SELECT p.id, p.product_name, p.category, p.price, p.product_image FROM products p join shop s on s.id=p.id WHERE s.shop_location=? AND p.tag LIKE ? AND find_in_set(p.colour,?) ;";
            $res = $pdo->prepare($sql);
            $res->execute([$loc, $tag, $colours]);
        }
        else{
            $brands = $_POST['brands'];
            $brand=explode(",",$brands);
            $brands= implode(",", $brand);
            $sql = "SELECT p.id, p.product_name, p.category, p.price, p.product_image FROM products p join shop s on s.id=p.id WHERE s.shop_location=? AND p.tag LIKE ? AND find_in_set(p.brand,?) ;";
            $res = $pdo->prepare($sql);
            $res->execute([$loc, $tag, $brands]);           
        }

        $ans=$res->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($ans);

    } catch (\PDOException $e) {
        throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }
