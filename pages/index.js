import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>Next.js</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Header title='Welcome to Next Js ' />
				<p>If this your first time using Next,this repo will help you to Right Start your Project</p>
			</main>

			<Footer />
		</div>
	);
}
