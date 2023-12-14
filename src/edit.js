import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { format, dateI18n, getSettings } from '@wordpress/date';
import './editor.scss';

export default function Edit( { attributes } ) {
	const { postsPerPage, showImage } = attributes;
	const posts = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords(
			'postType',
			'post',
			{
				per_page: 4,
				_embed: true,
			},
			{ postsPerPage }
		);
	} );
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			{ posts &&
				posts.map( ( post ) => {
					const featuredImage =
						post._embedded &&
						post._embedded[ 'wp:featuredmedia' ] &&
						post._embedded[ 'wp:featuredmedia' ].length > 0 &&
						post._embedded[ 'wp:featuredmedia' ][ 0 ];
					return (
						<div key={ post.id }>
							{ showImage && featuredImage && (
								<img
									src={ featuredImage.source_url }
									alt={ featuredImage.alt_text }
								/>
							) }
							{ post.date_gmt && (
								<time dateTime={ format( 'c', post.date_gmt ) }>
									{ dateI18n(
										getSettings().formats.date,
										post.date_gmt
									) }
								</time>
							) }
							<h2>
								<a href={ post.link }>
									{ post.title.rendered }
								</a>
							</h2>
						</div>
					);
				} ) }
		</div>
	);
}
