import axios from 'axios';

const KEY = 'AIzaSyBL2hTnb10NrjgyHnLa2pTdhXtQOwaVafE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

