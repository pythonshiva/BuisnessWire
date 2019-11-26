import axios from "axios";
import { AWS_URL } from "../constants/constant";

export const fetchAwsData = () => {
  return async dispatch => {
    return await axios(AWS_URL, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
      // headers: {
      //   // Accept: "application/json",
      //   // "Content-Type": "application/json",
      //   // "X-Api-Key": AWS_SECRET
      //   // "Content-Type": "application/json",
      //   // "x-api-key": "JnHQ7LPCec2oxQ1Awu70e2nxGWtZuZbN31uffmYi"
      // }
    }).then(response => {
      dispatch(helloWorld(response.data.data));
      console.log("Response is", response.data.data);
    });
    // return await axios
    //   .get(AWS_URL)
    //   .then(response => {
    //     console.log("response is: ", response);
    //     dispatch(helloWorld(response.data));
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };
};

const helloWorld = hw => {
  console.log("hw value", hw);
  return {
    type: "HELLO_WORLD",
    value: hw
  };
};

export default fetchAwsData;
