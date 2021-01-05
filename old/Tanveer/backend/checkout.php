<?php
   require_once ("dbconnection.php");
    try {
        session_start();
        $user_id=$_POST["uid"];
        $sql = "SELECT `user_name`, `address`, `pincode`, `email`, `mobile` FROM `user` WHERE `user_id`=?";
        $res = $pdo->prepare($sql);
        $res->execute([$user_id]);
        $ans = $res->fetch(PDO::FETCH_ASSOC);
        echo json_encode($ans);
    } catch (\PDOException $e) {
        throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }
