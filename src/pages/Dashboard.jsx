import Box from "@mui/material/Box";
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
            <TaskList title="第四个" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
