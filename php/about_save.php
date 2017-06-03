<?php
	$dsn = 'mysql:host=tphaminstance.cocmkr81a0rx.us-west-2.rds.amazonaws.com;dbname=jcnailsspa';
    $username = 'tpham1620';
    $password = 'NewChapter2016';

try {
		$conn = new PDO($dsn, $username, $password);
		// set the PDO error mode to exception
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $description = $_POST["newText"];
		$sql = "UPDATE `jcnailsspa`.`about_des` SET `description` = '$description' WHERE `id`=1";
		$stmt = $conn->prepare($sql);
		$stmt->execute();
        echo "update successfully";
	}
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>