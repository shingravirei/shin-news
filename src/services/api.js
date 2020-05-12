import axios from 'axios';

const client = axios.create({
    baseURL: ' https://hacker-news.firebaseio.com/v0'
});

const getTopStories = async () => {
    const res = await client.get('/topstories.json');

    return res.data;
};

const getNewStories = async () => {
    const res = await client.get('/newstories.json');

    return res.data;
};

//const getPastStories = async () => {
//const res = await client.get('')
//}

const getItem = async id => {
    const res = await client.get(`/item/${id}.json`);

    return res.data;
};

export { getTopStories, getNewStories, getItem };
