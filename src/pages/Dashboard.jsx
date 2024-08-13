import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ProjectList from "../components/ProjectList";
import Typography from "@mui/material/Typography";
import { getProjects } from "../utils/Project";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const result = await getProjects();
        setProjects(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setError(true);
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const handleTaskEdit = (updatedTask) => {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.map((project) => ({
        ...project,
        tasks: project.tasks.map((task) =>
          task.taskID === updatedTask.taskID ? updatedTask : task,
        ),
      }));

      return updatedProjects;
    });
  };

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
          <Typography variant="h4">加载中……</Typography>
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
          <Typography variant="h4">
            获取任务失败！请确认您的网络或登录状态。
          </Typography>
        </Container>
      </Box>
    );
  }

  if (!projects || projects.length === 0) {
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
        <ProjectList data={projects} onTaskEdit={handleTaskEdit} />
      </Container>
    </Box>
  );
}
