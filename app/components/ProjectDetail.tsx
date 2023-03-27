"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { BsArrowLeft } from "react-icons/bs";
import { urlFor } from "@/lib/client";

interface Props {
  projects: 
    {
      body: []
      title: string
      imagesGallery:Array<{
        _key: string
        asset:{
          _ref: string
        }
      }
  >
}
}

export default function ProjectDetail({ projects }: Props) {
  const router = useRouter();
  return (
    <div className="w-full flex items-center flex-col pt-14 ">
      <div className="layout py-20 flex flex-col items-center justify-center">
        <div className="flex flex-col space-y-2">
          <h1 className="text-5xl">{projects?.title}</h1>
          <PortableText value={projects?.body} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {projects?.imagesGallery.map((el) => (
            <div className="relative" key={el._key}>
              <Image
                width={800}
                height={800}
                src={urlFor(el.asset._ref).url()!}
                key={el?._key}
                priority
                alt={el?._key}
              />
            </div>
          ))}
        </div>
        <div
          onClick={() => router.back()}
          className="cursor-pointer ml-auto mt-8 rounded px-5 py-2.5 overflow-hidden group bg-fill relative hover:bg-gradient-to-r hover:from-fill hover:to-fill/70 text-white hover:ring-2 hover:ring-offset-2 hover:ring-fill/70 transition-all ease-in-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="flex items-center">
            <BsArrowLeft className="h-5 w-5 mr-2" />
            Volver
          </span>
        </div>
      </div>
    </div>
  );
}
