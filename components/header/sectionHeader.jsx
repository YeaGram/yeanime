export default function SectionHeader({ headId, children, quote }) {
  return (
    <div>
      <h2
        id={headId}
        className="font-Raleway text-4xl font-bold text-gray-700 indent-5 py-2 text-center"
      >
        {children}

        <blockquote className="block text-xs font-light my-1 italic opacity-50">
          {quote}
        </blockquote>
      </h2>
    </div>
  );
}
