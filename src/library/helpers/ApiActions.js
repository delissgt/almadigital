import axios from "axios";
// import {env} from "../../configs/EnvironmentConfig";

const api_key = "live_jcY1vm3pe55O0Iw1m0xZFyp2IB93DiUy5FSJEFp8ciGsQVHyFbBwhxcy8gTIUKcf"

const api_dog_url = 'https://api.thedogapi.com/v1/'

export const getApi = (url, token, callback) => {
  const path = `${api_dog_url}${url}`

  return axios.get(path, {
    headers: {
      'x-api-key': api_key
    }
  })
}