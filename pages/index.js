import Head from 'next/head'
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImageUpload from '../components/ImageUpload'
import Navbar from '../components/Navbar';

export async function getStaticProps() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_CONFIG_URL)
    const config = await res.json();
    config.endpoint = process.env.NEXT_PUBLIC_API_SERVER_URL;
    config.seo = {
        'url': process.env.SITE_URL,
        'title': process.env.SITE_TITLE,
        'desc': process.env.SITE_DESC,
        'keyword': process.env.SITE_KEYS,
        'image': process.env.SITE_URL+'/'+process.env.SITE_IMAGE,
    }
    return { props: { config } }
}

export default function Home({ config }) {
    return (
    <div>
        <Head>
            <title>{config.seo.title}</title>
            
            <link rel="icon" href="/favicon.ico" type="image/png"/>
            <link rel="manifest" href="/site.webmanifest" crossOrigin="anonymous" />
            <link rel="apple-touch-icon" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="apple-touch-icon" sizes="192x192" href="/icons/android-chrome-192x192.png" />
            <link rel="apple-touch-icon" sizes="512x512" href="/icons/android-chrome-512x512.png" />
            <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

            <link rel="canonical" href={config.seo.url} />
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index,follow" />
            <meta name="googlebot-news" content="index,follow" />
            <meta name="googlebot" content="index,follow" />
            <meta name="description" content={config.seo.desc} />
            <meta name="keywords" content={config.seo.keyword}/>
            <meta name="image" content={config.seo.image} />
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={config.seo.url}/>
            <meta property="og:title" content={config.seo.title}/>
            <meta property="og:description" content={config.seo.desc}/>
            <meta property="og:image" content={config.seo.image}/>
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={config.seo.url}/>
            <meta property="twitter:title" content={config.seo.title}/>
            <meta property="twitter:description" content={config.seo.desc}/>
            <meta property="twitter:image" content={config.seo.image}/>
        </Head>

        <Navbar/>

        <Header />

        <div className="container mx-auto px-4">
            <ImageUpload config={config}/>
        </div>

        <Footer/>
    </div>
    )
}
