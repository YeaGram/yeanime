export default function SectionHeader({ headId, children }) {
  return (
    <div>
      <h2
        id={headId}
        className="font-Raleway text-4xl font-bold text-gray-700 indent-5 py-2 text-center"
      >
        {children}
      </h2>
    </div>
  );
}
