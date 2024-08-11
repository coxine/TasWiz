import * as React from "react";
import { Close, Comment, Edit } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import TaskEditDialog from './TaskEditDialog';
import Typography from '@mui/material/Typography';

export default function TaskDialog({ open, handleClose, taskName, taskDetail, comments }) {
    const [editOpen, setEditOpen] = React.useState(false);

    const handleEditOpen = () => {
        setEditOpen(true);
    };

    const handleEditClose = () => {
        setEditOpen(false);
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll="paper"
                fullScreen
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">{taskName}</DialogTitle>
                <DialogContent dividers>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >
                        <Typography variant="h6">任务详情</Typography>
                        <Box sx={{ maxHeight: '300px', overflow: 'auto' }}>
                            <ReactMarkdown>{taskDetail}</ReactMarkdown>
                        </Box>
                    </DialogContentText>
                    <Divider sx={{ my: 1 }} />
                    <DialogContentText>
                        <Typography variant="h6">评论</Typography>
                        {comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <Typography key={index}>{comment.content}</Typography>
                            ))
                        ) : (
                            <Typography>暂无评论</Typography>
                        )}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" endIcon={<Comment />}>评论</Button>
                    <Button onClick={handleEditOpen} variant="contained" endIcon={<Edit />}>编辑</Button>
                    <Button onClick={handleClose} variant="outlined" color="error" endIcon={<Close />}>关闭</Button>
                </DialogActions>
            </Dialog>
            <TaskEditDialog
                open={editOpen}
                handleClose={handleEditClose}
                taskName={taskName}
                taskDetail={taskDetail}
            />
        </>
    );
}

TaskDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    taskName: PropTypes.string.isRequired,
    taskDetail: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
};
