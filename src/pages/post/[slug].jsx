import Author from '@/components/UI/Author/Author';

import Image from 'next/image';
import client from '@/sanity';
import { useNextSanityImage } from 'next-sanity-image';
import { PortableText } from '@portabletext/react';

import styles from './post.module.scss';

const Post = ({ post, author }) => {
	const {
		author: authorRef,
		title,
		subtitle,
		mainImage,
		publishedAt,
		body,
	} = post || {};

	const imageProps = useNextSanityImage(client, mainImage);
	const getAuthor = author?.find((author) => author._id === authorRef._ref);

	const ptComponents = {
		types: {
			image: ({ value }) => {
				if (!value.asset._ref) return null;
				return (
					<Image
						alt={title || ''}
						loading="lazy"
						{...useNextSanityImage(client, value)}
					/>
				);
			},
		},
	};

	return (
		<section className={styles['post']}>
			<div className={`container ${styles['post-container']}`}>
				<div className={styles['post-header']}>
					<h1>{title}</h1>
					<p>{subtitle}</p>
					<Author author={getAuthor} date={publishedAt} />
				</div>
				<article className={styles['post-content']}>
					<div className={styles['post-content_image']}>
						<Image
							src={imageProps?.src}
							blurDataURL={imageProps?.blurDataURL}
							alt={title}
							width={imageProps?.width}
							height={imageProps?.height}
						/>
					</div>
					<PortableText value={body} components={ptComponents} />
				</article>
			</div>
		</section>
	);
};

export default Post;

export const getStaticPaths = async () => {
	const query = `*[_type == "post" && defined(slug.current)[]].slug.current`;
	const paths = await client.fetch(query);
	return {
		paths: paths.map((slug) => ({ params: { slug: slug } })),
		fallback: true,
	};
};

export const getStaticProps = async (context) => {
	const { slug = '' } = context.params;

	const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
	const post = await client.fetch(query);

	const author = await client.fetch(`*[_type == "author"]`);

	return {
		props: {
			post,
			author,
		},
	};
};
