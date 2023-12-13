
// import ShowToast from "../components/Commons/ShowToast"
// import Instance from "./AxiosConfig"
//   interface Iuser {
//     FullName: string;
//     Email: string;
//     Password: string;
// }
// interface Ilogin{
//   Email: string,
//   Password:string
//   }

// export const registerUser = async (data:Iuser) => {
  
//     try {
//       const response = await Instance.post("/user-reg", data);
//           if (response.status === 201) {
//             ShowToast(true, `${response.data.message}`);
//           }
//         return response
    
    
//    } catch (error:any) {
//       ShowToast(false, `${error.response.data.message}`)
//       // console.log(error.message)
        
//     }
// }
// export const userLogin = async (data:Ilogin) => {
//     try {

//       const response = await Instance.post("/user-Login", data)
//       if (response.status === 201 || 200) {
//         ShowToast(true,`${response.data.message}`)
//       }
//     } catch (error:any) {
//       ShowToast(false,`${error.response.data.message}`)
      
//     }
// }
import Instance from "./AxiosConfig";

interface iUser {
  FullName: string;
  Email: string;
  Password: string;
}

interface loginUser {
  Email: string;
  Password: string;
  UserName:string
}
interface Contactus {
  Name: string;
  Email: string
  PhoneNumber: string
  Text:string

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

export const contactus = async (data: Contactus)=>{
  try {
    const response = await Instance.post("/contact-us", data);
  return response
  } catch (error) {
    console.log(error)
    
  }
}


