import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  return (
    <Box id="hero">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 4, sm: 10 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TaskList title="待办" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TaskList title="进行中" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TaskList title="完成" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TaskList title="4" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button variant="outlined" fullWidth size="large">
                  新建项目组
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" fullWidth size="large">
                  导出全部项目组
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
