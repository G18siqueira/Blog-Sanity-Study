import styles from './error404.module.scss';
import Error from '@/components/UI/Error/Error';

const Error404 = () => {
	return (
		<section className={styles['error404']}>
			<div className={`container ${styles['error404-container']}`}>
				<h1>Oops!! Erro 404</h1>
				<Error
					text={'A Página que você está tentando acessar não existe.'}
				/>
			</div>
		</section>
	);
};

export default Error404;
