import Link from 'next/link';
import Image from 'next/image';
const Logo = () => {
	return (
		<Link href={'/'} aria-label="link home">
			<Image
				src="/assets/images/logo.svg"
				alt="logo"
				width={209}
				height={48}
			/>
		</Link>
	);
};

export default Logo;
