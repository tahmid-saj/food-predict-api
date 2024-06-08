const { getChatBotResponse } = require("../../utils/requests/nutrient-predictor/nutrient-predictor.requests")

// nutrient prediction via image
async function httpGetNutrientPrediction(req, res) {
  try {
    const imageUrl = String(req.body)
    const resGetChatBotResponse = await getChatBotResponse(imageUrl)

    if (resGetChatBotResponse) return res.status(200).json(resGetChatBotResponse)
  } catch (error) {
    // TODO: handle error
    console.log(error)
  }
}

module.exports = {
  httpGetNutrientPrediction
}