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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Raleway:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Content />
      <footer className="mx-auto w-fit py-4">masih beta :v</footer>
    </div>
  );
}
