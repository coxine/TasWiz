import * as React from "react";


import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactMarkdown from 'react-markdown';

export default function TaskCard(prop) {
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
          aria-controls="panel3-content"
          id="panel3-header"
        >
          {prop.taskName}
        </AccordionSummary>

        <AccordionDetails>
          <Box sx={{
            maxHeight: '200px',
            overflow: 'auto',
          }}>
            <ReactMarkdown>
              {prop.taskDetail}
            </ReactMarkdown>
          </Box>
        </AccordionDetails>
        <AccordionActions>
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClickOpen}
          >
            更多
          </Button>
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="outlined"
            disableElevation
            color="error"
          >
            删除
          </Button>
        </AccordionActions>
      </Accordion>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        fullScreen="true"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{prop.taskName}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
            <ReactMarkdown>
              {prop.taskDetail}
            </ReactMarkdown>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">关闭</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}