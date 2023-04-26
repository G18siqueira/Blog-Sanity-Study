import Head from 'next/head';

import CardPost from '@/components/CardPost/CardPost';
import client from '@/sanity';

import { useRouter } from 'next/router';

import styles from './index.module.scss';
import Error from '@/components/UI/Error/Error';

export default function Home({ posts, author }) {
	const router = useRouter();

	//FilterPosts
	const searchFor = router.query.search?.toLocaleLowerCase() || null;
	const foundPosts =
		posts?.filter((post) => post.title.toLowerCase().includes(searchFor)) ||
		[];

	// PaginationPosts
	const numberOfPosts = searchFor === null ? posts.length : foundPosts.length;

	const postsPerPage = 6;
	const lastPage = Math.ceil(numberOfPosts / postsPerPage);

	let currentPage = +router.query.page || 1;

	if (currentPage < 1) currentPage = 1;
	if (currentPage > lastPage) currentPage = lastPage;

	const inicialIndex = postsPerPage * (currentPage - 1);
	const finalIndex = postsPerPage * currentPage;

	const disableLeftButton = currentPage <= 1;
	const disableRightButton = currentPage >= lastPage;
	const disablePagination = numberOfPosts <= postsPerPage;

	//RenderPosts
	const currentPostList = searchFor === null ? posts : foundPosts;

	const renderPosts = currentPostList
		.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
		.slice(inicialIndex, finalIndex)
		.map((post) => <CardPost key={post._id} post={post} author={author} />);

	return (
		<>
			<Head>
				<title>Minimal Blog | Home</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<section className={styles['page']}>
					<div className={`container ${styles['page-container']}`}>
						<h1>Últimos artidos do Minimal Blog</h1>

						<div className={styles['page-content']}>
							{renderPosts}
						</div>

						{searchFor !== null && foundPosts.length === 0 && (
							<Error text="Oops! Nenhum artigo foi encontrado." />
						)}

						{!disablePagination && (
							<div className={styles['page-pagination']}>
								<button
									className={styles['page-pagination_btn']}
									onClick={() =>
										router.push(`?page=${currentPage - 1}`)
									}
									disabled={disableLeftButton}
								>
									&larr;
								</button>
								<span>
									{currentPage} / {lastPage}
								</span>
								<button
									className={styles['page-pagination_btn']}
									onClick={() =>
										router.push(`?page=${currentPage + 1}`)
									}
									disabled={disableRightButton}
								>
									&rarr;
								</button>
							</div>
						)}
					</div>
				</section>
			</main>
		</>
	);
}

export async function getStaticProps() {
	const posts = await client.fetch(`*[_type == "post"]`);
	const author = await client.fetch(`*[_type == "author"]`);

	return {
		props: {
			posts,
			author,
		},
		revalidate: 10, // atualizar a cada 60 segundos
	};
}

// export const getServerSideProps = async () => {
// 	const posts = await client.fetch(`*[_type == "post"]`);
// 	const author = await client.fetch(`*[_type == "author"]`);

// 	return {
// 		props: {
// 			posts,
// 			author,
// 		},
// 	};
// };
