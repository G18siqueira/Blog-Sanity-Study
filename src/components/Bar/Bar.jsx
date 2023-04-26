import styles from './bar.module.scss';

const Bar = () => {
	return (
		<section className={styles['bar']}>
			<span>Novos artigos todas as terças!</span>
		</section>
	);
};

export default Bar;
