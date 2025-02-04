import * as React from "react";
import { Close, Save } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { editTask } from "../../utils/Task";

export default function TaskEditDialog({
  comments,
  open,
  handleClose,
  taskID,
  taskName,
  taskDetail,
  onTaskEdit,
}) {
  const [title, setTitle] = React.useState(taskName);
  const [detail, setDetail] = React.useState(taskDetail);

  const handleSave = async () => {
    const updatedTask = {
      taskID,
      taskName: title,
      taskDetail: detail,
      comments: comments,
    };
    await editTask(taskID, title, detail);
    onTaskEdit(updatedTask);
  };

  const saveAndClose = () => {
    handleSave();
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      taskid={taskID}
      scroll="paper"
      fullScreen
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">编辑任务</DialogTitle>
      <DialogContent dividers>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="任务标题"
          type="text"
          fullWidth
          required
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} variant="contained" endIcon={<Save />}>
          保存
        </Button>
        <Button
          onClick={saveAndClose}
          variant="outlined"
          color="error"
          endIcon={<Close />}
        >
          关闭
        </Button>
      </DialogActions>
    </Dialog>
  );
}

TaskEditDialog.propTypes = {
  comments: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  taskID: PropTypes.number.isRequired,
  taskName: PropTypes.string.isRequired,
  taskDetail: PropTypes.string.isRequired,
  onTaskEdit: PropTypes.func.isRequired,
};
