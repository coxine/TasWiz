import * as React from "react";
import { Delete, MoreVert } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ConfirmDialog from "./dialog/ConfirmDialog";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import TaskDialog from "./dialog/TaskDialog";
import { deleteTask } from "../utils/Task";

export default function TaskCard({ task, onTaskEdit }) {
  const [taskDialogOpen, toggleTaskDialog] = React.useState(false);
  const [confirmDialogOpen, toggleConfirmDialog] = React.useState(false);

  const showTaskDialog = () => {
    toggleTaskDialog(true);
  };

  const closeTaskDialog = () => {
    toggleTaskDialog(false);
  };

  const showConfirmDialog = () => {
    toggleConfirmDialog(true);
  };

  const closeConfirmDialog = () => {
    toggleConfirmDialog(false);
  };

  const handleDeleteTask = async () => {
    await deleteTask(task.taskID);
    console.log(`taskID: ${task.taskID}`);
    alert("任务删除成功");
    window.location.reload();
  };

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel-${task.taskID}-content`}
          id={`panel-${task.taskID}-header`}
        >
          {task.taskName}
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              maxHeight: "200px",
              overflow: "auto",
              wordWrap: "break-word",
            }}
          >
            <ReactMarkdown>{task.taskDetail}</ReactMarkdown>
          </Box>
        </AccordionDetails>

        <AccordionActions>
          <Button
            variant="contained"
            disableElevation
            onClick={showTaskDialog}
            endIcon={<MoreVert />}
          >
            更多
          </Button>
          <Button
            variant="outlined"
            disableElevation
            color="error"
            onClick={showConfirmDialog}
            endIcon={<Delete />}
          >
            删除
          </Button>
        </AccordionActions>
      </Accordion>
      <TaskDialog
        open={taskDialogOpen}
        handleClose={closeTaskDialog}
        task={task}
        onTaskEdit={onTaskEdit}
      />
      <ConfirmDialog
        open={confirmDialogOpen}
        handleClose={closeConfirmDialog}
        handleDelete={handleDeleteTask}
      />
    </>
  );
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  onTaskEdit: PropTypes.func.isRequired,
};
