const { errorOnGetChatBotResponse } = require("../../errors/chatbot.errors")
const { DEFAULT_CHATBOT_MAX_TOKENS } = require("../../constants/chatbot.constants")
const { openai } = require("../../../services/open-ai/open-ai.service")

async function getChatBotResponse(imageUrl) {
  try {
    const response = await openai.chat.completions.create({
      model: process.env.REACT_APP_OPEN_API_MODEL,
      max_tokens: DEFAULT_CHATBOT_MAX_TOKENS,
      messages: [
        {
            "role": `${process.env.REACT_APP_OPEN_API_ROLE}`,
            "content": [
                {"type": "text", "text": "List the food items in this image"},
                {
                    "type": "image_url",
                    "image_url": {
                        "url": `${imageUrl}`,
                        "detail": "high"
                    },
                },
            ],
        }
      ],
    });
    
    return {
      message: response.choices[0].message.content
    }
  } catch (error) {
    console.log("Error getting chatbot response")
    errorOnGetChatBotResponse()
  }
}

module.exports = {
  getChatBotResponse
}