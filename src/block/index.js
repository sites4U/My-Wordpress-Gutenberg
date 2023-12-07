import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType( 'webart/cdxblock', {
	title: __( 'My Block', 'cdxblocks' ),
	description: __( 'Single Block', 'cdxblocks' ),
	icon: 'universal-access',
	parent: [ 'webart/cdxblocks' ],
	supports: {
		html: false,
		reusable: false,
	},
	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: 'h2',
		},
		description: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},
	edit: Edit,
	save: Save,
} );
