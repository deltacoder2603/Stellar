import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const options = {
        method: 'GET',
        url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
        params: {
          url: url,
          lang: 'en',
          engine: '2'
        },
        headers: {
          'x-rapidapi-key': process.env.RAPID_API_KEY as string,
          'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
        }
      };

    try {
        const response = await axios(options);
        res.status(200).json(response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            res.status(error.response ? error.response.status : 500).json({ error: error.response ? error.response.data : 'Error extracting and summarizing the article' });
        } else {
            res.status(500).json({ error: 'Error extracting and summarizing the article' });
        }
    }
}