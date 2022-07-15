import Head from 'next/head';
import HomePage from '../components/Home/HomePage.jsx';

export default function Home() {
    return (
        <div>
            <Head>
                <title>C G V</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <HomePage />
            </main>

            <footer></footer>
        </div>
    );
}
