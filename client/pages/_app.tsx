import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { TransactionProvider } from '../context/TransactionContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Kryptfer</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link rel='shortcut icon' type='image/ico' href='/favicon.ico' />
			</Head>
			<TransactionProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</TransactionProvider>
		</>
	);
}

export default MyApp;
