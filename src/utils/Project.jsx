import axios from "axios";
import config from "../config/config";
import handleError from "./HandleError";

export const getProjects = async () => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(`${config.backendUrl}/api/projects`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {
        username: username,
      },
    });

    if (response.status === 200) {
      console.log("用户任务查询成功", response.data);
      return response.data;
    } else {
      alert("用户任务查询失败，请重试");
      throw new Error("用户任务查询失败，请重试");
    }
  } catch (error) {
    handleError(error);
  }
};

export const deleteProject = async (projectId) => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  try {
    const response = await axios.delete(`${config.backendUrl}/api/project`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        projectId: projectId,
        username: username,
      },
    });

    if (response.status === 200) {
      console.log("项目删除成功", response.data);
      return response.data;
    } else {
      alert("项目删除失败，请重试");
      throw new Error("项目删除失败，请重试");
    }
  } catch (error) {
    handleError(error);
  }
};

export const addProject = async (projectName) => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  try {
    const response = await axios.post(
      `${config.backendUrl}/api/project`,
      {
        username: username,
        projectName: projectName,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.status === 201) {
      console.log("项目创建成功", response.data);
      return response.data;
    } else {
      alert("项目创建失败，请重试");
      throw new Error("项目创建失败，请重试");
    }
  } catch (error) {
    handleError(error);
  }
};
