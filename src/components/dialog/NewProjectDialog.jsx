import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { addProject } from '../../utils/Project';

export default function NewProjectDialog({
  open,
  handleClose,
}) {
  const [projectName, setProjectName] = React.useState('');

  const handleSubmit = async () => {
    await addProject(projectName);
    window.location.reload();
  }


  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>新建项目</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="taskName"
          name="taskName"
          label="项目名称"
          fullWidth
          variant="outlined"
          value={projectName}
          onChange={(event) => setProjectName(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>取消</Button>
        <Button onClick={handleSubmit}>增加项目</Button>
      </DialogActions>
    </Dialog>
  );
}

NewProjectDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};