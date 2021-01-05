<?php
$productname = $_POST["productname"];
$price = $_POST["price"];
$category = $_POST["category"];
$size = $_POST["size"];
$color = $_POST["color"];
$tag = $_POST["tag"];
$material = $_POST["material"];

$conn = mysqli_connect('localhost', 'admin_dbuser', 'wQAbMZSMlO', 'admin_shopically');
$sql = "INSERT INTO product_data(productname,category,price,tags,size,color,material) VALUES('$productname','$category','$price','$tag','$size','$color','$material')";
if (mysqli_query($conn, $sql)) {
    echo "Succesfully added the product";
} else {
    echo "connection error!!" . mysqli_error($conn);
}
