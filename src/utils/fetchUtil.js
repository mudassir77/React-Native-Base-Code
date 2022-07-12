import { handleFetchError } from "./errorHandler";
import Config from "../Config";

export const fetchUtil = data => {
  const { url, method = "GET", body = null, token = null, image = false, abortSignal = null } = data;
  let headers = {};
  if (!image) {
    headers = { "Content-Type": "application/json" };
  }

  if (token) {
    headers = { ...headers, Authorization: token };
  }

  return fetch(`${Config.env().API_URL}${url}`, {
    method,
    headers,
    body,
    ...(abortSignal && { signal: abortSignal })
  }).then(handleFetchError);
};
