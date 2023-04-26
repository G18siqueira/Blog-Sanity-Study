import { BiSearchAlt } from 'react-icons/bi';

import Bar from '../Bar/Bar';
import Logo from '../UI/Logo/Logo';

import styles from './header.module.scss';

const Header = () => {
	return (
		<header>
			<Bar />
			<section className={styles['header']}>
				<div className={`container ${styles['header-container']}`}>
					<div className={styles['header-logo']}>
						<Logo />
					</div>
					<div className={styles['header-search']}>
						<form>
							<label htmlFor="search">buscar</label>
							<input
								type="text"
								name="search"
								id="search"
								placeholder="Buscar artigos"
							/>
							<button className={styles['header-search_btn']}>
								<BiSearchAlt />
							</button>
						</form>
					</div>
				</div>
			</section>
		</header>
	);
};

export default Header;
