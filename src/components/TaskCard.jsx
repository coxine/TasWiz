import * as React from "react";
import { Delete, MoreVert } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import TaskDialog from "./TaskDialog";
import { deleteTask } from "../utils/Tasks";

export default function TaskCard({ task, onTaskEdit }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
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
            onClick={handleClickOpen}
            endIcon={<MoreVert />}
          >
            更多
          </Button>
          <Button
            variant="outlined"
            disableElevation
            color="error"
            onClick={handleDelete}
            endIcon={<Delete />}
          >
            删除
          </Button>
        </AccordionActions>
      </Accordion>
      <TaskDialog
        open={open}
        handleClose={handleClose}
        task={task}
        onTaskEdit={onTaskEdit}
      />
    </>
  );
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  onTaskEdit: PropTypes.func.isRequired,
};
