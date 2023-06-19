const { headers, HTTP_METHOD } = require('../utils/requests');
const { setupPrompt } = require('../utils/constants');
const catChatQueryController = require('../queries/chat');

const saveChatResponse = async (req, res) => {
  // do something with prompt
  try {
    const { prompt, sessionId } = req.body;
    await catChatQueryController.saveChat(sessionId, prompt, 'user');
    let content = {
      role: 'assistant',
      content:
        "Whelp, thanks for chatting with me, meow! But it looks like you've reached your limit for today!",
    };
    const history = await catChatQueryController.findHistory(sessionId);
    if (history.length < 20 && prompt) {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: HTTP_METHOD.POST,
          headers,
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: setupPrompt,
              },
              { role: 'user', content: prompt },
            ],
            max_tokens: 1024,
          }),
        }
      ).catch((err) => console.log(err));
      const chatResponse = await response.json();
      content = await catChatQueryController.saveChat(
        sessionId,
        chatResponse.choices[0].message.content,
        'assistant'
      );
    }
    const data = [...history, content];
    res.send(data);
  } catch (err) {
    console.log('err', err.message);
    res.sendStatus(500).send([content]);
  }
};

const getChatResponse = async (req, res) => {
  // do something with prompt
  try {
    const { sessionId } = req.query;
    const history = await catChatQueryController.findHistory(sessionId);
    res.send(history);
  } catch (err) {
    let content = {
      role: 'assistant',
      content:
        "Meow whoops! Looks like there's a problem connecting... please try again later!",
    };
    res.sendStatus(500).send([content]);
  }
};

module.exports = {
  saveChatResponse,
  getChatResponse,
};
