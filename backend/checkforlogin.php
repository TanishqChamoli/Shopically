<?php
session_start();
   require_once ("dbconnection.php");
    try {
        if($_SESSION["uid"]===null){
            echo "UserNotLoggedIn";
        }
        else{
            echo "UserLoggedIn";
        }
    } catch (\PDOException $e) {
        throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }
?>
