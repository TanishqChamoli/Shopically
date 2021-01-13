<?php
require_once("dbconnection.php");
    try {
        $myData = array();
        $myData['first'] = [];
        $myData['second'] = [];
        /*$recvText = $_POST['text'];
        $sql = "INSERT INTO react_php (id,texts) VALUES(1,?)";
        $pdo->prepare($sql)->execute([$recvText]);*/
        $sql = "SELECT `id`,`shop_name`, `shop_image`, `shop_location` FROM `shop`";
        $res=$pdo->prepare($sql);
        $res->execute();
        $ans=$res->fetchAll(PDO::FETCH_OBJ);

        echo json_encode($ans);
    } catch (\PDOException $e) {
        throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }
?>
