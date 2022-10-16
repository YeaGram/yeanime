import Card from "./card";

export default function Content() {
  return (
    <div className="my-5 px-2">
      <h1 className="font-Raleway text-4xl font-bold text-gray-700 indent-5 py-2 text-center">
        AnimeList
      </h1>
      <div className="container mx-auto">
        <Card />
      </div>
    </div>
  );
}
