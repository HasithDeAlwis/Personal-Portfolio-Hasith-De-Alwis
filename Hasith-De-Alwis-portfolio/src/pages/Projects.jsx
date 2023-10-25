import React from "react";
import styles from "../styles";
import ProjectCard from "../components/ProjectCard";
import SocialMedia from "../components/SocialMedia";
const Projects = () => {
  return (
    <div className="container min-w-full">
      <h1 className={`${styles.heading}`}>Projects</h1>
      <div className="flex flex-col sm:flex-row justify-center">
        <div className="sm:basis-10/12">
          <ProjectCard />
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Projects;
