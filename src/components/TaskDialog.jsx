import * as React from "react";
import { Close, Comment, Edit } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import TaskEditDialog from "./TaskEditDialog";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { addComment } from "../utils/Tasks";

export default function TaskDialog({
  open,
  handleClose,
  taskID,
  taskName,
  taskDetail,
  comments,
}) {
  const [editOpen, setEditOpen] = React.useState(false);
  const [commentList, setCommentList] = React.useState(comments);

  const handleEditOpen = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleAddComment = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newCommentContent = data.get("comment");

    try {
      await addComment(taskID, newCommentContent);
      console.log(`taskID: ${taskID}, comment: ${newCommentContent}`);
      event.target.comment.value = "";

      const newComment = {
        content: newCommentContent,
        timestamp: Date.now(),
      };

      setCommentList((prevComments) => [...prevComments, newComment]);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        key={taskID}
        scroll="paper"
        fullScreen
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{taskName}</DialogTitle>
        <DialogContent dividers>
          <Typography variant="h6">任务详情</Typography>

          <Box sx={{ maxHeight: "300px", overflow: "auto" }}>
            <ReactMarkdown>{taskDetail}</ReactMarkdown>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Typography variant="h6">评论</Typography>
          <Box
            sx={{ my: 2 }}
            component="form"
            onSubmit={handleAddComment}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={11}>
                <TextField
                  id="comment"
                  label="添加评论"
                  type="text"
                  name="comment"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={1}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  endIcon={<Comment />}
                  sx={{ height: "100%" }}
                >
                  发表
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box id={`comment-${taskID}`}>
            {commentList.length > 0 ? (
              commentList.map((comment, index) => (
                <Box key={index} sx={{ my: 0.5 }}>
                  <Typography variant="body1" display="inline">
                    {comment.content}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="inline"
                    sx={{ ml: 1 }}
                  >
                    {new Date(comment.timestamp).toLocaleString()}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography>暂无评论</Typography>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleEditOpen}
            variant="contained"
            endIcon={<Edit />}
          >
            编辑
          </Button>
          <Button
            onClick={handleClose}
            variant="outlined"
            color="error"
            endIcon={<Close />}
          >
            关闭
          </Button>
        </DialogActions>
      </Dialog>
      <TaskEditDialog
        open={editOpen}
        handleClose={handleEditClose}
        taskID={taskID}
        taskName={taskName}
        taskDetail={taskDetail}
      />
    </>
  );
}

TaskDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  taskID: PropTypes.number.isRequired,
  taskName: PropTypes.string.isRequired,
  taskDetail: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
};
