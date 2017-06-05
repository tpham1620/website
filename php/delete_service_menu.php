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
            $sql_d = "DELETE FROM `jcnailsspa`.`$table` WHERE `service_name`='$name';";
            $query_u = $conn->query($sql_d);
            echo "Delete successfully: $name -- price: $price from menu: $table";
        }else{
            echo "No such service found: $name -- price: $price in menu: $table";
        }
	}
catch(PDOException $e)
    {
     echo $e->getMessage();
    }

$conn = null;
?>