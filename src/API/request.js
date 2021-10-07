import axios from "axios";

const request = ({ url, body, params, method }) => {
  const variables = {
    url,
    data: body,
    params,
    method,
  };
  const token = localStorage.getItem("t");
  const token_2 = localStorage.getItem("user");
  if (token) {
    variables.headers = {
      TokenCybersoft: token,
      Authorization: "Bearer " + token_2,
    };
  }

  return axios(variables);
};

export default request;
