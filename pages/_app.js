import Footer from "../components/footer";
import Header from "../components/header";
import { Loading } from "../components/funct/doLoading";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  Loading();
  return (
    <>
      <Loading />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
