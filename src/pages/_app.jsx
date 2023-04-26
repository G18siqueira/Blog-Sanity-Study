import MainLayout from '@/components/Layout/MainLayout';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	);
}
