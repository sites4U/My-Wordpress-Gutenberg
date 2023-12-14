<?php
/**
 * Plugin Name: My Dynamic Post
 * Plugin URI: https://web-art.ca
 * Description: Gutenberg Dynamic Block
 * Author: Alexei Web
 * Author URI: https://web-art.ca
 */

 function webart_latest_posts_block( $attributes){
	$arg = array (
		'post_per_page' => $attributes['postPerPage'],
		'post_status' => 'publish'
	);	

	$latest_posts = get_posts($arg);

	$html_text = "<div ".get_block_wrapper_attributes().">";

	if(!empty($latest_posts)){

		foreach($latest_posts as $post){
			$html_text .= "<div>";
					if($attributes['showImage'] && has_post_thumbnail($post)){
						$html_text .= get_the_post_thumbnail($post, 'large');
					}
					$html_text .= "<time datetime='".esc_attr(get_the_date('c',$post))."'>" .esc_html(get_the_date('', $post)). "</time>";
					$html_text .= "<h2><a href ='".get_the_permalink($post)."'>".esc_html(get_the_title($post))."</a></h2>";
			$html_text .="</div>";
		}
	}

	$html_text .= "</div>";
	return $html_text;
 }

 function webart_myDynamicBlock_init(){
    register_block_type_from_metadata( __DIR__, array(
			'render_callback' => 'webart_latest_posts_block'
		) );
 }
 add_action('init','webart_myDynamicBlock_init');