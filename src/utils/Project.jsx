import axios from "axios";
import config from "../config/config";

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
    if (error.response && error.response.status === 401) {
      alert("未授权");
      throw new Error("未授权");
    } else if (error.response && error.response.status === 404) {
      alert("用户不存在");
      throw new Error("用户不存在");
    } else {
      alert("用户任务查询失败，请重试");
      throw new Error("用户任务查询失败，请重试");
    }
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
    if (error.response && error.response.status === 401) {
      alert("未授权");
      throw new Error("未授权");
    } else if (error.response && error.response.status === 404) {
      alert("项目不存在");
      throw new Error("项目不存在");
    } else {
      alert("项目删除失败，请重试");
      throw new Error("项目删除失败，请重试");
    }
  }
};

export const addProject = async (projectName) => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  try {
    const response = await axios.post(`${config.backendUrl}/api/project`, {
      username: username,
      projectName: projectName,
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 201) {
      console.log("项目创建成功", response.data);
      return response.data;
    } else {
      alert("项目创建失败，请重试");
      throw new Error("项目创建失败，请重试");
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      alert("未授权");
      throw new Error("未授权");
    } else if (error.response && error.response.status === 400) {
      alert("请求数据无效");
      throw new Error("请求数据无效");
    } else {
      alert("项目创建失败，请重试");
      throw new Error("项目创建失败，请重试");
    }
  }
};