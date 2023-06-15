// const API_KEY = require('')

const chat = async (req, res) => {
  await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer `,
    },
  });
};

module.exports = { chat };
