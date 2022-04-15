import axios from "axios";
const KEY = 'AIzaSyCGfeWpyl3PRWEiN9ky_WOtRCMjBAhRV3A';
export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params : {
        part : 'snippet',
        type: 'video',
        maxResults : 5 ,
        key : KEY
    }
});
