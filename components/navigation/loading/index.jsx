import { AiOutlineLoading } from "react-icons/ai";

export default function ContentLoading() {
  return (
    <div className="fixed z-10 inset-0 flex flex-col justify-center items-center bg-rose-500/50 backdrop-blur-sm">
      <span className="animate-spin text-white text-2xl my-5 font-extrabold">
        <AiOutlineLoading />
      </span>
      <h1 className="block text-4xl font-Raleway font-bold text-white drop-shadow-md">
        Loading Mas..
      </h1>
    </div>
  );
}
