import Link from "next/link";

export default function NavItems({ url, children }) {
  return (
    <Link href={url}>
      <a className="font-Raleway text-gray-600 hover:text-gray-100 rounded-sm transition-all hover:bg-rose-600 hover:from-rose-600 target:ring-2 target:ring-offset-2 py-2 px-4 sm:border-0 sm:shadow-none shadow-sm bg-gradient-to-t from-gray-50 sm:my-0 sm:w-auto my-1 w-full text-center ">
        {children}
      </a>
    </Link>
  );
}
