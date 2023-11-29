import Instance from "./AxiosConfig";

interface iUser {
  FullName: string;
  Email: string;
  Password: string;
}

interface loginUser {
  Email: string;
  Password: string;
}

interface Admin {
  CompanyName: string,
  Email: string,
  Password: string,
}

interface loginAdmin {
  Email: string;
  Password: string;
}

export const regAdmin = async (data: Admin) => {
  try {
    const response = await Instance.post("/Admin-reg", data)
    console.log(response)
    return response
  }catch (error) {
    console.log(error)
  }
}


export const createUser = async (data: iUser) => {
  try {
    const response = await Instance.post("/reg-user", data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (data: loginUser) => {
  try {
    const response = await Instance.post("/login-User", data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const LoginAdmin = async (data: loginAdmin) => {
  try {
    const response = await Instance.post("/login-User", data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};