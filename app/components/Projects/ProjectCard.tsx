"use client";
import { CodeIcon, EyeIcon } from "@/app/common/IconifyIcons";
import Link from "next/link";

type ProjectCardProps = {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: ProjectCardProps) => {
  return (
    <div>
      <div className="md:h-72 rounded-xl relative group">
        <div
          className="h-52 md:h-72 rounded-t-xl relative group bg-contain"
          style={{ background: `url(${imgUrl})`, backgroundSize: "contain" }}
        >
          <div className="overlay items-center z-10 justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-2 relative border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeIcon
                size={40}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"
              />
            </Link>
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon
                size={40}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"
              />
            </Link>
          </div>
          <div className="absolute bottom-0 rounded-t-lg text-white mt-3 bg-project-bg w-full py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#ADB7BE]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
