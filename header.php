<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- Top Bar -->
<!-- <div class="top-bar">
  <a href="<?php echo home_url(); ?>">Home</a> |
  <a href="#">RTI</a> |
  <a href="#">NIRF</a> |
  <a href="#">Contact Us</a> |
  <a href="#">HRMS User Login</a>
</div> -->

<div class="top-bar d-flex justify-content-between align-items-center px-3 py-1">
    <div class="top-left">
        <a href="<?php echo home_url(); ?>">Home</a> |
        <a href="#">RTI</a> |
        <a href="#">NIRF</a> |
        <a href="#">Contact Us</a> |
        <a href="#">HRMS User Login</a>
    </div>
    <div class="top-right">
        <span class="me-3"><i class="fa-solid fa-phone"></i> +91-1234567890</span>
        <span><i class="fa-solid fa-envelope"></i> info@mnlu.ac.in</span>
    </div>
</div>


<header class="header d-flex align-items-center justify-content-between flex-wrap p-3">
  <div class="brand-logo">
    <a href="<?php echo home_url(); ?>">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/img/imgi_1_logo.jpg" alt="MNLU Logo" class="logo">
    </a>
  </div>

  <div class="brand-name text-center">
    <h1>MAHARASHTRA NATIONAL LAW UNIVERSITY MUMBAI</h1>
    <p>CETTM MTNL Building, Powai, Mumbai, Maharashtra State, India - 400076</p>
    <p>(Established on 27th June 2014 by Government of Maharashtra under Act VI of 2014)</p>
  </div>

  <div class="search-box d-flex align-items-center">
    <?php get_search_form(); ?>
  </div>
</header>

<div class="recognition-bar">
  <div class="left"><a href="#">Recognized By the UGC U/S 2(f)</a></div>
  <div class="center"><a href="#">Approved by BCI</a></div>
  <div class="right"><a href="#">NIRF-31st Rank</a></div>
</div>

<!-- Dynamic WP Menu -->
<nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <?php
        wp_nav_menu([
          'theme_location' => 'primary',
          'container' => false,
          'menu_class' => 'navbar-nav mx-auto',
          'walker' => new WP_Bootstrap_Navwalker() // Use a walker class for Bootstrap dropdown support
        ]);
      ?>
    </div>
  </div>
</nav>
