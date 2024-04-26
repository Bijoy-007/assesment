import axios from "axios";

const get = async (path) => {
  try {
    const response = await axios.get(`http://localhost:5000${path}`);

    console.log({ response });
  } catch (err) {
    console.log(err);
    return {
      status: "faliure",
      message: "something went wrong",
    };
  }
};

const post = async (path, data) => {
  try {
    const response = await axios.post(`http://localhost:5000${path}`, data);
    
    if (response.data.status === "success") {
        console.log("------yes", response)
        return {
        status: "success",
        message: "Successfully logged in",
        data: response.data.data,
      };
    }

    console.log({ response });
  } catch (err) {
    console.log(err);
    return {
      status: "faliure",
      message: "something went wrong",
    };
  }
};

export default { get, post };
