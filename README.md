# food-predict-api

API for providing descriptions of food images. Developed with Express and OpenAI API.

The directory structure is as follows:

```
food-predict-api/
├── api/
│   └── index.js
├── Dockerfile
├── package-lock.json
├── package.json
├── README.md
├── src/
│   ├── app.js
│   ├── routes/
│   │   ├── api.routes.js
│   │   ├── nutrient-predictor/
│   │   │   ├── nutrient-predictor.controller.js
│   │   │   └── nutrient-predictor.router.js
│   │   └── test-route/
│   │       └── test-route.router.js
│   ├── services/
│   │   └── open-ai/
│   │       └── open-ai.service.js
│   └── utils/
│       ├── constants/
│       │   └── chatbot.constants.js
│       ├── errors/
│       │   └── chatbot.errors.js
│       ├── requests/
│       │   └── nutrient-predictor/
│       │       └── nutrient-predictor.requests.js
│       └── validations/
└── vercel.json
```
