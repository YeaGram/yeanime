import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Card() {
  const [homeAnime, setHomeAnime] = useState([]);
  const [pageButton, setPageButton] = useState();
  let [page, setPage] = useState(1);
  const path = "https://api.jikan.moe/v4/";

  useEffect(() => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const data = JSON.parse(xhr.responseText).data;
        setHomeAnime(data);
      }
    };

    xhr.open("get", `${path}top/anime?page=${page}`);
    xhr.send();
  }, [page]);

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
            className="bg-gray-500 text-white border-b-4 border-gray-600 hover:bg-gray-400 px-4 rounded-sm py-2"
          >
            Next Page
          </button>
          <button
            onClick={removePage}
            className="bg-gray-500 text-white border-b-4 border-gray-600 hover:bg-gray-400 px-4 rounded-sm py-2"
          >
            Previous Page
          </button>
        </>
      ) : (
        <button
          onClick={addPage}
          className="bg-gray-500 text-white border-b-4 border-gray-600 hover:bg-gray-400 px-4 rounded-sm py-2"
        >
          Next Page
        </button>
      )
    );
  }, [page]);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div>
      <div className="w-full flex justify-between flex-wrap">
        {homeAnime.map((item) => (
          <div
            className="w-1/2 max-w-[13rem] my-1  mx-auto  h-auto flex flex-col justify-between items-center border-2"
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
                  <li className="leading-0">Duration : {item.duration} </li>
                  <li className="leading-0 ">
                    <p>Genre :</p>
                    <div className="w-full tracking-tighter indent-4">
                      {item.genres.map((genres) => (
                        <p key={genres.mal_id}>{genres.name}</p>
                      ))}
                    </div>
                  </li>
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
