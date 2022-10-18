export default function ContentBtn({
  setToPage,
  currentPage,
  operator,
  pageController,
  children,
}) {
  if (pageController) {
    if (operator) {
      return (
        <button
          onClick={() => setToPage((currentPage = currentPage + 1))}
          className="bg-gray-500 animate-[pops_300ms_ease] text-white border-b-4 border-gray-600 hover:bg-gray-400 px-4 rounded-sm py-2"
        >
          {children}
        </button>
      );
    } else if (!operator) {
      return (
        <button
          onClick={() => setToPage((currentPage = currentPage - 1))}
          className="bg-gray-500 animate-[pops_300ms_ease] text-white border-b-4 border-gray-600 hover:bg-gray-400 px-4 rounded-sm py-2"
        >
          {children}
        </button>
      );
    }
  } else {
    return <div>regular btn</div>;
  }
}
