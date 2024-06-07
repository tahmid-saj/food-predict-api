const express = require("express")

const { testRouter } = require("./test-route/test-route.router")
const { nutrientPredictorRouter } = require("./nutrient-predictor/nutrient-predictor.router")

const api = express.Router()

api.use("/testroute", testRouter)
api.use("/nutrient-predictor", nutrientPredictorRouter)

module.exports = {
  api
}