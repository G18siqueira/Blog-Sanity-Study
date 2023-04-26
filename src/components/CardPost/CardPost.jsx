import Author from '../UI/Author/Author';

import Image from 'next/image';
import Link from 'next/link';

import styles from './cardpost.module.scss';
const CardPost = () => {
	return (
		<div className={styles['post']}>
			<div className={styles['post-image']}>
				<Image src="" alt="" width={''} height={''} />
			</div>
			<div className={styles['post-content']}>
				<h2>Título do post</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Adipisci, beatae inventore. Possimus, harum magnam pariatur
					error sunt reprehenderit molestiae natus exercitationem.
					Obcaecati in ex quaerat voluptatem odit tempore quo velit.
				</p>
				<div className={styles['post-content_footer']}>
					<Author />
					<Link
						href={`/post/nome-do-post`}
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
