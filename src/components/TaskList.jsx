import * as React from "react";

import { Add, Delete } from "@mui/icons-material";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import TaskCard from "./TaskCard";

export default function TaskList(prop) {
  const taskdtl = `
  # 111
  
  ## 222

  ### 333

  \`hell world\`

  > Do you hear the people sing?
  >
  > Singing the song of angry men?
  >
  > It is the music of the people
  >
  > Who will not be slaves again!
  >
  > When the beating of your heart
  >
  > Echoes the beating of the drums
  >
  > There is a life about to start
  >
  > When tomorrow comes!
  >
  > Will you join in our crusade?
  >
  > Who will be strong and stand with me?
  >
  > Beyond the barricade
  >
  > Is there a world you long to see?
  >
  > Then join in the fight
  >
  > That will give you the right to be free!

  `;
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardHeader
            title={prop.title}
            action={
              <>
                <IconButton aria-label="settings">
                  <Add />
                </IconButton>
                <IconButton aria-label="delete" color="error">
                  <Delete />
                </IconButton>
              </>
            }
          />

          <TaskCard taskName="任务1" taskDetail={taskdtl} />
          <TaskCard taskName="任务2" taskDetail="任务细节" />
        </React.Fragment>
      </Card>
    </Box>
  );
}
