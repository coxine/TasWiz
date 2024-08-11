import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ProjectList from "../components/ProjectList";
import Typography from "@mui/material/Typography";
import { getTasks } from "../utils/Tasks";

export default function Dashboard() {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const result = await getTasks();
        setTasks(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setError(true);
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  if (loading) {
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
          <Typography variant="h4">Loading...</Typography>
        </Container>
      </Box>
    );
  }

  if (error) {
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
          <Typography variant="h4">Error fetching tasks!</Typography>
        </Container>
      </Box>
    );
  }

  if (!tasks || tasks.length === 0) {
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
          <Typography variant="h4">No tasks available</Typography>
        </Container>
      </Box>
    );
  }

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
        <ProjectList data={tasks.data} />
      </Container>
    </Box>
  );
}
