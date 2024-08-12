import * as React from "react";
import { Add, Delete } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import ConfirmDialog from "./dialog/ConfirmDialog";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import TaskCard from "./TaskCard";
import { deleteProject } from "../utils/Project";

export default function ProjectCard({ project, onTaskEdit }) {

  const [confirmDialogOpen, toggleConfirmDialog] = React.useState(false);

  const showConfirmDialog = () => {
    toggleConfirmDialog(true);
  }

  const closeConfirmDialog = () => {
    toggleConfirmDialog(false);
  }


  const handleDeleteProject = async () => {
    await deleteProject(project.projectID);
    window.location.reload();
  }

  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardHeader
            title={project.projectName}
            action={
              <>
                <IconButton aria-label="add">
                  <Add />
                </IconButton>
                <IconButton aria-label="delete" color="error" onClick={showConfirmDialog}>
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
      <ConfirmDialog
        open={confirmDialogOpen}
        handleClose={closeConfirmDialog}
        handleDelete={handleDeleteProject}
      />
    </>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  onTaskEdit: PropTypes.func.isRequired,
};
