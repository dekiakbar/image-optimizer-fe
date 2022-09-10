import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ImageUpload from '../components/ImageUpload'

export async function getStaticProps() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_CONFIG_URL)
    const config = await res.json();
    config.endpoint = process.env.NEXT_PUBLIC_API_SERVER_URL;
    return { props: { config } }
}

export default function Home({ config }) {
    return (
    <div className={styles.container}>
        <Head>
            <title>Image Optimizer</title>
            <meta name="description" content="Optimize/compress png,jpg,jpeg image using this app" />
            <link rel="icon" href="/favicon.ico" />
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
