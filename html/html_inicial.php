<!DOCTYPE html>
<html itemscope="itemscope" itemtype="http://schema.org/WebPage"
  lang="<?php echo (defined('_lang_')) ? _lang_ : 'en'; ?>">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="minimum-scale=1, width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">

	<!-- Prefetch Google Tag Manager -->
	<link rel="dns-prefetch" href="//www.googletagmanager.com">

	<!-- Website theme color -->
	<meta name="theme-color" content="#000">

	<!-- Website desc -->
	<title>AIoD</title>
	<meta name="description" content="">
	<meta name="keywords" content="">

	<meta name="generator" content="AZCMS by LOBA">

	<!-- Facebook meta tags -->
	<meta property="og:title" content="">
	<meta property="og:description" content="">
	<meta property="og:site_name" content="">
	<meta property="og:url" content="">
	<meta property="og:type" content="website">
	<meta property="og:image" content="">

	<!-- Twitter meta tags -->
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@site_account">
	<meta name="twitter:creator" content="@individual_account">
	<meta name="twitter:url" content="http://example.com/page.html">
	<meta name="twitter:title" content="Content Title">
	<meta name="twitter:description" content="Content description less than 200 characters">
	<meta name="twitter:image" content="http://example.com/image.jpg">

	<!-- Google Plus meta tags -->
	<link href="https://plus.google.com/+YourPage" rel="publisher">
	<meta itemprop="name" content="Content Title">
	<meta itemprop="description" content="Content description less than 200 characters">
	<meta itemprop="image" content="http://example.com/image.jpg">

	<!-- Website icons -->
	<link href="../assets/img/favicon-192x192.png" rel="icon" sizes="192x192">
	<link href="../assets/img/favicon-180x180.png" rel="apple-touch-icon" sizes="180x180">

	<!-- inject:css -->
	<link rel="stylesheet" href="../assets/css/main.css">
	<!-- endinject -->

  	<link rel="preconnect" href="https://fonts.googleapis.com">
  	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  	<link href="https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" />




  <?php
		//Criar campos para code text na página de opções costumizadas do tema 
		// $analytics = get_field('google_analytics', 'option');
		// $pixel = get_field('facebook_pixel', 'option');
		// $tagmanager = get_field('google_tagmanager', 'option');
	?>

  <script>
		<?php if ( isset($analytics) && $analytics != '' ) { ?>
			var analyticsCode = '<?php echo $analytics?>';
		<?php } ?>
		<?php if ( isset($pixel) && $pixel != '' ) { ?>
			var fbPixelCode = '<?php echo $pixel?>';
		<?php } ?>
		<?php if ( isset($tagmanager) && $tagmanager != '' ) { ?>
			var tagManagerCode = '<?php echo $tagmanager?>';
		<?php } ?>
  </script>
</head>

<body>
  <?php if ( isset($all_opcoes['google_tagmanager']) && $all_opcoes['google_tagmanager'] != '' ) { ?>
  <!-- Google Tag Manager (noscript) -->
  <noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=<?php echo $all_opcoes['google_tagmanager']; ?>"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  <!-- End Google Tag Manager (noscript) -->
  <?php } ?>

    	<!-- Header -->
       <header class="<?php if (isset($headerDashboard)) {?>header-dashboard<?php } ?>" id="header">
		<div class="container-fluid">
        	<div class="row">
            <div class="col-12">
               <div class="header-nav">
                  <div class="header-nav-logo">
                     <?php if (!isset($headerDashboard)): ?>
                        <div class="open-mobile-menu">
                           <div class="hamburguer d-lg-none d-xl-none">
                              <span></span>
                           </div>
                           <div class="hamburguer-close d-lg-none d-xl-none">
                              <span></span>
                           </div>
                        </div>
                     <?php endif; ?>

                     <?php if (isset($headerDashboard)): ?>
                        <div id="collapseButton" class="d-flex d-lg-none">
                           <div class="hamburguer">
                              <span></span>
                           </div>
                        </div>
                     <?php endif; ?>
                     <a href="index.php"><img src="../assets/img/logo-white.svg" alt="" class="logotipo"><img src="../assets/img/logo-cinza.svg" alt="" class="logotipo-grey d-none"></a>

                     <?php if (isset($headerDashboard)): ?>
                        <div id="collapseButton" class="d-none d-lg-flex">
                           <i class="icon-colapse"></i>
                        </div>
                        
                     <?php endif; ?>

                     <a href="" class="btn btn btn-circle btn-circle--blue btn-search ml-5 mr-0 d-flex d-lg-none"><i class="icon-lupa"></i></a>

                     <!-- Show quando logado -->
                     <?php if (isset($headerDashboard)): ?>
                           <div class="user-avatar-button user-avatar d-flex d-lg-none mr-0">
                              <div class="btn btn btn-circle btn-user ml-0 mr-0">
                                 <img src="../assets/img/user-image.jpeg" alt="">
                                 <span class="notifications">1</span>
                              </div>
                           </div>
                        <?php else: ?>
                           <!-- hide quando não logado -->
                           <a class="btn btn-success btn-success--white mr-0 d-flex d-lg-none" href="">Log In</a>
                        <?php endif; ?>

                     <!-- <div class="icon-header d-block d-lg-none"> -->
                    
                        <!-- <a href="#" class="header-items-icon search-mobile toggle-modal" data-modalContainer="search-popup">
                           <i class="icon-search"></i>
                        </a> -->
                      
                     <!-- </div> -->
                  </div>
                  <?php if (!isset($headerDashboard)): ?>
                     <div id="header-items">
                        <ul class="main-menu">   
                           <li class="menu">
                              <div class="menu-link-mobile">
                                 <a class="menu-link" href="#">Resources <i class="icon-arrow d-block d-lg-none"></i></a>
                                 
                              </div>
                           </li>
                           <li class="menu">
                              <div class="menu-link-mobile has-submenu">
                                 <a class="menu-link">Tools <i class="icon-arrow d-block d-lg-none"></i></a>
                              </div>
                              <div class="sub-menu d-flex flex-column">
                                 <ul>
                                    <li>
                                       <a href="#">
                                          <span>Most Popular Tools</span>
                                          <p>Explore the research contents on the AI on Demand to customise your experiments!</p>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#">
                                          <span>RAIL</span>
                                          <p>Explore the research contents on the AI on Demand to customise your experiments!</p>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#">
                                          <span>AI Builder</span>
                                          <p>AI4EU Experiments is an open source platform for the development, training, sharing and deployment of AI models.</p>
                                       </a>
                                    </li>
                                    <li class="highlight">
                                       <a href="#">
                                          <span>RoboCompass</span>
                                          <p>Evaluate non-technological aspects of responsible robotics.</p>
                                       </a>
                                    </li>
                                 </ul>
                                 <a class="mt-4 btn btn-secondary" href="">See all tools</a>
                              </div>
                           </li>
                           <li class="menu">
                              <div class="menu-link-mobile">
                                 <a class="menu-link" href="#">Community <i class="icon-arrow d-block d-lg-none"></i></a>
                              </div>
                           </li>
                        </ul>
                     
                     </div>
                  <?php endif; ?>
                  <div class="d-flex flex-lg-row menu-right">
                        <?php if (isset($headerDashboard)): ?>
                           <form id="customForm" class="search-input">
                              <input type="hidden" name="action" value="">
                              <div class="form-group">
                                 <input type="text" name="name" placeholder="Search..." id="name" class="form-control" required="">
                              </div>
                           </form>
                        <?php endif; ?>
                        <a href="" class="btn btn btn-circle btn-circle--blue btn-search ml-2 d-none d-lg-flex"><i class="icon-lupa"></i></a>
                        <a href="undefined" class="btn btn-default btn-user d-none d-lg-flex">Get Started</a>


                        <!-- Show quando logado -->
                        <?php if (isset($headerDashboard)): ?>
                           <div class="user-avatar-button user-avatar d-none d-lg-flex">
                              <div class="btn btn btn-circle btn-user ml-2">
                                 <img src="../assets/img/user-image.jpeg" alt="">
                                 <span class="notifications">1</span>
                              </div>
                              <span>Nuno <br> Alves</span>
                           </div>
                        <?php else: ?>
                           <!-- hide quando não logado -->
                           <a class="btn btn-success btn-success--white mr-5 d-none d-lg-flex" href="">Log In</a>
                        <?php endif; ?>
                        <div class="theme-switch-wrapper">
                           <label class="theme-switch" for="checkbox">
                              <input type="checkbox" id="checkbox" />
                              <div class="slider round">
                                 <div class="theme-switch-icons">
                                    <svg class="light-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <g clip-path="url(#clip0_607_11249)">
                                       <path d="M10 14.1666C12.3012 14.1666 14.1667 12.3011 14.1667 9.99992C14.1667 7.69873 12.3012 5.83325 10 5.83325C7.69882 5.83325 5.83334 7.69873 5.83334 9.99992C5.83334 12.3011 7.69882 14.1666 10 14.1666Z"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M10 0.833252V2.49992"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M10 17.5V19.1667"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M3.51666 3.5166L4.7 4.69993"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M15.3 15.3L16.4833 16.4834"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M0.833344 10H2.50001"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M17.5 10H19.1667"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M3.51666 16.4834L4.7 15.3"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M15.3 4.69993L16.4833 3.5166"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                       </g>
                                    </svg>

                                    <svg class="dark-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M14 8.52667C13.8951 9.66147 13.4692 10.7429 12.7722 11.6445C12.0751 12.5461 11.1357 13.2305 10.0638 13.6177C8.99194 14.0049 7.83199 14.0787 6.71966 13.8307C5.60734 13.5827 4.58866 13.023 3.78281 12.2172C2.97697 11.4113 2.41729 10.3927 2.16927 9.28033C1.92125 8.16801 1.99514 7.00806 2.3823 5.9362C2.76946 4.86434 3.45388 3.92491 4.35547 3.22784C5.25706 2.53076 6.33853 2.10487 7.47333 2C6.80894 2.89884 6.48923 4.0063 6.57235 5.12094C6.65547 6.23559 7.1359 7.28337 7.92626 8.07373C8.71662 8.86409 9.76441 9.34452 10.8791 9.42765C11.9937 9.51077 13.1012 9.19106 14 8.52667Z" stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                 </div>
                              </div>
                           </label>
                        </div>
                     </div>
               </div>
				</div>
			</div>
		</div>
	</header>
  