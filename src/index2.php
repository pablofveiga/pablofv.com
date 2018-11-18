<!DOCTYPE html>
<html lang="en">
<head>
	<title>PabloFV - Front-End Developer</title>
	<link rel="stylesheet" type="text/css" href="css/styles.css">


</head>
<body>

	<div class="wrapper no-padding">
		
		<header id="main-header" class="main-header">
			<h2>pablofv.com</h2>
			<hr>
			<h1 class="cursive">Front-End Developer</h1>

			<div class="main-header__circle">
				<span class="circle_in"></span>
			</div>

			<div class="main-header__ninja-area">
				<span class="ninja">
					
				</span>
				<h3>css<br>ninja</h3>
			</div>

			<nav class="main-header__menu">
				<ul>
					<li class="main-header__menu__link who">
						<a href="#">
							<span class="icon icon__who">
								<?php echo file_get_contents("pics/whoami.svg"); ?>
							</span>
							<span class="menu__text">who<br>am I?</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span class="icon icon__work">
								<?php echo file_get_contents("pics/espartan.svg"); ?>
							</span>
							<span class="menu__text">work<br>experience</span>
						</a>
					</li>					
					<li class="header__menu__link portfolio">
						<a href="#">
							<span class="icon icon__portfolio">
								<img src="pics/portfolio_red.png" alt="Portfolio">
							</span>
							<span class="menu__text">portfolio</span>
						</a>
					</li>					
					<li class="main-header__menu__link skills">
						<a href="#">
							<span class="icon icon__skills">
								<img src="pics/skills_red.png" alt="skills">
							</span>
							<span class="menu__text">skills<br>&amp; cv</span>
						</a>
					</li>					
				</ul>
			</nav>

		</header>
	</div>

	<div class="wrapper">


<!-- 		<section class="welcome-section">
			<header class="section-header">
				<h2>Welcome to my website!</h2>
			</header>

			<div class="section-content">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>				
			</div>
		</section>
 -->
		<section class="lobby_mainSection">
			<header class="lobby_mainSection__header section-header">
				<h2>Welcome to my website!</h2>
			</header>

			<div class="lobby_mainSection__content">

				<p>
					Feel free to navigate and find out about me.
				</p>

				<div class="showcase__wrapper">
					<article class="showcase__item whoIam">
						<header class="showcase__item__header">
							<h3>Who I am?</h3>						
						</header>
						<div class="showcase__item__image">
							<?php echo file_get_contents("pics/whoami.svg"); ?>
						</div>
						<div class="showcase__item__content">
							<p>A small briefcase about my personal and professional life</p>
						</div>					
					</article>
					<article class="showcase__item workExperience">
						<header class="showcase__item__header">
							<h3>Work Experience</h3>						
						</header>
						<div class="showcase__item__image">
							<?php echo file_get_contents("pics/espartan.svg"); ?>
						</div>
						<div class="showcase__item__content">
							<p>A resume of my career as a freelance and as part of the company</p>
						</div>					
					</article>
					<article class="showcase__item portfolio">
						<header class="showcase__item__header">
							<h3>Portfolio</h3>						
						</header>
						<div class="showcase__item__image">
							<!-- <img src="pics/avion.png" alt="Portfolio"> -->
							<?php echo file_get_contents("pics/avion4.svg"); ?>		
						</div>
						<div class="showcase__item__content">
							<p>Take a look into the websites and projects I have been part from</p>
						</div>
						<!-- 					
						<div class="mrPacMan">
							<div class="pacman">
							<div class="pacman-top"></div>
							<div class="pacman-bottom"></div>	
						</div> -->
					</article>
					<article class="showcase__item skills">
						<header class="showcase__item__header">
							<h3>Skills & CV</h3>						
						</header>
						<div class="showcase__item__image">
							<!-- <img src="pics/big_miyagi.png" alt="skills">		 -->		
							<?php echo file_get_contents("pics/ninja_simple.svg"); ?>					
						</div>
						<div class="showcase__item__content">
							<p>Skills resume and documents for download</p>
						</div>					
					</article>
					<article class="showcase__item contact">
						<header class="showcase__item__header">
							<h3>Contact</h3>						
						</header>
						<div class="showcase__item__image">
							<!-- <img src="pics/big_miyagi.png" alt="skills">		 -->		
							<?php echo file_get_contents("pics/contact.svg"); ?>					
						</div>
						<div class="showcase__item__content">
							<p>Send me a message, email, whatsapp or skype message from here</p>
						</div>					
					</article>					
				</div>	

			</div>

		</section>



		<section class="experience">
			<header class="section-header">
				<h2>Professional Experience</h2>
			</header>
			<div class="section-content">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ullam adipisci, quia illo, dolores beatae provident, ipsum iste facere animi est placeat, itaque temporibus quaerat sequi. Adipisci reiciendis nam praesentium.
				</p>
			</div>
		</section>




		<section class="portfolio">
			<header class="section-header">
				<h2>Portfolio</h2>
			</header>
			<div class="section-content">
				<?php echo file_get_contents("pics/eye2.svg"); ?>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ullam adipisci, quia illo, dolores beatae provident, ipsum iste facere animi est placeat, itaque temporibus quaerat sequi. Adipisci reiciendis nam praesentium.
				</p>
			</div>
		</section>




		<section class="skills">
			<header class="section-header">
				<h2>Skills &amp; CV.</h2>
			</header>
			<div class="section-content">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ullam adipisci, quia illo, dolores beatae provident, ipsum iste facere animi est placeat, itaque temporibus quaerat sequi. Adipisci reiciendis nam praesentium.
				</p>
			</div>
		</section>







		<div class="blank" style="height: 400px;"></div>

		<span class="copycat">&pi;</span>


		
	</div>



<!-- 	<header id="main-header">
		<h2>pablofv.com</h2>
		<h1>Front-End Developer</h1>
		<abbr>abreviatura</abbr>
	</header>


	<div class="layer01">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

	</div>

	<p>esto es un <a href="#" class="link">Link especial</a></p>
 -->













<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

	<script type="text/javascript" src="js/functions.js"></script>


<script type="text/javascript">
	
// $(window).scroll(function(e) {
// 	console.log($(window).scrollTop());
//   rotate($(window).scrollTop());
// });

// function rotate(deg) {   

// 	console.log(deg);
    
//     $('img').css('transform', 'rotate('+-deg/10+'deg)');
// }

    
   


</script>

</body>
</html>