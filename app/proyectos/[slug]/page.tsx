import ProjectCard from "@/components/ProjectCard";
import { sanityClient } from "@/lib/client";
import { CategoryFetch, Params } from "@/typing";

const categoriesFetch = async (slug: string): Promise<CategoryFetch> => {
  const query = `*[_type == "category" && slug.current == $slug][0]{
    slug {
      current
    },
    "projects": *[ _type == "projects" && ^._id in categories[]._ref ],
  }`;

  const res = await sanityClient.fetch(query, {
    slug: slug,
    next: {
      revalidate: 60,
    },
  });

  return res.projects;
};

export default async function Projects({ params: { slug } }: Params) {
  const projectList = await categoriesFetch(slug);

  return (
    <div className="w-full flex items-center pb-10 pt-28">
      <div className="layout min-h-main grid grid-cols-1 md:grid-cols-3 items-baseline justify-center gap-3">
        {projectList?.map((project) => (
          <ProjectCard project={project} key={project._id} />
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const query = `*[_type == "category"] {
    _id,
    slug {
      current
    }
  }
  `;
  const res = await sanityClient.fetch(query);
  return res.map((pro: any) => ({
    slug: pro.slug.current.toString(),
  }));
}
