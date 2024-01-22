// server.js

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const openaiApiKey = process.env.API_KEY;

app.post('/generate-blessing', async (req, res) => {
    try {
        const { event, age, type, atmosphere } = req.body;

        const prompt = `Write me three examples of  ${event} greeting  ${age && "for a" + age + "-year-old"}in a ${type}, ${atmosphere} atmosphere in Hebrew`

        // Make request to OpenAI API
        const response = await axios.post(
            'https://api.openai.com/v1/engines/davinci-codex/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            },
            {
                headers: {
                    Authorization: `Bearer ${openaiApiKey}`,
                    "Content-Type": application / json,

                },
            }
        );
        const blessingArry = response.data.choices.map(choice => choice.text.trim());
        console.log(blessingArry);
        res.send({ blessingArry });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});