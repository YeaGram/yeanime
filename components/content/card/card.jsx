import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MyRequest } from "../../funct/doRequest";
import { MyChangeState } from "../../funct/doChangeState";
import ContentBtn from "../../button/contentNav";

export default function Card() {
  const [homeAnime, setHomeAnime] = useState([]);
  const [pageButton, setPageButton] = useState();
  const [getType, setGetType] = useState("");
  const [getFilter, setGetFilter] = useState("");
  let [page, setPage] = useState(1);

  const getAnime = "https://api.jikan.moe/v4/anime";
  const getTopAnime = "https://api.jikan.moe/v4/top/anime?";

  const params = new URLSearchParams({
    type: getType,
    filter: getFilter,
    page: page,
    limit: 3,
  });

  useEffect(() => {
    MyChangeState(setGetFilter, "#selFilter");
    MyChangeState(setGetType, "#selGroup");
    MyRequest(setHomeAnime, getTopAnime + params.toString());

    setPageButton(
      page > 1 ? (
        <div className="flex w-full justify-center gap-2">
          <div className="flex w-full justify-end">
            <ContentBtn
              setToPage={setPage}
              currentPage={page}
              operator={true}
              pageController={true}
            >
              Next Page
            </ContentBtn>
          </div>
          <div className="flex w-full justify-start">
            <ContentBtn
              setToPage={setPage}
              currentPage={page}
              operator={false}
              pageController={true}
            >
              Previous Page
            </ContentBtn>
          </div>
        </div>
      ) : (
        <ContentBtn
          setToPage={setPage}
          currentPage={page}
          operator={true}
          pageController={true}
        >
          Next Page
        </ContentBtn>
      )
    );
  }, [page, getType, getFilter]);

  return (
    <div>
      <div className="w-full flex justify-center flex-wrap">
        {homeAnime.map((item) => (
          <div
            className="w-full max-w-[13rem] m-1 h-auto flex flex-col justify-evenly items-center shadow-md rounded-t-xl overflow-hidden"
            key={item.mal_id}
          >
            <div className="w-full h-full">
              <div className="w-full  h-[18rem] shadow-md relative group">
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
              <Link href={`/anime/${item.mal_id}`}>
                <a>Selengkapnya</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center my-2 gap-2">{pageButton}</div>
    </div>
  );
}

// Fetch ================================>
// const getThatAnime = (target, spec) => {
//   fetch(spec)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       let datas = data.data;
//       target(datas);
//     })
//     .catch((err) => console.log(err));
// };

// Render ==============================>
// const sfl = document.querySelector("#selFilter");
// sfl.addEventListener("change", (e) => {
//   setGetFilter(sfl.value);
// });
// getThatAnime(setHomeAnime, getTopAnime + params.toString());

// AJax ==========================>
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = () => {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     const data = JSON.parse(xhr.responseText).data;
//     setHomeAnime(data);
//   }
// };
// xhr.open("get", `${getAnime}top/anime?page=${page}&limit=4`);
// xhr.send();
