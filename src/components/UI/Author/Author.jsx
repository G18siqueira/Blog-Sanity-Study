import Image from 'next/image';
import client from '@/sanity';
import { useNextSanityImage } from 'next-sanity-image';

import styles from './author.module.scss';
const Author = ({ author, date = new Date() }) => {
	const { name, image } = author || {};

	const newDate = new Date(date);
	const formattedDate = new Intl.DateTimeFormat('pt-BR', {
		day: 'numeric',
		month: 'long',
	}).format(newDate);

	const imageProps = useNextSanityImage(client, image);

	return (
		<div className={styles['author']}>
			<div className={styles['author-image']}>
				<Image
					src={imageProps?.src}
					blurDataURL={imageProps?.blurDataURL}
					alt={author}
					width={imageProps?.width}
					height={imageProps?.height}
				/>
			</div>
			<div className={styles['author-content']}>
				<span className={styles['author-content_name']}>{name}</span>
				<span className={styles['author-content_date']}>
					{formattedDate}
				</span>
			</div>
		</div>
	);
};

export default Author;
