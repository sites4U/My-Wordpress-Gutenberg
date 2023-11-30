import { useBlockProps } from '@wordpress/block-editor';

export default function Save() {
	const blockProps = useBlockProps.save();
	return <h1 { ...blockProps }>Save2</h1>;
}
