import { registerBlockType } from '@wordpress/blocks';
import './block'
import Edit from './edit';
import Save from './save';
import './style.scss';

registerBlockType( 'webart/cdxblocks', {
	edit: Edit,
	save: Save,
} );
