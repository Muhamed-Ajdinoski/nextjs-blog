import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import {getSortedPostsData} from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData, 
    },
  };
}

export default function Home( { allPostsData } ){
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I am a professional Web Deeveloper. 
          This is my first website in Next.js.<br />
          After completing the tasks, I pushed website on GitHub, so anybody can do the same as me.<br />
          And also I will help in solving problems. {''}
          <a href="https://www.facebook.com/muhamed.ajdinoski/" target="blank">facebook</a>
        </p>
        <p>
          (this is a sample website - you can find it on {''}
         <a href="https://nextjs.org/learn" target="blank">Next.js home page</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} >
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
                {allPostsData.map(({id, date, title, }) => (
                  // <li className={utilStyles.listItem} key={id}>
                  //   {title}
                  //   <br />
                  //   {id}
                  //   <br />
                  //   {date}
                  // </li>
                  <li className={utilStyles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br />
                    <small className={utilStyles.lightText}>
                      <Date dateString={date} />
                    </small>
                  </li>
                ))}
            </ul>
      </section>
    </Layout>
  );
}
