import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { addTask } from "../../utils/Task";

export default function NewTaskDialog({ projectID, open, handleClose }) {
  const [taskName, setTaskName] = React.useState("");
  const [taskDetail, setTaskDetail] = React.useState("");

  const handleSubmit = async () => {
    await addTask(taskName, taskDetail, projectID);
    window.location.reload();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>新建项目</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="taskName"
          name="taskName"
          label="任务名称"
          fullWidth
          variant="outlined"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        />
        <TextField
          margin="dense"
          id="detail"
          label="任务详情（支持Markdown）"
          type="text"
          fullWidth
          required
          variant="outlined"
          multiline
          minRows={8}
          maxRows={20}
          value={taskDetail}
          onChange={(event) => setTaskDetail(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>取消</Button>
        <Button onClick={handleSubmit}>增加项目</Button>
      </DialogActions>
    </Dialog>
  );
}

NewTaskDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  projectID: PropTypes.number.isRequired,
};
