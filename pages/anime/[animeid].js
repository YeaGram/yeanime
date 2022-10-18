import Header from "../../components/header";
import axios from "axios";
import Image from "next/image";
import SectionHeader from "../../components/header/sectionHeader";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MyRequest } from "../../components/funct/doRequest";

export default function AniIds({ anime }) {
  // const router = useRouter();
  // const { animeid } = router.query;
  // const [anime, setAnime] = useState([]);

  // useEffect(() => {
  //   const url = "https://api.jikan.moe/v4/anime/1/full";
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       console.log(res);
  //       setAnime(anime.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  console.log(anime);
  return <div></div>;
}

{
  /* <main className="mt-24">
        <SectionHeader>{anime.title}.</SectionHeader>
        <div className="flex flex-col md:flex-row items-center md:items-start md:pt-10">
          <div className="px-10 box-content">
            <div className="relative w-[300px] h-[450px] box-content border-white border-8 shadow-[0px_5px_10px_rgba(0,0,0,0.5)] bg-gray-200 my-5">
              <Image
                alt="anime images"
                layout="fill"
                src={anime.images.webp.large_image_url}
                className="object-fill"
              />
            </div>
          </div>
          <div className="text-gray-800 font-Raleway text-lg px-5">
            <h2 className="font-thin text-lg my-1">
              Title : <span className="font-semibold">{anime.title}</span>
            </h2>
            <ul className="text-sm border-2 rounded-sm border-gray-100 shadow-md w-fit px-2 flex flex-col gap-1 py-2 text-gray-800">
              <li>
                <p className="font-semibold">English : {anime.title_english}</p>
              </li>
              <li>
                <p className="font-semibold">
                  Japanese :{anime.title_japanese}
                </p>
              </li>
              <li>
                <div className="font-semibold flex flex-col">
                  Synonyms :
                  {anime.title_synonyms.map((a) => {
                    return (
                      <span key={a} className="ml-2 flex items-center ">
                        <span className="px-2 box-content rotate-45 text-[10px]">
                          <FaLocationArrow />
                        </span>
                        {a}
                      </span>
                    );
                  })}
                </div>
              </li>
            </ul>
            <div className="flex-col flex shadow-md py-4">
              <div>
                <p>
                  Genre :{" "}
                  <span>
                    {anime.genres.map((genres) => (
                      <span key={genres.mal_id}>{genres.name} </span>
                    ))}
                  </span>
                </p>
              </div>
              <p>
                Ranking : <span>#{anime.rank}</span>
              </p>
              <p>
                Score : <span>{anime.score}</span>
              </p>
              <p>
                Member : <span>{anime.members}</span>
              </p>
              <p>
                Rating : <span>{anime.rating}</span>
              </p>
              <p>
                Status : <span>{anime.status}</span>
              </p>
              <p>
                Source : <span>{anime.source}</span>
              </p>
            </div>
            <div className="mt-2 font-semibold">
              Synopsis :{" "}
              <p className="text-[1.4ch] leading-6 mt-1 indent-1  font-light text-gray-600">
                {anime.synopsis}.
              </p>
              <span className="w-full flex justify-end px-2 text-rose-600 my-2 text-sm">
                <Link href={anime.url}>
                  <a target={"_blank"}>Lihat sumber...</a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </main> */
}

export async function getStaticProps(context) {
  const id = context.params.animeid;
  const anime = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`).then(
    (r) => r.json()
  );
  console.log(typeof anime.data);

  return {
    props: { anime: anime.data },
  };
}

export async function getStaticPaths() {
  const animes = await fetch("https://api.jikan.moe/v4/top/anime?").then((r) =>
    r.json()
  );

  console.log(typeof animes.data);
  return {
    paths: animes.data.map((anime) => {
      const animeid = anime.mal_id.toString();
      return {
        params: {
          animeid,
        },
      };
    }),
    fallback: false,
  };
}
