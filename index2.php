<?
/*$name = PDO::quote('nummy.db');

$dir = 'nummy.db';


$dbh  = new PDO($dir) or die("cannot open the database");
$query =  "SELECT * FROM test_data";
foreach ($dbh->query($query) as $row)
{
    echo $row[0];
}
*/
/*
		try {
  $conn = new PDO("sqlite:nummy.db", array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  // PDO fetch docs: http://php.net/manual/en/pdostatement.fetch.php
  $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
  $this->_conn = $conn;
		return $conn;	
  
} catch (PDOException $e) {
  echo $e->getMessage();
}
*/
$conn = new PDO("sqlite:nummy.db");	
var_dump($conn);

$ins = "insert into test_data (name_data) values ('hello')";
$conn->query($ins);

$row = array();
$query =  "SELECT * FROM test_data";
$row = $conn->query($query);


print_r($row);


foreach ($conn->query($query) as $row)
{
   print_r($row);
}
	
	
?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
</body>
</html>