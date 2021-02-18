
import { log } from 'debug'

const end = async (middlewares, request, response, next) => {
  let code = 200
  let result

  try {
    for (const middleware of middlewares) {
      result = await middleware(request, response)
    }

    if (result === undefined) {
      result = await next()
    }
  } catch (error) {
    log(error)
    code = 500
    result = { message: '' }
  }

  response.status(code).json(result)
}

export default end
