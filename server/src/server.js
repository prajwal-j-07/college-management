import app from "./app/index.js"
import logger from "./utils/logger.js"
import swagger from "./utils/swagger.js"

const main = async () => {
  try {
    const PORT = 8000
    app.listen(PORT, () => {
      logger.info(`Server listening on port ${PORT}`)
      swagger(app, PORT)
    })
  } catch (error) {
    console.log(error)
  }
}

main()
