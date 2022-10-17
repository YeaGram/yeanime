import SectionHeader from "../header/sectionHeader";
import Card from "./card/card";

export default function Content() {
  return (
    <div className="mt-20 px-2">
      <SectionHeader quote="data yang ditampilkan berdasarkan urutan skor.">
        Top Anime List{" "}
      </SectionHeader>
      <div className="flex gap-4 my-2 justify-center">
        <div className="flex items-center gap-2">
          <h4 className="">Type : </h4>
          <select
            name="selGroup"
            id="selGroup"
            className="block px-2 py-2 rounded-lg"
          >
            <option value="">Default</option>
            <option value="tv">Tv</option>
            <option value="movie">Movie</option>
            <option value="ova">Ova</option>
            <option value="special">Special</option>
            <option value="ona">Ona</option>
            <option value="music">Music</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <h4 className="">Filter : </h4>
          <select
            name="selFilter"
            id="selFilter"
            className="block px-2 py-2 rounded-lg"
          >
            <option value="">Default</option>
            <option value="airing">Airing</option>
            <option value="upcoming">Upcoming</option>
            <option value="bypopularity">Popularity</option>
            <option value="favorite">Favorite</option>
          </select>
        </div>
      </div>
      <div className="container mx-auto">
        <Card />
      </div>
    </div>
  );
}
