// server.js

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const openaiApiKey = 'YOUR_OPENAI_API_KEY';

app.post('/generate-greeting', async (req, res) => {
    try {
        const { event, age, type, atmosphere } = req.body;

        const prompt = `Write me three examples of  ${event} greeting  ${age && "for a" + age + "-year-old"}in a ${type}, ${atmosphere} atmosphere in Hebrew`

        // Make request to OpenAI API
        const response = await axios.post(
            'https://api.openai.com/v1/engines/davinci-codex/completions',
            {
                prompt,
                max_tokens: 150, // Adjust as needed
                temperature: 0.7, // Adjust as needed
            },
            {
                headers: {
                    Authorization: `Bearer ${openaiApiKey}`,
                },
            }
        );

        const greeting = response.data.choices[0].text.trim();
        res.json({ greeting });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});