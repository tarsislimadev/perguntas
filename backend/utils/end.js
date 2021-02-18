
import { log } from 'debug'

const runMiddlewares = async (middlewares, request, response) => {
  let data = {}

  for (const middleware of middlewares) {
    const fromMid = await middleware(request, response)

    const { code, result, data: obj } = fromMid || {}

    if (obj) {
      data = { ...data, ...obj }
    }

    if (code || result) {
      return { code, result, data }
    }
  }

  return { data }
}

const end = async (middlewares, request, response, next) => {
  try {
    const fromMid = await runMiddlewares(middlewares, request, response)

    let { code, result, data } = fromMid || {}

    if (result === undefined) {
      result = await next(data)
    }

    if (code === undefined) {
      code = 200
    }

    response.status(code).json(result)
  } catch (error) {
    log(error)
    response.status(500).json({ message: 'error on server' })
  }
}

export default end
