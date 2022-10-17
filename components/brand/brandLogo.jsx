import Link from "next/link";

export default function Brand() {
  return (
    <Link href="#">
      <a className="block font-Merriweather text-2xl text-gray-700 tracking-tighter">
        Yea
        <span className="font-black text-rose-600 tracking-tighter">Nime</span>
      </a>
    </Link>
  );
}
