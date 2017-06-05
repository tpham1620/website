<?php
	$dsn = 'mysql:host=tphaminstance.cocmkr81a0rx.us-west-2.rds.amazonaws.com;dbname=jcnailsspa';
    $username = 'tpham1620';
    $password = 'NewChapter2016';

try {
		$conn = new PDO($dsn, $username, $password);
		// set the PDO error mode to exception
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $email= $_POST["email"];
        $pwd = $_POST["pwd"];
        $sql = "SELECT * FROM `jcnailsspa`.`admin` WHERE `email` = '$email' AND `password` = '$pwd'";
        $query = $conn->query($sql);
        
		$data_out = $query->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($data_out);
	}
catch(PDOException $e)
    {
     echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>