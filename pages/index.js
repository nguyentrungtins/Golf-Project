import Head from 'next/head';
import HomeSection from '../components/Home/HomeSection.jsx';

export default function Home() {
    return (
        <div>
            <Head>
                <title>C G V</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <HomeSection />
            </main>

            <footer></footer>
        </div>
    );
}
