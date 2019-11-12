<?php
if (isset($_POST["submit"])) {
	$to = "kovacevicsako@gmail.com"; 
	$message=$_POST["message"]; 
	$from =$_POST["email"]; 
	$headers = "From:" . $from; 
	mail($to,$subject,$message,$headers); 

	$poruka = ""; 
} else {
	$poruka = "";	
}
?>