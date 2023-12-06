import Instance from "./AxiosConfig";
import ShowToast from "../Commons/ShowToast/ShowToast";

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
    const response = await Instance.post("/Admin-reg", data);
    if (response.status === 201) {
        ShowToast(true, `${response.data.message}`)
    }
    // console.log(response)
    return response
  }catch (error) {
    console.log(error)
    ShowToast(false, "an error occured")
  }
}


export const createUser = async (data: iUser) => {
  try {
    const response = await Instance.post("/reg-user", data);
    if (response.status === 201) {
        ShowToast(true, `${response.data.message}`)
    }
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    ShowToast(false, "an error occured")
  }
};

export const loginUser = async (data: loginUser) => {
  try {
    const response = await Instance.post("/login-User", data);
    if (response.status === 200 || 201) {
        ShowToast(true, `${response.data.message}`)
    }
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    ShowToast(false, "an error occured")
  }
};

export const LoginAdmin = async (data: loginAdmin) => {
  try {
    const response = await Instance.post("/login-User", data);
    if (response.status === 201 || 200) {
        ShowToast(true, `${response.data.message}`)
    }
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    ShowToast(false, "an error occured")
  }
};