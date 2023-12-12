import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import './style.scss';

registerBlockType( 'webart/dynamicblock', {
	edit: Edit,
	save: Save,
} );
