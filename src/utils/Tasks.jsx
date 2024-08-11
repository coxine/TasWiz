import axios from "axios";
import config from "../config/config";

export const getTasks = async () => {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");

    try {
        const response = await axios.get(
            `${config.backendUrl}/api/tasks`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    username: username,
                },
            }
        );

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
