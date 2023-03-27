import CategoryList from "../components/CategoryList";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import SectionCompany from "../components/SectionCompany";
import Sponsor from "../components/Sponsor";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-500">
      <Hero />
      <SectionCompany />
      {/* @ts-expect-error Async Server Component */}
      <CategoryList />
      <Sponsor />
      <Contact />
    </main>
  );
}
