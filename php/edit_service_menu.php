<?php
	$dsn = 'mysql:host=tphaminstance.cocmkr81a0rx.us-west-2.rds.amazonaws.com;dbname=jcnailsspa';
    $username = 'tpham1620';
    $password = 'NewChapter2016';

try {
		$conn = new PDO($dsn, $username, $password);
		// set the PDO error mode to exception
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $table= $_POST["type"];
        $name = $_POST["name"];
        $price = $_POST["price"];
		$sql_s = "SELECT * FROM `jcnailsspa`.`$table` WHERE `service_name` = '$name';";
        $query_s = $conn->query($sql_s);
        $selected = $query_s->fetchAll(PDO::FETCH_ASSOC);
        if(count($selected)>0){
            $sql_u = "UPDATE `jcnailsspa`.`$table` SET `price`='$price' WHERE `service_name`='$name';";
            $query_u = $conn->query($sql_u);
            echo "Update successfully: $name -- new price: $price from menu: $table";
        }else{
            $sql_i = "INSERT INTO `jcnailsspa`.`$table` (`service_name`, `price`) VALUES ('$name', '$price');";
            $query_i = $conn->query($sql_i);
            echo "Insert new service: $name  -- price: $price into menu: $table";
        }
	}
catch(PDOException $e)
    {
     echo $e->getMessage();
    }

$conn = null;
?>