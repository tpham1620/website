<?php
	$dsn = 'mysql:host=tphaminstance.cocmkr81a0rx.us-west-2.rds.amazonaws.com:3306;dbname=jcnailsspa';
    $username = 'tpham1620';
    $password = 'NewChapter2016';

try {
		$conn = new PDO($dsn, $username, $password);
		// set the PDO error mode to exception
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		//$ID = isset($_GET['ID']) ? $_GET['ID'] : '';
		
		$sql = "SELECT * FROM jcnailsspa.about_des";
		$query = $conn->query($sql);
		$des_out = $query->fetchAll(PDO::FETCH_ASSOC);
		if ($des_out) {	
			echo json_encode($des_out);
		}
	}
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>