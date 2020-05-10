import axios from "axios";

function request(
  url,
  { method = "GET", headers = {}, data = {}, addPrefix = true } = {}
) {
  const token = `Bearer ${localStorage.getItem("adminPanelToken")}`;
  headers = Object.assign(
    {
      Authorization: token,
      "Content-Type": "application/json"
    },
    headers
  );

  const request = buildRequest(
    method,
    `${process.env.ADMIN_BASE_URL}/api/v1${url}`,
    data,
    headers
  );
  return axios(request);
}

function buildRequest(method, url, data, headers) {
  return { method, url, data, headers };
}

export default request;
