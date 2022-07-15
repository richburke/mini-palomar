import type { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { fetchForm5500Data, Form5500Entry } from '../core';
import Card from '../components/card';
import styles from '../styles/Home.module.css';

const TITLE = 'Mini Palomar!';

const Home: NextPage = () => {
  const [data, setData] = useState<Form5500Entry[]>([]);

  const fetchData = useCallback(async () => {
    const data = await fetchForm5500Data();
    setData(data);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content="A benchmarking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{TITLE}</h1>
        <section className={styles.content}>
          {data.map((entry, index) => (
            <Card info={entry} key={`form-5500-entry-${index}`} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
