<!DOCTYPE html>
<html lang="en">
<head>
	<title>PabloFV - Front-End Developer</title>
	<link rel="stylesheet" type="text/css" href="css/styles.css">


	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
</head>
<body id="test">


    <div class="testContainer">


	<div class="wrapper no-padding">		
		<header id="main-header" class="main-header mainHeader">
			<h2 class="mainHeader__subtitle">pablofv.com</h2>
			<hr class="mainHeader__bar">            
			<h1 class="cursive mainHeader__title">Front-End Developer</h1>

			<div class="mainHeader__circle">
				<span class="closeIcon"></span>
			</div>

			<div class="mainHeader__ninjaArea">
				<span class="mainHeader__ninjaArea__ninja"></span>
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

		<section class="whoIam lobbySection">
			<header class="lobbySection__header">
				<h3 class="lobbySection__header__title">Who I am?</h3>
			</header>
			<span class="lobbySection__image"></span>
			<div class="lobbySection__text">
				<p>I am a front-end developer with 6 years of experience, four of them in Malta working at betting companies. I have also worked as a freelance, and even in a small company created with some colleagues and me.</p>
				<p>I am very focus in user experience and very detailed in graphics and DOM interaction. However, I keep constantly updating with latest technologies.</p>
				<p>I am very passionate about CSS and my goal is to become top 1000 in Spain as a CSS developer.</p>
			</div>
		</section>






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
							<?php echo file_get_contents("pics/paperplane.svg"); ?>		
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

</div>













<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

	<script type="text/javascript" src="js/functions.js"></script>



    <script>
        // CALCULADOR D ANGULOS:
        let numElemnts = 5;
        let divisiones = numElemnts + 2;
        let divGrados = Math.floor(90 / divisiones);    // 12.85 grados para 5 elementos
    
    
    </script>


    <script>
        // let trigger = document.querySelector(".main-header__circle");
        // let victim = document.querySelector(".hr");

        // // trigger.click(function(){
        // //     $(".hr")
        // // })

        // trigger.addEventListener("click",function(e){
        //     e.preventDefault();
        //     victim.classList.add("animated");

        // })    
    



// MENU AMPLIA PEQUE
		$(".main-header__circle").click(function(){            
            $(".main-header__circle").toggleClass("openMenu");
            setTimeout(muestraMenu,400);
        })

        function muestraMenu() {
            $(".topMenu").toggleClass("extended");
        }       


    </script>
</body>
</html>