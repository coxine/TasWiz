import * as React from "react";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";
import PropTypes from "prop-types";

export default function ProjectList({ data, onTaskEdit }) {
  return (
    <Grid container spacing={2}>
      {data.map((project) => (
        <Grid item xs={12} md={4} key={project.projectID}>
          <ProjectCard project={project} onTaskEdit={onTaskEdit} />
        </Grid>
      ))}
    </Grid>
  );
}

ProjectList.propTypes = {
  data: PropTypes.array.isRequired,
  onTaskEdit: PropTypes.func.isRequired,
};
