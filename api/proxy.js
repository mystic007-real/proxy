// api/proxy.js
import axios from 'axios';

export default async function handler(req, res) {
    const { url } = req.query;

    if (!url) {
        return res.status(400).send('No URL specified');
    }

    try {
        const response = await axios.get(url, {
            headers: {
                'User-Agent': req.headers['user-agent'],
            },
        });
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(500).send('Error fetching the URL');
    }
}
