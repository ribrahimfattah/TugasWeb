 <!DOCTYPE html>
<!--[if lt IE 7]>     
	<html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         
	<html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>        
	<html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<link rel="shortcut icon" href="kp.png">
        <title>IBRA'S HOME</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
	<script src="modrnizr.min.js"></script>
	<link rel="stylesheet" href="style.css"  />

</head>
<body id="index" class="home">			
	<header class='container' id='header'>
		<img src="kp.png" id='logo' width="50" height="50">
		<h1>IBRA'S HOME</h1>
	</header>
	
	<nav class='container roundEdge' id='nav'>
	<ul>
		<li>
			<a href="Home.html">Home</a>
		</li>
		<li>
			<a href="biodata.html">Biodata</a>
		</li>
		<li>
			<a href="gallery.html">Gallery</a>
		</li>
		<li>
			<a href="form.html">Buku Tamu</a>
		</li>
		<li class="dropdown">
			<a href="javascript:void(0)" class="dropbtn">Contact Me</a>
				<div class="dropdown-content">
					<a href="#" target="_blank" rel="dofollow" onclick="window.open('http://www.facebook.com/erasyd'); return false;">FB</a>
					<a href="#" target="_blank" rel="dofollow" onclick="window.open('https://twitter.com/IbrahimFattah2'); return false;">Twitter</a>
					<a href="#" target="-blank" rel="dofollow" onclick="window.open('https://www.instagram.com/ribrahimfattah'); return false;">Instagram</a>
				</div>
		</li>
	</ul>
	</nav>
	<div id="slider">
		<div id="slide-holder">
			<div class="slide"><img src="ibra1.jpg" width="500px" height="500px"/></div>
			<div class="slide"><img src="ibra2.jpg" width="500px" height="500px"/></div>
			<div class="slide"><img src="ibra5.jpg" width="500px" height="500px"/></div>
			<div class="slide"><img src="ibra3.jpg" width="500px" height="500px"/></div>
			<div class="slide"><img src="ibra4.jpg" width="500px" height="500px"/></div>
		</div>
	</div>
	

	
	<section class='container' id='main'>
		<section id='content'>
			<article>
				<h3 align="center">Data pendaftar</h3>
		<?php
		{
			echo"Nama: ".$_GET['nama']. "</br>";
			echo"Password: ".$_GET['password']."</br>";
			echo"Jenis kelamin: ".$_GET['jenis_kelamin']."</br>";
			echo"Keahlian: ".$_GET['keahlian']."</br>";
			echo"Tempat lahir: ".$_GET['tempat_lahir']."</br>";
			echo"Deskripsi Diri: ".$_GET['deskripsi']."</br>";
		}
		?>
			</article>	
		</section>
		
		<aside id='sidebar' class='roundEdge'> 
			<header>
				<h3 align="center">
					<a href="#" target="-blank" rel="dofollow" onclick="window.open('https://www.instagram.com/raaz.id_smg'); return false;">raaz.id_smg</a>
				</h3>
			</header>
			<br/>
			<p class='left'>Masker komedo recommended, harganya juga pas di kantong. Setiap bulan juga ada promo lho</p><br>
			<a href="#" target="-blank" rel="dofollow" onclick="window.open('https://www.instagram.com/raaz.id_smg'); return false;"><img src="raaz.jpeg" width="100" height="100"></a>
			
		</aside>
	</section>
	
	<footer class='container' id='footer'>
		<p>
		copyrighted ©IBRA'S HOME 2018
		</p>
	</footer>
	
	
</body>
</html>