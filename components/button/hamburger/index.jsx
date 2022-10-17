export default function HamburgerButton({ isEvent }) {
  return (
    <div
      className={`block w-[30px] h-[15px] relative transition-all delay-200  ${
        !isEvent ? "rotate-0  " : "rotate-[90deg]"
      }`}
    >
      {/* FirstLine */}
      <span
        className={`block absolute transition-all w-full ${
          !isEvent ? "top-0 delay-100" : "top-1/2 -translate-y-1/2"
        }`}
      >
        <span
          className={`${
            isEvent
              ? "rotate-45 delay-[100ms] bg-rose-600"
              : "rotate-0  bg-black"
          } w-full h-[3px] box-content  transition-all  block absolute origin-center`}
        ></span>
      </span>

      {/* MiddleLine */}
      <span
        className={`${
          isEvent ? "opacity-0 " : "opacity-100  bg-black"
        } w-full h-[3px] transition-all top-1/2 block absolute origin-center`}
      ></span>

      {/* LastLine */}
      <span
        className={`block absolute transition-all w-full ${
          !isEvent ? "bottom-0 delay-100" : "bottom-1/2 translate-y-1/2"
        }`}
      >
        <span
          className={`${
            isEvent
              ? "-rotate-45 delay-[100ms] bg-rose-600 "
              : "rotate-0  bg-black"
          } w-full h-[3px] transition-all  block absolute origin-center`}
        ></span>
      </span>
    </div>
  );
}
