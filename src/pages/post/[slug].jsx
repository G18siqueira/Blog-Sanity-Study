import Author from '@/components/UI/Author/Author';
import styles from './post.module.scss';
const Post = () => {
	return (
		<section className={styles['post']}>
			<div className={`container ${styles['post-container']}`}>
				<div className={styles['post-header']}>
					<h1>What is Lorem Ipsum?</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s.
					</p>
					<Author />
				</div>
				<article className={styles['post-content']}>
					<div className={styles['post-content_image']}></div>
					Conteudo do artigo
				</article>
			</div>
		</section>
	);
};

export default Post;
