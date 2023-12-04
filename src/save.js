import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { text } = attributes;
	return (
		<RichText.Content
			{ ...useBlockProps.save() }
			tagName="h1"
			value={ text }
		/>
	);
}
