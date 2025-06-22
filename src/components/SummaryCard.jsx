export default function SummaryCard({ title, value }) {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded shadow hover:scale-105 transition-transform">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-3xl font-bold text-blue-600">{value}</p>
    </div>
  );
}
