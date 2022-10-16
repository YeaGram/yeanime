export default function Hamburger(event) {
  return (
    <div className="flex w-[30px] h-[20px] flex-col justify-between gap-[4px]">
      <span className="block bg-black h-1/3 w-full rounded-sm"></span>
      <span className="block bg-black h-1/3 w-full rounded-sm"></span>
      <span className="block bg-black h-1/3 w-full rounded-sm"></span>
    </div>
  );
}
