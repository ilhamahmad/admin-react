import getData from "../global"
export default async function getAbout()
{
    const response=getData('/about/findabout');
    return response;
}