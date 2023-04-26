import Author from '../UI/Author/Author';

import Image from 'next/image';
import Link from 'next/link';
import client from '@/sanity';
import { useNextSanityImage } from 'next-sanity-image';

import styles from './cardpost.module.scss';
const CardPost = ({ post, author }) => {
	const {
		author: authorRef,
		title,
		mainImage,
		publishedAt,
		short_text,
		slug,
	} = post || {};

	const imageProps = mainImage ? useNextSanityImage(client, mainImage) : {};
	const getAuthor =
		author?.find((author) => author._id === authorRef._ref) || {};

	return (
		<div className={styles['post']}>
			<div className={styles['post-image']}>
				{imageProps.src && (
					<Image
						src={imageProps.src}
						blurDataURL={imageProps.blurDataURL}
						alt={title}
						width={imageProps.width}
						height={imageProps.height}
					/>
				)}
			</div>
			<div className={styles['post-content']}>
				<h2>{title}</h2>
				<p>{short_text}</p>
				<div className={styles['post-content_footer']}>
					<Author author={getAuthor} date={publishedAt} />
					<Link
						href={`/post/${slug.current}`}
						aria-label="link post"
						className={styles['link']}
					>
						Continuar lendo &rarr;
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CardPost;
