import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ContentLoading from "../navigation/loading";

export function Loading() {
  const router = useRouter();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoad(true);
    const handleComplete = (url) => url === router.asPath && setLoad(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return load && <ContentLoading />;
}
