import { registerBlockType } from '@wordpress/blocks';
import{ __ } from '@wordpress/i18n';

registerBlockType( 'webart/cdxblock', {
	title: __('My Block','cdxblocks'),
	description: __('Single Block', 'cdxblocks'),
	icon: 'universal-access',
	parent: [ 'webart/cdxblocks' ],
	edit: () => <p>Admin Edit</p> ,
	save: () => <p>Front Save</p>,
} );