<?php
/**
 * Plugin Name: My Dynamic Post
 * Plugin URI: https://web-art.ca
 * Description: Gutenberg Dynamic Block
 * Author: Alexei Web
 * Author URI: https://web-art.ca
 */

 function webart_myDynamicBlock_init(){
    register_block_type_from_metadata( __DIR__ );
 }
 add_action('init','webart_myDynamicBlock_init');