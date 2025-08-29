<?php
/**
 * MNLU Mumbai Theme Functions
 */

if (!function_exists('mnlu_setup')) :
function mnlu_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form','comment-form','comment-list','gallery','caption']);
    add_theme_support('custom-logo', [
        'height'=>64, 'width'=>64, 'flex-width'=>true, 'flex-height'=>true
    ]);

    // Register menus
    register_nav_menus([
        'primary'   => __('Primary Menu', 'mnlu-mumbai'),
        'footer'    => __('Footer Menu', 'mnlu-mumbai')
    ]);
}
endif;
add_action('after_setup_theme', 'mnlu_setup');


// Enqueue Scripts & Styles
function mnlu_scripts() {
    wp_enqueue_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css');
    wp_enqueue_style('fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
    wp_enqueue_style('aos', 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css');
    wp_enqueue_style('mnlu-style', get_stylesheet_uri());

    wp_enqueue_script('bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js', ['jquery'], null, true);
    wp_enqueue_script('aos-js', 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js', [], null, true);
    wp_enqueue_script('mnlu-js', get_template_directory_uri() . '/assets/js/theme.js', ['jquery'], null, true);
}
add_action('wp_enqueue_scripts', 'mnlu_scripts');


// Custom Post Type Example (Home Slider)
function mnlu_home_slider_cpt() {
    $labels = [
        'name' => 'Home Sliders',
        'singular_name' => 'Home Slider',
        'menu_name' => 'Home Sliders'
    ];
    $args = [
        'labels' => $labels,
        'public' => true,
        'has_archive' => false,
        'show_in_menu' => true,
        'supports' => ['title','editor','thumbnail'],
        'menu_icon' => 'dashicons-images-alt2'
    ];
    register_post_type('home_slider', $args);
}
add_action('init', 'mnlu_home_slider_cpt');


// Optional: Remove default WP Admin menus for CPT grouping (like previous code)
