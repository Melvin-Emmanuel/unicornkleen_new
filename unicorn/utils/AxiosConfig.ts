// import axios from "axios"


// const Instance = axios.create({
//   baseURL: "http://localhost:3800/api/v1",
// });

// export default Instance

import axios from "axios"

const Instance = axios.create({
  baseURL: "http://localhost:5200/api/v1",
});

export default Instance;