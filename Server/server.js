const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/get-response', async (req, res) => {
  const userMessage = req.body.message;
  
  // TODO: Send 'userMessage' to GPT API and get the response
  // This is a placeholder and won't work in real application
  const gptResponse = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
    prompt: userMessage,
    max_tokens: 60,
  });

  res.json({ response: gptResponse.data.choices[0].text });
});

app.listen(3000, () => console.log('Server is running on port 3000'));
