import * as React from "react";

import { Delete, Edit } from "@mui/icons-material";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function TaskCard(prop) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        {prop.taskName}
      </AccordionSummary>
      <AccordionDetails>{prop.taskDetail}</AccordionDetails>
      <AccordionActions>
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          endIcon={<Edit />}
        >
          编辑
        </Button>
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="outlined"
          disableElevation
          color="error"
          endIcon={<Delete />}
        >
          删除
        </Button>
      </AccordionActions>
    </Accordion>
  );
}
