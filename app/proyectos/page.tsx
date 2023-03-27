import CategoryList from "../components/CategoryList";

export default function Projects() {
  return (
    <div className="w-screen min-h-screen flex items-center ">
      {/* @ts-expect-error Async Server Component */}
      <CategoryList />
    </div>
  );
}
