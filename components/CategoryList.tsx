import { Category, CategoryFetch } from "@/typing";
import { sanityClient } from "../lib/client";
import CategoryCard from "./CategoryCard";


const categoriesFetch = async (): Promise<CategoryFetch> => {
  const queryCategory = `*[ _type == "category" ]{
        ...,
        "projects": *[ _type == "projects" && ^._id in categories[]._ref ],
      }
      `;
  const res = await sanityClient.fetch(queryCategory, {
    next: {
      revalidate: 60,
    },
  });
  return res;
};

 const CategoryList = async () =>{
  const categories = await categoriesFetch();
  return (
    <>
      <div className="bg-backgroundSec py-20 w-full flex flex-col items-center justify-center">
        {categories.map((category) => (
          <CategoryCard category={category} key={category._id} />
        ))}
        <hr className="border border-main/30 mt-8 mb-[2rem] layout" />
      </div>
    </>
  );
}

export default CategoryList