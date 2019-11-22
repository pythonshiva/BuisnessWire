import axios from "axios";
import { AWS_URL, AWS_HEADER, AWS_METHOD } from "../constants/constant";

export const fetchAwsData = () => {
  return dispatch => {
    return axios({
      method: AWS_METHOD,
      url: AWS_URL,
      headers: AWS_HEADER
    }).then(response => {
      dispatch(helloWorld(response.data.type));
    });
  };
};

const helloWorld = hw => {
  return {
    type: "HELLO_WORLD",
    value: 123
  };
};
export default helloWorld;
