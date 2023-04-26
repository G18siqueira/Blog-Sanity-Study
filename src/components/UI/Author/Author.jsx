import Image from 'next/image';

import styles from './author.module.scss';
const Author = () => {
	return (
		<div className={styles['author']}>
			<div className={styles['author-image']}>
				<Image src="" alt="" width={''} height={''} />
			</div>
			<div className={styles['author-content']}>
				<span className={styles['author-content_name']}>
					Gustavo Siqueira
				</span>
				<span className={styles['author-content_date']}>
					25 de abril
				</span>
			</div>
		</div>
	);
};

export default Author;
