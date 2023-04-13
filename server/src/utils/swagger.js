import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

import logger from "../utils/logger.js"

const swaggerDefinition = {
  openapi: "3.0.1",
  info: {
    title: "College Management API Documentation",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:8000/api/",
    },
  ],
}

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./src/routes/*.js"],
}

const swaggerSpec = swaggerJSDoc(swaggerOptions)

export const swaggerDocs = (app, port) => {
  // Swagger page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  // Docs in JSON format
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.send(swaggerSpec)
  })

  logger.info(`Docs available at http://localhost:${port}/docs`)
}

export default swaggerDocs
