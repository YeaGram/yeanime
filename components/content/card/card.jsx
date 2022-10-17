import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Card() {
  const [homeAnime, setHomeAnime] = useState([]);
  const [pageButton, setPageButton] = useState();
  const [getType, setGetType] = useState("");
  const [getFilter, setGetFilter] = useState("");
  let [page, setPage] = useState(1);
  const getAnime = "https://api.jikan.moe/v4/anime";
  const getTopAnime = "https://api.jikan.moe/v4/top/anime?";

  const getThatAnime = (target, spec) => {
    fetch(spec)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let datas = data.data;
        target(datas);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const params = new URLSearchParams({
      type: getType,
      filter: getFilter,
      page: page,
      limit: 10,
    });
    const sle = document.querySelector("#selGroup");
    sle.addEventListener("change", (e) => {
      setGetType(sle.value);
    });
    const sfl = document.querySelector("#selFilter");
    sfl.addEventListener("change", (e) => {
      setGetFilter(sfl.value);
    });

    getThatAnime(setHomeAnime, getTopAnime + params.toString());

    // AJax
    // const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = () => {
    //   if (xhr.readyState == 4 && xhr.status == 200) {
    //     const data = JSON.parse(xhr.responseText).data;
    //     setHomeAnime(data);
    //   }
    // };
    // xhr.open("get", `${getAnime}top/anime?page=${page}&limit=4`);
    // xhr.send();
  }, [page, getType, getFilter]);

  function addPage() {
    setPage((page = page + 1));
  }
  function removePage() {
    setPage((page = page - 1));
  }
  useEffect(() => {
    setPageButton(
      page > 1 ? (
        <>
          <button
            onClick={addPage}
            className="bg-gray-500 animate-[pops_300ms_ease] text-white border-b-4 border-gray-600 hover:bg-gray-400 px-4 rounded-sm py-2"
          >
            Next Page
          </button>
          <button
            onClick={removePage}
            className="bg-gray-500 text-white border-b-4 animate-[pops_300ms_ease] border-gray-600 hover:bg-gray-400 px-4 rounded-sm py-2"
          >
            Previous Page
          </button>
        </>
      ) : (
        <button
          onClick={addPage}
          className="bg-gray-500 text-white border-b-4 animate-[pops_300ms_ease] border-gray-600 hover:bg-gray-400 px-4 rounded-sm py-2"
        >
          Next Page
        </button>
      )
    );
  }, [page]);

  return (
    <div>
      <div className="w-full flex justify-between flex-wrap">
        {homeAnime.map((item) => (
          <div
            className="w-1/2 max-w-[13rem] my-1  mx-auto  h-auto flex flex-col justify-between items-center border-2 rounded-t-xl overflow-hidden"
            key={item.mal_id}
          >
            <div className="w-full">
              <div className="w-full max-w-[13rem]  h-[20rem] shadow-md relative group">
                <Image
                  src={item.images.webp.image_url}
                  layout="fill"
                  alt="images"
                  className="object-cover group-hover:scale-105 transition-all group-hover:brightness-75"
                ></Image>
              </div>
              <div className="py-2 px-3 w-full flex flex-col justify-between h-fit">
                <h3 className="font-Raleway font-semibold text-lg leading-5 my-2">
                  {item.title}
                </h3>
                <ul className="flex flex-col text-sm text-gray-700 mt-1">
                  <li className="leading-0">Score : {item.score} </li>
                  <li className="leading-0">
                    Popularity Rank : {item.popularity}{" "}
                  </li>
                  <li className="leading-0">Sumber : {item.source} </li>
                  <li className="leading-0">Status : {item.status} </li>
                  <li className="leading-0">Tahun : {item.year} </li>
                  {/* <li className="leading-0 ">
                    <p>Genre :</p>
                    <div className="w-full tracking-tighter indent-4">
                      {item.genres.map((genres) => (
                        <p key={genres.mal_id}>{genres.name}</p>
                      ))}
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="py-3 w-full fit px-4 text-blue-500 underline text-right text-xs">
              <Link href={item.url}>
                <a target="_blank">Selengkapnya</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center my-2 gap-2">{pageButton}</div>
    </div>
  );
}
