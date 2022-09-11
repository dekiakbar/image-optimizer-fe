import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ImageUpload from '../components/ImageUpload'

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
    <div className={styles.container}>
        <Head>
            <title>{config.seo.title}</title>
            <link rel="icon" href="/favicon.ico" />
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

        <main className={styles.main}>
            <div className={styles.grid}>
                <ImageUpload config={config}/>
            </div>
        </main>

        <footer className={styles.footer}>
            Build with
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                <span className={styles.logo}>
                    <Image src="/next.svg" alt="NextJs Logo" width={32} height={32} />
                </span>
            </a>
            <span className={styles.logo}>
                <Image src="/heart.svg" alt="NextJs Logo" width={24} height={16} />
            </span>
            <a href="https://nestjs.com/" target="_blank" rel="noopener noreferrer">
                <span className={styles.logo}>
                    <Image src="/nest.svg" alt="NextJs Logo" width={32} height={32} />
                </span>
            </a>
        </footer>
    </div>
    )
}
