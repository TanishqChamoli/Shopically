<?php
require_once("dbconnection.php");
    $productname = $_POST["productname"];
    $brand = $_POST["brand"];
    $category = $_POST["category"];
    $price = $_POST["price"];
    $tag = $_POST["tag"];
    $color = $_POST["color"];
    $size = $_POST["size"];
    $material = $_POST["material"];
    $product_description = $_POST['product_description'];

    $filename = uniqid().$_FILES["product_images"]["name"];
    $tempname = $_FILES["product_images"]["tmp_name"];
    $folder = "../image/" . $filename;

    // Now let's move the uploaded image into the folder: image 
    if (move_uploaded_file($tempname, $folder)) {
        $msg = "Image uploaded successfully";
    } else {
        $msg = "Failed to upload image";
    }

    $sql = "INSERT INTO products(product_name,brand,category,price,tag,colour,size,material,product_image,product_description) VALUES(?,?,?,?,?,?,?,?,?,?)";
    $res = $pdo->prepare($sql);
    
    if ($res->execute([$productname, $brand, $category, $price, $tag, $color, $size, $material, $filename, $product_description])) {
        echo "Succesfully added the product";
    } else {
        echo "connection error!!" . mysqli_error($conn);
    }

?>