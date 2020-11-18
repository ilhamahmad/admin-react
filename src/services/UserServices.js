import  {postDataWithHeader, postData } from '../global';

export default async function loginAuthentication (userObj){
    const response=await postData("/authentication",userObj);
    localStorage.setItem("jwt",response.data.jwt)
    return response.data;
}
