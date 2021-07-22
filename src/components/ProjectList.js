import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectListElements = projects.map((project)=>{
    return (
      <ProjectItem key={project.id}>
        {project.name},
        
        {project.about},

        {project.techologies}
        
        
        </ProjectItem>
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectListElements}</div>
    </div>
  );
}

export default ProjectList;
