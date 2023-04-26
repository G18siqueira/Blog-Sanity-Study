import Link from 'next/link';
import styles from './error.module.scss';

const Error = ({ text }) => {
	return (
		<div className={styles['error']}>
			<h2>{text}</h2>
			<Link href={'/'} aria-label="link home" className="btn btn-primary">
				Voltar para artigos.
			</Link>
		</div>
	);
};

export default Error;
