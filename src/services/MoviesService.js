import axios from "axios";
import { withBaseUrl } from "../utils/apiURL";

export class MoviesService {
  static getPopular() {
    return axios(withBaseUrl("movie/popular"))
  }

  static getPopularById(id) {
    return axios(withBaseUrl(`movie/${id}`))
  }
}

