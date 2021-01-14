<!DOCTYPE html>

<html>

<head>

    <title>login</title>

    <link rel="icon" href="favicon.ico" type="image/x-icon">
    
</head>

<body >

<form action="" method="post">   
<h3></h3><br/><input type="password" name="pass"><br/>
<input type="submit" value="⠏⠁⠎⠎⠘⠺" name="submit"><br/></center>
				
<?php
if(isset($_POST["submit"])){
 if(!empty($_POST['pass'])){
 
 $pass = $_POST['pass'];
 //DB Connection
 $conn = new mysqli('localhost', 'jessica_jessica', 'Jessica2020') or die(mysqli_error());
 //Select DB From database
 $db = mysqli_select_db($conn, 'jessica_db') or die("databse error");
 //Selecting database
 $query = mysqli_query($conn, "SELECT * FROM userpass WHERE pass='".$pass."'");
 $numrows = mysqli_num_rows($query);
 if($numrows !=0)
 {
 while($row = mysqli_fetch_assoc($query))
 {
 $dbpassword=$row['pass'];
 }
 if($pass == $dbpassword)
 {
 session_start();
 $_SESSION['sess_user']=$pass;
 //Redirect Browser
 echo "<script>document.location.href='hidden-page.php';</script>\n";
 }
 }
 else
 {
 echo "Nop";
 }
 }
 else
 {
 echo "nonono";
 }
}
?>	

</form>  
</body>
</html>