export const handle500Error = () => {
  alert("服务器错误");
  throw new Error("服务器错误");
};

export const handle400Error = () => {
  alert("请求数据无效");
  throw new Error("请求数据无效");
};

export const handle401Error = () => {
  alert("未授权");
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  window.location.href = "/";
};

export const handle404Error = () => {
  alert("用户不存在");
  throw new Error("用户不存在");
};

export const handle429Error = () => {
  alert("请求过多");
  throw new Error("请求过多");
};

export default function handleError(error) {
  if (error.response && error.response.status === 401) {
    handle401Error();
  } else if (error.response && error.response.status === 404) {
    handle404Error();
  } else if (error.response && error.response.status === 400) {
    handle400Error();
  } else if (error.response && error.response.status === 429) {
    handle429Error();
  } else {
    handle500Error();
  }
}
