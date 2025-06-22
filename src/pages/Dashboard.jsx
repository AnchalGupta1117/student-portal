import SummaryCard from "../components/SummaryCard";

export default function Dashboard() {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen p-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      <SummaryCard title="GPA" value="3.85" />
      <SummaryCard title="Attendance" value="90%" />
      <SummaryCard title="Subjects" value="12/15" />
    </div>
  );
}
