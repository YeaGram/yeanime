import SectionHeader from "../header/sectionHeader";
import Card from "./card/card";

export default function Content() {
  return (
    <div className="mt-20 px-2">
      <SectionHeader>Anime List</SectionHeader>
      <div className="container mx-auto">
        <Card />
      </div>
    </div>
  );
}
