<?php
// 
$productId =$_GET['id'];
// Get the product details.
$conn = mysqli_connect('localhost', 'root', '', 'shopically');

$sql = "SELECT * FROM products WHERE id = $productId";
// fecthing and saving all the data of the product in an array
$result = mysqli_query($conn, $sql);

$ans = mysqli_fetch_all($result, MYSQLI_ASSOC);

$productName = $ans[0]['productname'];
$productCategory = $ans[0]['category'];
$productDescription = $ans[0]['description'];
$productPrice = $ans[0]['price'];
$productTags = $ans[0]['tags'];
$productSize = $ans[0]['size'];
$productMaterial = $ans[0]['material'];
$productColor = $ans[0]['color'];

echo $productCategory;
echo $productColor;
echo $productDescription;
echo $productMaterial;
echo $productName;
echo $productPrice;
echo $productSize;
echo $productTags;

?>