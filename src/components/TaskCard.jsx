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
import ReactMarkdown from 'react-markdown';
import TaskDialog from './TaskDialog';

export default function TaskCard({ task }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <Box sx={{ maxHeight: '200px', overflow: 'auto' }}>
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
            endIcon={<Delete />}
          >
            删除
          </Button>
        </AccordionActions>
      </Accordion>
      <TaskDialog
        open={open}
        handleClose={handleClose}
        taskName={task.taskName}
        taskDetail={task.taskDetail}
        comments={task.comments}
      />
    </>
  );
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
};
