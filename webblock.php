<?php
/**
 * Plugin name: Web Block
 * Plugin URI: https://web-art.ca
 * Description: WebBlock for Gutenberg
 * Author: Alexei Web
 * Autor URI: https://web-art.ca
 */

 function webart_webblock_init(){
		register_block_type_from_metadata( __DIR__ );
 }
 add_action('init','webart_webblock_init');