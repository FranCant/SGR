import { sanityClient } from "@/lib/client";
import ProjectDetail from "@/app/components/ProjectDetail";

const projectFetch = async (slugProject:string) => {
  const query = `*[_type == "projects" && slug.current == $slugProject][0]`;
  const res = await sanityClient.fetch(query, {
    slugProject: slugProject,
    next: {
      revalidate: 60,
    },
  });

  return res;
};

interface Props {
  params: {
    slugProject: string;
  };
}

export default async function Project({ params: { slugProject } }: Props) {
  const projects = await projectFetch(slugProject);
  return (
    <div className="min-h-main w-full">
      <ProjectDetail projects={projects} />
    </div>
  );
}

// Static Params
export async function generateStaticParams() {
  const query = `*[_type == "projects"] {
    slug {
      current
    }
  }
  `;
  const res:Array<{slug:{current:string}}> = await sanityClient.fetch(query);
  // console.log(res)
  return res.map((pro) => ({
    slugProject: pro.slug.current.toString(),
  }));
}
