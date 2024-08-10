import * as React from "react";

import { Add, Delete } from "@mui/icons-material";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import TaskCard from "./TaskCard";

export default function TaskList(prop) {
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

          <TaskCard taskName="任务1" taskDetail="
# 任务细节
## 可以用

**mark***down*

`123`

```python
print('hell world')
print('hello world')  
```" />
          <TaskCard taskName="任务2" taskDetail="任务细节" />
        </React.Fragment>
      </Card>
    </Box>
  );
}
