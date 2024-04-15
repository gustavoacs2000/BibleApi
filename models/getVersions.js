// THIS ROUTE RETURNS ALL THE VERSIONS FROM BIBLE API
//___________________________________________________
//IMPORTS
import axios from "axios";
import 'dotenv/config';

async function getAllVersions(){
    const response = await axios.get(`${process.env.BIBLE_API_URL}/versions`, {});
    return response.data;
}

export {getAllVersions};

