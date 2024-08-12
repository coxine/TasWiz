import * as React from "react";
import { Add, Delete } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import TaskCard from "./TaskCard";

export default function ProjectCard({ project, onTaskEdit }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardHeader
          title={project.projectName}
          action={
            <>
              <IconButton aria-label="add">
                <Add />
              </IconButton>
              <IconButton aria-label="delete" color="error">
                <Delete />
              </IconButton>
            </>
          }
        />
        {project.tasks.map((task) => (
          <TaskCard key={task.taskID} task={task} onTaskEdit={onTaskEdit} />
        ))}
      </Card>
    </Box>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  onTaskEdit: PropTypes.func.isRequired,
};
