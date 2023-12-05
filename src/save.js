import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { text, align } = attributes;
	return (
		<div { ...useBlockProps.save()}>
			<InnerBlocks.Content />
		</div>
	);
}
