import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            sequi quis incidunt, nobis quae consequatur consequuntur nemo facere
            est et quaerat iusto cumque vel amet officia alias error aspernatur
            dolor!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Kamal</div>
          <div>10 jun, 6pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
