
import axios from 'axios'
import NotificationManager from 'react-notifications/lib/NotificationManager';


export function getJwt()
{
    const response=localStorage.getItem("jwt");
    return response;
}

async function getData(path_text) {
    let response=null;
    await axios.get(process.env.REACT_APP_BASE_URL + path_text)
    .then(res=>{
        response=res.data;
    })
    .catch(ex=>{
       response=null
    })
    return response;
}

export async function getAuthentication(user) {
    const response = await axios.post(process.env.REACT_APP_BASE_URL + "/authentication", user);
    return response;
}


export async function postData(path_text, data) {
    const response = await axios.post(process.env.REACT_APP_BASE_URL + path_text, data);
    return response;
}


export async function getDataWithHeader(path_text) {
    const response = axios.get(process.env.REACT_APP_BASE_URL + path_text, { headers: { "AUTH-TOKEN": getJwt() } })
    return response;
}

export async function putDataWithHeader(path_text, data, jwt) {
    const response = await axios.put(process.env.REACT_APP_BASE_URL + path_text, data, { headers: { "AUTH-TOKEN": getJwt()  } });
    return response;
}


export async function postDataWithHeader(path_text, data) {
    const response = await axios.post(process.env.REACT_APP_BASE_URL + path_text, data, { headers: { "AUTH-TOKEN": getJwt()  } });
    return response;
}



export async function postFile(path_text, data, jwt) {
    const response = await axios.post(process.env.REACT_APP_BASE_URL + path_text, data, { headers: { "Content-Type": "multipart/form-data", "AUTH-TOKEN": getJwt()  } });
    return response;
}

export async function deleteData(path_text, jwt) {
    const response = await axios.delete(process.env.REACT_APP_BASE_URL + path_text, { headers: { "AUTH-TOKEN": getJwt()  } });
    return response;
}


/*

          *********************          with toast         **************************

*/

export async function postDataToast(path_text, data,message) {
    await axios.post(process.env.REACT_APP_BASE_URL + path_text, data)
        .then(res => {
            NotificationManager.success(message)
            return res;
        })
        .catch(err => {
            NotificationManager.error("xeta bas verdi")
            return false;
        })
}

export async function postDataWithHeaderToast(path_text, data,message) {
    await axios.post(process.env.REACT_APP_BASE_URL + path_text, data, { headers: { "AUTH-TOKEN": getJwt() } })
        .then(res => {
            NotificationManager.success(message)
            return res;
        })
        .catch(err => {
            NotificationManager.error("xeta bas verdi")
            return false;
        })
}

export async function putDataWithHeaderToast(path_text, data,message) {
    await axios.put(process.env.REACT_APP_BASE_URL + path_text, data, { headers: { "AUTH-TOKEN": getJwt()  } })
        .then(res => {
            NotificationManager.success(message);
            return res;
        })
        .catch(err => {
            NotificationManager.error('problem occur...');
            return false;
        })
}

// export async function postFileToast(path_text, data, jwt,message) {
//     await axios.post(process.env.REACT_APP_BASE_URL + path_text, data, { headers: { "Content-Type": "multipart/form-data", "AUTH-TOKEN": jwt } })
//         .then(res => {
//             toast.success(message, { position: toast.POSITION.BOTTOM_RIGHT });
//             return res;
//         })
//         .catch(err => {
//             toast.error('file can not saved', { position: toast.POSITION.BOTTOM_RIGHT });
//             return false;
//         })
// }

export async function deleteDataToast(path_text, jwt,message) {
     await axios.delete(process.env.REACT_APP_BASE_URL + path_text, { headers: { "AUTH-TOKEN": getJwt()  } })
        .then(res => {
            NotificationManager.success(message);
            return res;
        })
        .catch(err => {
            NotificationManager.error('problem occur...');
            return false;
        })
}



export default getData;

