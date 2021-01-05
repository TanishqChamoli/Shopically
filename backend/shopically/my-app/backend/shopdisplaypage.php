<?php
   require_once ("dbconnection.php");
    try {
        $myData = array();
        $myData['products'] = [];
        $myData['shop_info'] = [];
        $sid = $_POST['sid'];
        if(isset($_POST['q'])){
            $query = $_POST['q'];
            $tag="%".$query."%";
        }

        $sql = "SELECT `shop_name`, `shop_location`, `shop_image`, `email_id`, `owner_name`, `telephone`, `mobile` FROM `shop` WHERE `id`= ?;";
        $res = $pdo->prepare($sql);
        $res->execute([$sid]);
        $ans = $res->fetchAll(PDO::FETCH_OBJ);
        $myData["shop_info"] = $ans;

        if(!isset($_POST['q'])){
        $sql = "SELECT id, product_name, category, price, product_image FROM products WHERE shop_id= ?;";
        $res = $pdo->prepare($sql);
        $res->execute([$sid]);
        }
        else if(!isset($_POST['brands']) && !isset($_POST['colours'])) {
            $sql = "SELECT id, product_name, category, price, product_image FROM products WHERE shop_id= ? AND tag LIKE ?;";
            $res = $pdo->prepare($sql);
            $res->execute([$sid, $tag]);
        }
        else if(isset($_POST['brands']) && $_POST['brands']!="" && isset($_POST['colours']) && $_POST['colours'] != "") {
            $brands = $_POST['brands'];
            $brand=explode(",",$brands);
            $brands= implode(",", $brand);
            $colours = $_POST['colours'];
            $colour=explode(",",$colours);
            $colours= implode(",", $colour);
            $sql = "SELECT id, product_name, category, price, product_image FROM products WHERE shop_id= ? AND tag LIKE ? AND find_in_set(colour,?) AND find_in_set(brand,?);";
            $res = $pdo->prepare($sql);
            $res->execute([$sid, $tag, $colours, $brands]);
        }
        else if(isset($_POST['colours']) && $_POST['colours'] != "") {
            $colours = $_POST['colours'];
            $colour=explode(",",$colours);
            $colours= implode(",", $colour);
            $sql = "SELECT id, product_name, category, price, product_image FROM products WHERE shop_id= ? AND tag LIKE ? AND find_in_set(colour,?) ;";
            $res = $pdo->prepare($sql);
            $res->execute([$sid, $tag, $colours]);
        }
        else{
            $brands = $_POST['brands'];
            $brand=explode(",",$brands);
            $brands= implode(",", $brand);
            $sql = "SELECT id, product_name, category, price, product_image FROM products WHERE shop_id= ? AND tag LIKE ? AND find_in_set(brand,?) ;";
            $res = $pdo->prepare($sql);
            $res->execute([$sid, $tag, $brands]);           
        }

        $ans = $res->fetchAll(PDO::FETCH_OBJ);
        $myData["products"] = $ans;
        echo json_encode($myData);

    } catch (\PDOException $e) {
        throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }
?>
