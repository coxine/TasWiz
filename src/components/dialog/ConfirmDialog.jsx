import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';

export default function ConfirmDialog(
  { open, handleClose, handleDelete }
) {

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="Confirm-dialog-title"
      aria-describedby="Confirm-dialog-description"
    >
      <DialogTitle id="Confirm-dialog-title">
        {"您确定要删除吗？"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          请三思！您删除的操作是不可逆的。删除后您的任务或项目将<b>无法恢复</b>。
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          autofocus
        >
          取消
        </Button>
        <Button
          color="error"
          onClick={handleDelete}
        >
          删除
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};