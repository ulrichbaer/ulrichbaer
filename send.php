<?php	 

$name=$_REQUEST[name];
$email=$_REQUEST[email];
$message=$_REQUEST[message];		

$cuerpo.="From: no-reply@jessicakbaer.space\r\n";
$cuerpo.="X-Maller:PHP/".phpversion()."\r\n";
$cuerpo.="Mime-Version:1.0\r\n";
$cuerpo.="Content-Type:text/plain";	 

$message="Name: ".$name. "\nEmail: ".$email. "\nMessage: ".$message;

if ($OK == "Enviar") {

echo "<B>Si =</B>".$si."<br>";

echo "<B>No =</B>".$no."<br>";

};

$para="me@jessicakbaer.space";
$asunto="jessicakbaer.com - form ";


mail($para,$asunto,utf8_decode($message),$cuerpo);
echo "<script>document.location.href='contact_done.html';</script>\n";

?>