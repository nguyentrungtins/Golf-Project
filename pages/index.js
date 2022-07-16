import Head from 'next/head';
import HomeSection from '../components/Home/HomeSection.jsx';
import AboutUsSection from '../components/Home/AboutUsSection';
import BestSellersSection from '../components/Home/BestSellersSection';

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
                <AboutUsSection />
                <BestSellersSection />
            </main>

            <footer></footer>
        </div>
    );
}
