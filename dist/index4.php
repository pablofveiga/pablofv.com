<!DOCTYPE html>
<html lang="en">
<head>
	<title>PabloFV - Front-End Developer</title>
	<link rel="stylesheet" type="text/css" href="css/styles.css">


	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
</head>
<body id="test">




	<div class="wrapper no-padding">		
		<header id="main-header" class="mainHeader">
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


    

	<div class="wrapper lobbyContainer">

		<section class="lobbySection whoIam">
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


		<section class="lobbySection work">
			<header class="lobbySection__header">
				<h3 class="lobbySection__header__title">Work Experience</h3>
			</header>
			<span class="lobbySection__image"></span>
			<div class="lobbySection__text">
                <p>I started working as a freelance developing static sites and customizing Wordpress templates.</p>
                <p>I also was working as an internship in website companies in Spain after training courses.</p>
                <p>In Malta I was working in some of the biggest betting companies in the world, such as Betsson or Plating Gaming. I was working in other betting companies and also created a small company with some coleagues.</p>

			</div>
            <p class="lobbySection__link">To see a complete review of my work experience, <a href="#" class="red">click here.</a></p>
		</section>


		<section class="lobbySection skills">
			<header class="lobbySection__header">
				<h3 class="lobbySection__header__title">Skills & CV</h3>
			</header>
			<span class="lobbySection__image"></span>
			<div class="lobbySection__text">
                <p>My skills are very focus in DOM interaction, User Experience and graphic skills.</p>
                <p>However, I am continuously learning and improving my skills in those and other front-end aspects.</p>

			</div>
            <p class="lobbySection__link">To see a complete list of my skills and download my CV, <a href="#" class="red">click here.</a></p>
		</section>


		<section class="lobbySection portfolio">
			<header class="lobbySection__header">
				<h3 class="lobbySection__header__title">Portfolio</h3>
			</header>
			<span class="lobbySection__image"></span>
			<div class="lobbySection__text">
                <p>Most of the websites I've developed are property of betting and other companies.</p>
                <p>However, you can see a collection of websites, logos, articles, and graphic stuff I've developed.</p>
            

			</div>
            <p class="lobbySection__link">To see the portfolio, <a href="#" class="red">click here.</a></p>

		</section>

		<section class="lobbySection contact">
			<header class="lobbySection__header">
				<h3 class="lobbySection__header__title">Contact</h3>
			</header>
			<span class="lobbySection__image"></span>
			<div class="lobbySection__text">
                <p>If you want ot get in touch with me:</p>
                <p>You can visit my <span class="red">Linkedin Profile</span></p>
                <p>You can send me an <span class="skype"></span> <span class="red">Skype Message</span></p>
                <p>You can also send me a <span class="whatsapp"></span> <span class="red">whatsapp</span></p>                
			</div>
            <p class="lobbySection__link">Or if you prefer, you can fill <a href="#" class="red">this contact form</a>.</p>

		</section>





		<span class="copycat">&pi;</span>


		
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