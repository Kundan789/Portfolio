<?php
$username = "root";
$password = "";
$server  = "localhost";
$database = "contectform";



$con = mysqli_connect($server,$username,$password,$database);

if($con){
    // echo"connection was successful";
   ?>
    <script>
    alert("Connection was successful");
    </script>
<?php
}else{
    // echo "connection not successful";
    ?>
    <script>
    alert("Somthing went wrong. connection not successful")
    </script>
    <?php
}
?>