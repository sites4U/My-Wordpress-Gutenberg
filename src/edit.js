import {
	useBlockProps,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarDropdownMenu,
} from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { text } = attributes;
	return (
		<>
			<BlockControls
				controls={ [
					{
						title: 'Button 1',
						icon: 'admin-media',
						isActive: true,
						onClick: () => console.log( 'Button Clicked' ),
					},
					{
						title: 'Button 2',
						icon: 'admin-comments',
						onClick: () => console.log( 'Button Clicked' ),
					},
				] }
			>
				{ text && (
					<ToolbarGroup>
						<p>Align: </p>
						<ToolbarButton
							title="Align left"
							icon="editor-alignleft"
							onClick={ () => console.log( 'Align Left' ) }
						/>
						<ToolbarButton
							title="Align center"
							icon="editor-aligncenter"
							onClick={ () => console.log( 'Align Center' ) }
						/>
						<ToolbarButton
							title="Align right"
							icon="editor-alignright"
							onClick={ () => console.log( 'Align Right' ) }
						/>
						<ToolbarDropdownMenu
							icon="arrow-down-alt2"
							label="More Options"
							controls={ [
								{
									title: 'Button 1',
									icon: 'admin-media',
									onClick: () =>
										console.log( 'Button Clicked' ),
								},
								{
									title: 'Button 2',
									icon: 'admin-media',
									onClick: () =>
										console.log( 'Button Clicked' ),
								},
							] }
						/>
					</ToolbarGroup>
				) }
				<ToolbarGroup>
					<ToolbarButton
						title="Test button"
						icon="admin-customizer"
					/>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				{ ...useBlockProps() }
				tagName="h1"
				value={ text }
				onChange={ ( value ) => setAttributes( { text: value } ) }
				placeholder={ 'Enter title' }
				allowedFormats={ [] }
			/>
		</>
	);
}
