import Project from "./Project";

import "./project.css";

import project_1_src from "asset/img/projects/project_1.png";
import project_2_src from "asset/img/projects/project_2.png";
import project_3_src from "asset/img/projects/project_3.png";
import project_4_src from "asset/img/projects/project_4.png";

const Projects = () => {
  return (
    <div className="mb-[116px]">
      <p className="color-dark text-[50px] font-semibold text-center mb-[25px]">
        PROJECTS WERE FUNDING
      </p>
      <p className="primary-text-content mb-[100px] text-center">
        create chaos
      </p>
      <div className="flex w-full justify-between">
        <Project
          src={project_1_src}
          title="Eating Meat At Vegan Protest"
          progress={"49%"}
          totalRaised="5,345"
          left="45"
          name="Cheyenne Curtis"
          stars={3}
          campagin={12}
          region="New York, London"
        />
        <Project
          src={project_2_src}
          title="TIPPING OVER STOP OIL PROTESTORS"
          progress={"40%"}
          totalRaised="5,345"
          left="45"
          name="Ahmad Schleifer"
          stars={3}
          campagin={12}
          region="New York, London"
        />
        <Project
          src={project_3_src}
          title="Theres only 2 genders shirts"
          progress={"85%"}
          totalRaised="5,345"
          left="45"
          name="Skylar Gouse"
          stars={3}
          campagin={12}
          region="New York, London"
        />
        <Project
          src={project_4_src}
          title="fuck the rainbow shirts"
          progress={"9%"}
          totalRaised="5,345"
          left="45"
          name="Maren George"
          stars={3}
          campagin={12}
          region="New York, London"
        />
      </div>
    </div>
  );
};

export default Projects;
