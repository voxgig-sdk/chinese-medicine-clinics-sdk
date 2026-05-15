
import { Context } from './Context'


class ChineseMedicineClinicsError extends Error {

  isChineseMedicineClinicsError = true

  sdk = 'ChineseMedicineClinics'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ChineseMedicineClinicsError
}

