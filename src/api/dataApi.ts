import axios, { AxiosResponse, AxiosError } from "axios";
import { ShortenedURLType } from "../utils/models";
import {API_URL} from '../utils/constants'

const { REACT_APP_BITLY_AUTHORIZATION_TOKEN } = process.env;

export const fetchShortUrl = (url: string) =>
  new Promise<ShortenedURLType>((resolve, reject) => {
    axios
      .post<ShortenedURLType>(
        `${API_URL}/shorten`,
        { long_url: url },
        {
          headers: {
            Authorization: `Bearer ${REACT_APP_BITLY_AUTHORIZATION_TOKEN}`,
          },
        }
      )
      .then((response: AxiosResponse<ShortenedURLType, any>) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        //@ts-ignore
        reject(error.response?.data.description);
      });
  });
