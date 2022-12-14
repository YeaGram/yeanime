import Head from "next/head";
import Content from "../components/content";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>YeaNime</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content />
    </div>
  );
}
