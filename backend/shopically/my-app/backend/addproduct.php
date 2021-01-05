<?php
$productname = $_POST["productname"];
$brand = $_POST["brand"];
$category = $_POST["category"];
$price = $_POST["price"];
$tag = $_POST["tag"];
$color = $_POST["color"];
$size = $_POST["size"];
$material = $_POST["material"];
$product_description = $_POST['product_description'];

$conn = mysqli_connect('localhost', 'admin_dbuser', 'wQAbMZSMlO', 'admin_shopically');

$sql = "INSERT INTO products(product_name,brand,category,price,tag,colour,size,material,product_description) VALUES('$productname','$brand','$category','$price','$tag','$color','$size','$material','$product_description')";
if (mysqli_query($conn, $sql)) {
    echo "Succesfully added the product";
} else {
    echo "connection error!!" . mysqli_error($conn);
}
