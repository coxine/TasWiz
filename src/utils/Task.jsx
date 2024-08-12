import axios from "axios";
import config from "../config/config";

export const addComment = async (taskId, comment) => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const timestamp = Date.now();

  try {
    const response = await axios.post(
      `${config.backendUrl}/api/comments`,
      {
        username: username,
        taskId: taskId,
        comment: comment,
        timestamp: timestamp,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.status === 200) {
      console.log("评论添加成功", response.data);
      return response.data;
    } else {
      alert("评论添加失败，请重试");
      throw new Error("评论添加失败，请重试");
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      alert("未授权");
      throw new Error("未授权");
    } else {
      alert("评论添加失败，请重试");
      throw new Error("评论添加失败，请重试");
    }
  }
};

export const editTask = async (taskId, taskName, taskDetail) => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const timestamp = Date.now();

  try {
    const response = await axios.put(
      `${config.backendUrl}/api/task`,
      {
        taskId: taskId,
        taskName: taskName,
        taskDetail: taskDetail,
        username: username,
        timestamp: timestamp,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.status === 200) {
      console.log("任务编辑成功", response.data);
      return response.data;
    } else {
      alert("任务编辑失败，请重试");
      throw new Error("任务编辑失败，请重试");
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      alert("未授权");
      throw new Error("未授权");
    } else if (error.response && error.response.status === 404) {
      alert("保存失败，任务不存在");
      throw new Error("保存失败，任务不存在");
    } else {
      alert("任务编辑失败，请重试");
      throw new Error("任务编辑失败，请重试");
    }
  }
};

export const deleteTask = async (taskId) => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  try {
    const response = await axios.delete(`${config.backendUrl}/api/task`, {
      data: {
        taskId: taskId,
        username: username,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      console.log("任务删除成功", response.data);
      return response.data;
    } else {
      alert("任务删除失败，请重试");
      throw new Error("任务删除失败，请重试");
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      alert("未授权");
      throw new Error("未授权");
    } else if (error.response && error.response.status === 404) {
      alert("任务不存在");
      throw new Error("任务不存在");
    } else {
      alert("任务删除失败，请重试");
      throw new Error("任务删除失败，请重试");
    }
  }
};

export const queryTask = async (taskId) => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(`${config.backendUrl}/api/task`, {
      params: {
        taskId: taskId,
        username: username,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      console.log("任务查询成功", response.data);
      return response.data;
    } else {
      alert("任务查询失败，请重试");
      throw new Error("任务查询失败，请重试");
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      alert("未授权");
      throw new Error("未授权");
    } else if (error.response && error.response.status === 404) {
      alert("任务不存在");
      throw new Error("任务不存在");
    } else {
      alert("任务查询失败，请重试");
      throw new Error("任务查询失败，请重试");
    }
  }
};

export const addTask = async (taskName, taskDetail, projectId) => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  try {
    const response = await axios.post(
      `${config.backendUrl}/api/task`,
      {
        taskName: taskName,
        taskDetail: taskDetail,
        projectId: projectId,
        username: username,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.status === 201) {
      console.log("任务创建成功", response.data);
      return response.data;
    } else {
      alert("任务创建失败，请重试");
      throw new Error("任务创建失败，请重试");
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      alert("未授权");
      throw new Error("未授权");
    } else if (error.response && error.response.status === 400) {
      alert("请求数据无效");
      throw new Error("请求数据无效");
    } else {
      alert("任务创建失败，请重试");
      throw new Error("任务创建失败，请重试");
    }
  }
};
