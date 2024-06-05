"use client";

import React, { useRef, useState } from "react";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";
import projectData from "./projectData";
import Container from "../Container";

const Project = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <Container>
        <div className="w-full p-6">
          <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
            My Projects
          </h2>
          <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag
              onClick={handleTagChange}
              name="All"
              isSelected={tag === "All"}
            />
            <ProjectTag
              onClick={handleTagChange}
              name="Web"
              isSelected={tag === "Web"}
            />
            <ProjectTag
              onClick={handleTagChange}
              name="Mobile"
              isSelected={tag === "Mobile"}
            />
          </div>
          <div>
            {filteredProjects.length === 0 ? (
              <div className="w-full text-xl self-center justify-center font-bold">
                <p className="text-center">No Projects On this Category Yet.</p>
              </div>
            ) : (
              <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Project;
