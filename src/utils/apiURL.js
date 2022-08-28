import { configs } from "../services/configs";

export function withBaseUrl(path) {
  return `${configs.API_BASE_URL}${path}?api_key=${configs.API_KEY}`
}