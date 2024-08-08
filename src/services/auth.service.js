import config from "../config/config";

const login = async (username, password) => {
    const response = await fetch(`${config.backendUrl}/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        return true;
    } else {
        console.error('登录失败');
        return false;
    }
};

const authService = {
    login,
};

export default authService;
