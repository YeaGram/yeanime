import Link from "next/link";

export default function NavItems({ url, children }) {
  return (
    <Link href={url}>
      <a className="font-Raleway text-gray-600 hover:text-gray-700 rounded-sm transition-all hover:bg-gray-200 py-2 px-4 border-2 sm:border-0 sm:drop-shadow-none drop-shadow-md sm:my-0 sm:w-auto my-1 w-full text-center ">
        {children}
      </a>
    </Link>
  );
}
