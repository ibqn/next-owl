import { useState } from 'react'

import { PrimaryButton, GhostButton } from 'components/button'
import { H1 } from 'components/h-tags'
import { P1, P2, P3 } from 'components/paragraph'
import { Rating } from 'components/rating'
import { Tag } from 'components/tag'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/home.module.css'

export default function Home() {
  const [rating, setRating] = useState(3)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Next OWL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <H1>Welcome to Next.js!</H1>
        <PrimaryButton arrow down>
          кнопка
        </PrimaryButton>
        <GhostButton arrow>кнопка</GhostButton>
        <P1>большой</P1>
        <P2>средний</P2>
        <P3>маленький</P3>
        <p>
          теги: <Tag>тест</Tag>
          <Tag color="primary">тест</Tag>
          <Tag size="m" color="red">
            тест
          </Tag>
          <Tag size="m" color="green">
            тест
          </Tag>
        </p>
        <Rating stars={rating} setStars={setRating} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
