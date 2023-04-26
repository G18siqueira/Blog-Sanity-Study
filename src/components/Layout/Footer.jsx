import Logo from '../UI/Logo/Logo';

import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { BsTelegram } from 'react-icons/bs';

const social = [
	{ component: <AiFillInstagram />, url: '#' },
	{ component: <IoLogoWhatsapp />, url: '#' },
	{ component: <MdEmail />, url: '#' },
	{ component: <BsTelegram />, url: '#' },
];

import styles from './footer.module.scss';
const Footer = () => {
	const renderSocial = social.map((el, i) => (
		<a href={el.url} key={i}>
			{el.component}
		</a>
	));
	return (
		<footer className={styles['footer']}>
			<div className={`container ${styles['footer-container']}`}>
				<div className={styles['footer-content']}>
					<Logo />
					<p>
						Compartilhando conhecimento sobre o mundo de tecnologia.
					</p>
					<div className={styles['footer-socials']}>
						{renderSocial}
					</div>
				</div>
				<span className={styles['footer-copy']}>
					©Todos os direitos reservados.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
