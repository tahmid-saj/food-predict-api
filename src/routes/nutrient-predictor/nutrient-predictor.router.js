const express = require("express")

const { httpGetNutrientPrediction } = require("./nutrient-predictor.controller")

const nutrientPredictorRouter = express.Router()

nutrientPredictorRouter.get("/nutrient-prediction", httpGetNutrientPrediction)

module.exports = {
  nutrientPredictorRouter
}