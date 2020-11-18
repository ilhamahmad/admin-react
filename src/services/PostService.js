import getData, {   getDataWithHeader, postDataWithHeaderToast } from '../global';

const getPosts=async ()=>{
    const response=await getData("/post/findall");
    return response;
}

export const getPostsAdmin=async ()=>{
    const response=await getDataWithHeader("/post/findalladmin");
    return response;
}

export const getPost=async (id)=>{
    const response=await getData(`/post/findone/${id}`);
    return response;
}

export const getPostsByLimit=async (from,to)=>{
    const response=await getData(`/post/findbylimit/${from}/${to}`);
    return response;
}

export const uploadPost=async (postObject)=>{
    const response=await postDataWithHeaderToast("/post/save", postObject,"succesfully upload");
    return response;
}

export default getPosts;

